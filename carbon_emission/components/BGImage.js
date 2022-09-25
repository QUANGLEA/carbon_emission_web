import { useState, useEffect } from "react";
import Image from "next/image";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function BGImage() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const { width, height } = getWindowDimensions();
    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();
      setWidth(width);
      setHeight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!width || !height) return null;
  return (
    <Image
      src={`https://source.unsplash.com/${width}x${height}/?nature,water,mountains,landscape`}
      width={width}
      height={height}
    />
  );
}
