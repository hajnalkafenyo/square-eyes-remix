interface ProductImage {
  id: number;
  src: string;
  thumbnail: string;
  srcset: string;
  sizes: string;
  name: string;
  alt: string;
}

interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  link: string;
}

interface ProductTerm {
  id: number;
  name: string;
  slug: string;
}

interface ProductAttribute {
  id: number;
  name: string;
  taxonomy: string;
  has_variations: boolean;
  terms: ProductTerm[];
}

interface ProductPrice {
  price: string;
  regular_price: string;
  sale_price: string;
  price_range: null | string;
  currency_code: string;
  currency_symbol: string;
  currency_minor_unit: number;
  currency_decimal_separator: string;
  currency_thousand_separator: string;
  currency_prefix: string;
  currency_suffix: string;
}

interface AddToCart {
  text: string;
  description: string;
  url: string;
  minimum: number;
  maximum: number;
  multiple_of: number;
}

export interface WordPressProduct {
  id: number;
  name: string;
  slug: string;
  parent: number;
  type: string;
  variation: string;
  permalink: string;
  sku: string;
  short_description: string;
  description: string;
  on_sale: boolean;
  prices: ProductPrice;
  price_html: string;
  average_rating: string;
  review_count: number;
  images: ProductImage[];
  categories: ProductCategory[];
  tags: any[];
  attributes: ProductAttribute[];
  variations: any[];
  has_options: boolean;
  is_purchasable: boolean;
  is_in_stock: boolean;
  is_on_backorder: boolean;
  low_stock_remaining: null | number;
  sold_individually: boolean;
  add_to_cart: AddToCart;
  extensions: any;
}

export interface Movie {
  id: number;
  description: string;
  image: string;
  title: string;
  alt: string;
  discountedPrice: number;
  favorite: boolean;
  genre: string;
  onSale: boolean;
  price: number;
  rating: number;
  released: number;
  tags: string[];
}
