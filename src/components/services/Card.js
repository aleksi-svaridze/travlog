import Booking from '../../images/icons/booking.svg';
import Destination from '../../images/icons/destination.svg';
import Weather from '../../images/icons/weather.svg';

const ServicesCard = () => {     
    return (
        <>
            <div className='col-4'>
                <div
                className="services-card bg-white rounded-5 border border-blue-dark-10 d-flex flex-column justify-content-center align-items-center text-center px-rs-64 py-rs-64">
                    <img src={Destination} alt='Destination' className='w-64' />
                    <h3 className='mb-32 mt-rs-64 text-capitalize'>best tour guide</h3>
                    <p className='font-inter fs-6 fw-normal text-blue-dark-50 mb-0 text-center'>Copy What looked like a small patch of purple grass, above five feet.</p>
                </div>
            </div>
            
            <div className='col-4'>
                <div
                className="services-card bg-white rounded-5 border border-blue-dark-10 d-flex flex-column justify-content-center align-items-center text-center px-rs-64 py-rs-64 card-shadow">
                    <img src={Booking} alt='Booking' className='w-64' />
                    <h3 className='mb-32 mt-rs-64 text-capitalize'>easy booking</h3>
                    <p className='font-inter fs-6 fw-normal text-blue-dark-50 mb-0 text-center'>Square, was moving across the sand in their direction.</p>
                </div>
            </div>

            <div className='col-4'>
                <div
                className="services-card bg-white rounded-5 border border-blue-dark-10 d-flex flex-column justify-content-center align-items-center text-center px-rs-64 py-rs-64">
                    <img src={Weather} alt='Weather' className='w-64' />
                    <h3 className='mb-32 mt-rs-64 text-capitalize'>weather forecast</h3>
                    <p className='font-inter fs-6 fw-normal text-blue-dark-50 mb-0 text-center'>What looked like a small patch of purple grass, above five feet.</p>
                </div>
            </div>
        </>
    )
}

export default ServicesCard;