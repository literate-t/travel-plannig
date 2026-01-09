import { useRef } from "react";

export default function useDebounce() {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (callback: () => void, delay: number) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback();
      console.log("FFF");
    }, delay);
  };
}
