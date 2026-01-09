import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

export default function RegisterPlace() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [searchParams] = useSearchParams();
  const handleClick = async () => {
    const city = searchParams.get("city");
    const place = ref?.current?.value;

    if (!city || !place) {
      return;
    }

    const response = await fetch(`/api/cities/${city}/places`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: place,
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
