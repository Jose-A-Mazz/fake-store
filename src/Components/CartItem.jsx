import styles from "./CartItem.module.css"


export default function CartItem({ title, price, amount, trimmedTitle, image, qty }) {

    return (
        <>
            <li className={styles["cart-item-card"]}>
                <img className={styles.image} src={image} alt="item-image" />
                <p className={styles.title}>
                {trimmedTitle? trimmedTitle: title}
                </p>
                <div className={styles["amount-section"]}>
                    <button>-</button>                
                <input className={styles.box} type="number" defaultValue={qty}/>
                <button>+</button> 
                </div>
                <p className={styles.price}>$ {(amount*1).toFixed(2)}</p>
            </li>



        </>
    )
}