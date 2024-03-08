import starFilled from "../assets/star-filled.svg";
import halfFilledStar from "../assets/half-filled-star.svg";
import starEmpty from "../assets/star-empty.svg";
import styles from "../Pages/ProductDetail.module.css";

export default function useStarGenerator({ rate }) {
  const intRate = Math.floor(rate);
  const isDecimal = rate !== intRate;
  const decimal = isDecimal ? rate - intRate : undefined;

  const rating = [...Array(5)].map((_, i) => {
    if (isDecimal && intRate + 1 === i + 1) {
      if (decimal > 0.5) {
        return (
          <span>
            <img className={styles["star-icon"]} src={starFilled} />
          </span>
        );
      } else if (decimal < 0.3) {
        return (
          <span>
            <img className={styles["star-icon"]} src={starEmpty} />
          </span>
        );
      } else {
        return (
          <span>
            <img className={styles["star-icon"]} src={halfFilledStar} />
          </span>
        );
      }
    } else if (i + 1 <= rate) {
      return (
        <span>
          <img className={styles["star-icon"]} src={starFilled} />
        </span>
      );
    } else {
      return (
        <span>
          <img className={styles["star-icon"]} src={starEmpty} />
        </span>
      );
    }
  });

  return rating;
}
