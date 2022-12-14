import HeaderNav from './HeaderNav.js';

const Header = (props) => {
  return (
    <div className="page-header">
      <div className="header-inner">
        <div className="header-logo-outer">
          <img src={props.data.logo} className="header-logo-img" alt="logo"/>
        </div>

        <HeaderNav />
      </div>
    </div>
  )
}

export default Header;