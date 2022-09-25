import Image from "next/image";
import image from "../images/final_image.jpg";

export default function FinalBackground() {
  return (
    <Image
      className="-z-10 fixed h-screen w-screen opacity-90"
      src={image}
      quality={100}
      layout="fill"
      objectFit="cover"
    />
  );
}
