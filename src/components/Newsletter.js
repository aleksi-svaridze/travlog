import Dots from '../images/icons/dots_orange.svg';

const Newsletter = () => {
    return(
        <div className="container py-rs-128 px-rs-64 bg-yellow rounded-5 position-relative mt-lg-177">
            <img src={Dots} alt="" className='w-184 h-176 position-absolute start-n35 top-n67 d-none d-lg-block'/>
             <p className="text-pink text-uppercase fs-4 mb-32 text-center" style={{letterSpacing: '.2em'}}>subscribe to our newsletter</p>
            <h2 className="text-blue fs-lg-55 fs-32 text-center mb-64">Prepare yourself & let's explore the beauty of the world</h2>
        </div>
    )
}

export default Newsletter;