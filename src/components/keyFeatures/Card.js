const KeyFeaturesCard = ({id, src, bg, title, desc}) => {
    let border;

    if(id === 2) {
        border = 'border border-blue-dark-10';
    }
    else {
        border = '';
    }
    return(
        <div key={id} className={`d-flex flex-column row-gap-lg-32  flex-lg-row column-gap-lg-32 align-items-lg-center rounded-5 p-2rem ${border}`}>
            <div className={`${bg} w-100px h-100px rounded-5 d-flex align-items-center justify-content-center`}>
                <img src={src} alt={title} className='w-48 h-48' />
            </div>

            <div>
                <h5 className='text-blue-dark fs-4'>{title}</h5>
                <p className='text-blue-dark-50 fs-18 fw-normal font-inter mb-0'>{desc}</p>
            </div>
        </div>
    )
}

export default KeyFeaturesCard;