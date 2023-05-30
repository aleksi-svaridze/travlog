import ServicesCard from "./Card";


const Services = () => {
    return(
        <div className="py-rs-64">
            <div className="container">
                <div className="row gy-5"> 

                    <div className="col-12 col-lg-4">
                        <div className="h-100 d-flex flex-column justify-content-center">
                            <p className="text-pink text-uppercase fs-4 mb-4 text-center text-lg-start" style={{letterSpacing: '.2em'}}>services</p>
                            <h2 className="text-blue fs-44 text-center text-lg-start mb-0">Our top value categories for you</h2>
                        </div>
                    </div>

                    <div className="col-12 col-lg-8">
                        <div className="row position-relative z-index-5">
                            <ServicesCard />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services;