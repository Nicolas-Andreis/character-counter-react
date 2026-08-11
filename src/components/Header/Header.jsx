import logo from '../../assets/logo/logo.png'
import light from '../../assets/icons/light.svg'
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
          <div>
            <img src={logo} alt="logo" />
            <h1>Character Counter</h1>
          </div>
          <button>
            <img src={light} alt="luz" />
          </button>
        </header>
    </div>
  )
}

export  {Header}