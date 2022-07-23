import { useEffect, useState } from "react";
import "./ProductListing.css";
import NavBar from "../common/NavBar";
import MenuFilters from "../components/MenuFilters";
import ProductItem from "../common/ProductItem";
const ProductListing = () => {
  const [allProduct, setAllProduct] = useState([
    {
      id: "1",
      title: "Verity",
      author: "Colleen Hoover",
      price: "299",
      categoryName: "thriller",
      src: "https://images-na.ssl-images-amazon.com/images/I/410i2hlkSLL._SX322_BO1,204,203,200_.jpg",
    },
    {
      title: "It Ends With Us",
      author: "Colleen Hoover",
      price: "450",
      categoryName: "romance",
      src: "https://images-na.ssl-images-amazon.com/images/I/51qX2RGyhhL._SX320_BO1,204,203,200_.jpg",
    },
    {
      title: "The Spanish Love Deception",
      author: "Elena Armas",
      price: "350",
      categoryName: "romance",
      src: "https://images-na.ssl-images-amazon.com/images/I/41VJeilkF4L._SX320_BO1,204,203,200_.jpg",
    },
    {
      title: "The Hating Game",
      author: "Sally Thorne",
      price: "500",
      categoryName: "romance",
      src: "https://images-na.ssl-images-amazon.com/images/I/51vAB4b4JwL._SX315_BO1,204,203,200_.jpg",
    },
    {
      title: "It Happened One Summer",
      author: "Tessa Bailey",
      price: "250",
      categoryName: "romance",
      src: "https://images-na.ssl-images-amazon.com/images/I/51Io3NB1qDL._SX329_BO1,204,203,200_.jpg",
    },
    {
      title: "We Were Liars",
      author: "E. Lockhart",
      price: "350",
      categoryName: "romance",
      src: "https://images-na.ssl-images-amazon.com/images/I/619nhWVHi-L.jpg",
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: "215",
      categoryName: "thriller",
      src: "https://images-na.ssl-images-amazon.com/images/I/51OuP0mmnwL._SX322_BO1,204,203,200_.jpg",
    },
    {
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      price: "194",
      categoryName: "thriller",
      src: "https://images-na.ssl-images-amazon.com/images/I/41s25iwW7zS._SX319_BO1,204,203,200_.jpg",
    },
    {
      title: "Misery",
      author: "Stephen King",
      price: "450",
      categoryName: "thriller",
      src: "https://images-na.ssl-images-amazon.com/images/I/51iKRax-QFL._SX324_BO1,204,203,200_.jpg",
    },
    {
      title: "Gone Girl",
      author: "Gillian Flynn",
      price: "349",
      categoryName: "thriller",
      src: "https://images-na.ssl-images-amazon.com/images/I/41oR8CLl6lL._SX323_BO1,204,203,200_.jpg",
    },
    {
      _id: "",
      title: "Verity",
      author: "Colleen Hoover",
      price: "299",
      categoryName: "thriller",
      src: "https://images-na.ssl-images-amazon.com/images/I/410i2hlkSLL._SX322_BO1,204,203,200_.jpg",
    },
    {
      id: "",
      title: "Verity",
      author: "Colleen Hoover",
      price: "299",
      categoryName: "horror",
      src: "https://images-na.ssl-images-amazon.com/images/I/410i2hlkSLL._SX322_BO1,204,203,200_.jpg",
    },
  ]);
  useEffect(() => {
    fetch("/api/products").then((response) => {
      console.log(response.products);
    });
  }, []);
  return (
    <div>
      <NavBar searchBar={true} />
      <div className="product-list-wrapper">
        <div className="menu-filter-container">
          <MenuFilters />
        </div>
        <div className="product-listing-container">
          {allProduct.map((item, index) => {
            return (
              <ProductItem
                title={item.title}
                author={item.author}
                price={item.price}
                src={item.src}
                buttonLabel="Add to Cart"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductListing;
