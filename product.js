


const searchProduct = () => {
  fetch("https://saikat281.github.io/api2/output.json")
    .then(res => res.json())
    .then(data => showDetails(data))
}

searchProduct();

const showDetails = (products) => {
  const details = document.getElementById('display-card')
  products.forEach(element => {
    console.log(element)

    const div = document.createElement("div")

    div.innerHTML = `<div class="card bg-base-100 image-full w-96 h-130 shadow-sm  bg-linear-to-bl from-teal-400 to-teal-800 rounded-3xl">
  <div>
    <img class="mt-30 flex items-center"
      src="${element.image}"
      alt="Shoes" />
  </div>
  <div class="card-body">
  
    <h2 class="prod-details card-title text-white text-3xl">${element.title}</h2>
    <p class=" text-white opacity-90">${element.Description}</p>
    
    <div class="price-rating text-lg text-black font-bold">
      <p class="text-white ">PRICE: $<span>${element.price}</span></p>
      <p class="text-white">RATING: <span>${element.Rating}</span> </p>
    </div>
    <div class="card-actions justify-around mt-4">
     <button onclick="addToCart(${element.id},${element.price})" id="add-cart"class="btn bg-lime-300">Add to Cart</button>    
    </div>
      
    
  </div>
</div>
`
    details.appendChild(div)

  });
}

let count = 0;
const addToCart = (id, price) => {
  count = count + 1
  document.getElementById('t-products').innerHTML = count

  updatePrice(price)
  total_price()

}

const updatePrice = (price) => {
  const oldprice = parseFloat(document.getElementById('t-price').innerHTML)
  const new_price = oldprice + price
  document.getElementById('t-price').innerText = new_price.toFixed(2)

  DeliveyCharge(new_price)
  sp_discount(new_price)
}

const DeliveyCharge = (price) => {
  const d_charge = document.getElementById('d-charge')
   if (count >= 5 && count < 10) d_charge.innerHTML = 50
   else if (count >= 10 && count < 15) d_charge.innerHTML = 100
   else if (count >= 15 && count < 20) d_charge.innerHTML = 150
   else if (count >= 20) d_charge.innerHTML = 200
  
}

const sp_discount = (price) => {
  const SPdiscount = document.getElementById('sp-disc')

if (price >= 0 && price < 500) SPdiscount.innerHTML = 0;
  else if (price >= 500 && price < 1000) SPdiscount.innerHTML = 50;
  else if (price >= 1000 && price < 1500) SPdiscount.innerHTML = 100;
  else if (price >= 1500 && price < 2000) SPdiscount.innerHTML = 150;
  else SPdiscount.innerHTML = 200;
}
const total_price = () => {
  const price = parseFloat(document.getElementById('t-price').innerHTML)
  const D_charge = parseFloat(document.getElementById('d-charge').innerHTML)
  const sp_disc = parseFloat(document.getElementById('sp-disc').innerHTML)

  const final_price = (price + D_charge) - sp_disc

  document.getElementById('total-price').innerText = final_price.toFixed(2)
}

const order = () => {
  const total_price = document.getElementById('total-price').innerText
  const msg = document.getElementById('order-msg')
  msg.innerText = 'Your total Shopping: $' + total_price + '\n Thanks for Shopping:)'
}



















































function scrollSlider(id, direction) {
  const slider = document.getElementById(id);
  const width = slider.clientWidth;
  slider.scrollLeft += direction * width;
}