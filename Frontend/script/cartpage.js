// for the sorting of low to high --------------------------------

const baseURL = "https://nice-ruby-seahorse-belt.cyclic.app";

// localhost:9000/api/products/search?category=why
// CommonJS
var Low_to_high = document.querySelector("#Productsort");

async function data(baseURL) {
  let data = await fetch(`${baseURL}/api/products`);
  // let data = await fetch(`http://localhost:9000/api/products`);
  let res = await data.json();
  render(res.product);
  console.log(res);
  pageTotal(res.product.length);
}
data(baseURL);

async function render(res) {
  let datarender = document.querySelector("#firstdiv");
  datarender.innerHTML = res
    .map((item) => {
      return `
      <div class="cartmain">
          <img id="proimage" width="100%" src="${item.image}" alt="onediv">
      <div class="divtwo">
          <div id="rating greenicon">
              <h6>Rating⭐${item.rating}</h6>          
          </div>
          <h6>${item.description}</h6>
          <span> <b>₹${item.price}     <s id="str">${
        item.price * 2
      }</s></b> </span>
          <button  class="addtocart" id="${item._id}" >Add to cart          
          </button>
      </div>
      </div>
      `;
    })
    .join(" ");

  // -------------------------------------btn handles--------------------------->
  let buttons = document.querySelectorAll(".addtocart");
  for (btn of buttons) {
    btn.addEventListener(
      "click",
      (onClick = async (event) => {
        console.log(event.target.id);
        addToCart(event.target.id);
      })
    );
  }
}

// add to cart functionality-----------------------------------------------------------------
console.log(JSON.parse(localStorage.getItem("token"))); //check

async function addToCart(id) {
  try {
    let res = await fetch(`${baseURL}/api/cart/${id}`, {
      method: "POST",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
    // alert(data.msg);
    swal(data.msg);
  } catch (error) {
    console.log(error);
  }
}
// ---------------------------Search functionality-----------------------------------------------------------

async function search() {
  let searchInput = document.getElementById("search-value").value;
  console.log(searchInput);
  let data = await fetch(`${baseURL}/api/products`);

  data = await data.json();
  console.log(data.product, "data");
  let res = data.product.filter((item) => {
    return item.description
      .toLowerCase()
      .includes(searchInput.toLocaleLowerCase());
  });
  console.log(res);
  // if(res.length==0){
  //  return alert("Not found any related product..")
  // }
  render(res);
  if (searchInput == "") {
    render(data);
  }
}

// create pagination buttons dynamically -------------------------------------------------------
function pageTotal(page) {
  let newpage = Math.floor(page / 5);
  let arr = new Array(newpage);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
  }
  console.log(arr);
  applyPage(arr);
}
// ------------------------------------------------------------------------------------------------

async function applyPage(arr) {
  document.querySelector(".buttonsdiv").innerHTML = arr
    .map((item, i) => {
      return `
        <button id="${item}" class="selectpage">${item}</button>
        `;
    })
    .join("");
  let btn = document.querySelectorAll(".selectpage");
  for (let buttons of btn) {
    buttons.addEventListener("click", (e) => {
      // console.log(e.target.id);
      dataforPagination(e.target.id);
    });
  }
}

// ------------------------------------------------------------------------------
// url--->> `${baseURL}/products/paginate?page=${id}&limit=10`,
// Pagination feature here ;

async function dataforPagination(id) {
  let data = await fetch(
    `${baseURL}/api/products/paginate?page=${id}&limit=10`
  );
  let res = await data.json();
  render(res.product);
}

// ---------------------------------------------------------------------------------
//serach inpu

// ----------------------------------------------------------------------------
// sort selection functionality -----------------------------------------------

var options = document.getElementsByName("options");

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", async function () {
    var selectedValue = this.value;
    console.log(selectedValue);
    let data = await fetch(`${baseURL}/api/products?sort=${selectedValue}`);
    let res = await data.json();
    render(res.product);
  });
}

// discount selection functionality---------------------------------------------

var discount_options = document.getElementsByName("discount_options");
for (var i = 0; i < discount_options.length; i++) {
  discount_options[i].addEventListener("click", async function () {
    var selectedValue = this.value;
    console.log(selectedValue);
    let data = await fetch(`${baseURL}/api/products?discount=${selectedValue}`);
    let res = await data.json();
    render(res.product);
  });
}

// -----------------------------------------------------------------------------------
// category selection functionality
let category = document.getElementById("category");
category.addEventListener("click", async (e) => {
  let input = e.target.value;
  let data = await fetch(`${baseURL}/api/products?category=${input}`);
  let res = await data.json();
  render(res.product);
});

// let inputVal = JSON.parse(localStorage.getItem("searchInput"))
// if(inputVal){
//   searchData(inputVal)
// }else{
//   localStorage.clear("searchInput")
//   location.reload();
// }
// async function searchData(id) {
//   let data = await fetch(`${baseURL}/products/search?category=${id}`);
//   let res = await data.json();
//   console.log(res.product);
//   render(res.product);
// }
