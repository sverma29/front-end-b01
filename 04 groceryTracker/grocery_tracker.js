let grocery_1_amt;
let grocery_2_amt;
let grocery_3_amt;

function calculateTotalAmount() {
    grocery_1_amt = parseFloat(document.getElementById('grocery_1').value);
    grocery_2_amt = parseFloat(document.getElementById('grocery_2').value);
    grocery_3_amt = parseFloat(document.getElementById('grocery_3').value);

    let totalAmount = grocery_1_amt + grocery_2_amt + grocery_3_amt;

 document.getElementById('result').innerText = `The total amount is: ${totalAmount}`;
}