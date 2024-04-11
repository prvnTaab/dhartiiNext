import CarouselComponent from "./component/CarouselComponent";
import FacilityComponet from "./component/home_page/FacilityComponet";
import SustainableFashionComponent from "./component/home_page/SustainableFashionComponent";
import SwipWrapperComponent from "./component/home_page/SwipWrapperComponent";
import Swipable from "./component/home_page/Swipable";
import MetaDescription from "./component/productComponent/MetaDescription";
import ProductSuggestion from "./component/productComponent/ProductSuggestion";
import FilterComponent from "./component/products/FilterComponent";
import ProductDescription from "./component/products/ProductDescription";
import ProductPage from "./component/products/ProductPage";
import SingleProduct from "./component/products/SingleProduct";
import TitleAndShort from "./component/products/TitleAndShort";

export default function Home() {
  return (
    // <Navbar/>
    <>
    <CarouselComponent />
    <Swipable />
    <SwipWrapperComponent />
    <SwipWrapperComponent />
    <SwipWrapperComponent />
    <SwipWrapperComponent />
    <SustainableFashionComponent />  
    <FacilityComponet />
    <div className="row mt-5 mx-2">
      <div className="col-4"><FilterComponent />  </div>
      <div className="col-8"><TitleAndShort /><ProductPage />
    </div>
    </div>
    <div className="row">
    <SingleProduct />
    <ProductDescription />
    </div>
    <ProductSuggestion />
    
   </>
    
  );
}
