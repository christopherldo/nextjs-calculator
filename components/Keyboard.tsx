"use client";

import Image from "next/image";
import DeleteIcon from "@/app/assets/delete.svg";
import ButtonContainer from "./ButtonContainer";

export default function Keyboard() {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  const onPressOnNumbers = () => {};

  return (
    <div className="col-span-3 row-span-4 grid grid-cols-3 grid-rows-4 gap-4 text-white">
      {numbers.map((item, key) => (
        <ButtonContainer
          color="low"
          indicator={item}
          onPress={onPressOnNumbers}
          key={key}
        />
      ))}
      <ButtonContainer color="low" indicator="." onPress={onPressOnNumbers} />
      <ButtonContainer color="low" indicator={0} onPress={onPressOnNumbers} />
      <ButtonContainer
        color="low"
        indicator={
          <Image src={DeleteIcon} alt="Delete Icon" title="Delete Icon" />
        }
        onPress={onPressOnNumbers}
      />
    </div>
  );
}
