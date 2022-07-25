import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/DetailProduct.module.css";
import StarIcon from "@material-ui/icons/Star";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

// * redux
import { useDispatch } from "react-redux";
// * actions for adding to cart
import { addTobasket } from "../../../Redux/Slice/slices";

// * Actions for adding to Bookmark
import { addTobasket } from "../../../Redux/Slice/FavoriteSlice";

function detailProduct({ productDet }) {
  const dispatch = useDispatch();

  const { id, title, price, description, category, image } = productDet;

  const addItemToBasket = () => {
    dispatch(
      addTobasket({
        id,
        title,
        price,
        description,
        category,
        image,
      })
    );

    alert("You have added an item to the cart");
  };

  return (
    <>
      <div className={styles.detailProduct}>
        <div className={styles.welcom__container}>
          <Link passHref href="/">
            <p className={styles.back__btn}>Back</p>
          </Link>
          <p className={styles.user__email}>
            Welcome to Takealot charackkyungu624@gmail.com
          </p>
        </div>

        <div className={styles.product__detail__container}>
          <div className={styles.product__img}>
            <Image
              src={image}
              alt="logo"
              className={styles.img}
              width={400}
              height={500}
              layout="intrinsic"
            />
          </div>

          <div className={styles.product__detail__description}>
            <h1>{title}</h1>
            <h2>{category}</h2>

            <p className={styles.description}>{description}</p>

            <h2 className={styles.price}>
              <span>R {price} </span>
              <span className={styles.old__price}>{price + 10}</span>
            </h2>

            <div className={styles.delivery}>
              <DoneAllIcon />
              <p>Free Delivery Available -Berea, South Africa </p>
            </div>
            <div className={styles.add__to__cart}>
              <div className={styles.btn__add__container}>
                <AddShoppingCartIcon />
                <span onClick={addItemToBasket}>Add To Cart</span>
              </div>

              <div className={styles.btn__save}>
                <BookmarksIcon />
              </div>

              <div className={styles.btn__stars}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.disclamer}>
        <marquee>
          Disclaimer: This is not the official Takealot Store. It is a redesign,
          built purely for educational purpose.
        </marquee>
      </div>
    </>
  );
}

export default detailProduct;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const productDet = await response.json();
  return {
    props: {
      productDet,
    },
  };
};
