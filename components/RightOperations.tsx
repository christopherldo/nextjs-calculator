"use client";

import ButtonContainer from "./ButtonContainer";

export default function RightOperations() {
  const onPressOnNumbers = () => {};

  return (
    <div className="col-span-1 row-span-5 flex flex-col gap-4">
      <ButtonContainer color="high" indicator="÷" onPress={onPressOnNumbers} />
      <ButtonContainer color="high" indicator="×" onPress={onPressOnNumbers} />
      <ButtonContainer color="high" indicator="–" onPress={onPressOnNumbers} />
      <ButtonContainer color="high" indicator="+" onPress={onPressOnNumbers} />
      <ButtonContainer color="high" indicator="=" onPress={onPressOnNumbers} />
    </div>
  );
}
