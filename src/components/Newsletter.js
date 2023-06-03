import Dots from '../images/icons/dots_orange.svg';
import WaveLines from '../images/icons/wave-lines.svg';

const Newsletter = () => {
    return(
        <div className="container mt-lg-177 mb-lg-4rem">
            <div className='py-rs-128 px-rs-64 bg-yellow-10 rounded-5 position-relative'>
                <img src={Dots} alt="" className='w-184 h-176 position-absolute start-n35 top-n67 d-none d-lg-block'/>
                <img src={WaveLines} alt="" className='position-absolute end-n348 bottom-n222 d-none d-lg-block' />
                <p className="text-pink text-uppercase fs-rs-23 mb-2rem text-center" style={{letterSpacing: '.2em'}}>subscribe to our newsletter</p>
                <h2 className="text-blue fs-rs-55 text-center mb-4rem">Prepare yourself & let's explore the beauty of the world</h2>

                <form className='d-flex flex-column row-gap-lg-2rem flex-lg-row column-gap-lg-4rem justify-content-lg-between'>
                    <input type="text" className="form-control ps-rs-72 fs-lg-24 fs-sm-14 text-blue-dark-75 rounded-rs-2rem h-rs-67 h-lg-96 p-4 p-lg-32 border-0" placeholder="your email" />
                    <button className='btn text-capitalize fs-lg-24 h-rs-67 h-lg-96 w-lg-235 bg-purple rounded-rs-2rem border-0 text-white'>subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;