import RightArrow from '../../images/icons/arrow-left-white.svg';
import LeftArrow from '../../images/icons/arrow-left-blue.svg';

const Destination = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-12 col-lg-7">
                    <p className="text-pink text-uppercase fs-4 mb-4 text-center text-lg-start" style={{letterSpacing: '.2em'}}>Top Destination</p>
                    <h2 className="text-blue fs-44 text-center text-lg-start mb-0">Explore top destination</h2>
                </div>

                <div className="col-12 col-lg-5">
                    <div className="d-flex align-items-center column-gap-32 justify-content-between justify-content-lg-end mt-lg-0 mt-32">
                        <div className="rounded-circle bg-white h-rs-100 w-rs-100 d-flex align-items-center justify-content-center border border-blue-dark-10">
                            <img src={LeftArrow} alt="Left arrow" className='w-24 h-24' />
                        </div>
                        <div className="rounded-circle bg-purple h-rs-100 w-rs-100 d-flex align-items-center justify-content-center">
                            <img src={RightArrow} alt="Right arrow" className='w-24 h-24' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Destination;