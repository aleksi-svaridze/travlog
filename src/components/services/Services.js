import { ServicesCard, MobileCard } from "./Card";


const Services = () => {
    return(
        <div className="container position-relative z-index-5 py-rs-64">
            <div className="row"> 

                <div className="col-12 col-lg-4">
                    <div className="h-rs-500 d-flex flex-column justify-content-center pb-3">
                        <p className="text-pink text-uppercase fs-rs-23 mb-3 text-center text-lg-start" style={{letterSpacing: '.2em'}}>services</p>
                        <h2 className="text-blue fs-rs-44 text-center text-lg-start mb-0">Our top value categories for you</h2>
                    </div>
                </div>

                <MobileCard />

            </div>
            <ServicesCard />
        </div> 
    )
}

export default Services;