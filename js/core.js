const GenerateContent = class {
  //Properties
  fruits = {
    1: ["01", "graphes", "uvas", 4.95],
    2: ["02", "kiwis", "kiwis", 3.85],
    3:["03","melon","melon",5.15],
    4:["04","watermelon","sandia",4.55],
    5:["05","orange","naranja",3.67],
    6:["06","banana","platano",2.95],
    7:["07","pear","pera",2.95],
    8:["08","strawberries","fresas",3.15],
    9:["09","apple","manzana",1.95],
    
  };

  //Methods
  getYear = () => {
    let year = new Date();
    document.querySelector(".date").innerHTML += year.getFullYear();
  };
  //PRODUCE UN NUEVO PRODUCTO Y LO ALMACENA EN CARD EN FORMA DE STRING
  getProductFormat = () => {
    let product = `
    <div
          class="draggable card mb-4 shadow-sm"
          draggable="true"
          product-id="xxx"
        >
          <img src="./img/nnn.jpeg" 
          class="card-img-top" 
          alt="fruitName" draggable="false" />
          <div class="card-body">
          <h1 class="card-tittle pricing-card-title">
            yyy € <small class="text-muted">/ Kg</small>
          </h1>
        </div>
        <div class="d-grid gap-2">
          <button type="button" class="buttonFruit">Add to cart</button>
        </div>
        <div class="card-footer bg-info text-white">
          <h4 class="my-0 font-weight-normal">zzz</h4>
        </div>
      </div>
    </div>`;
    return product;
  };
  //GENERAR HTML A TRVES DEL STRING
  htmlToelements = (html) => {
    let card = document.createElement("template");
    html = html.trim();
    card.innerHTML = html;
    return card.content.firstElementChild;
  };

  //PASAR LO QUE HAY EN FRUITS A LA PÁGINA
  setPageContent = (fruits) => {
    let card = "";
    let productContainer = document.querySelector("#product-list");
    for (let productNumber in fruits) {
      card = this.getProductFormat();
      card = card.replace(/xxx/, fruits[productNumber][0]);
      card = card.replace(/nnn/, fruits[productNumber][0]);
      card = card.replace(/fruitName/, fruits[productNumber][1]);
      card = card.replace(/yyy/, fruits[productNumber][3]);
      card = card.replace(/zzz/, fruits[productNumber][1].trim());
      productContainer.appendChild(this.htmlToelements(card));
    }
  };
};

let obj = new GenerateContent();
obj.getYear();
obj.setPageContent(obj.fruits);
