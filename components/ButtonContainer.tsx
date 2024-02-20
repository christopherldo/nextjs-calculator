import { ReactNode } from "react";

interface ButtonContainerProps {
  indicator: string | number | ReactNode;
  onPress: () => void;
  color: "low" | "medium" | "high";
}

export default function ButtonContainer({
  indicator,
  onPress,
  color,
}: ButtonContainerProps) {
  const colors = {
    low: "#2e2f38",
    medium: "#4e505f",
    high: "#4b5efc",
  };

  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-3xl p-3"
      style={{
        backgroundColor: colors[color],
      }}
      onClick={onPress}
    >
      <div className="text-justify text-[32px]">{indicator}</div>
    </div>
  );
}
