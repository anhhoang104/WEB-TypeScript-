export interface IProduct {
  id: number | string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export type formData = Pick<
  IProduct,
  "name" | "image" | "price" | "description" | "category"
>;
