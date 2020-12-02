import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import {
  IUnControlledCodeMirror,
  UnControlled as CodeMirror,
} from "react-codemirror2";

require("codemirror/mode/python/python");
require("codemirror/mode/javascript/javascript");

const Editor: React.FC = (): JSX.Element => {
  return (
    <CodeMirror
      value="<h1>I ♥ react-codemirror2</h1>"
      options={{
        mode: "python",
        theme: "material",
        lineNumbers: true,
      }}
      onChange={(editor: IUnControlledCodeMirror, data, value) => {}}
    />
  );
};

export default Editor;
