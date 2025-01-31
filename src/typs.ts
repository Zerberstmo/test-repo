export type BlogPost = {
  id: number;
  title: string;
  text: string;
  date: string;
  tag: string;
  likes: number;
};
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  warehouseId: number;
  createdAt: string; // Alternativ Date, wenn es als Date-Objekt interpretiert wird.
  updatedAt: string; // Alternativ Date, wenn es als Date-Objekt interpretiert wird.
};

export type ProductResponse = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: string; // Wenn dies ein Zahlwert sein sollte, kann dieser zu number geändert werden.
  };
  data: Product[];
};
