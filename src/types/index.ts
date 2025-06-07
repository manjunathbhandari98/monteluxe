export interface CollectionType {
  name: string;
  description: string;
  price: number;
  category?: string;
  image?: string;
  features?: string[];
  link?: string;
}

export interface CategoryType {
  name: string;
  description: string;
  features: string[];
  startingPrice?: string;
  image?: string;
  link?: string;
}

export interface TestimonialType {
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface ProductProps {
  id?: string;
  name: string;
  slug?: string;
  gender: string;
  categoryId?: string;
  price: number;
  currency?: string;
  image: string;
  images?: string[];
  description: string;
  caseSize: string;
  caseMaterial: string;
  crystalType: string;
  waterResistance: string;
  movement: string;
  strapMaterial: string;
  features: string[];
  categoryName?: string;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
}

export type CartItem = {
  productId: string;
  price: number;
  quantity: number;
  image: string;
  productName: string;
};

export type CartProps = {
  items: CartItem[]; // <-- changed from tuple to array
  userId?: string;
};
