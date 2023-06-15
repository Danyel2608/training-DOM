window.addEventListener("load", () => {
  let iconShoping = document.querySelector(".fa-basket-shopping");
  iconShoping.addEventListener("click", () => {
    let list = document.querySelector(".list");
    list.classList.toggle("box");
  });
  let addedToCart = new bootStrap.Modal(
    document.querySelector("#addedToCart"),
    {
      keyboard: false,
    }
  );
  let cartPursached = new bootStrap.Modal(
    document.querySelector("#cartPursache"),
    {
      keyboard: false,
    }
  );
  let alreadyAddedToCart = new bootStrap.Modal(
    document.querySelector("#alreadyAddedToCart"),
    {
      keyboard: false,
    }
  );
  //Add product to cart with buttons

  let addtoCartButtons = document.querySelectorAll(".cart-body");
  for (let index = 0; index < addtoCartButtons.length; index++) {
    let button = addtoCartButtons[index];
    button.addEventListener("click", (e) => {
      addToCartClicked(e);
    });
  }
  //Emptying cart
  document.querySelector("#empty-cart").addEventListener("click", () => {
    emptyCart();
  });
  //Simulating payment confirmation
  document.querySelector("#btn-pursache").addEventListener("click", () => {
    pursacheClicked();
  });
  //Stopping pulse effect
  document.querySelector("#cart").addEventListener("click", () => {
    iconShoping.classList.remove("hvr-pulse");
  });
  //Activate/Desactivate cart buttons
  const toogleshoppingControls = (enable) => {
    if (enable) {
      document.querySelector("#empty-cart").classList.remove("disabled");
      document.querySelector("#btn-pursache").classList.remove("disabled");
      document.querySelector("#btn-pursache").classList.add("hvr-pulse");
    } else {
      document.querySelector("#empty-cart").classList.add("disabled");
      document.querySelector("#btn-pursache").classList.add("disabled");
      document.querySelector("#btn-pursache").classList.remove("hvr-pulse");
    }
  };
  //Empty cart
  const emptyCart = () => {
    document.querySelector("tbody").innerHTML = "";
    //updateCartTotal()
    toogleshoppingControls(false);
  };

  //simulate pursache and show alert
  const pursacheClicked = () => {
    document.querySelector("tbody").innerHTML = "";
    //updateCartTotal()
    toogleshoppingControls(false);
    cartPursached.show();
    setTimeout(() => {
      cartPursached.hide();
    }, 2000);
  };

  //remove items from cart
  const removeCartItems = (e) => {
    let buttonClicked = e.target;
    let newRow = buttonClicked.parentNode.parentNode.getAttribute("row-number");
    document.querySelector(`#${newRow}`).remove();
    let numItemsAdded = document.querySelector("tbody").childElementCount;
    if (numItemsAdded == 0) {
      toogleshoppingControls(false);
    }
    //updateCartTotal()
  };
  //Adding item to cart after clicking cart button
  const addToCartClicked = (e) => {
    let buttonClicked = e.target;
    let shopItem = buttonClicked.parentNode.parentNode.parentNode;
    let productId = shopItem.getAttribute("product-id");
    let title = shopItem.firstElementChild.getAtributte("alt");
    let productName = shopItem.lastElementChild.firstElementChild.textContent;
    let productPrice = shopItem.children[1].firstElementChild.innerText.replace(
      "€/kg",
      ""
    );
    let imageSrc = shopItem.firstElementChild.src;
    addItemsToCart(productId, title, productName, price, imageSrc);
    // updateCartTotal();
  };
  //Generate new row for cart
  const addItemsToCart = (productId, title, productName, price, imageSrc) => {
    let cartItems = document.querySelectorAll("tr");
    for (let index = 0; index < cartItems.length; index++) {
      if (cartItems[index].getAttribute("id") == productId) {
        alreadyAddedToCart.show();
        setTimeout(() => {
          alreadyAddedToCart.hide();
        }, 2500);
        return;
      }
    }
    let rowId = "row-number-" + productId;
    let cartRow = document.createElement("tr");
    cartRow.setAttribute("id", rowId);
    let itemsAdded = cartItems.length;
    letCartRowContents = `<th scope=row>${itemsAdded}</th>
    <td>
    <div class="card border-success mb-3 text-center">
        <div class="card-body text-success">
            <img src="${imageSrc}" alt="${tittle}" class="img-thumbnail">
            </div>
            <div class="card-footer bg-transparent border-success">${productName}</div>
            </div>
    </td>
    <td>
        <h4 class="card-tittle pricing-card-title text-center">${price} €<small class="text-muted">/kg</small></h4>
    </td>
    <td>
            <div class="row">
            <div class="d-flex justify-content-center quantity col-12 col-md-6">
                <input class="form-control rounded-sm text-dark border-info" type="number" min="1" max="10" step="1" value="1" row-number="${rowId}">
                <div class="quantity-nav">
                    <div class="quantity-button quantity-up border-info">
                        <i class="fa-solid fa-circle-arrow-up text-warning"></i>
                    </div>
                    <div class="quantity-button quantity-up border-info">
                        <i class="fa-solid fa-circle-arrow-down text-warning"></i>
                    </div>
                </div>
            </div>
            <div class="text-center col-12 col-md-6">
                <button type="button" class="btn btn-link text-danger mt-2" row-number=${rowId}">
                    <span>
                        <i class="fa-solid fa-circle-xmark"></i>
                    </span>
                </button>
            </div>
        </div>
    </td> `;
  };

  //Cierre del addEventListener
});
