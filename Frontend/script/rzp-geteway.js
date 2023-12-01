let amount = localStorage.getItem("amount");
let receipt = Math.random(3000)+"helhyme#"
let obj = {
  "amount":"4000",
  "currency": "INR",
  "receipt": receipt,
  "notes":{
      "description":"Thank you for shopping healthy me",
      "product":"Milk Powder",
      "refundable":"Within 7 days"
  }
}

async function rezorPay(){
 let res = await fetch("http://localhost:9000/createOrder",{
  method: "POST",
  headers:{
    "Content-Type": "application/json"
  },
  body:JSON.stringify(obj)
 })
 res = await res.json();
 if(res){
  localStorage.setItem("order_id",JSON.stringify(res.id))
 }else{
  alert("Server error try after some time ..")
 }
 console.log(res);
}