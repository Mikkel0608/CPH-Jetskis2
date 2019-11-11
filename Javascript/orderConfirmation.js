window.onload = function getOrderInfo() {
    //Inserts the user ID in the navibar
    document.getElementById('loginPhone').innerHTML="Logget ind med ID: <br>" + localStorage.getItem('phone');
    //Inserts the order information on the order confirmation
    var orderArray = JSON.parse(localStorage.getItem('orderArray'));
    var orderAmount = JSON.parse(localStorage.getItem('orderArray')).length;

    var day = orderArray[orderAmount-1].orderDay;
    var month = orderArray[orderAmount-1].orderMonth;
    var year = orderArray[orderAmount-1].orderYear;
    var timePeriod = orderArray[orderAmount-1].timePeriod;
    var amount1 = orderArray[orderAmount-1].amount1;
    var amount2 = orderArray[orderAmount-1].amount2;
    var amount3 = orderArray[orderAmount-1].amount3;
    var orderPrice = orderArray[orderAmount-1].orderPrice;
    document.getElementById('date').innerHTML ="Dato for udlejning: "+ day + "/" + month+"/"+year;
    document.getElementById('timePeriod').innerHTML ="Tidspunkt for udlejning: kl. " + timePeriod;
    document.getElementById('amountOfJetski1').innerHTML ="Antal Sea Doo Spark: " + amount1;
    document.getElementById('amountOfJetski2').innerHTML ="Antal Yamaha Waverunner VX: " + amount2;
    document.getElementById('amountOfJetski3').innerHTML ="Antal Kawasaki STX-15F: " + amount3;
    document.getElementById('orderPrice').innerHTML = "Samlet pris til betaling ved udlejning: " + orderPrice;
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