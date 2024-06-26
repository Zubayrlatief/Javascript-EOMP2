//footer
document.querySelector('#currYear').textContent = new Date().getFullYear()

// local storage
let cart = JSON.parse(localStorage.getItem('checkout'));
let checkoutTable = document.querySelector('[table-checkout]')
function cartItems(){
    try{
        let cartProducts = Object.groupBy(cart, item => { return item.id});
        for(let i in cartProducts) {
            checkoutTable.innerHTML += `
            <tr>
                <td>${cartProducts[i][0].name}</td>
                <td>${cartProducts[i].length}</td>
                <td>${cartProducts[i][0].amount}</td>
                <td>${eval(`${cartProducts[i][0].amount} * ${cartProducts[i].length}`)}</td>
            </tr>
         `
    }
    }catch(e){
        checkoutTable.innerHTML = "Add items to your cart"
    }
}
cartItems()

// fucntion to clear pay
document.getElementById('clear').addEventListener('click', clearProducts)
function clearProducts(){
    location.reload()
    localStorage.removeItem('checkout')
    alert('Press "OK" to remove items from your cart')
}
// function for payments
document.getElementById('pay').addEventListener('click' , productPayment)
function productPayment(){
    location.reload()
    localStorage.removeItem('checkout')
    alert('Payment Successful')
}