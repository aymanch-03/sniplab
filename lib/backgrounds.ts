export interface BackgroundEntry {
  id?: string;
  backgroundStyle: {
    background: string;
    filter?: string;
    transform?: string;
  };
  appStyle?: {
    backgroundColor: string;
  };
  shadow?: string;
  shadowsOpacity?: number;
  lightsOpacity?: number;
}

export interface Background {
  [key: string]: BackgroundEntry;
}

export const Backgrounds: Background = {
  Monochrome_1: {
    backgroundStyle: {
      background: `conic-gradient(
          from 240deg at 50% 50%,
          hsl(0, 0%, 5%) 0deg,
          hsl(0, 0%, 20%) 70deg,
          hsl(0, 0%, 5%) 200deg,
          hsl(0, 0%, 45%) 270deg,
          hsl(0, 0%, 15%) 310deg,
          hsl(0, 0%, 10%) 360deg
        )`,
      filter: `blur(25px)`,
      transform: `scale(1.2)`,
    },
    shadow: "hsl(0, 0%, 8%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.1,
    appStyle: {
      backgroundColor: "hsla(0, 0%, 7%, 0.85)",
    },
  },

  Monochrome_2: {
    backgroundStyle: {
      background: `linear-gradient(
          150deg, 
          hsl(0, 0%, 16%), 
          hsl(0, 0%, 6%), 
          hsl(0, 0%, 3%)
        )`,
    },
    shadow: "hsl(0, 0%, 5%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.1,
    appStyle: {
      backgroundColor: "hsla(0, 0%, 7%, 0.85)",
    },
  },

  Nord: {
    backgroundStyle: {
      background: `linear-gradient(
            130deg,
            hsl(210, 15%, 30%),
            hsl(210, 16%, 25%),
            hsl(212, 15%, 22%),
            hsl(210, 15%, 18%)
          )`,
    },
    shadow: "hsl(210, 15%, 15%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.2,
  },

  R1: {
    backgroundStyle: {
      background: `conic-gradient(from 60deg, rgb(100, 10, 210), rgb(20, 200, 220), rgb(180, 80, 240), rgb(90, 20, 210), rgb(10, 170, 250), rgb(90, 100, 190))`,
      filter: `blur(30px)`,
      transform: `scale(2)`,
    },
    shadow: "hsl(150, 50%, 5%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.2,
  },

  Lakka: {
    backgroundStyle: {
      background: `conic-gradient(
          from 240deg at 50% 50%,
          hsl(240, 100%, 50%) 0deg,
          hsl(270, 70%, 40%) 75deg,
          hsl(220, 40%, 55%) 180deg,
          hsl(20, 100%, 55%) 270deg,
          hsl(290, 90%, 80%) 320deg,
          hsl(310, 100%, 90%) 360deg
        )`,
      filter: `blur(25px)`,
      transform: `scale(1.3)`,
    },
    shadow: "hsl(15, 70%, 8%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.2,
  },

  Chrome: {
    backgroundStyle: {
      background: `conic-gradient(
            from 240deg at 50% 50%,
            hsl(240, 100%, 5%) 0deg,
            hsl(290, 80%, 15%) 70deg,
            hsl(220, 50%, 10%) 200deg,
            hsl(20, 100%, 55%) 270deg,
            hsl(290, 90%, 80%) 320deg,
            hsl(310, 100%, 15%) 360deg
          )`,
      filter: `blur(25px)`,
      transform: `scale(1.3)`,
    },
    shadow: "hsl(310, 60%, 8%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.1,
    appStyle: {
      backgroundColor: "#150a20cc",
    },
  },

  Kozuchi: {
    backgroundStyle: {
      background: `conic-gradient(
          from 90deg at 50% 50%,
          hsl(250, 20%, 25%) 0deg,
          hsl(240, 30%, 35%) 70deg,
          hsl(220, 50%, 30%) 150deg,
          hsl(280, 40%, 50%) 220deg,
          hsl(290, 50%, 40%) 290deg,
          hsl(310, 70%, 20%) 360deg
        )`,
      filter: `blur(25px)`,
      transform: `scale(1.3)`,
    },
    shadow: "hsl(220, 70%, 10%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.15,
    appStyle: {
      backgroundColor: "#150a20dd",
    },
  },

  Linear: {
    backgroundStyle: {
      background: `conic-gradient(
            from 240deg at 50% 50%,
            #2500ff 0deg,
            #0070ff 75deg,
            #ff2d7b 210deg,
            #f6401c 300deg,
            #ff6336 330deg,
            hsl(250, 100%, 50%) 360deg
          )`,
      filter: `blur(100px)`,
      transform: `scale(.8)`,
    },
    appStyle: {
      backgroundColor: `rgba(20, 20, 25, 0.95)`,
    },
    shadow: "hsl(20, 50%, 7%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.1,
  },

  Linear2: {
    backgroundStyle: {
      background:
        "conic-gradient(from 150deg, #69107E, #8B2AF0, #6248FA, #130971, #D20706, #F346E1)",
      filter: `blur(100px)`,
      transform: `scale(.8)`,
    },
    appStyle: {
      backgroundColor: `rgba(20, 20, 25, 0.95)`,
    },
    shadow: "hsl(150, 50%, 5%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.1,
  },

  R6: {
    backgroundStyle: {
      background:
        "conic-gradient(from 30deg, #390A1A, #F7483A, #1E9CC0, #043F73, #B7E7B4, #122B8B)",
      filter: "blur(25px)",
      transform: "scale(1.3)",
    },
    shadow: "hsl(150, 50%, 5%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.2,
  },

  R5: {
    backgroundStyle: {
      background:
        "conic-gradient(from 50deg, #8D25AE, #0A1C4B, #F12CDE, #351FFE, #151EC3)",
      filter: `blur(100px)`,
      transform: `scale(.8)`,
    },
    appStyle: {
      backgroundColor: `rgba(20, 20, 25, 0.95)`,
    },
    shadow: "hsl(150, 50%, 5%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.1,
  },

  R2: {
    backgroundStyle: {
      background:
        "conic-gradient(from 100deg, #9DD3E5, #2E1FA3, #06D5EB, #06D8C0, #04A723, #1EF76E)",
      filter: `blur(100px)`,
      transform: `scale(.8)`,
    },
    appStyle: {
      backgroundColor: `rgba(20, 20, 25, 0.95)`,
    },
    shadow: "hsl(150, 50%, 5%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.1,
  },

  R3: {
    backgroundStyle: {
      background:
        "conic-gradient(from 40deg, #7A76BE, #754FF7, #2BA651, #1B98B3, #2398F9, #D9B8EC)",
      filter: `blur(100px)`,
      transform: `scale(.8)`,
    },
    appStyle: {
      backgroundColor: `rgba(20, 20, 25, 0.95)`,
    },
    shadow: "hsl(150, 50%, 5%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.1,
  },

  R4: {
    backgroundStyle: {
      background:
        "conic-gradient(from 70deg, #C67D7D, #7C49B5, #9D5E90, #2DAE94, #69E4F3)",
      filter: `blur(100px)`,
      transform: `scale(.8)`,
    },
    appStyle: {
      backgroundColor: `rgba(20, 20, 25, 0.95)`,
    },
    shadow: "hsl(150, 50%, 5%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.1,
  },

  Fancy: {
    backgroundStyle: {
      background:
        "linear-gradient(120deg, #F3F7F8 10%, #D4D5D8 30%, #C7B6D7 60%, #A48DDF 90%)",
      filter: `blur(50px)`,
      transform: `scale(.8)`,
    },
    appStyle: {
      backgroundColor: `rgba(20, 20, 25, 0.95)`,
    },
    shadow: "hsl(150, 50%, 5%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.1,
  },
  TropicalBreeze: {
    backgroundStyle: {
      background:
        "linear-gradient(120deg, hsl(160, 70%, 50%), hsl(200, 80%, 60%))",
      filter: "blur(10px)",
      transform: "scale(1.1)",
    },
    shadow: "hsl(160, 50%, 20%)",
    shadowsOpacity: 0.6,
    lightsOpacity: 0.3,
  },
  NeonJungle: {
    backgroundStyle: {
      background:
        "linear-gradient(135deg, hsl(120, 100%, 40%) 0%, hsl(240, 100%, 40%) 100%)",
      filter: "blur(30px)",
      transform: "scale(1.4)",
    },
    shadow: "hsl(120, 70%, 30%)",
    shadowsOpacity: 0.8,
    lightsOpacity: 0.2,
  },
  CyanRepeat: {
    backgroundStyle: {
      background: "repeating-linear-gradient(315deg, #00FFFF2E 92%, #073AFF00 100%),repeating-radial-gradient(75% 75% at 238% 218%, #00FFFF12 30%, #073AFF14 39%),radial-gradient(99% 99% at 109% 2%, #00C9FFFF 0%, #073AFF00 100%),radial-gradient(99% 99% at 21% 78%, #7B00FFFF 0%, #073AFF00 100%),radial-gradient(160% 154% at 711px -303px, #2000FFFF 0%, #073AFFFF 100%)",
      filter: "blur(0px)",
      transform: "scale(1.1)",
    }
  },
  Transparent: {
    id: "transparent",
    backgroundStyle: {
      background:
        "repeating-conic-gradient(#000 0% 25%, #111 0% 50%) 0% 0% / 16px 16px",
    },
    shadow: "hsl(0, 0%, 6%)",
    shadowsOpacity: 1,
    lightsOpacity: 0.08,
    appStyle: {
      backgroundColor: "hsla(0, 0%, 2%, 0.9)",
    },
  },
};
