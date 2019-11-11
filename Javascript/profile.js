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


function logOut(){
    localStorage.removeItem("customerName");
    localStorage.removeItem("address");
    localStorage.removeItem("city");
    localStorage.removeItem("phone");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
}

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

        /*
    //Inserts the order information from local storage
    if (localStorage.getItem('orderPrice') == null) {
        document.getElementById('timePeriod').innerHTML ="Ingen aktive ordrer på nuværende tidspunkt";
        } else {

    var day = localStorage.getItem('orderDay');
    var month = localStorage.getItem('orderMonth');
    var year = localStorage.getItem('orderYear');
    document.getElementById('date').innerHTML ="Dato for udlejning: "+ day + "/" + month+"/"+year;
    document.getElementById('timePeriod').innerHTML ="Tidspunkt for udlejning: kl. " + localStorage.getItem('timePeriod');
    document.getElementById('amountOfJetski1').innerHTML ="Antal Sea Doo Spark: " + localStorage.getItem('amount1');
    document.getElementById('amountOfJetski2').innerHTML ="Antal Yamaha Waverunner VX: " + localStorage.getItem('amount2');
    document.getElementById('amountOfJetski3').innerHTML ="Antal Kawasaki STX-15F: " + localStorage.getItem('amount3');
    document.getElementById('orderPrice').innerHTML = "Samlet pris til betaling ved udlejning: " + localStorage.getItem('orderPrice');

    }

         */
    var orderAmount = JSON.parse(localStorage.getItem('orderArray')).length;
    var orderArray = JSON.parse(localStorage.getItem('orderArray'));

    //The following loop goes through all the stored orders, and creates an HTML <p> with the order info if the logged in phone matches the order's phone value
    var i;
    for (i = 0; i <= orderAmount; i++) {
        if (localStorage.getItem('phone') == orderArray[i].phone) {
            var day = orderArray[i].orderDay;
            var month = orderArray[i].orderMonth;
            var year = orderArray[i].orderYear;
            var timePeriod = orderArray[i].timePeriod;
            var amount1 = orderArray[i].amount1;
            var amount2 = orderArray[i].amount2;
            var amount3 = orderArray[i].amount3;
            var orderPrice = orderArray[i].orderPrice;

            // the userInfo is created as an array, as we want to dynamically create new variable names with userInfo[i] for each order the user has.
            var orderInfo = [];
            //for each order the user has, a new <p> is created in the orderList, with the order info
            orderInfo[i] = document.createElement("P");
            orderInfo[i].innerHTML ="Dato for udlejning: "+ day + "/" + month + "/" + year + "</br></br>" + "Tidspunkt for udlejning: kl." + timePeriod + "</br></br>" + "Antal Sea Doo Spark: " + amount1 + "</br></br>" + "Antal Yamaha Waverunner VX: " + amount2 + "</br></br>" + "Antal Kawasaki STX-15F: " + amount3 + "</br></br>" + "Samlet pris til betaling ved udlejning: " + orderPrice + "</br></br>";
            document.getElementById('orderList').appendChild(orderInfo[i]);
            //The following line removes the "no curent orders" text
            document.getElementById('noOrders').innerHTML = "";
        }
    }

}


/*function deleteUser() {
    var choice = window.confirm("Er du sikker på, at du vil slette din bruger?");
    if (choice == true) {
        localStorage.clear();
        alert('Brugeren er blevet slettet');
        window.location = 'Loginpage.html';
    }
}
*/
//MD: This function deletes the current order stored in localStorage
/*function deleteOrder(){
    var choice = window.confirm("Er du sikker på, at du vil annullere din bestilling?");
    if (choice == true) {

        localStorage.removeItem("amount1");
        localStorage.removeItem("amount2");
        localStorage.removeItem("amount3");
        localStorage.removeItem("orderDay");
        localStorage.removeItem("orderMonth");
        localStorage.removeItem("orderYear");
        localStorage.removeItem("timePeriod");
        localStorage.removeItem("orderPrice");

        alert("Bestillingen er blevet aflyst");
        window.location = "profile.html";
    }
}
*/


function deleteUser() {
    var userArray = JSON.parse(localStorage.getItem("userArray"));
    var orderArray = JSON.parse(localStorage.getItem("orderArray"));

    for (var i = 0; i <= userArray.length; i++) {
        if (localStorage.getItem("phone") == userArray[i].phone) {
            window.location = 'Loginpage.html';
            userArray.splice(i, 1);

            var userArrayString = JSON.stringify(userArray);
            localStorage.setItem('userArray', userArrayString);

            //Kan kun fjerne én ordre
            for (var i = 0; i <= orderArray.length; i++) {
                if (localStorage.getItem("phone") == orderArray[i].phone) {
                    orderArray.splice(i, 1);

                    var orderArrayString = JSON.stringify(orderArray);
                    localStorage.setItem("orderArray", orderArrayString);
                    logOut();
                    alert("Bruger er blevet slettet");
                }
            }
        }
    }
}







