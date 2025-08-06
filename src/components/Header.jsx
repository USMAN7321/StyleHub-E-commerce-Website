import { CiSearch } from "react-icons/ci";

import { GrFavorite } from "react-icons/gr";
import { IoBagOutline, IoPersonSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  let bagitems = useSelector((store) => store.Bag.bagItems);
  console.log("Header Bagitems", bagitems);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary main-nav">
      <div className="container-fluid navbar-top">
        <Link to={"/"} className="logo_container">
          <div className="stylehub-logo">
            <span className="logo-text">StyleHub</span>
            <span className="logo-tagline">Fashion Forward</span>
          </div>
        </Link>

        <div
          className="collapse navbar-collapse nav-option"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-options">
            <li className="nav-item">
              <Link to={"/Home"} className="aaa" aria-current="page">
                TRENDS
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Home"} className="aaa" aria-current="page">
                CASUAL
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Home"} className="aaa" aria-current="page">
                FORMAL
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Home"} className="aaa" aria-current="page">
                SPORTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Home"} className="aaa" aria-current="page">
                ACCESSORIES
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Home"} className="aaa" aria-current="page">
                LIFESTYLE
              </Link>
            </li>
            <li className="nav-item1">
              <a className="aaa premium" href="#">
                Premium <sup>VIP</sup>
              </a>
            </li>
          </ul>
          <form className="d-flex SEARCH_FORM" role="search">
            <span>
              {" "}
              <CiSearch className="search_icon" />{" "}
            </span>
            <input
              className="SEARCH"
              type="search"
              placeholder="Discover your style..."
              aria-label="Search"
            />
          </form>
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoPersonSharp />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <GrFavorite />
            <span className="action_name">Favorites</span>
          </div>

          <Link to={"/bag"} className="action_container">
            <IoBagOutline />
            <span className="action_name">Cart</span>
            {bagitems.length === 0 ? (
              <span className=""></span>
            ) : (
              <span className="bag-item-count">{bagitems.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
