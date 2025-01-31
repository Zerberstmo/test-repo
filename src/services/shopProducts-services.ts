// import { SHOP_URL } from "@/constants";
// import { useQuery } from "@tanstack/react-query";

const numberOfProduct = 800;

// export const useShopProducts = () => {
//   return useQuery({
//     queryKey: ["products"],
//     queryFn: async () => {
//       const response = await fetch(`${SHOP_URL}${numberOfProduct}`);
//       if (!response.ok) throw new Error("Fetch Fail");
//       const products = await response.json();

//       // Automatische Gruppierung der Produkte nach Kategorie
//       return groupProductsByCategory(products);
//     },
//   });
// };

// // Funktion zur Gruppierung der Produkte nach Kategorien
// const groupProductsByCategory = (products: any[]) => {
//   return products.reduce((grouped: { [x: string]: any[]; }, product: { category: string; }) => {
//     const category = product.category || "Uncategorized";
//     if (!grouped[category]) {
//       grouped[category] = [];
//     }
//     grouped[category].push(product);
//     return grouped;
//   }, {});
// };

import { useQuery } from "@tanstack/react-query";
import { SHOP_URL } from "@/constants";
import { Product } from "@/typs";

type GroupedProducts = {
  [category: string]: Product[];
};

export const useShopProducts = () => {
  return useQuery<GroupedProducts>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(`${SHOP_URL}${numberOfProduct}`);
      if (!response.ok) throw new Error("Fetch failed");
      const data = await response.json();

      // Gruppiere die Produkte nach Kategorie
      const grouped: GroupedProducts = data.data.reduce(
        (
          acc: { [x: string]: { category: string }[] },
          product: { category: string },
        ) => {
          const category = product.category || "Uncategorized";
          if (!acc[category]) acc[category] = [];
          acc[category].push(product);
          return acc;
        },
        {} as GroupedProducts,
      );

      return grouped;
    },
  });
};
