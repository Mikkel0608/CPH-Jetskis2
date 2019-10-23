window.onload = function getCustomerInfo() {
    var storedName = localStorage.getItem('customerName');
    var storedAddress = localStorage.getItem('address');
    var storedCity = localStorage.getItem('city');
    var storedPhone = localStorage.getItem('phone');
    var storedEmail = localStorage.getItem('email');

    document.getElementById('customerName').innerHTML=storedName;
    document.getElementById('customerAddress').innerHTML=storedAddress;
    document.getElementById('customerCity').innerHTML=storedCity;
    document.getElementById('customerPhone').innerHTML=storedPhone;
    document.getElementById('customerEmail').innerHTML=storedEmail;

    //checks if the user is logged in and redirects to loginpage if not (this is used if the user is linked directly to this page)
        if (localStorage.getItem('phone') == null) {
            window.location = "Loginpage.html"
        }
    //This part shows the logged in user in the navibar
    document.getElementById('loginPhone').innerHTML="Logget ind med ID: <br>" + localStorage.getItem('phone');

    //Inserts the order information from local storage
    var day = localStorage.getItem('storedDay');
    var month = localStorage.getItem('storedMonth');
    var year = localStorage.getItem('storedYear');
    document.getElementById('date').innerHTML ="Dato for udlejning: "+ day + "/" + month+"/"+year;
    document.getElementById('timePeriod').innerHTML ="Tidspunkt for udlejning: kl. " + localStorage.getItem('storedTimePeriod');
    document.getElementById('amountOfJetski1').innerHTML ="Antal Sea Doo Spark: " + localStorage.getItem('storedJetski1');
    document.getElementById('amountOfJetski2').innerHTML ="Antal Yamaha Waverunner VX: " + localStorage.getItem('storedJetski2');
    document.getElementById('amountOfJetski3').innerHTML ="Antal Kawasaki STX-15F: " + localStorage.getItem('storedJetski3');
    document.getElementById('orderPrice').innerHTML = "Samlet pris til betaling ved udlejning: " + localStorage.getItem('storedOrderPrice');
}


function deleteUser() {
    var choice = window.confirm("Er du sikker på, at du vil slette din bruger?");
    if (choice == true) {
        localStorage.clear();
        alert('Brugeren er blevet slettet');
        window.location = 'Loginpage.html';
    }
}

function checkLoginOrderPage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="orderPage.html"
    }
}

function checkLoginProfilePage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="profile.html"
    }
}