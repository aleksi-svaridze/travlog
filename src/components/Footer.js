import Logo from '../images/icons/logo.svg';
import facebookLogo from '../images/icons/facebook.svg';
import twitterLogo from '../images/icons/twitter.svg';
import instagramLogo from '../images/icons/instagram.svg';

const Footer = () => {
    return(
        <footer className="container py-rs-64">
            <div className="row">
                <div className="col-12 col-xl-6">
                    <a className="navbar-brand me-0 column-gap-3 py-0 fw-bolder text-capitalize d-flex align-items-center text-blue-dark fs-24" href="/">
                        <img src={Logo} alt="Travlog logo" className='w-40' />
                        travlog
                    </a>
                    <p className='mt-2rem mb-rs-64 fw-450 fs-lg-24 text-blue-dark-50'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    <div className='d-flex align-items-center column-gap-2rem'>
                        <a href="/">
                            <img src={facebookLogo} alt="" className='w-32 h-32' />
                        </a>
                        <a href="/">
                            <img src={twitterLogo} alt="" className='w-32 h-32' />
                        </a>
                        <a href="/">
                            <img src={instagramLogo} alt="" className='w-32 h-32' />
                        </a>
                    </div>
                </div>
                <div className="col-12 col-xl-6">

                    <div className="row d-none d-xl-flex">

                        <div className="col-4">
                            <h4 className='text-capitalize fs-4 mb-0'>company</h4>
                            <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>about</a>
                            <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>career</a>
                            <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>mobile</a>
                        </div>

                        <div className="col-4">
                            <h4 className='text-capitalize fs-4 mb-0'>contact</h4>
                            <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>why travlog</a>
                            <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>partner with us</a>
                            <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>FAQ's</a>
                            <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>blog</a>
                        </div>

                        <div className="col-4">
                            <h4 className='text-capitalize fs-4 mb-0'>meet us</h4>
                            <a href="tel:+0092123456789" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>+00 92 123456789</a>
                            <a href="mailto:info@travlog.com" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>info@travlog.com</a>
                            <a href="/google-map" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>205. R Street, New York</a>
                            <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>BD23200</a>
                        </div>

                    </div>

                    <div className="row d-flex d-xl-none">
                        <div class="accordion accordion-flush" id="accordionFlushExample">

                            <div class="accordion-item mt-4rem border-0">
                                <h4 class="accordion-header">
                                    <button class="accordion-button collapsed text-capitalize fs-4 mb-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        company
                                    </button>
                                </h4>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body px-0">
                                    <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>about</a>
                                    <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>career</a>
                                    <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>mobile</a>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item mt-4rem border-0">
                                <h4 class="accordion-header">
                                    <button class="accordion-button collapsed text-capitalize fs-4 mb-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        contact
                                    </button>
                                </h4>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body px-0">
                                        <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>why travlog</a>
                                        <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>partner with us</a>
                                        <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>FAQ's</a>
                                        <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>blog</a>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item mt-4rem border-0">
                                <h4 class="accordion-header">
                                    <button class="accordion-button collapsed text-capitalize fs-4 mb-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        meet us
                                    </button>
                                </h4>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body px-0">
                                        <a href="tel:+0092123456789" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>+00 92 123456789</a>
                                        <a href="mailto:info@travlog.com" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>info@travlog.com</a>
                                        <a href="/google-map" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>205. R Street, New York</a>
                                        <a href="/" className='font-inter fw-normal fs-18 text-blue-dark-75 text-capitalize mt-2rem d-block text-decoration-none'>BD23200</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;