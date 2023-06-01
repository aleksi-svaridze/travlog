import userImg from '../images/user.jpg';
import YellowStar from '../images/icons/star-yellow.svg';
import TestimonialsBg from '../images/testimonials.png';

const Testimonials = () => {
    return (
        <div className="testimonials-section position-relative mt-rs-n50">
            <div className="container h-100">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                    <p className="text-pink text-uppercase fs-4 mb-4 text-center" style={{letterSpacing: '.2em'}}>Testimonials</p>
                    <h2 className="text-blue fs-44 text-center mb-0">Trust our clients</h2>
                    <img src={userImg} alt="user name here from back end stack" className='w-128 h-128 my-rs-56 rounded-circle' />
                    <img src={TestimonialsBg} alt="" className='position-absolute d-none d-lg-block testimonials-bg' />
                    <p className='text-capitalize'>
                        <span className='text-orange fs-3'>Mark Smith&nbsp;</span>
                        <span className='text-blue-dark-75 fs-4'>/&nbsp;travel enthusiast</span>
                    </p>
                    <div className='d-flex align-items-center column-gap-3 mt-2rem mb-rs-64'>
                        <img src={YellowStar} alt="" className='w-32 h-32' />
                        <img src={YellowStar} alt="" className='w-32 h-32' />
                        <img src={YellowStar} alt="" className='w-32 h-32' />
                        <img src={YellowStar} alt="" className='w-32 h-32' />
                        <img src={YellowStar} alt="" className='w-32 h-32' />
                    </div>
                    <p className='fs-4 w-rs-75 text-center text-blue-dark-75 fw-450'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;