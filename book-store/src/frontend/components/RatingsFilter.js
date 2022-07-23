import Accordion from "../common/Accordion";
import Filter from "../common/Filter";

const RatingsFilter = () => {
  const filterList = [
    {
      label: "Horror",
      onChange: () => {},
    },
    {
      label: "Self Help",
      onChange: () => {},
    },
    {
      label: "Thriller",
      onChange: () => {},
    },
    {
      label: "Romance",
      onChange: () => {},
    },
    {
      label: "Finance",
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
