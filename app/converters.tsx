import { Movie, WordPressProduct } from "./types";

export function convertProductToMovie(product: WordPressProduct): Movie {
  return {
    id: product.id,
    description: product.description,
    image: product.images[0].src,
    title: product.name,
    alt: product.images[0].alt,
    discountedPrice: parseInt(product.prices.sale_price) / 100,
    favorite: false,
    genre: product.categories[0].name,
    onSale: product.on_sale,
    price: parseInt(product.prices.regular_price) / 100,
    rating: parseFloat(
      product.attributes.find((e) => e.taxonomy == "pa_rating")?.terms[0]
        .name || "0"
    ),
    released: parseFloat(
      product.attributes.find((e) => e.taxonomy == "pa_released")?.terms[0]
        .name || "0"
    ),
    tags: product.tags,
  };
}
