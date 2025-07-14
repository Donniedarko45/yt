import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="./youtubelogo.svg" height={50} width={50} alt="logo" />
      <p className="text-xl font-semibold tracking-tight">Youtube</p>
    </>
  );
}
