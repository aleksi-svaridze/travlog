import KeyFeaturesCard from "./Card";
import KeaFeaturesBg from '../../images/services-bg.png';

import location from '../../images/icons/location-white.svg';
import agenda from '../../images/icons/agenda.svg';
import ticket from '../../images/icons/ticket.svg';

const KeyFeatures = () => {
    const KeyFeaturesCardContent = [
        {id: 1, src: location, bg: 'bg-orange', title: 'We offer best services', desc: 'Lorem Ipsum is not simply random text'},
        {id: 2, src: agenda, bg: 'bg-yellow', title: 'Schedule your trip', desc: 'It has roots in a piece of classical'},
        {id: 3, src: ticket, bg: 'bg-pink', title: 'Get discounted coupons', desc: 'Lorem Ipsum is not simply random text'}
    ]
    return(
        <div className="container py-rs-64"> 
            <div className="row">
                <div className="col-12 col-xl-6 order-2 order-xl-1">
                    <div className="mt-64">
                        <p className="text-pink text-uppercase fs-4 mb-4 text-center text-xl-start" style={{letterSpacing: '.2em'}}>Key features</p>
                        <h2 className="text-blue fs-44 text-center text-xl-start mb-0">We offer best services</h2>
                        <p className="font-inter fw-normal fs-18 text-blue-dark-50 mt-2rem mb-0 text-center text-xl-start">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                        <div className="mt-rs-64">
                            {
                                KeyFeaturesCardContent.map(content => (
                                    <KeyFeaturesCard 
                                        id={content.id} 
                                        src={content.src} 
                                        bg={content.bg}
                                        title={content.title}
                                        desc={content.desc} 
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-6 order-1 order-xl-2">
                    <div className="text-center text-xl-end">
                        <img src={KeaFeaturesBg} alt="" className="mw-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures;