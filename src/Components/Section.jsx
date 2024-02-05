<section className={styles["deals-section"]}>

    <h2>Best Deals for Men</h2>

      {deals["electronics"].map( (item, index) => {

   if(index > 1) {
    return undefined
   } 

      return <div className={styles["product-card"]} key={item.id}>
        <div className={styles["product-card-image-container"]}>
          <img className={styles["product-image"]} src={item.image} alt="" />
        </div>
        <div className={styles["product-info"]}>
          <p className={styles["discount-paragraph"]}>At Discount</p>
        <p className={styles["product-price-text"]}>{`$ ${item.price}`}</p>
        <p className={styles["product-title-text"]}>{`$ ${item.title}`}</p>
        <p className={styles["product-shiping-text"]}>Fast Shipping</p>
        </div>
        </div>})}
  </section>
  <section className={styles["deals-section"]}>

    <h2>Best Deals for Women</h2>

      {deals[`women's clothing`].map((item, index) => {
    
    if(index > 1) {
      return ""
     } 


      return <div className={styles["product-card"]} key={item.id}>
        <div className={styles["product-card-image-container"]}>
          <img className={styles["product-image"]} src={item.image} alt="" />
        </div>
        <div className={styles["product-info"]}>
          <p className={styles["discount-paragraph"]}>At Discount</p>
        <p className={styles["product-price-text"]}>{`$ ${item.price}`}</p>
        <p className={styles["product-title-text"]}>{`$ ${item.title}`}</p>
        <p className={styles["product-shiping-text"]}>Fast Shipping</p>
        </div>
        </div>})}
  </section>

  <section className={styles["deals-section"]}>

<h2>Best Jewelery Deals</h2>

  {deals[`jewelery`].map((item, index) => {

if(index > 1) {
  return undefined
 } 


  return <div className={styles["product-card"]} key={item.id}>
    <div className={styles["product-card-image-container"]}>
      <img className={styles["product-image"]} src={item.image} alt="" />
    </div>
    <div className={styles["product-info"]}>
      <p className={styles["discount-paragraph"]}>At Discount</p>
    <p className={styles["product-price-text"]}>{`$ ${item.price}`}</p>
    <p className={styles["product-title-text"]}>{`$ ${item.title}`}</p>
    <p className={styles["product-shiping-text"]}>Fast Shipping</p>
    </div>
    </div>})}
</section>

<section className={styles["deals-section"]}>

<h2>Best Electronics Deals</h2>

  {deals[`electronics`].map((item, index) => {

if(index > 1) {
  return undefined
 } 


  return <div className={styles["product-card"]} key={item.id}>
    <div className={styles["product-card-image-container"]}>
      <img className={styles["product-image"]} src={item.image} alt="" />
    </div>
    <div className={styles["product-info"]}>
      <p className={styles["discount-paragraph"]}>At Discount</p>
    <p className={styles["product-price-text"]}>{`$ ${item.price}`}</p>
    <p className={styles["product-title-text"]}>{`$ ${item.title}`}</p>
    <p className={styles["product-shiping-text"]}>Fast Shipping</p>
    </div>
    </div>})}
</section>