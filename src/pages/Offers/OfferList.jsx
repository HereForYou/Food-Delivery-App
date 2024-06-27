import { Link } from "react-router-dom";
import Footer from '../../components/Footer'
 
import OfferItem from '../../components/Offers/offersItem'


import CafeImage from '../../../public/assets/img/offers/cafe.png'
import IssoImage from '../../../public/assets/img/offers/isso.png'
import BeanImage from '../../../public/assets/img/offers/bean.png'

const OfferList = () => {

  return (
    <>
      
      <OfferItem image = {CafeImage} title={'Café de Noires'} rate={4.9} subtitle ={'(124 ratings) Café'}/>
      <OfferItem image = {IssoImage} title={'Isso'} rate={4.9} subtitle ={'(124 ratings) Café'}/>
      <OfferItem image = {BeanImage} title={'Cafe Beans'} rate={4.9} subtitle ={'(124 ratings) Café'}/>

      <Footer />
    </>
  );
};

export default OfferList;
