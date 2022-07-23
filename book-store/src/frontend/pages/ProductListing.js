import "./ProductListing.css";
import NavBar from "../common/NavBar";
import Accordion from "../common/Accordion";
import CategoryFilter from "../components/CategoryFilter";
import SortFilter from "../components/SortFilter";
import RatingsFilter from "../components/RatingsFilter";
const ProductListing = () => {
  return (
    <div className="product-listing-container">
      <NavBar searchBar={true} />
      <CategoryFilter />
      <SortFilter />
      <RatingsFilter />
    </div>
  );
};
export default ProductListing;
