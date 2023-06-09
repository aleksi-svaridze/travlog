import userImg from '../images/user.jpg';
import YellowStar from '../images/icons/star-yellow.svg';
import TestimonialsBg from '../images/testimonials.png';

import RightArrow from '../images/icons/arrow-left-white.svg';
import LeftArrow from '../images/icons/arrow-left-blue.svg';

const Testimonials = () => {
    return (
        <div className="mt-rs-n50 mb-rs-128">
            <div className="container position-relative">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <p className="text-pink text-uppercase fs-rs-23 mb-3 text-center" style={{letterSpacing: '.2em'}}>Testimonials</p>
                    <h2 className="text-blue fs-rs-44 text-center mb-0">Trust our clients</h2>
                    <img src={userImg} alt="user name here.." className='w-128 h-128 my-rs-56 rounded-circle' />
                    <img src={TestimonialsBg} alt="" className='position-absolute d-none d-lg-block top-n54' />
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
                        <div className='w-rs-24 h-rs-24 rounded-circle bg-blue-dark-5'></div>
                        <div className='w-rs-24 h-rs-24 rounded-circle bg-pink'></div>
                        <div className='w-rs-24 h-rs-24 rounded-circle bg-blue-dark-5'></div>
                    </div>
                </div>
                <div className='position-absolute start-0 top-lg-43 w-100 bottom-lg-n128 d-flex justify-content-between'>
                    <div className="rounded-circle bg-white h-rs-100 w-lg-100 d-flex align-items-center justify-content-center border border-blue-dark-10 ms-2 ms-lg-0">
                        <img src={LeftArrow} alt="Left arrow" className='w-rs-24 h-rs-24' />
                    </div>
                    <div className="rounded-circle bg-purple h-rs-100 w-lg-100 d-flex align-items-center justify-content-center me-2 me-lg-0">
                        <img src={RightArrow} alt="Right arrow" className='w-rs-24 h-rs-24' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;