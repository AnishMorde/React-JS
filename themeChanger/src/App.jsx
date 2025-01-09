import { useState , useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/theme";
import ThemeButton from "./Components/ThemeButton";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

 useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)

    
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <h1 className="bg-green-400 p-4">Anish Morde</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton/>
          </div>

          <div className=" flex  w-full max-w-sm mx-auto"></div>
          <Card/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
