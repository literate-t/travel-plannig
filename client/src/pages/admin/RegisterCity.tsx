import { useRef } from "react";

export default function RegisterCity() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const handleClick = async () => {
    const city = ref?.current?.value;

    const response = await fetch("/api/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: city,
    });

    if (response.ok) {
      ref!.current!.value = "";
      alert("City registered");
    } else {
      alert("City registered failed");
    }
  };
  return (
    <div>
      <textarea ref={ref}></textarea>
      <button onClick={handleClick}>등록</button>
    </div>
  );
}
