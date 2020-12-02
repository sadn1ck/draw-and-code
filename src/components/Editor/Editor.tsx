import React from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-github";

const onChange = (newValue: string) => {
  console.log("change", newValue, typeof newValue);
};

const Editor: React.FC = (): JSX.Element => {
  return (
    <div>
      <AceEditor
        mode="c_cpp"
        theme="github"
        onChange={onChange}
        height="95vh"
        fontSize="16px"
      />
    </div>
  );
};

export default Editor;
