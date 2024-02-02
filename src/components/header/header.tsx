import './header.scss'

const Header = () => {
  return(
    <header className="header">
      <div className="header__logo">
          <a href="#">MNTN</a>
      </div>

      <ul className="header__nav-bar">
        <li>
          <a className='header__nav-bar__a' href="#">Equipment</a>
        </li>
        <li>
          <a className='header__nav-bar__a' href="#">About us</a>
        </li>
        <li>
          <a className='header__nav-bar__a' href="#">Blog</a>
        </li>
      </ul>

      <div className="header__account">
          <a href="#">
            <div className='header__account--icon'/><div/> &nbsp;
            Account
          </a>
      </div>


    </header>
  )
}

export default Header