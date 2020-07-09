const bagBtn = document.querySelector(".bag-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const bagItems = document.querySelector(".bag-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".section-grid");
const sombrerosDOM = document.querySelector(".section-grid-two");

let cart = [];

let buttonsDOM = [];

class Products {
  async getProducts() {
    try {
      let result = await fetch("../json/productos.json");
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async getSombreros() {
    try {
      let result = await fetch("../json/sombreros.json");
      let data = await result.json();
      let sombreros = data.items;
      sombreros = sombreros.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return sombreros;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  diplayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
      <div class="section-producto">
      <a class="vestidos" href=""
        ><img src=${product.image} alt=""
      /></a>
      <h5 class="nombre">${product.title}</h5>
      <h6 class="precio">$${product.price}</h6>
      <a class="add-cart" data-id=${product.id} href="#"
        ><i class="fas fa-shopping-bag"></i>Agregar al bolso</a
      >
    </div>
      `;
    });
    productsDOM.innerHTML = result;
  }

  diplaySombreros(sombreros) {
    let result = "";
    sombreros.forEach((sombrero) => {
      result += `
      <div class="section-producto">
      <a class="sombreros" href=""
        ><img src=${sombrero.image} alt=""
      /></a>
      <h5 class="nombre">${sombrero.title}</h5>
      <h6 class="precio">$${sombrero.price}</h6>
      <a class="add-cart" data-id=${sombrero.id} href="#"
        ><i class="fas fa-shopping-bag"></i>Agregar al bolso</a
      >
    </div>
      `;
    });
    sombrerosDOM.innerHTML = result;
  }

  getAddCartButtons() {
    const buttons = [...document.querySelectorAll(".add-cart")];
    buttonsDOM = buttons;

    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        button.innerText = "En el bolso";
        button.disabled = true;
      }
      button.addEventListener("click", (event) => {
        event.target.innerText = "En el bolso";
        event.target.disabled = true;
        // get product from products
        let cartItem = { ...Storage.getProduct(id), amount: 1 };
        // add product to the cart
        cart = [...cart, cartItem];
        // save cart in local storage
        Storage.saveCart(cart);
        // set cart values
        this.setCartValues(cart);
        // display cart item
        this.addCartItem(cartItem);
        // show the cart
        this.showCart();
      });
    });
  }
  getAddCartButtonsTwo() {
    const buttons = [...document.querySelectorAll(".add-cart")];
    buttonsDOM = buttons;
    // console.log(buttonsDOM);

    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        button.innerText = "En el bolso";
        button.disabled = true;
      }
      button.addEventListener("click", (event) => {
        event.target.innerText = "En el bolso";
        event.target.disabled = true;
        // get product from products

        let cartItem = { ...Storage.getSombreros(id), amount: 1 };
        // add product to the cart
        cart = [...cart, cartItem];
        // save cart in local storage
        Storage.saveCart(cart);
        // set cart values
        this.setCartValues(cart);
        // display cart item
        this.addCartItem(cartItem);
        // show the cart
        this.showCart();
      });
    });
  }
  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.map((item) => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    bagItems.innerText = itemsTotal;
  }
  addCartItem(item) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
    <img src=${item.image} alt="" />
    <div>
      <h4>${item.title}</h4>
      <h5>$${item.price}</h5>
      <span class="remove-item" data-id=${item.id}>Quitar</span>
    </div>
    <div>
      <i class="fas fa-chevron-up" data-id=${item.id}></i>
      <p class="item-amount">${item.amount}</p>
      <i class="fas fa-chevron-down" data-id=${item.id}></i>
    </div>
    `;
    cartContent.appendChild(div);
  }
  showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
  }
  setupAPP() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populateCart(cart);
    bagBtn.addEventListener("click", this.showCart);
    closeCartBtn.addEventListener("click", this.hideCart);
  }
  populateCart(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }
  hideCart() {
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
  }
  cartLogic() {
    // clear cart button
    clearCartBtn.addEventListener("click", () => {
      // points to the ui to interact with cart
      this.clearCart();
    });
    // cart functionality
    cartContent.addEventListener("click", (events) => {
      if (event.target.classList.contains("remove-item")) {
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild(removeItem.parentElement.parentElement);
        this.removeItem(id);
      } else if (event.target.classList.contains("fa-chevron-up")) {
        let addAmount = event.target;
        let id = addAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        tempItem.amount = tempItem.amount + 1;
        Storage.saveCart(cart);
        this.setCartValues(cart);
        addAmount.nextElementSibling.innerText = tempItem.amount;
      } else if (event.target.classList.contains("fa-chevron-down")) {
        let lowerAmount = event.target;
        let id = lowerAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        tempItem.amount = tempItem.amount - 1;
        if (tempItem.amount > 0) {
          Storage.saveCart(cart);
          this.setCartValues(cart);
          lowerAmount.previousElementSibling.innerText = tempItem.amount;
        } else {
          cartContent.removeChild(lowerAmount.parentElement.parentElement);
          this.removeItem(id);
        }
      }
    });
  }
  clearCart() {
    let bagItems = cart.map((item) => item.id);
    bagItems.forEach((id) => this.removeItem(id));
    // console.log(cartContent.children);

    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
    this.hideCart();
  }
  removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    this.setCartValues(cart);
    Storage.saveCart(cart);
    let button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = `
       <a class="add-cart-two" href="#"
       ><i class="fas fa-shopping-bag"></i>Agregar al bolso</a
     >
       `;
    // button.innerText = "Agregar al bolso";
  }
  getSingleButton(id) {
    return buttonsDOM.find((button) => button.dataset.id === id);
  }
}

class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.id === id);
  }
  static saveSombreros(sombreros) {
    localStorage.setItem("sombreros", JSON.stringify(sombreros));
  }
  static getSombreros(id) {
    let sombreros = JSON.parse(localStorage.getItem("sombreros"));
    return sombreros.find((product) => product.id === id);
  }

  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  // setup app
  ui.setupAPP();

  // get all products
  products
    .getProducts()
    .then((products) => {
      ui.diplayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getAddCartButtons();
      ui.cartLogic();
    });

  products
    .getSombreros()
    .then((sombreros) => {
      ui.diplaySombreros(sombreros);
      Storage.saveSombreros(sombreros);
    })
    .then(() => {
      ui.getAddCartButtonsTwo();
      ui.cartLogic();
    });
});
