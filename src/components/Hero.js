import HeroBg from '../images/hero-bg.png';
import Case from '../images/icons/case.svg';

const Hero = () => {
    return(
        <div className="container pt-64">
            <div className="row gy-5">
                <div className="col-12 col-lg-4 order-2 order-lg-1">
                    <div className='text-center text-lg-start'>
                        <a href="/" className='btn p-0 d-inline-flex rounded-pill btn-shadow fs-14 w-224 h-56 align-items-center justify-content-center column-gap-3 text-pink'>
                            Explore the world 
                            <img src={Case} alt="link Explore the world icon of suitcase" className='w-24' />
                        </a>
                        <h1 className='text-black fs-69 my-60'>Travel <span className='text-pink'>top destination</span> ot the world</h1>
                        <p className='mb-0 text-blue-dark-50 fw-normal fs-18 font-inter'>We always make our customer happy by providing as many choices as possible</p>
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