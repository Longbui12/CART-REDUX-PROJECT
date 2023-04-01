import * as Types from "./../constants/ActionType";

var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];
// var initialState = [
//   {
//     product: {
//       id: 1,
//       name: "Iphone 14 Pro_max",
//       image:
//         "https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2014%20Pro%20Max%20128/iPhone-14-Pro-Max-3.jpg",
//       description: "Sản phẩm do Apple sản xuất",
//       price: 1000,
//       inventory: 10, // số lượng hàng trong kho
//       rating: 3,
//     },
//     quantity: 6,
//   },
//   {
//     product: {
//       id: 3,
//       name: "MacBook Pro",
//       image:
//         "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_16_2023_M2_Max/teaser.jpg",
//       description: "Sản phẩm do Apple sản xuất",
//       price: 2500,
//       inventory: 15, // số lượng hàng trong kho
//       rating: 5,
//     },
//     quantity: 2,
//   },
// ];

const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1; // không tìm thấy => index = -1
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity,
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case Types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case Types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    default:
      return [...state];
  }
};

var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default cart;
