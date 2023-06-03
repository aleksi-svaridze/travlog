import Logo from '../images/icons/logo.svg';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg py-2rem">
            <div className="container">
                <a className="navbar-brand me-0 column-gap-3 py-0 fw-bolder text-capitalize d-flex align-items-center text-blue-dark fs-24" href="/">
                    <img src={Logo} alt="Travlog logo" className='w-40 h-40' />
                    travlog
                </a>

                <button style={{borderRadius: '.7rem'}} className="border-0 navbar-toggler bg-purple w-40 h-40 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="30" 
                        height="30" 
                        fill="#eeeeee" 
                        className="bi bi-list" 
                        viewBox="0 0 16 16">
                            <path 
                                fillRule="evenodd" 
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>

                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto column-gap-5">
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
                
                    <ul className="navbar-nav align-items-lg-center column-gap-4">
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