import RightArrow from '../../images/icons/arrow-left-white.svg';
import LeftArrow from '../../images/icons/arrow-left-blue.svg';
import DestinationCard from './Card';

import img1 from '../../images/destination/dest-1.png';
import img2 from '../../images/destination/dest-2.png';
import img3 from '../../images/destination/dest-3.png';

const Destination = () => {
    const DestinationCardContent = [
        {id: 1, src: img1, title: 'Paradise Beach, Bantayan Island', country: 'Rome, Italy', rank: '4.8', price: '$550.16'},
        {id: 2, src: img2, title: 'Ocean with full of Colors', country: 'Maldives', rank: '4.5', price: '$20.99'},
        {id: 3, src: img3, title: 'Mountain View, Above the cloud', country: 'United Arab Emeries ', rank: '5.0,', price: '$150.99'},
    ]
    return (
        <div className="container py-rs-64">
            <div className="row pb-rs-64">

                <div className="col-lg-12 col-xl-7">
                    <p className="text-pink text-uppercase fs-rs-23 mb-4 text-center text-xl-start" style={{letterSpacing: '.2em'}}>Top Destination</p>
                    <h2 className="text-blue fs-rs-44 text-center text-xl-start mb-0">Explore top destination</h2>
                </div>

                <div className="col-lg-12 col-xl-5 mt-lg-0 mt-md-2rem">
                    <div className="d-flex align-items-center column-gap-lg-2rem justify-content-between justify-content-xl-end">
                        <div className="rounded-circle bg-white h-rs-100 w-rs-100 d-flex align-items-center justify-content-center border border-blue-dark-10">
                            <img src={LeftArrow} alt="Left arrow" className='w-rs-24 h-rs-24' />
                        </div>
                        <div className="rounded-circle bg-purple h-rs-100 w-rs-100 d-flex align-items-center justify-content-center">
                            <img src={RightArrow} alt="Right arrow" className='w-rs-24 h-rs-24' />
                        </div>
                    </div>
                </div>

            </div>

            <div className="row row-gap-xl-2rem justify-content-center">
                {DestinationCardContent.map(content => (
                    <DestinationCard 
                        id={content.id} 
                        src={content.src} 
                        title={content.title}
                        country={content.country}
                        rank={content.rank}
                        price={content.price} 
                        cols={'col-lg-6 col-xl-4'} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Destination;