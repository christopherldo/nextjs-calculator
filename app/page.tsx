import ColorThemeSwitcher from "@/components/ColorThemeSwitcher";
import LastInput from "@/components/LastInput";
import OperationsAndNumbers from "@/components/OperationsAndNumbers";
import Result from "@/components/Result";

export default function Home() {
  return (
    <main className="h-dvh">
      <div className="flex h-screen flex-col items-center bg-[#17171c] px-[20px]">
        <ColorThemeSwitcher />
        <div className="mb-8 mt-[55px] flex w-full flex-1 flex-col gap-4">
          <LastInput />
          <Result />
          <OperationsAndNumbers />
        </div>
      </div>
    </main>
  );
}
