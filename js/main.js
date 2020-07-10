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
const mochilasDOM = document.querySelector(".section-grid-three");
const carterasDOM = document.querySelector(".section-grid-four");
const faldasDOM = document.querySelector(".section-grid-five");
const calzadoDOM = document.querySelector(".section-grid-six");
const accesoriosDOM = document.querySelector(".section-grid-seven");
const camisasDOM = document.querySelector(".section-grid-eight");
const mediasDOM = document.querySelector(".section-grid-nine");

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
        const path = item.fields.path.fields.file.url;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, path, image };
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
        const path = item.fields.path.fields.file.url;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, path, image };
      });
      return sombreros;
    } catch (error) {
      console.log(error);
    }
  }
  async getMochilas() {
    try {
      let result = await fetch("../json/mochilas.json");
      let data = await result.json();
      let mochilas = data.items;
      mochilas = mochilas.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const path = item.fields.path.fields.file.url;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, path, image };
      });
      return mochilas;
    } catch (error) {
      console.log(error);
    }
  }
  async getCarteras() {
    try {
      let result = await fetch("../json/carteras.json");
      let data = await result.json();
      let carteras = data.items;
      carteras = carteras.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const path = item.fields.path.fields.file.url;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, path, image };
      });
      return carteras;
    } catch (error) {
      console.log(error);
    }
  }
  async getFaldas() {
    try {
      let result = await fetch("../json/faldas.json");
      let data = await result.json();
      let faldas = data.items;
      faldas = faldas.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const path = item.fields.path.fields.file.url;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, path, image };
      });
      return faldas;
    } catch (error) {
      console.log(error);
    }
  }
  async getCalzado() {
    try {
      let result = await fetch("../json/calzado.json");
      let data = await result.json();
      let calzado = data.items;
      calzado = calzado.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const path = item.fields.path.fields.file.url;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, path, image };
      });
      return calzado;
    } catch (error) {
      console.log(error);
    }
  }
  async getAccesorios() {
    try {
      let result = await fetch("../json/accesorios.json");
      let data = await result.json();
      let accesorios = data.items;
      accesorios = accesorios.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const path = item.fields.path.fields.file.url;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, path, image };
      });
      return accesorios;
    } catch (error) {
      console.log(error);
    }
  }
  async getCamisas() {
    try {
      let result = await fetch("../json/camisas.json");
      let data = await result.json();
      let camisas = data.items;
      camisas = camisas.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const path = item.fields.path.fields.file.url;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, path, image };
      });
      return camisas;
    } catch (error) {
      console.log(error);
    }
  }
  async getMedias() {
    try {
      let result = await fetch("../json/medias.json");
      let data = await result.json();
      let medias = data.items;
      medias = medias.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const path = item.fields.path.fields.file.url;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, path, image };
      });
      return medias;
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
      <a class="vestidos" href="${product.path}"
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
      <a class="sombreros" href="${sombrero.path}"
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

  diplayMochilas(mochilas) {
    let result = "";
    mochilas.forEach((mochila) => {
      result += `
      <div class="section-producto">
      <a class="mochilas" href="${mochila.path}"
        ><img src=${mochila.image} alt=""
      /></a>
      <h5 class="nombre">${mochila.title}</h5>
      <h6 class="precio">$${mochila.price}</h6>
      <a class="add-cart" data-id=${mochila.id} href="#"
        ><i class="fas fa-shopping-bag"></i>Agregar al bolso</a
      >
    </div>
      `;
    });
    mochilasDOM.innerHTML = result;
  }

  diplayCarteras(carteras) {
    let result = "";
    carteras.forEach((cartera) => {
      result += `
      <div class="section-producto">
      <a class="carteras" href="${cartera.path}"
        ><img src=${cartera.image} alt=""
      /></a>
      <h5 class="nombre">${cartera.title}</h5>
      <h6 class="precio">$${cartera.price}</h6>
      <a class="add-cart" data-id=${cartera.id} href="#"
        ><i class="fas fa-shopping-bag"></i>Agregar al bolso</a
      >
    </div>
      `;
    });
    carterasDOM.innerHTML = result;
  }

  diplayFaldas(faldas) {
    let result = "";
    faldas.forEach((falda) => {
      result += `
      <div class="section-producto">
      <a class="faldas" href="${falda.path}"
        ><img src=${falda.image} alt=""
      /></a>
      <h5 class="nombre">${falda.title}</h5>
      <h6 class="precio">$${falda.price}</h6>
      <a class="add-cart" data-id=${falda.id} href="#"
        ><i class="fas fa-shopping-bag"></i>Agregar al bolso</a
      >
    </div>
      `;
    });
    faldasDOM.innerHTML = result;
  }

  diplayCalzado(calzado) {
    let result = "";
    calzado.forEach((calzadoinv) => {
      result += `
      <div class="section-producto">
      <a class="calzado" href="${calzadoinv.path}"
        ><img src=${calzadoinv.image} alt=""
      /></a>
      <h5 class="nombre">${calzadoinv.title}</h5>
      <h6 class="precio">$${calzadoinv.price}</h6>
      <a class="add-cart" data-id=${calzadoinv.id} href="#"
        ><i class="fas fa-shopping-bag"></i>Agregar al bolso</a
      >
    </div>
      `;
    });
    calzadoDOM.innerHTML = result;
  }

  diplayAccesorios(accesorios) {
    let result = "";
    accesorios.forEach((accesorio) => {
      result += `
      <div class="section-producto">
      <a class="accesorios" href="${accesorio.path}"
        ><img src=${accesorio.image} alt=""
      /></a>
      <h5 class="nombre">${accesorio.title}</h5>
      <h6 class="precio">$${accesorio.price}</h6>
      <a class="add-cart" data-id=${accesorio.id} href="#"
        ><i class="fas fa-shopping-bag"></i>Agregar al bolso</a
      >
    </div>
      `;
    });
    accesoriosDOM.innerHTML = result;
  }

  diplayCamisas(camisas) {
    let result = "";
    camisas.forEach((camisa) => {
      result += `
      <div class="section-producto">
      <a class="camisas" href="${camisa.path}"
        ><img src=${camisa.image} alt=""
      /></a>
      <h5 class="nombre">${camisa.title}</h5>
      <h6 class="precio">$${camisa.price}</h6>
      <a class="add-cart" data-id=${camisa.id} href="#"
        ><i class="fas fa-shopping-bag"></i>Agregar al bolso</a
      >
    </div>
      `;
    });
    camisasDOM.innerHTML = result;
  }

  diplayMedias(medias) {
    let result = "";
    medias.forEach((media) => {
      result += `
      <div class="section-producto">
      <a class="medias" href="${media.path}"
        ><img src=${media.image} alt=""
      /></a>
      <h5 class="nombre">${media.title}</h5>
      <h6 class="precio">$${media.price}</h6>
      <a class="add-cart" data-id=${media.id} href="#"
        ><i class="fas fa-shopping-bag"></i>Agregar al bolso</a
      >
    </div>
      `;
    });
    mediasDOM.innerHTML = result;
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
  getAddCartButtonsThree() {
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

        let cartItem = { ...Storage.getMochilas(id), amount: 1 };
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
  getAddCartButtonsFour() {
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

        let cartItem = { ...Storage.getCarteras(id), amount: 1 };
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
  getAddCartButtonsFive() {
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

        let cartItem = { ...Storage.getFaldas(id), amount: 1 };
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
  getAddCartButtonsSix() {
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

        let cartItem = { ...Storage.getCalzado(id), amount: 1 };
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
  getAddCartButtonsSeven() {
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

        let cartItem = { ...Storage.getAccesorios(id), amount: 1 };
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
  getAddCartButtonsEight() {
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

        let cartItem = { ...Storage.getCamisas(id), amount: 1 };
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
  getAddCartButtonsNine() {
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

        let cartItem = { ...Storage.getMedias(id), amount: 1 };
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
  static saveMochilas(mochilas) {
    localStorage.setItem("mochilas", JSON.stringify(mochilas));
  }
  static getMochilas(id) {
    let mochilas = JSON.parse(localStorage.getItem("mochilas"));
    return mochilas.find((product) => product.id === id);
  }
  static saveCarteras(carteras) {
    localStorage.setItem("carteras", JSON.stringify(carteras));
  }
  static getCarteras(id) {
    let carteras = JSON.parse(localStorage.getItem("carteras"));
    return carteras.find((product) => product.id === id);
  }
  static saveFaldas(faldas) {
    localStorage.setItem("faldas", JSON.stringify(faldas));
  }
  static getFaldas(id) {
    let faldas = JSON.parse(localStorage.getItem("faldas"));
    return faldas.find((product) => product.id === id);
  }
  static saveCalzado(calzado) {
    localStorage.setItem("calzado", JSON.stringify(calzado));
  }
  static getCalzado(id) {
    let calzado = JSON.parse(localStorage.getItem("calzado"));
    return calzado.find((product) => product.id === id);
  }
  static saveAccesorios(accesorios) {
    localStorage.setItem("accesorios", JSON.stringify(accesorios));
  }
  static getAccesorios(id) {
    let accesorios = JSON.parse(localStorage.getItem("accesorios"));
    return accesorios.find((product) => product.id === id);
  }
  static saveCamisas(camisas) {
    localStorage.setItem("camisas", JSON.stringify(camisas));
  }
  static getCamisas(id) {
    let camisas = JSON.parse(localStorage.getItem("camisas"));
    return camisas.find((product) => product.id === id);
  }
  static saveMedias(medias) {
    localStorage.setItem("medias", JSON.stringify(medias));
  }
  static getMedias(id) {
    let medias = JSON.parse(localStorage.getItem("medias"));
    return medias.find((product) => product.id === id);
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

  products
    .getMochilas()
    .then((mochilas) => {
      ui.diplayMochilas(mochilas);
      Storage.saveMochilas(mochilas);
    })
    .then(() => {
      ui.getAddCartButtonsThree();
      ui.cartLogic();
    });

  products
    .getCarteras()
    .then((carteras) => {
      ui.diplayCarteras(carteras);
      Storage.saveCarteras(carteras);
    })
    .then(() => {
      ui.getAddCartButtonsFour();
      ui.cartLogic();
    });

  products
    .getFaldas()
    .then((faldas) => {
      ui.diplayFaldas(faldas);
      Storage.saveFaldas(faldas);
    })
    .then(() => {
      ui.getAddCartButtonsFive();
      ui.cartLogic();
    });

  products
    .getCalzado()
    .then((calzado) => {
      ui.diplayCalzado(calzado);
      Storage.saveCalzado(calzado);
    })
    .then(() => {
      ui.getAddCartButtonsSix();
      ui.cartLogic();
    });

  products
    .getAccesorios()
    .then((accesorios) => {
      ui.diplayAccesorios(accesorios);
      Storage.saveAccesorios(accesorios);
    })
    .then(() => {
      ui.getAddCartButtonsSeven();
      ui.cartLogic();
    });

  products
    .getCamisas()
    .then((camisas) => {
      ui.diplayCamisas(camisas);
      Storage.saveCamisas(camisas);
    })
    .then(() => {
      ui.getAddCartButtonsEight();
      ui.cartLogic();
    });

  products
    .getMedias()
    .then((medias) => {
      ui.diplayMedias(medias);
      Storage.saveMedias(medias);
    })
    .then(() => {
      ui.getAddCartButtonsNine();
      ui.cartLogic();
    });
});
