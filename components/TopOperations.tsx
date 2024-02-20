"use client";

import Image from "next/image";
import PlusOrMinus from "@/app/assets/plusOrMinus.svg";
import ButtonContainer from "./ButtonContainer";

export default function TopOperations() {
  const onPressOnNumbers = () => {};

  return (
    <div className="col-span-3 row-span-1 flex gap-4">
      <ButtonContainer
        color="medium"
        indicator="C"
        onPress={onPressOnNumbers}
      />
      <ButtonContainer
        color="medium"
        indicator={
          <Image src={PlusOrMinus} alt="Delete Icon" title="Delete Icon" />
        }
        onPress={onPressOnNumbers}
      />
      <ButtonContainer
        color="medium"
        indicator="%"
        onPress={onPressOnNumbers}
      />
    </div>
  );
}
