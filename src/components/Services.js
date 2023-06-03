import Destination from '../images/icons/destination.svg';
import Booking from '../images/icons/booking.svg';
import Weather from '../images/icons/weather.svg';


const Services = () => {
    return(
        <div className="container py-rs-64">
            <div className="row row-gap-2rem"> 

                <div className="col-12 col-lg-4">
                    <div className="d-flex flex-column justify-content-center h-100">
                        <p className="text-pink text-uppercase fs-rs-23 mb-3 text-center text-lg-start" style={{letterSpacing: '.2em'}}>services</p>
                        <h2 className="text-blue fs-rs-44 text-center text-lg-start mb-0">Our top value categories for you</h2>
                    </div>
                </div>

                <div className="col-lg-8 d-flex flex-column row-gap-3 flex-lg-row column-gap-lg-2rem">
                    <div className="bg-white 
                                    flex-shrink-0 
                                    rounded-5 
                                    border 
                                    border-blue-dark-10 
                                    d-flex 
                                    flex-column 
                                    justify-content-center 
                                    align-items-center  
                                    text-center
                                    p-rs-64
                                    w-rs-350"
                        >
                        <img src={Destination} alt='Destination' className='w-64' />
                        <h3 className='mb-2rem mt-rs-4rem text-capitalize'>best tour guide</h3>
                        <p className='font-inter fs-6 fw-normal text-blue-dark-50 mb-2rem text-center'>
                            Copy What looked like a small patch of purple grass, above five feet.
                        </p>
                    </div>

                    <div className="bg-white 
                                    flex-shrink-0 
                                    rounded-5 
                                    border 
                                    border-blue-dark-10 
                                    d-flex 
                                    flex-column 
                                    justify-content-center 
                                    align-items-center  
                                    text-center
                                    p-rs-64
                                    w-rs-350
                                    shadow-sm" 
                                    >
                        <img src={Booking} alt='Booking' className='w-64' />
                        <h3 className='mb-2rem mt-rs-4rem text-capitalize'>easy booking</h3>
                        <p className='font-inter fs-6 fw-normal text-blue-dark-50 mb-0 text-center'>Square, was moving across the sand in their direction.</p>
                    </div>

                    <div className="bg-white 
                                    flex-shrink-0 
                                    rounded-5 
                                    border 
                                    border-blue-dark-10 
                                    d-flex 
                                    flex-column 
                                    justify-content-center 
                                    align-items-center  
                                    text-center
                                    p-rs-64
                                    w-rs-350" 
                                >
                        <img src={Weather} alt='Weather' className='w-64' />
                        <h3 className='mb-2rem mt-rs-4rem text-capitalize'>weather forecast</h3>
                        <p className='font-inter fs-6 fw-normal text-blue-dark-50 mb-0 text-center'>What looked like a small patch of purple grass, above five feet.</p>
                    </div>
                </div>

            </div>
        </div> 
    )
}

export default Services;