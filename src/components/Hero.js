import HeroBg from '../images/hero-bg-big.png';
import Case from '../images/icons/case.svg';
import PlayBtn from '../images/icons/play_btn.svg';

const Hero = () => {
    return(
        <div className="container py-rs-64">
            <div className="row gy-5">
                <div className="col-12 col-lg-4 order-2 order-lg-1">
                    <div className='text-center text-lg-start d-lg-flex flex-lg-column justify-content-lg-center h-100'>
                        <a href="/" className='btn p-0 d-inline-flex rounded-pill btn-shadow fs-14 w-224 h-56 align-items-center justify-content-center column-gap-3 text-pink'>
                            Explore the world 
                            <img src={Case} alt="link Explore the world icon of suitcase" className='w-24' />
                        </a>
                        <h1 className='text-black fs-69 my-rs-60'>Travel <span className='text-pink'>top destination</span> ot the world</h1>
                        <p className='mb-0 text-blue-dark-50 fw-normal fs-18 font-inter'>We always make our customer happy by providing as many choices as possible</p>

                        <div className='d-flex flex-column row-gap-4 flex-lg-row align-items-lg-center column-gap-3 mt-5'>
                            <a href="/" className='btn text-capitalize btn-shadow-light fs-14 h-rs-49 rounded-pill bg-purple p-0 d-flex align-items-center justify-content-center w-141 text-gray'>get started</a>
                            <a href="/" className='btn border border-gray rounded-pill text-capitalize p-0 justify-content-center fs-14 d-flex align-items-center text-blue column-gap-2 h-rs-56 w-181'>
                                <img src={PlayBtn} alt="Play video button" className='w-24' />
                                watch demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-8 order-1 order-lg-2">
                    <div className='text-lg-end text-center'>
                        <img src={HeroBg} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;