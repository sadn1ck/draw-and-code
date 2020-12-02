// import { useState } from "react";
// import { Operation } from "react-drawing-board/lib/SketchPad";
//  .default is needed otherwise breaks everything for some weird reason
const DrawingBoard = require("react-drawing-board").default;

const Board: React.FC = (): JSX.Element => {
  // const [operations, setOperations] = useState<Operation[]>([]);

  return <DrawingBoard />;
};

export default Board;
