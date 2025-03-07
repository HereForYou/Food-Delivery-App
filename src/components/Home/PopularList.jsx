import PopularItem from './PopularItem'

import Burger from '/assets/img/popular/Burger.png'
import bambaa from '/assets/img/popular/bambaa.png'
const OfferList = () => {

    return (
        <>
            <PopularItem image={bambaa} title={'Café De Bambaa'} rate={4.9} subtitle={'(124 ratings) Café'} />
            <PopularItem image={Burger} title={'Burger by Bella'} rate={4.9} subtitle={'(124 ratings) Café'} />
            <PopularItem image={bambaa} title={'Café De Bambaa'} rate={4.9} subtitle={'(124 ratings) Café'} />
            <PopularItem image={Burger} title={'Burger by Bella'} rate={4.9} subtitle={'(124 ratings) Café'} />
            <PopularItem image={bambaa} title={'Café De Bambaa'} rate={4.9} subtitle={'(124 ratings) Café'} />
            <PopularItem image={Burger} title={'Burger by Bella'} rate={4.9} subtitle={'(124 ratings) Café'} />
            <PopularItem image={Burger} title={'Burger by Bella'} rate={4.9} subtitle={'(124 ratings) Café'} />
            <PopularItem image={bambaa} title={'Café De Bambaa'} rate={4.9} subtitle={'(124 ratings) Café'} />
        </>
    );
};

export default OfferList;
