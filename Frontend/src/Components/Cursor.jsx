import { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-[#5364FF] opacity-70 pointer-events-none mix-blend-difference transition-transform duration-150 ease-out z-[9999]"
      style={{
        transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)`,
      }}
    />
  );
};

export default Cursor;
