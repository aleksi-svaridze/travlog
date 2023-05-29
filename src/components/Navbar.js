import Logo from '../images/icons/logo.svg';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg py-2rem">
            <div className="container">
                <a className="navbar-brand me-0 column-gap-3 py-0 fw-bolder text-capitalize d-flex align-items-center text-blue-dark fs-24" href="/">
                    <img src={Logo} alt="Travlog logo" className='w-40' />
                    travlog
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto d-flex column-gap-5">
                        <li className="nav-item">
                            <a className="nav-link fs-14 text-blue text-capitalize" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-14 text-blue-dark-50 text-capitalize" href="/">discover</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-14 text-blue-dark-50 text-capitalize" href='/'>special deals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-14 text-blue-dark-50 text-capitalize" href='/'>contact</a>
                        </li>
                    </ul>
                
                    <ul className="navbar-nav align-items-center column-gap-4">
                        <li className="nav-item">
                            <a className="nav-link fs-14 text-blue text-capitalize" href="/">log in</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn fs-14 text-gray bg-purple w-115 h-49 d-flex align-items-center justify-content-center rounded-pill text-capitalize" href="/">sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;