import Tripadvisor from '../images/companies/tripadvisor.svg';
import Expedia from '../images/companies/expedia.svg';
import Booking from '../images/companies/booking.svg';
import Airbnb from '../images/companies/airbnb.svg';
import Orbitz from '../images/companies/orbitz.svg';

import companiesBg from '../images/companies-bg.png';


const Companies = () => {
    return(
        <div className="py-rs-64">
            <div className="container position-relative">
                <img src={companiesBg} alt="" className='d-none d-lg-block position-absolute z-n1 end-n50 top-50 translate-middle-y' />
                <div className="row row-gap-2rem justify-content-center justify-content-lg-start">
                    <div className="col">
                        <div className='text-center text-lg-start'>
                            <img src={Tripadvisor} alt='Tripadvisor' className='h-rs-32' />
                        </div>
                    </div>
                    <div className="col">
                        <div className='text-center text-lg-center'>
                            <img src={Expedia} alt='Expedia' className='h-rs-32' />
                        </div>
                    </div>
                    <div className="col">
                        <div className='text-center text-lg-center'>
                            <img src={Booking} alt='Booking' className='h-rs-32' />
                        </div>
                    </div>
                    <div className="col">
                        <div className='text-center text-lg-center'>
                            <img src={Airbnb} alt='Airbnb' className='h-rs-32' />
                        </div>
                    </div>
                    <div className="col">
                        <div className='text-center text-lg-end'>
                            <img src={Orbitz} alt='Orbitz' className='h-rs-32' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies;