import AceEditor from "react-ace";
import { useState } from "react";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-text";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-xcode";

const languages: Array<Array<string>> = [
  ["c_cpp", "CPP"],
  ["java", "Java"],
  ["python", "Python3"],
  ["javascript", "JavaScript"],
  ["typescript", "TypeScript"],
  ["rust", "Rust"],
  ["golang", "GoLang"],
  ["kotlin", "Kotlin"],
  ["markdown", "Markdown"],
  ["html", "HTML"],
  ["css", "CSS"],
  ["text", "Text"],
];

const themes: Array<string> = [
  "monokai",
  "dracula",
  "github",
  "nord_dark",
  "solarized_dark",
  "xcode",
];

const fontSizes: Array<string> = [
  "10px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "22px",
];

const Editor: React.FC = (): JSX.Element => {
  // language settings
  const defaultLanguage: any = localStorage.getItem("draw-n-code-lang");
  const [currentLanguage, setLanguage] = useState(
    defaultLanguage === null ? "c_cpp" : defaultLanguage
  );
  const changeLanguage = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(evt.target.value);
    localStorage.setItem("draw-n-code-lang", evt.target.value);
    // console.log(evt.target.value, currentLanguage);
  };
  // code settings
  const defaultCode: any = localStorage.getItem("draw-n-code");
  const [code, setCode] = useState(defaultCode);
  const onCodeChange = (newCode: string) => {
    setCode(newCode);
    localStorage.setItem("draw-n-code", newCode);
    // console.log(newCode);
  };

  // theme settings
  const defaultTheme: any = localStorage.getItem("draw-n-code-theme");
  const [currentTheme, setTheme] = useState(
    defaultTheme === null ? "monokai" : defaultTheme
  );
  const changetheme = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(evt.target.value);
    localStorage.setItem("draw-n-code-theme", evt.target.value);
  };

  // font size settings
  const defaultFontSize: any = localStorage.getItem("draw-n-code-font-size");
  const [currentFontSize, setFontSize] = useState(
    defaultFontSize === null ? "16px" : defaultFontSize
  );
  const changeFontSize = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(evt.target.value);
    localStorage.setItem("draw-n-code-font-size", evt.target.value);
  };
  const completeReset = () => {
    localStorage.clear();
    setFontSize("16px");
    setCode("");
    setTheme("monokai");
    setLanguage("c_cpp");
  };
  return (
    <div>
      <div className={"dropdown-wrapper grid-container"}>
        <div className={"language-wrapper"}>
          <label>Language:</label>
          <select
            onChange={changeLanguage}
            value={currentLanguage}
            id={"languages"}
          >
            {languages.map((language: Array<string>, id: number) => {
              return (
                <option key={language[0]} value={language[0]}>
                  {language[1]}
                </option>
              );
            })}
          </select>
        </div>
        <div className={"theme-wrapper"}>
          <label>Theme:</label>
          <select onChange={changetheme} value={currentTheme} id={"themes"}>
            {themes.map((theme: string, id: number) => {
              return (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Font Size:</label>
          <select
            onChange={changeFontSize}
            value={currentFontSize}
            id={"fonts"}
          >
            {fontSizes.map((size: string, id: number) => {
              return (
                <option key={size} value={size}>
                  {size}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button onClick={completeReset}>Reset (WIP!)</button>
        </div>
      </div>
      <AceEditor
        mode={currentLanguage}
        theme={currentTheme}
        height="95vh"
        fontSize={currentFontSize}
        value={code}
        onChange={onCodeChange}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default Editor;
