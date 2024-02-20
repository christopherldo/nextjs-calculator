import Keyboard from "./Keyboard";
import RightOperations from "./RightOperations";
import TopOperations from "./TopOperations";

export default function OperationsAndNumbers() {
  return (
    <div className="grid flex-1 grid-cols-4 grid-rows-5 gap-4">
      <TopOperations />
      <RightOperations />
      <Keyboard />
    </div>
  );
}
