import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bar-clr">
        <div className="container">
          <a className="navbar-brand" href="/"><img src='https://static.momspresso.com/mymo/mymo-logo2.jpg' alt="please wait"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="navbar-item">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="navbar-item">Brands</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="navbar-item">FAQs</Link>
              </li>
              <li className="nav-item">
              <Link to="/" className="navbar-item">Already Registered</Link>
              </li>
            </ul>
            <a href="#getmymo-App">
              <button className='navbar-btn'>Get your card</button>
            </a>
          </div>
        </div>
      </nav>
      {/* hello */}
      <Outlet />
    </>
  )
};

export default Layout;