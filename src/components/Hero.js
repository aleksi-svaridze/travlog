import HeroBg from '../images/hero-bg.png';


const Hero = () => {
    return(
        <div className="container pt-64">
            <div className="row">
                <div className="col-12 col-lg-4 bg-primary">text</div>
                <div className="col-12 col-lg-8 bg-primary">
                    <div className='bg-danger text-end'>
                        <img src={HeroBg} alt="" className='w-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;