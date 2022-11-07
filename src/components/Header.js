import HeaderNav from './HeaderNav.js';

const Header = () => {
  return (
    <div className="page-header">
      <div className="header-inner">
        <div className="header-logo-outer">
          <img htmlSrc={props.header.logo} className="header-logo-img"/>
        </div>

        <HeaderNav />
      </div>
    </div>
  )
}

export default Header;