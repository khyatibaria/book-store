import "./PriceFilter.css";
import Accordion from "../common/Accordion";
const PriceFilter = () => {
  return (
    <Accordion
      title="Price"
      content={
        <div className="price-filter-container">
          <div className="filter-input-conatiner">
            <label className="price-filter-label">Min</label>
            <input className="price-filter-input" />
          </div>
          <div className="price-filter-label">To</div>
          <div className="filter-input-conatiner">
            <input className="price-filter-input" />
            <label className="price-filter-label">Max</label>
          </div>
        </div>
      }
    />
  );
};
export default PriceFilter;
