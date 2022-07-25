import Link from "next/link";
import Image from "next/image";
import styles from "../styles/SideLeftBar.module.css";
import Logo from "../images/takealot-logo.png";

import HomeIcon from "@material-ui/icons/Home";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function LeftSideBar() {
  return (
    <div className={styles.leftSideBar}>
      <Link passHref href="/" className={styles.logo}>
        <Image src={Logo} alt="logo" className={styles.img} />
      </Link>

      <div className={styles.icons__container}>
        <div className={styles.tooltip}>
          <Link passHref href="/">
            <HomeIcon fontSize="large" />
          </Link>
          <span className={styles.tooltiptext}>Home</span>
        </div>
        <div className={styles.tooltip}>
          <Link passHref href="/basket">
            <AddShoppingCartIcon fontSize="large" />
          </Link>
          <span className={styles.tooltiptext}>Basket</span>
        </div>
        <div className={styles.tooltip}>
          <Link passHref href="/favorites">
            <BookmarkBorderIcon fontSize="large" />
          </Link>
          <span className={styles.tooltiptext}>Favorite</span>
        </div>
        <div className={styles.tooltip}>
          <Link passHref href="/orders">
            <LocalShippingIcon fontSize="large" />
          </Link>
          <span className={styles.tooltiptext}>Order</span>
        </div>
      </div>

      <div className={styles.avatar}>
        <AccountCircleIcon fontSize="large" />
      </div>
    </div>
  );
}

export default LeftSideBar;
