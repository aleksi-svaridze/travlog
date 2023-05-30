import Tripadvisor from '../images/companies/tripadvisor.svg';
import Expedia from '../images/companies/expedia.svg';
import Booking from '../images/companies/booking.svg';
import Airbnb from '../images/companies/airbnb.svg';
import Orbitz from '../images/companies/orbitz.svg';


const Companies = () => {
    return(
        <div className="companies-section py-rs-64">
            <div className="container">
                <div className="row gy-4 justify-content-center justify-content-lg-start">
                    <div className="col">
                        <div className='text-center text-lg-start'>
                            <img src={Tripadvisor} alt='Tripadvisor' className='h-32' />
                        </div>
                    </div>
                    <div className="col">
                        <div className='text-center text-lg-center'>
                            <img src={Expedia} alt='Expedia' className='h-32' />
                        </div>
                    </div>
                    <div className="col">
                        <div className='text-center text-lg-center'>
                            <img src={Booking} alt='Booking' className='h-32' />
                        </div>
                    </div>
                    <div className="col">
                        <div className='text-center text-lg-center'>
                            <img src={Airbnb} alt='Airbnb' className='h-32' />
                        </div>
                    </div>
                    <div className="col">
                        <div className='text-center text-lg-end'>
                            <img src={Orbitz} alt='Orbitz' className='h-32' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies;