import AceEditor from "react-ace";
import { useState } from "react";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dracula";

const languages: Array<Array<string>> = [
  ["c_cpp", "CPP"],
  ["java", "Java"],
  ["python", "Python3"],
];

const themes: Array<string> = ["monokai", "dracula", "github"];

const Editor: React.FC = (): JSX.Element => {
  // language settings
  const defaultLanguage: any = localStorage.getItem("draw-n-code-lang");
  const [currentLanguage, setLanguage] = useState(
    defaultLanguage === null ? "c_cpp" : defaultLanguage
  );
  const changeLanguage = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(evt.target.value);
    localStorage.setItem("draw-n-code-lang", evt.target.value);
    console.log(evt.target.value, currentLanguage);
  };
  // code settings
  const defaultCode: any = localStorage.getItem("draw-n-code");
  const [code, setCode] = useState(defaultCode);
  const onCodeChange = (newCode: string) => {
    setCode(newCode);
    localStorage.setItem("draw-n-code", newCode);
    console.log(newCode);
  };

  // theme settings
  const defaultTheme: any = localStorage.getItem("draw-n-code-theme");
  const [currentTheme, setTheme] = useState(
    defaultTheme === null ? "monokai" : defaultTheme
  );
  const changetheme = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(evt.target.value);
    localStorage.setItem("draw-n-code-theme", evt.target.value);
    // console.log(evt.target.value, currentTheme);
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
      </div>
      <AceEditor
        mode={currentLanguage}
        theme={currentTheme}
        height="95vh"
        fontSize="16px"
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
