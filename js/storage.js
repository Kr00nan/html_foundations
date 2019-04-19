window.onload = function() {
    // check for LocalStorage support
    if (localStorage) {
        // populate existing data into form fields
        populateForm();
        
        // event listener for when the bookings form is submitted
        const form = document.getElementById('bookingsForm');
        form.addEventListener('submit', function(e) {
            saveData();
        })
    }
}

function saveData() {
    // fetch the input elements
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    // store the values
    localStorage.setItem('name', name.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('email', email.value);
}

// attempt to populate the form using data stored in LocalStorage
function populateForm() {
    // fetch the input elements
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    // retrieve the saved data and update the values of the form fields
    if (localStorage.getItem('name') != null) {
        name.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('phone') != null) {
        phone.value = localStorage.getItem('phone');
    }
    if (localStorage.getItem('email') != null) {
        email.value = localStorage.getItem('email');
    }
}