import logo from './logo.svg';
import { useState, useEffect } from 'react';
import StyleLoader from './StyleLoader';
import './App.css';

function App() {
  const themeobj = {
    themePath: "./assets/theme/",
    themeName: "c"
  }
  const [stylePath, setStylePath] = useState(themeobj);


  useEffect(() => {
  //   var head = document.head;
  //   var link = document.createElement("link");

  //   link.type = "text/css";
  //   link.rel = "stylesheet";
  //   link.async = true;

  //   const styleName = stylePath.themePath + stylePath.themeName + "/" + stylePath.themeName + ".css";
  //   link.href = styleName
  //   document.head.appendChild(link);
  //   //head.appendChild(link);
  //  //loadTheme(styleName);
    //document.body.classList.add(stylePath.themeName);


    //return () => { head.removeChild(link); }

  }, [stylePath]);

  // const loadTheme = async (path)=>{
  //   const {theme} = await importTheme(path);
  // }

  // const importTheme = async (path)=>{
  //   return import(path);
  // }

  //  async loadTheme() {
  //   const {theme} = await this.importTheme();
  //   this.style = theme;
  // };

  //  async importTheme(): Promise<{theme}> {
  //   if (this.theme === 'red') {
  //     return import('./red');
  //   } else  {
  //     return import('./green');
  //   }
  // };








  return (
    <>
      {/* <StyleLoader stylesheetPath={stylePath.themePath+stylePath.themeName+".css"} /> */}
      <div className="App">
        <div className="header">I am header</div>
        <div className="logo">I am logo</div>
      </div>
    </>
  );
}

export default App;
