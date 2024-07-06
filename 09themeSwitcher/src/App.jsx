
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
import { ThemeProvider } from './contexts/themeContext'

function App() {
  const [theme, setTheme] = useState("light");

  const darkTheme = ()=>{
    setTheme("dark")
  }
  const lightTheme = ()=>{
    setTheme("light")
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove("dark", "light");
    htmlElement.classList.add(theme);
  }, [theme])

  return (
    <ThemeProvider value={{theme, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
