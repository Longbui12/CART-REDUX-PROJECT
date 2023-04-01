var initialState = [
  {
    id: 1,
    name: "Iphone 14 Pro_max",
    image:
      "https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2014%20Pro%20Max%20128/iPhone-14-Pro-Max-3.jpg",
    description: "Sản phẩm do Apple sản xuất",
    price: 1000,
    inventory: 10, // số lượng hàng trong kho
    rating: 3,
  },
  {
    id: 2,
    name: "SamSung Note 30",
    image:
      "https://images.samsung.com/is/image/samsung/vn-galaxy-note20-ultra-n985-sm-n985fzngxxv-frontmysticbronze-321307532?$624_624_PNG$",
    description: "Sản phẩm do SamSung sản xuất",
    price: 1200,
    inventory: 9, // số lượng hàng trong kho
    rating: 4,
  },
  {
    id: 3,
    name: "MacBook Pro",
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_16_2023_M2_Max/teaser.jpg",
    description: "Sản phẩm do Apple sản xuất",
    price: 2500,
    inventory: 15, // số lượng hàng trong kho
    rating: 5,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
