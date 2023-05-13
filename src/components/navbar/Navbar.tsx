import { useState } from "react"
import { MoonFill } from "react-bootstrap-icons"
import { SunFill } from "react-bootstrap-icons"

interface Navbar {
  title: string
}

export default function Navbar({title} : Navbar) {


  const [colorScheme, setColorScheme] = useState<string>('')

  const handleClickRef = () => {
    console.log("Cachorra")
  }

  const handleClickTheme = () => {
    if (colorScheme === 'dark') {
      setColorScheme('light')

    } else {
      setColorScheme('dark')
    }
  }




  return (
    <nav>
      <h3>{title}</h3>
      <a href="#Ref" onClick={handleClickRef}>Cachorro</a>
      <button id="switch" className="switch" onClick={handleClickTheme}>{colorScheme === 'dark' ? <SunFill size={25} /> : <MoonFill size={25} />}</button>
    </nav>
  )
}