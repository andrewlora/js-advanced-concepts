// Amazon shopping

// Implement a cart feature:
// 1. Add items to the cart
// 2. Add 3% tax to item in the cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

const amazonHistory = [];

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

const pipe =
  (f, g) =>
  (...args) =>
    g(f(...args));

// console.log(
//   "purchaseItem",
//   purchaseItem(
//     emptyCart,
//     buyItem,
//     applyTaxToItems,
//     addItemToCart
//   )(user, { name: "Laptop", price: 344 })
// );

let preparePurchase = purchaseItem(
  addItemToCart,
  applyTaxToItems,
  buyItem,
  emptyCart
);
console.log("preparePurchase", preparePurchase);
console.log(
  "run preparePurchase",
  preparePurchase(user, { name: "Laptop", price: 344 })
);

function purchaseItem(...fns) {
  return fns.reduce(pipe);
}
// function purchaseItem(...fns) {
//   return fns.reduce(compose);
// }

function addItemToCart(user, item) {
  amazonHistory.push(user);
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
  amazonHistory.push(user);
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { cart: [] });
}

function refundItem(user, item) {
  amazonHistory.push(
    Object.assign({}, user, { cart: user.cart, purchases: user.purchases })
  );
  const { purchases } = user;
  const refundItem = purchases.splice(item);
  return Object.assign({}, user, { purchases: refundItem });
}

refundItem(user, { name: "laptop", price: 200 });

console.log("amazon history", amazonHistory);
