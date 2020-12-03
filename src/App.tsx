import { useState } from "react";
import SlidingPanel from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";
import Board from "components/Board/Board";
import Editor from "components/Editor/Editor";
import Open from "components/Icons/Open";
import Close from "components/Icons/Close";

const App: React.FC = (): JSX.Element => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <div>
      <div className={""}>
        <div className={"drawing-board-wrapper"}>
          <Board />
        </div>
        <button className={"code-open"} onClick={() => setOpenPanel(true)}>
          <Open />
        </button>
        <div className={"code-editor-wrapper"}>
          <SlidingPanel type={"right"} isOpen={openPanel} size={50}>
            <div>
              <Editor />
              <button
                className={"code-close"}
                onClick={() => setOpenPanel(false)}
              >
                <Close />
              </button>
            </div>
          </SlidingPanel>
        </div>
      </div>
    </div>
  );
};
export default App;
