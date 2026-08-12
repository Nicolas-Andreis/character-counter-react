import logo from '../../assets/logo/logo.png'
import light from '../../assets/icons/light.svg'
import './Header.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Header = () => {

  const { handleDarkTheme } = useContext(ThemeContext);

  return (
    <div>
      <header>
        <div className='container-logo'>
          <img src={logo} alt="logo" className='logo' />
          <h1>Character Counter</h1>
        </div>
        <button onClick={handleDarkTheme} className='btn-dark'>
          <img src={light} alt="Cambiar tema" />
        </button>
      </header>
    </div>
  )
}

export { Header }
