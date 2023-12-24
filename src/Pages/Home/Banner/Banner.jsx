import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div className="text-center">
            <Carousel >
                <div>
                <img src="/public/assets/home/01.jpg" />
                    
                </div>
                <div>
                <img src="/public/assets/home/02.jpg" />
                    
                </div>
                <div>
                <img src="/public/assets/home/03.png" />
                    
                </div>
                <div>
                <img src="/public/assets/home/04.jpg" />
                    
                </div>
                <div>
                <img src="/public/assets/home/05.png" />
                    
                </div>
                <div>
                <img src="/public/assets/home/06.png" />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;