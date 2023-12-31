import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-[100svh] md:h-screen bg-[#F1F2F3] flex-center">
      <Image src="/loading.gif" alt="loading" width={100} height={100} />
    </div>
  );
}
