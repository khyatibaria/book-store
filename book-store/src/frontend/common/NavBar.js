import { images } from "../assets/index";
//import Badge from "./Badge";
const NavBar = (props) => {
  const { searchBar, sx, WishlistCount, productCount } = props;
  const { BookLogo } = images;
  return (
    <div>
      <nav className="navigation-container" style={{ ...sx }}>
        <div className="navigation-logo-container">
          <div className="navigation-logo">
            <a>
              <img src={BookLogo} />
            </a>
          </div>
          <div className="navigation-brand">Book Store</div>
        </div>
        {searchBar === true && (
          <div className="navigation-search">
            <label className="search-icon">
              <i className="fas fa-search"></i>
            </label>
            <input placeholder="Search here" />
          </div>
        )}
        <div className="navigation-links-container">
          <a href="#" className="navigation-link" title="Profile">
            <div className="navigation-link-icon">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
          </a>
          <a href="#" className="navigation-link badge" title="Wishlist">
            <div className="navigation-link-icon">
              <i className="fa fa-heart" aria-hidden="true"></i>
              {WishlistCount ? (
                <div
                  className="badge-count danger"
                  style={{ right: "-12px", top: "-4px" }}
                  id="icon"
                >
                  {WishlistCount}
                </div>
              ) : null}
            </div>
          </a>
          <a href="#" className="navigation-link badge" title="Add to Cart">
            <div className="navigation-link-icon">
              <i className="fa fa-cart-plus" aria-hidden="true"></i>
              {productCount ? (
                <div
                  className="badge-count danger"
                  style={{ right: "-12px", top: "-4px" }}
                  id="icon"
                >
                  {productCount}
                </div>
              ) : null}
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
