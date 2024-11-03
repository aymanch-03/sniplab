export function indentText(text: string) {
  return text
    .split("\n")
    .map((str) => `  ${str}`)
    .join("\n");
}

export function dedentText(text: string) {
  return text
    .split("\n")
    .map((str) => str.replace(/^\s\s/, ""))
    .join("\n");
}

export function getCurrentlySelectedLine(textarea: HTMLTextAreaElement) {
  const original = textarea.value;

  const selectionStart = textarea.selectionStart;
  const beforeStart = original.slice(0, selectionStart);

  return original
    .slice(
      beforeStart.lastIndexOf("\n") != -1
        ? beforeStart.lastIndexOf("\n") + 1
        : 0,
    )
    .split("\n")[0];
}

export function handleTab(textarea: HTMLTextAreaElement, shiftKey: boolean) {
  const original = textarea.value;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const beforeStart = original.slice(0, start);
  const currentLine = getCurrentlySelectedLine(textarea);

  if (start === end) {
    // No text selected
    if (shiftKey) {
      // dedent
      const newStart = beforeStart.lastIndexOf("\n") + 1;
      const beforeText = original.slice(0, newStart);
      const afterText = original.slice(end);
      const modifiedText = dedentText(original.slice(newStart, end));

      textarea.value = beforeText + modifiedText + afterText;
      textarea.selectionStart = textarea.selectionEnd =
        newStart + modifiedText.length;
    } else {
      // indent
      const beforeText = original.slice(0, start);
      const afterText = original.slice(end);

      textarea.value = beforeText + "  " + afterText;
      textarea.selectionStart = textarea.selectionEnd = start + 2;
    }
  } else {
    // Text selected
    const newStart = beforeStart.lastIndexOf("\n") + 1 || 0;
    let newSelectionStart: number;
    let newSelectionEnd: number;

    if (shiftKey) {
      // dedent
      const beforeText = original.slice(0, newStart);
      const afterText = original.slice(end);
      const newText = dedentText(original.slice(newStart, end));

      textarea.value = beforeText + newText + afterText;

      if (currentLine.startsWith("  ")) {
        newSelectionStart = start - 2;
        newSelectionEnd = start - 2 + newText.length;
      } else {
        newSelectionStart = start;
        newSelectionEnd = start + newText.length;
      }
    } else {
      // indent
      const beforeText = original.slice(0, newStart);
      const afterText = original.slice(end);
      const newText = indentText(original.slice(newStart, end));

      textarea.value = beforeText + newText + afterText;
      newSelectionStart = start + 2;
      newSelectionEnd = start + 2 + newText.length;
    }

    textarea.selectionStart = newSelectionStart;
    textarea.selectionEnd = newSelectionEnd;
  }

  // Trigger input event to notify of changes
  textarea.dispatchEvent(new Event("input", { bubbles: true }));
}

export function handleEnter(textarea: HTMLTextAreaElement) {
  const original = textarea.value;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const currentLine = getCurrentlySelectedLine(textarea);

  const currentIndentationMatch = currentLine.match(/^(\s+)/);
  let wantedIndentation = currentIndentationMatch
    ? currentIndentationMatch[0]
    : "";

  if (currentLine.match(/([{\[:>])$/)) {
    wantedIndentation += "  ";
  }

  const beforeText = original.slice(0, start);
  const afterText = original.slice(end);
  const insertText = `\n${wantedIndentation}`;

  textarea.value = beforeText + insertText + afterText;
  textarea.selectionStart = textarea.selectionEnd = start + insertText.length;

  // Trigger input event
  textarea.dispatchEvent(new Event("input", { bubbles: true }));
}

export function handleBracketClose(textarea: HTMLTextAreaElement) {
  const original = textarea.value;
  const { selectionStart, selectionEnd } = textarea;
  const currentLine = getCurrentlySelectedLine(textarea);

  if (selectionStart === selectionEnd && currentLine.match(/^\s{2,}$/)) {
    // Remove extra indentation
    const beforeText = original.slice(0, selectionStart - 2);
    const afterText = original.slice(selectionEnd);

    textarea.value = beforeText + "}" + afterText;
    textarea.selectionStart = textarea.selectionEnd = selectionStart - 2 + 1;
  } else {
    // Normal bracket close
    const beforeText = original.slice(0, selectionStart);
    const afterText = original.slice(selectionEnd);

    textarea.value = beforeText + "}" + afterText;
    textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
  }

  // Trigger input event
  textarea.dispatchEvent(new Event("input", { bubbles: true }));
}
