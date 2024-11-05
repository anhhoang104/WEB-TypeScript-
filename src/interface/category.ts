export interface ICategory {
  name: string;
  image: string;
  id: number | string;
}

export type formData2 = Pick<ICategory, "name" | "id" | "image">;
