import userImg from '../images/user.jpg';
import YellowStar from '../images/icons/star-yellow.svg';
import TestimonialsBg from '../images/testimonials.png';

import RightArrow from '../images/icons/arrow-left-white.svg';
import LeftArrow from '../images/icons/arrow-left-blue.svg';

const Testimonials = () => {
    return (
        <div className="testimonials-section mt-rs-n50 mb-rs-128">
            <div className="container h-100 position-relative">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                    <p className="text-pink text-uppercase fs-4 mb-4 text-center" style={{letterSpacing: '.2em'}}>Testimonials</p>
                    <h2 className="text-blue fs-44 text-center mb-0">Trust our clients</h2>
                    <img src={userImg} alt="user name here from back end stack" className='w-128 h-128 my-rs-56 rounded-circle' />
                    <img src={TestimonialsBg} alt="" className='position-absolute d-none d-lg-block testimonials-bg' />
                    <p className='text-capitalize mb-0'>
                        <span className='text-orange fs-3'>Mark Smith&nbsp;</span>
                        <span className='text-blue-dark-75 fs-4'>/&nbsp;travel enthusiast</span>
                    </p>
                    <div className='d-flex align-items-center column-gap-3 mt-2rem'>
                        <img src={YellowStar} alt="" className='w-32 h-32' />
                        <img src={YellowStar} alt="" className='w-32 h-32' />
                        <img src={YellowStar} alt="" className='w-32 h-32' />
                        <img src={YellowStar} alt="" className='w-32 h-32' />
                        <img src={YellowStar} alt="" className='w-32 h-32' />
                    </div>
                    <p className='fs-4 w-rs-75 text-center text-blue-dark-75 fw-450 my-rs-56'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>

                    <div className='d-flex column-gap-3 align-items-center justify-content-center'>
                        <div className='w-24 h-24 rounded-circle bg-blue-dark-5'></div>
                        <div className='w-24 h-24 rounded-circle bg-pink'></div>
                        <div className='w-24 h-24 rounded-circle bg-blue-dark-5'></div>
                    </div>
                </div>
                <div className='position-absolute start-0 top-lg-50 w-100 bottom-lg-n128 translate-middle-lg-y d-flex justify-content-between'>
                    <div className="rounded-circle bg-white h-rs-100 w-rs-100 d-flex align-items-center justify-content-center border border-blue-dark-10 ms-2 ms-lg-0">
                        <img src={LeftArrow} alt="Left arrow" className='w-24 h-24' />
                    </div>
                    <div className="rounded-circle bg-purple h-rs-100 w-rs-100 d-flex align-items-center justify-content-center me-2 me-lg-0">
                        <img src={RightArrow} alt="Right arrow" className='w-24 h-24' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;