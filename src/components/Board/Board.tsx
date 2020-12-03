import { useState } from "react";
import { Operation } from "react-drawing-board/lib/SketchPad";
//  .default is needed otherwise breaks everything for some weird reason
const DrawingBoard = require("react-drawing-board").default;

const Board: React.FC = (): JSX.Element => {
  const defaultOperation: any = JSON.parse(
    localStorage.getItem("draw-n-code-ops") || "[]"
  );
  const [operations, setOperations] = useState<Operation[]>(
    defaultOperation === null ? [] : defaultOperation
  );
  const updateOperations = (
    newOperation: Operation[],
    afterOperation: Operation[]
  ) => {
    setOperations(afterOperation);
    localStorage.setItem("draw-n-code-ops", JSON.stringify(afterOperation));
  };

  return (
    <DrawingBoard
      toolbarPlacement="left"
      operations={operations}
      onChange={updateOperations}
    />
  );
};

export default Board;
