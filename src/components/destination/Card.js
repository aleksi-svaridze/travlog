import Star from '../../images/icons/star-orange.svg';

const DestinationCard = ({id, src, title, country, rank, price, cols}) => {
    return (
        <div className={cols} key={id}>
            <div className="card border-0 destination-card-shadow rounded-5">
                <img src={src} alt={country} className='card-img-top' />

                <div className="card-body p-2rem">
                    <h4 className="card-title d-flex justify-content-between mb-4 fs-4 column-gap-3">
                        <span className='text-blue-dark'>{title}</span>
                        <span className='text-pink'>{price}</span>
                    </h4>
                    <p className="card-text font-inter fs-18 fw-normal text-blue-dark-75 mb-32">{country}</p>
                    <div className="card-text text-orange fs-4 d-flex align-items-center column-gap-2">
                        <span>{rank}</span> 
                        <img src={Star} alt="" className='w-24 h-24' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard;