var btnButton = document.getElementById('btnTinhTien');
var showTien = function() {
    var tienThanhToan = document.querySelector('#tienThanhToan').value;
    var tienTip = document.querySelector('#tienTip').value;
    var soNguoi = document.querySelector('#soNguoi').value;

    var getFunction = tongTien(tienThanhToan, tienTip, soNguoi);

    document.querySelector('#result').innerHTML = getFunction;

}


//Hàm tính tiền
var tongTien = function(tienThanhToan, tienTip, soNguoi) {
    var money = 0;
    if (tienTip == 30) {
        money = (tienThanhToan * 0.3) / soNguoi;
        return money;

    } else if (tienTip == 20) {
        money = (tienThanhToan * 0.2) / soNguoi;
        return money;
    } else if (tienTip == 10) {
        money = (tienThanhToan * 0.1) / soNguoi;
        return money;
    } else if (tienTip == 5) {
        money = (tienThanhToan * 0.05) / soNguoi;
        return money;
    }

}
btnButton.onclick = showTien;