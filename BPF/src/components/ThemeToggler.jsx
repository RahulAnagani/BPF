import { useEffect, useState } from "react";
import "./toggle.css"
const ToggleComponent=({handler,theme})=>{
    return (
        <div className="toggle-switch rsp">
  <label className="switch-label">
    <input
      type="checkbox"
      className="checkbox"
      checked={theme === "light"}
      onChange={handler}
    />
    <span className="slider"></span>
  </label>
</div>
    )
}

const ThemeToggler=()=>{
    const getInitailTheme=()=>{
        if(typeof localStorage!==undefined && localStorage.theme){
            return localStorage.theme;
        }
        return window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";
    }
    const [theme,setTheme]=useState(getInitailTheme);
    useEffect(()=>{
        document.documentElement.classList.toggle("dark",theme==="dark");
        localStorage.setItem("theme",theme)
},[theme]);
    return (
        <>
            <ToggleComponent theme={theme} handler={()=>{
                setTheme(prev=>(prev=="light"?"dark":"light"));
            }}></ToggleComponent>
        </>
    )
}

export default ThemeToggler;