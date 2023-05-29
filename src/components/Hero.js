import HeroBg from '../images/hero-bg.png';


const Hero = () => {
    return(
        <div className="container pt-64">
            <div className="row">
                <div className="col-12 col-lg-4 bg-primary order-2 order-lg-1">text</div>
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