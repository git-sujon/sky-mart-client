export type IVariations = {
  _id: string;
  color: string;
  size: string;
};

export type IProduct = {
  _id: string;
  title: string;
  image: string;
  variations: IVariations[];
};
