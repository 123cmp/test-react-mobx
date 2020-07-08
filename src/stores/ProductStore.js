import { types } from "mobx-state-tree";
import { PAGE_SIZE } from "../constants";
import Product from "./Product";

const ProductStore = types.model({
    banner: "",
    currentSortBy: "",
    currentPage: 0,
    productCount: 0,
    isDesignerHearted: false,
    isFavoriteDisabled: false,
    pageItems: types.array(Product),
    filter: "",
    pageNumber: 1
}).views(self => ({
    get page() {
      const { filteredPageItems, pageNumber } = self;
      return filteredPageItems.slice(PAGE_SIZE * (pageNumber - 1), PAGE_SIZE * pageNumber);
    },
    get filteredPageItems() {
      return self.filter
        ? self.pageItems.filter(item => item.productName.toLocaleLowerCase().includes(self.filter.toLowerCase()))
        : self.pageItems
    },
    get totalPages() {
      return Math.round(self.filteredPageItems.length / PAGE_SIZE);
    },
    getSpecificProduct(code) {
      return self.pageItems.find(
        item => item.code === code
      );
    }
})).actions(self => ({
    setPage(pageNumber) {
      self.pageNumber = pageNumber;
    },
    setFilter(filter) {
      self.filter = filter;
    }
  })
);

export default ProductStore;
