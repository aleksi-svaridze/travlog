import YellowCircle from '../images/yellow-circle.png';

const TravelPoint = () => {
    return(
        <div className="container py-rs-64">
            <div className="row row-gap-xl-4rem">
                <div className="col-12 col-xl-7">
                    <div className='travelPointBg'></div>
                </div>
                <div className="col-12 col-xl-5">
                    <div className="d-flex flex-column justify-content-center h-100 ps-0 ps-xl-4 ps-xxl-5">
                        <p className="text-pink text-uppercase fs-rs-23 mb-3 text-center text-xl-start" style={{letterSpacing: '.2em'}}>Travel Point</p>
                        <h2 className="text-blue fs-rs-44 text-center text-xl-start mb-0">We helping you find your dream location</h2>

                        <p className="position-relative font-inter fw-normal fs-18 text-blue-dark-50 mt-2rem mb-rs-xl-4rem text-center text-xl-start">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                            <img src={YellowCircle} alt="" className='d-none d-xl-block position-absolute top-0 end-rs-n80' />
                        </p>

                        <div className="row">
                            <div className="col-12 col-xl-6">
                                <div className="border border-blue-dark-10 rounded-5 text-center p-2rem">
                                    <h4 className="mb-4 text-orange fs-2">500+</h4>
                                    <p className="mb-0 text-capitalize text-blue-dark font-inter fs-18 fw-normal">Holiday Package</p>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 mt-3 mt-xl-0">
                                <div className="border border-blue-dark-10 rounded-5 text-center p-2rem">
                                    <h4 className="mb-4 text-orange fs-2">100</h4>
                                    <p className="mb-0 text-capitalize text-blue-dark font-inter fs-18 fw-normal">luxury hotel</p>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 mt-3">
                                <div className="border border-blue-dark-10 rounded-5 text-center p-2rem">
                                    <h4 className="mb-4 text-orange fs-2">7</h4>
                                    <p className="mb-0 text-capitalize text-blue-dark font-inter fs-18 fw-normal">premium airlines</p>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 mt-3">
                                <div className="border border-blue-dark-10 rounded-5 text-center p-2rem">
                                    <h4 className="mb-4 text-orange fs-2">2K+</h4>
                                    <p className="mb-0 text-capitalize text-blue-dark font-inter fs-18 fw-normal">happy customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelPoint;