export function hslToHex(hsl: string) {
  let [h, s, l] = hsl
    .slice(4, -1)
    .split(",")
    .map((x) => parseInt(x, 10));
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function hslToRGB(hsl: string) {
  let [h, s, l] = hsl
    .slice(4, -1)
    .split(",")
    .map((x) => parseInt(x, 10));
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color);
  };
  return `rgb(${f(0)}, ${f(8)}, ${f(4)})`;
}

export function rgbaToHex(str: string) {
  if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(str)) {
    return str;
  }

  const rgba = str.match(
    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
  );

  if (!rgba) {
    throw new Error("Invalid rgba string format");
  }

  const hex = (x: string) => ("0" + parseInt(x).toString(16)).slice(-2);

  const alpha = rgba[4] ? Math.round(parseFloat(rgba[4]) * 255) : 255;

  return (
    "#" +
    hex(rgba[1]) +
    hex(rgba[2]) +
    hex(rgba[3]) +
    (alpha !== 255 ? hex(alpha.toString()) : "")
  );
}
