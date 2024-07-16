import { useEffect, useState } from "react"
import { ThemeProvider } from "./contexts/theme"
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import './App.css'


function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // this code has nothing to do with this project, we simply build it for no reason
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* THEME BUTTON */}
              <ThemeBtn></ThemeBtn>
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* CARD  */}
              <Card></Card>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
