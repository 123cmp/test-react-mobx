import { types } from "mobx-state-tree"

const ColorSwatch = types.model({
  code: "",
  imageURL: "",
  color: "",
  isSelected: false
});

const Product = types.model({
  code: "",
  department: "",
  productName: "",
  brandName: "",
  price: "",
  retailPrice: "",
  firstNonEmptyCategory: "",
  color: "",
  pdpURL: "",
  readyDate: "",
  firstReadyDate: "",
  markdownDate: "",
  upcomingMarkdownDate: "",
  markdownPrice: "",
  bagSizeString: "",
  inventoryLevel: 0,
  sizePopularity: 0,
  isOneSize: false,
  isDiscount: false,
  isFavorite: false,
  isWishList: false,
  isNewArrival: false,
  isBestSeller: false,
  isPreOrder: false,
  isWeddingShop: false,
  isBeautyProduct: false,
  isOOS: false,
  showMarkdownPrice: false,
  isCollection: false,
  isSizePreSelect: false,
  hoverView: false,
  isModelView: false,
  isFinalSale: false,
  imageURLs: types.array(types.string),
  mobileImageURLs: types.array(types.string),
  colorSwatch: types.array(ColorSwatch)
});

export default Product;
