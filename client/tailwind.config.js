/** @type {import('tailwindcss').Config} */
import colors from "./tailwind/color";

const px0_200 = Array.from({ length: 201 }, (_, i) => `${i}px`);
const px0_20 = px0_200.slice(0, 21);
export default {
  content: ["index.html", "src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      spacing: px0_200,
      borderRadius: px0_20,
      borderWidth: px0_20,
      fontSize: px0_20,
    },
    colors,
  },
  plugins: [],
};
