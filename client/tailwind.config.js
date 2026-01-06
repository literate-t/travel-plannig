/** @type {import('tailwindcss').Config} */
import colors from "./tailwind/color";
// 배열을 { '0': '0px', '1': '1px' ... } 형태의 객체로 변환하는 함수
const toObject = (arr) =>
  arr.reduce((acc, v, i) => {
    acc[i] = v;
    return acc;
  }, {});

// 0~200px 배열 생성 후 객체로 변환
const px0_200 = toObject(Array.from({ length: 201 }, (_, i) => `${i}px`));
const px0_20 = toObject(Array.from({ length: 21 }, (_, i) => `${i}px`));
export default {
  content: ["index.html", "src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      spacing: px0_200,
      borderRadius: px0_20,
      borderWidth: px0_20,
      fontSize: px0_200,
    },
    colors,
  },
  plugins: [],
};
