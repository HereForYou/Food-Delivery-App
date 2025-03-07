import { Link } from "react-router-dom";

import HomeSlideItem from './HomeSlideItem'

import ham from '/assets/img/slide/ham.png'
import sri from '/assets/img/slide/sri.png'
import indian from '/assets/img/slide/indian.png'
import italian from '/assets/img/slide/italian.png'
 
const OfferList = () => {

    return (
        <>
            <HomeSlideItem title="Offers" image={ham} />
            <HomeSlideItem title="Sri Lankan" image={sri} />
            <HomeSlideItem title="italian " image={italian} />
            <HomeSlideItem title="indian" image={indian} />
            
            <HomeSlideItem title="Offers" image={ham} />
            <HomeSlideItem title="italian " image={italian} />
            <HomeSlideItem title="indian" image={indian} />
            <HomeSlideItem title="Offers" image={ham} />
            <HomeSlideItem title="Sri Lankan" image={sri} />
            <HomeSlideItem title="indian" image={indian} />
            
            <HomeSlideItem title="Offers" image={ham} />
            <HomeSlideItem title="italian " image={italian} />
            <HomeSlideItem title="indian" image={indian} />
        </>
    );
};

export default OfferList;
