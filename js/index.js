$(Document).ready(function() {
    var ma = $("#ma");
    var tbMa = $("#tbMa");

    function KiemTraMa() {
        var re = /^BN-\d{6}$/;
        if (ma.val() == "") {
            tbMa.html("* bắt buộc nhập");
            return false;
        }
        if (!re.test(ma.val())) {
            tbMa.html("* Nhập theo mẫu: BN-YYYYYY");
            return false;
        }
        tbMa.html("*");
        return true;
    }
    ma.blur(KiemTraMa);

    var matkhau = $("#matkhau");
    var tbmatkhau = $("#tbmatkhau");

    function KiemTraMatKhau() {
        var re = /^.{6,}$/;
        if (matkhau.val() == "") {
            tbmatkhau.html("* bắt buộc nhập");
            return false;
        }
        if (!re.test(matkhau.val())) {
            tbmatkhau.html("* Nhập phải 6 kí tự trở lên");
            return false;
        }
        tbmatkhau.html("*");
        return true;
    }
    matkhau.blur(KiemTraMatKhau);

    var txtNgay = $("#txtNgay");
    var txtNgay = $("#tbNgay");

    function KiemTraNgayTG() {
        if (txtNgay.val() == "") {
            tbNgay.html("* băt buộc nhập");
            return false;
        }
        var day = new Date(txtNgay.val());
        var today = new Date();
        today.setDate(today.getDate() + 1);
        if (day < today) {
            tbNgay.html("* Ngày tham gia phải sau ngày hiện tại");
            return false;
        }
        tbNgay.html("*");
        return true;
    }
    txtNgay.blur(KiemTraNgayTG);

    $("#btndat").click(function() {
        if (!KiemTraMa() || !KiemTraMatKhau() || !KiemTraNgayTG()) {
            $("#thongbao").html("Mời bạn nhập đầy đủ thông tin");
            return false;
        }
        var ma = ma.val();
        var matkhau = matkhau.val();
        var txtNgay = txtNgay.val();
        var add = "<tr><td>" + (i++) + "</td><td>" + ma + "</td><td>" + hoten + "</td><td>" + ngaytg + "</td><td>" + email + "</td><tr>";
        $("table tbody").append(add);
        $("#myModal").modal("hide");
        return true;
    });

});