import Image from "next/image";
import Moon from "@/app/assets/moon.svg";

export default function ColorThemeSwitcher() {
  return (
    <div className="mt-4 flex h-8 w-[72px] items-center justify-between rounded-2xl bg-[#2e2f38] p-1">
      <div className="h-6 w-6 rounded-full bg-[#4e505f]"></div>
      <Image src={Moon} alt="Moon icon" title="Moon icon" />
    </div>
  );
}
