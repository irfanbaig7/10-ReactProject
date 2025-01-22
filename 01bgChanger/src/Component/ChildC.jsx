import React, { useContext } from "react";
import { ThemeContext, userContext } from "../App";

export const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const user = useContext(userContext)

  function clickHandler() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div>
      <button onClick={clickHandler}>BG - Changer</button>
      Name is : {user.name}
    </div>
  );
};
