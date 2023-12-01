let submit_button2 = document.querySelector("#form2_data");

submit_button2.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.querySelector("#dee_email2").value;
  let firstName = document.querySelector("#dee_fname2").value;
  let lastName = document.querySelector("#dee_lname").value;
  let company = document.querySelector("#dee_company").value;
  let taxId = document.querySelector("#dee_taxID").value;
  let Address1 = document.querySelector("#dee_Address12").value;
  let Address2 = document.querySelector("#dee_Address22").value;
  let countryName = document.querySelector("#dee_country2").value;
  let city = document.querySelector("#dee_city2").value;
  let state = document.querySelector("#dee_state2").value;
  let Zipcode = document.querySelector("#dee_ZIP2").value;
  let Phone = document.querySelector("#dee_Phone2").value;

  if (
    email &&
    firstName &&
    Address1 &&
    Address2 &&
    countryName &&
    Phone &&
    lastName &&
    state &&
    city
  ) {
    let shipping_data = {
      email,
      firstName,
      Address1,
      Address2,
      countryName,
      Phone,
      lastName,
      state,
      city,
    };
    console.log(shipping_data);
    deliveryData(shipping_data);
    lsdata2.push(shipping_data);
    localStorage.setItem("shippingAddress2", JSON.stringify(lsdata2));
    console.log(shipping_data);
  } else {
    alert("Please Fill the Required details");
  }
});

// for the server Usage----------------------------------------
async function deliveryData(shipping_data) {
  console.log(shipping_data);

  try {
    let res = await fetch("https://nice-ruby-seahorse-belt.cyclic.app/api/address", {
      method: "POST",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shipping_data),
    });
    res = await res.json();
    if(res){
      alert(res.msg);
      window.location.href="../rzp-gateway.html"
    }
  } catch (error) {
    alert("Server error");
  }
}
