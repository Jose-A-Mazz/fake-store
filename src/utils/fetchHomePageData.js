//cmabiar funcionalidad, hacer dos calls por separado. Una a las imágenes y otra para hacer los featured items

export async function fetchHomePageData() {
  const fetchProducts = await fetch("https://fakestoreapi.com/products");
  const productsData = fetchProducts.json();
  const fetchImages = import("../assets/images.json");

  const [products, images] = await Promise.all([productsData, fetchImages]);

  const { featuredItems, itemsByCategory } = getRandomProductsArray(products);

  return {
    featuredItems,
    itemsByCategory,
    products,
    imagesUrl: images.default,
  };
}

function getRandomProductsArray(array) {
  let accumulatedCategories = [];
  let categories = [];
  let featuredItems = [];
  array.forEach((item, index) => {
    if (!categories.includes(item.category)) {
      accumulatedCategories.push({
        category: item.category,
        items: array.filter((product) => product.category === item.category),
      });
      categories.push(item.category);
    }
  });

  let procesedData = {
    itemsByCategory: accumulatedCategories,
  };

  accumulatedCategories.forEach((product) => {
    let randomX = Math.floor(
      Math.random() * (product.items.length - 1 - 0) + 0
    );

    let randomY = Math.floor(
      Math.random() * (product.items.length - 1 - 0) + 0
    );

    while (randomX === randomY) {
      randomY = Math.floor(Math.random() * (product.items.length - 1 - 0) + 0);
    }

    featuredItems.push(product.items[randomX], product.items[randomY]);
  });

  procesedData = {
    ...procesedData,
    featuredItems,
  };

  return procesedData;
}
