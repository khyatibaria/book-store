import "./RatingsFilter.css";
import Accordion from "../common/Accordion";
import Filter from "../common/Filter";
import Rating from "../common/Rating";
const RatingsFilter = () => {
  const filterList = [
    {
      label: (
        <div className="rating-container">
          <Rating />
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
      ),
      onChange: () => {},
    },
    {
      label: (
        <div className="rating-container">
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
      ),
      onChange: () => {},
    },
    {
      label: (
        <div className="rating-container">
          <Rating />
          <Rating />
          <Rating />
        </div>
      ),
      onChange: () => {},
    },
    {
      label: (
        <div className="rating-container">
          <Rating />
          <Rating />
        </div>
      ),
      onChange: () => {},
    },
    {
      label: (
        <div className="rating-container">
          <Rating />
        </div>
      ),
      onChange: () => {},
    },
  ];
  return (
    <div>
      <Accordion title="Ratings" content={<Filter List={filterList} />} />
    </div>
  );
};
export default RatingsFilter;
