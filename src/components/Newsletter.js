import Dots from '../images/icons/dots_orange.svg';
import WaveLines from '../images/icons/wave-lines.svg';

const Newsletter = () => {
    return(
        <div className="container py-rs-128 px-rs-64 bg-yellow-10 rounded-5 position-relative mt-lg-177 mb-rs-64">
            <img src={Dots} alt="" className='w-184 h-176 position-absolute start-n35 top-n67 d-none d-lg-block'/>
            <img src={WaveLines} alt="" className='position-absolute end-n348 bottom-n222 d-none d-lg-block' />
             <p className="text-pink text-uppercase fs-4 mb-32 text-center" style={{letterSpacing: '.2em'}}>subscribe to our newsletter</p>
            <h2 className="text-blue fs-lg-55 fs-32 text-center mb-64">Prepare yourself & let's explore the beauty of the world</h2>

            <form className='d-flex flex-column row-gap-32 flex-lg-row column-gap-lg-64 justify-content-lg-between'>
                <input type="text" className="form-control ps-rs-72 bs-rs-32 fs-lg-24 fs-sm-14 text-blue-dark-75 rounded-lg-32 rounded-16 h-67 h-lg-96 p-4 p-lg-32 border-0" placeholder="your email" />
                <button className='btn text-capitalize fs-lg-24 h-67 h-lg-96 w-lg-235 bg-purple rounded-lg-32 rounded-16 border-0 text-white'>subscribe</button>
            </form>
        </div>
    )
}

export default Newsletter;