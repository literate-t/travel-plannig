import { useRef } from "react";

export default function RegisterCountry() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const handleClick = async () => {
    const country = ref?.current?.value;

    const response = await fetch("/api/countries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: country,
    });

    if (response.ok) {
      ref!.current!.value = "";
      alert("Country registered");
    } else {
      alert("Country registered failed");
    }
  };
  return (
    <div>
      <textarea ref={ref}></textarea>
      <button onClick={handleClick}>등록</button>
    </div>
  );
}
