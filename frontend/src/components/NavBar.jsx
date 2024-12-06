import 'bootstrap'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav className="navbar bg-dark border-bottom border-body">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src='../../public/employeea-white.png' alt="Logo" width="150" height="auto" />
                </a>
                <div id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-3">
                            <button type="button" className="btn btn-outline-primary"><Link className='text-decoration-none' to={"/home"}>Home</Link></button>
                        </li>
                        {/* <li className="nav-item me-3">
                            <button type="button" className="btn btn-outline-primary"><Link className='text-decoration-none' to={"/admin"}>Admin Dashboard</Link></button>
                        </li> */}
                        <li className="nav-item">
                            <button type="button" className="btn btn-danger"><Link className='text-decoration-none text-white' to={"/"}>Log Out</Link></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar