import Booking from '../../images/icons/booking.svg';
import Destination from '../../images/icons/destination.svg';
import Weather from '../../images/icons/weather.svg';

export const ServicesCard = () => {     
    return (
        <div className='card-container d-none d-lg-block'> 
            <div className='window'>
                <div
                className="position-absolute services-card bg-white rounded-5 border border-blue-dark-10 d-flex flex-column justify-content-center align-items-center text-center px-rs-64 py-rs-64 card-1">
                    <img src={Destination} alt='Destination' className='w-64' />
                    <h3 className='mb-2rem mt-rs-4rem text-capitalize'>best tour guide</h3>
                    <p className='font-inter fs-6 fw-normal text-blue-dark-50 mb-0 text-center'>Copy What looked like a small patch of purple grass, above five feet.</p>
                </div>
            

                <div
                className="position-absolute services-card bg-white rounded-5 border border-blue-dark-10 d-flex flex-column justify-content-center align-items-center text-center px-rs-64 py-rs-64 card-2 shadow-md">
                    <img src={Booking} alt='Booking' className='w-64' />
                    <h3 className='mb-2rem mt-rs-4rem text-capitalize'>easy booking</h3>
                    <p className='font-inter fs-6 fw-normal text-blue-dark-50 mb-0 text-center'>Square, was moving across the sand in their direction.</p>
                </div>


                <div
                className="position-absolute services-card bg-white rounded-5 border border-blue-dark-10 d-flex flex-column justify-content-center align-items-center text-center px-rs-64 py-rs-64 card-3">
                    <img src={Weather} alt='Weather' className='w-64' />
                    <h3 className='mb-2rem mt-rs-4rem text-capitalize'>weather forecast</h3>
                    <p className='font-inter fs-6 fw-normal text-blue-dark-50 mb-0 text-center'>What looked like a small patch of purple grass, above five feet.</p>
                </div>
                
            </div>
        </div>
    )
}

export const MobileCard = () => {
    const MobileCardContent = [
        {id: 1, src: Destination, title: 'best tour guide', desc: 'Copy What looked like a small patch of purple grass, above five feet.'},
        {id: 2, src: Booking, title: 'easy booking', desc: 'Square, was moving across the sand in their direction.'},
        {id: 3, src: Weather, title: 'weather forecast', desc: 'What looked like a small patch of purple grass, above five feet.'},
    ];
    return(
        <>
            {
                MobileCardContent.map(content => (
                    <div className="col-12 d-lg-none mt-3" key={content.id}>
                        <div
                        className=" w-100
                                    bg-white 
                                    rounded-5 
                                    border 
                                    border-blue-dark-10 
                                    d-flex flex-column 
                                    justify-content-center 
                                    align-items-center 
                                    text-center 
                                    px-rs-64 
                                    py-rs-64">
                            <img src={content.src} alt='Destination' className='w-64' />
                            <h3 className='mb-2rem mt-rs-4rem text-capitalize'>{content.title}</h3>
                            <p className='font-inter fs-6 fw-normal text-blue-dark-50 mb-0 text-center'>{content.desc}</p>
                        </div>
                    </div>
                ) )

            }
        </>
    )
}