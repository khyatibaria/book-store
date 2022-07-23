import Accordion from "../common/Accordion";
import Filter from "../common/Filter";

const CategoryFilter = () => {
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
      <Accordion title="Genres" content={<Filter List={filterList} />} />
    </div>
  );
};
export default CategoryFilter;
