
# HealthyMe.com 
Ecommerce website for health and fitness products , it is a clone of HealthKart.com , It serves as a virtual storefront where customers can browse, select, and purchase items conveniently from their computers or mobile devices.


## Tech Stack

**Client:** HTML,CSS, Javascript

**Server:** Node, Express , MongoDB


## Features 
-  Authentication
-  Payment-gateway-razorpay
-  API Validation
-  Buy product/Cart
-  Searching/sorting/filtering

## Frontend Part
- Home page
- Login/Signup
- Product page
- OAuth

## Backend Part
- Authentication using JWT
- Hashing the password using Bcrypt
- Mongoose - connecting the database
### Database - 
    - MongoDB



## API Reference

#### Register route

```http
  POST /api/register
```

#### Login route


```http
  POST /api/login
```

#### Add to Cart

```http
  POST /api/cart/:id/
```
```http
  DELETE /api/cart/:id/
```
```http
  PATCH /api/cart/:id/
```
```http
  GET /api/cart/:id/
```


#### Product route for admin

```http
  GET /api/product/:id/
```
```http
  DELETE /api/product/:id/
```
```http
  PATCH /api/product/:id/
```

#### For Pagination 

```http
  GET /api/product/paginate?page=3&limit=10
```
#### For Search 

```http
  GET /api/product/?serach="protein"
```

 ### 
`USERS DATA...`

    {"name":"harsh thakur",
    "email":"harsh@gmail.com",
    "password":"123456"  }


 ### 
`PRODUCT DATA...`

    {
         "image": "https://img5.hkrtcdn.com/16939/prd_1693894-MuscleBlaze-Chocolate-Peanut-Butter-0.340-kg-Crunchy_o.jpg",
         "description": "MuscleBlaze Chocolate Peanut Butter, 1 kg, Creamy",
         "category": "Peanut Butter",
         "rating": 4.6,
         "price": 180}


## Screenshots
![image](https://user-images.githubusercontent.com/109690823/223182773-0b4fbf6a-be2e-4506-afe7-5aeec790eab6.png)




