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
  shortDescription: string;
  description: string;
  features: string[];
  startingPrice?: string;
  image?: string;
}

export interface TestimonialType {
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface ProductProps {
  id: string;
  name: string;
  gender: string;
  price: number;
  currency: string;
  image: string;
  description: string;
  case_size: string;
  case_material: string;
  crystal_type: string;
  water_resistance: string;
  movement: string;
  strap_material: string;
  features: string[];
}
