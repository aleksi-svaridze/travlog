import { ServicesCard, MobileCard } from "./Card";


const Services = () => {
    return(
        <div className="py-5">
            <div className="container position-relative z-index-5">
                <div className="row"> 

                    <div className="col-12 col-lg-4">
                        <div className="h-rs-500 d-flex flex-column justify-content-center pb-3">
                            <p className="text-pink text-uppercase fs-4 mb-4 text-center text-lg-start" style={{letterSpacing: '.2em'}}>services</p>
                            <h2 className="text-blue fs-44 text-center text-lg-start mb-0">Our top value categories for you</h2>
                        </div>
                    </div>

                    <MobileCard />

                </div>
                <ServicesCard />
            </div> 
        </div>
    )
}

export default Services;