import logo from '../../assets/logo/logo.png'
import light from '../../assets/icons/light.svg'
import './Header.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Header = () => {

  const { dark, handleDarkTheme } = useContext(ThemeContext);

  return (
    <>
      <header>
        <div className='container-logo'>
          <img src={logo} alt="" className='logo' />
          <h1>Character Counter</h1>
        </div>
        <button
          type="button"
          onClick={handleDarkTheme}
          className='btn-dark'
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <img src={light} alt="" />
        </button>
      </header>
    </>
  )
}

export { Header }
