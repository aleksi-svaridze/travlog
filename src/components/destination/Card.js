import Star from '../../images/icons/star-orange.svg';

const DestinationCard = ({id, src, title, country, rank, price, cols}) => {
    return (
        <div className={cols} key={id}>
            <div className="card border-0 shadow-xl rounded-5">
                <img src={src} alt={country} className='card-img-top' />

                <div className="card-body p-2rem">
                    <h4 className="card-title d-flex flex-column row-gap-2 flex-xl-row justify-content-xl-between mb-4 fs-23 column-gap-3">
                        <span className='text-blue-dark order-2 order-xl-1'>{title}</span>
                        <span className='text-pink order-1 order-xl-2'>{price}</span>
                    </h4>
                    <p className="card-text font-inter fs-18 fw-normal text-blue-dark-75 mb-2rem">{country}</p>
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