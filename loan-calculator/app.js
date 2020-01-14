//listen for submit

document.getElementById('loan-form').addEventListener('submit', function(e){
//hide results (in case second time calcing)
document.getElementById('results').style.display = 'none';
//show loader
document.getElementById('loading').style.display = 'block';
//ket is spin for 2 secs
setTimeout(calculateResults, 2000);

e.preventDefault();
});

//calc results 
function calculateResults() {

    //UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    
    // calculate monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        //show results and hide the spinner
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('please check your numbers')
    }
}

//show error

function showError(error) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    //create div
    const errorDiv = document.createElement('div');
    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //add classes
    errorDiv.className = 'alert alert-danger';
    //create the text nide and append
    errorDiv.appendChild(document.createTextNode(error));
    //insert error above the heading
    card.insertBefore(errorDiv, heading);

    //clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}