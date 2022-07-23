import Accordion from "../common/Accordion";
import Filter from "../common/Filter";

const SortFilter = () => {
  const filterList = [
    {
      type: "radio",
      label: "Discount",
      onChange: () => {},
    },
    {
      type: "radio",
      label: "BestSellers",
      onChange: () => {},
    },
    {
      type: "radio",
      label: "Low to High",
      onChange: () => {},
    },
    {
      type: "radio",
      label: "High to Low",
      onChange: () => {},
    },
  ];
  return (
    <div>
      <Accordion title="Sort" content={<Filter List={filterList} />} />
    </div>
  );
};
export default SortFilter;
