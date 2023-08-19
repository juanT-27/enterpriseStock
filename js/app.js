class Product {
  constructor(pName, cost, price, units, category) {
    this.pName = pName;
    this.cost = cost;
    this.price = price;
    this.units = units;
    this.category = category;
    this.total = this.totalProfit();
  }

  profitMade() {
    let total = this.price - this.cost;
    return total;
  }

  totalProfit() {
    let purchaseMade = this.profitMade();
    let totalProfitDone = purchaseMade * this.units;
    return totalProfitDone;
  }
}

let formToAdd = document.querySelector("#addProduct");

class UiStock {
  constructor() {
    this.productsArray = [];
    this.notebooksContainer= document.querySelector(".notebook")
    this.accesoriesContainer= document.querySelector(".accesories")
    this.officeContainer= document.querySelector(".office")
  }

  validateInputs(e){
 
    this.productName = document.querySelector(".name").value;
    this.cost = document.querySelector(`.cost`).value;
    this.price = document.querySelector(`.sale`).value;
    this.units = document.querySelector(`.units`).value;
    this.category = document.querySelector(`.category`).value;

    if(this.productName ==="" || this.cost=== "" || this.price === "" || this.units===""){
      alert("Ningun valor puede estar vacío")
    } else{
      this.pushProduct(this.productName, this.cost, this.price, this.units, this.category)
    }

    e.target.reset()
  }

  pushProduct(pName, cost, price, units, category) {
  

    let newProduct = new Product(
      pName, 
      cost,
      price, 
      units,
     category
    );

    this.productsArray.push(newProduct);
    console.log(this.productsArray)
  }

  

  createCard(){
   this.$template= document.getElementById("productTemplate").content
   
    this.$fragment= document.createDocumentFragment()
    this.notebooksContainer.innerHTML= ""
    
    this.accesoriesContainer.innerHTML = "";
    this.officeContainer.innerHTML = "";

    this.productsArray.forEach((element)=>{
      
      this.$template.querySelector(".card-title").textContent= element.pName;
      this.$template.querySelector(".cost").textContent= "Costo de producción: " + element.cost;
      this.$template.querySelector(".price").textContent= "Precio de venta " + element.price;
      this.$template.querySelector(".units").textContent= "Unidades disponibles " + element.units;
      
      let deleteBtn= this.$template.querySelector(".deleteBtn")
      deleteBtn.setAttribute("data-product", element.pName)

      // this.editBtn= this.$template.querySelector("editBtn")

      let editProductBtn= this.$template.querySelector(".editBtn")
      editProductBtn.setAttribute("data-edit", element.pName)
      editProductBtn.setAttribute("data-bs-toggle", "modal")
      editProductBtn.setAttribute("data-bs-target", "#addProduct")
      
      let $clone = document.importNode(this.$template, true);
      this.$fragment.appendChild($clone);

      this.renderCard(element.category, this.$fragment)

     
    })
  }

  

  renderCard(category, frag){
    if(category==="1"){
      this.notebooksContainer.appendChild(frag)
    }else if(category==="2"){
      this.accesoriesContainer.appendChild(frag)
    } else if(category==="3"){
      this.officeContainer.appendChild(frag)
    }
  }

  deleteProduct(dataAtt){
    let productTodelete= this.productsArray.findIndex((el)=> el.pName === dataAtt )
    if(productTodelete!== -1){
    this.productsArray.splice(productTodelete, 1)
    console.log(this.productsArray)
    }
    this.createCard()
  }

  editForm(data){
    let object= this.productsArray.find((el)=>el.pName === data)
    let objectIndex= this.productsArray.find((el)=> el.pName=== data)
  
    this.productName = document.querySelector(".name").value = object.pName;
    this.cost = document.querySelector(`.cost`).value= object.cost;
    this.price = document.querySelector(`.sale`).value= object.price;
    this.units = document.querySelector(`.units`).value= object.units;
    this.category = document.querySelector(`.category`).value= object.category;
    
    this.productsArray.splice(objectIndex, 1)
    
  }
}

let UiStockmanager = new UiStock();



formToAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  UiStockmanager.validateInputs(e);
  UiStockmanager.createCard();
  
});

document.addEventListener("click", (e)=>{
if(e.target.classList.contains("deleteBtn")){
  let deleteBtn= e.target
  let data= deleteBtn.getAttribute("data-product")
  UiStockmanager.deleteProduct(data)
}

if(e.target.classList.contains("editBtn")){
    let editBtn= e.target;
    let data= editBtn.getAttribute("data-edit")
    UiStockmanager.editForm(data)
}

})



