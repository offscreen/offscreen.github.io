(function() {
    var dn = new Date(),
        da = dn.getDate(),
        mo = dn.getMonth(),
        ye = dn.getFullYear(),
        elm = document.getElementById("now_d");

    function month(a) {
        var mo = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return mo[a];
    }
    dn = da + " " + month(mo) + " " + ye;
    elm.innerHTML = dn;
}());