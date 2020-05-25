var nhanvien = {
    maNhanVien: '',
    tenNhanVien: '',
    luongCoBan: '',
    chucVu: '',
    tongluong: '',
    gioLamTrongThang: '',
    chucvu: function() {
        if (this.chucVu == 1) {
            return "Nhân Viên";
        } else if (this.chucVu == 2) {
            return 'Quản Lý';
        } else if (this.chucVu == 3) {
            return 'Giám Đốc';
        }
    },
    tongLuong: function() {
        var tienLuong = 0;
        if (this.chucVu == 3) {
            tienLuong = this.luongCoBan * 3;
            return tienLuong;
        } else if (this.chucVu == 2) {
            tienLuong += this.luongCoBan * 2
        } else if (this.chucVu == 1) {
            tienLuong += this.luongCoBan * 1;
        }
        return tienLuong;
    },
    xepLoaiNhanVien: function() {
        if (this.gioLamTrongThang > 120) {
            return 'Nhân viên xuất sắc';
        } else if (this.gioLamTrongThang > 100) {
            return 'Nhân viên giỏi;'
        } else if (this.gioLamTrongThang > 80) {
            return 'Nhân viên khá';
        } else if (this.gioLamTrongThang > 50) {
            return 'Nhân viên trung bình';
        } else {
            return ' Cũng có làm mà lười :)';
        }
    }
}
document.querySelector('#btnHienThi').onclick = function() {
    // B1 Lấy thông tin nhân viên 
    nhanvien.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanvien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanvien.chucVu = document.querySelector('#chucVu').value;
    nhanvien.luongCoBan = document.querySelector('#luongCoBan').value;
    nhanvien.gioLamTrongThang = document.querySelector('#gioLam').value;
    document.querySelector('#showTenNhanVien').innerHTML = nhanvien.tenNhanVien;
    document.querySelector('#showMaNhanVien').innerHTML = nhanvien.maNhanVien;
    document.querySelector('#showChucVu').innerHTML = nhanvien.chucvu();
    document.querySelector('#showTongLuong').innerHTML = nhanvien.tongLuong();
    document.querySelector('#showXepLoai').innerHTML = nhanvien.xepLoaiNhanVien();
    //Xuất thông tin

    // document.querySelector('#showChucVu').innerHTML = chucvu();
}