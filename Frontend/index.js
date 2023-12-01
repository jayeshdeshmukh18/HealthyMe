
const baseURL = "https://nice-ruby-seahorse-belt.cyclic.app"


//---------------------------------------------------------------------------------


async function search2() {
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
  // render(res);
  // if (searchInput == "") {
  //   render(data);
  // }
}


// ---------------------------------------------------------------------------------------


checkURL();
async function checkURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramEmail = urlParams.get("email");
  const paramFirst_Name = urlParams.get("name");
  const get_token = urlParams.get("token");
  if (get_token && paramFirst_Name && paramEmail) {
    localStorage.setItem("token", JSON.stringify(get_token));
    localStorage.setItem("name", JSON.stringify(paramFirst_Name));
    localStorage.setItem("email", JSON.stringify(paramEmail));
    // localStorage.setItem("last_name", JSON.stringify(paramLast_Name));
  }
}
