import Board from "components/Board/Board";
import Editor from "components/Editor/Editor";

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className={"grid-container"}>
        <div className={"drawing-board-wrapper"}>
          <Board />
        </div>
        <div className={"code-editor-wrapper"}>
          <Editor />
        </div>
      </div>
    </div>
  );
};
export default App;
