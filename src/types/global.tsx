export type ExtendedIngredientsType = {
  id: number;
  original: string;
}

export type RecipesType = {
  title: string;
  image: string;
  id: number;
  instructions: string;
  summary: string;
  extendedIngredients: ExtendedIngredientsType[];
};

export type LinkType = {
  href: string;
  label: string;
};
