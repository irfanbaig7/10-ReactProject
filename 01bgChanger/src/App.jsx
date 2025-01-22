import { createContext, useState } from "react";
import "./App.css";
import { ChildA } from "./Component/ChildA";

// Create a context
const ThemeContext = createContext();
const userContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setuser] = useState({ name: "irfan" });

  return (
    <userContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{
            backgroundColor:
              theme === "light" ? "lightgoldenrodyellow" : "black",
              color: theme === "light" ? "black" : "white"
          }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </userContext.Provider>
  );
}

export default App;

// Export Also Important
export { ThemeContext };
export {userContext}
