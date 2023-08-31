/** @type {import('tailwindcss').Config} */
// tailwind.config.js

export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{html,js,ts,jsx,tsx}",
];

export const darkMode = "class";
export const theme = {
  borderWidth: {
    DEFAULT: "1px",
    0: "0",
    2: "2px",
    3: "3px",
    4: "4px",
    8: "8px",
    12: "12px",
  },
  extend: {
    colors: {
      //-- Body Color --//
      "body-color": "#F3F3F3",

      //-- Blue Colors --//
      "blue-primary-light": "#4036B4",
      "blue-primary-100": "#2E3494",
      "blue-primary-90": "#43499F",
      "blue-primary-70": "#6D71B5",
      "blue-primary-40": "#ABAED4",
      "blue-primary-30": "#4285F4",
      "blue-primary-20": "#4285F4",
      "blue-primary-10": "#4184FF",

      "blue-secondary-light": "#4B41BC",
      "blue-secondary-100": "#5045C9",
      "blue-secondary-90": "#6359DA",
      "blue-secondary-70": "#857DDA",
      "blue-secondary-40": "#B9B5E9",
      "blue-secondary-20": "#D0CDF4",
      "blue-secondary-10": "#EDECFA",
      "blue-secondary-5": "#F5F4FD",

      "blue-dark-100": "#2786F0",
      "blue-dark": "#242A85",

      //-- Purple Colors --//
      "purple-primary-100": "#59338F",
      "purple-primary-90": "#6A489B",
      "purple-primary-70": "#8B71B1",
      "purple-primary-40": "#BDADD2",
      "purple-primary-20": "#DED6E9",

      "purple-secondary-100": "#B568E1",
      "purple-secondary-90": "#BD78E4",
      "purple-secondary-70": "#CC96EA",
      "purple-secondary-40": "#E1C3F3",
      "purple-secondary-20": "#F0E1F9",

      //-- Gray Colors --//
      "gray-primary-100": "#4B4B4B",
      "gray-primary-70": "#6F6F6F",
      "gray-primary-40": "#E6E6E6",
      "gray-primary-20": "#FCFCFC",
      "gray-primary-10": "#CDCDCD",

      //-- Black Colors --//
      black: "#252626",
      "black-100": "#191919",
      "black-90": "#141414",
      "black-80": "#0C0C0C",
      "black-70": "#676868",
      "black-50": "#8C8C8C",
      "black-40": "#A8A8A8",
      "black-20": "#E2E2E3",
      "black-10": "#EEEEEE",
      "black-5": "#F4F4F4",

      //-- Black Darks Colors --//
      "black-dark-100": "#191A1E",
      "black-dark-90": "#202125",
      "black-dark-70": "#2B2C30",
      "black-dark-40": "#424347",
      "black-dark-20": "#696A6C",
      "black-dark-10": "#E8E9E9",

      //-- white Colors --//
      white: "#FFFFFF",

      "green-primary-100": "#0E4413",
      "green-primary-90": "#5EA363",
      "green-primary-70": "#82B786",
      "green-primary-50": "#00C612",
      "green-primary-40": "#B7D6B9",
      "green-primary-20": "#E9F6EB",

      "green-secondary-100": "#74E494",
      "green-secondary-90": "#82E89F",
      "green-secondary-70": "#9EEDB4",
      "green-secondary-40": "#C7F4D4",
      "green-secondary-20": "#E3FAEA",

      "green-tertiary-100": "#40EFF2",
      "green-tertiary-90": "#54F1F4",
      "green-tertiary-70": "#7AF4F6",
      "green-tertiary-40": "#B3F9FA",
      "green-tertiary-20": "#D9FCFC",
      "green-tertiary-10": "#EEF5EE",

      "green-light-100": "#01C94C",

      //-- Red Colors --//
      "red-primary-100": "#E01237",
      "red-primary-90": "#A6110D",
      "red-primary-70": "#DA7B90",
      "red-primary-40": "#F3A0AF",
      "red-primary-20": "#F8D7E2",
      "red-primary-10": "#FCE8EB",

      //-- Yellow Colors --//
      yellow: "#FFBE02",
      "yellow-primary-100": "#FFD809",
      "yellow-primary-90": "#FFCE22",
      "yellow-primary-70": "#F3B54C",
      "yellow-primary-10": "#FFFCE7",
      "yellow-light": "#FEF0BD",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      less: "0.5rem",
      sm: "0.839rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
};
export const plugins = [];