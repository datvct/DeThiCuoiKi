$(document).ready(function(){

    let stt =0;

    function ktraMaBN(){
        let maBN = $("#ma");
        let patten = /^BN-\d{6}$/;

        if(patten.test(maBN)){
            $('#tbma').html("*");
            $('#ma').removeClass('errorborder');
            return true;
        }
        else{
            $('#tbma').html("Mã bệnh nhân sai!");
            $("#tbma").addClass('error');
            $("#ma").addClass('errorborder');
            return false;
        }
    }
    $('#ma').blur(function(e){
        ktraMaBN();
    })

    function ktraMatKhau(){
        let matkhau = $("#matkhau");
        let patten = /^.{6,}$/;

        if(patten.test(matkhau)){
            $('#tbmatkhau').html("*");
            $('#matkhau').removeClass('errorborder');
            return true;
        }
        else{
            $('#tbmatkhau').html("Mật khẩu ít nhất 6 kí tự!");
            $("#tbmatkhau").addClass('error');
            $("#matkhau").addClass('errorborder');
            return false;
        }
    }
    $('#matkhau').blur(function(e){
        ktraMatKhau();
    })

    $("#ngaydat").change(function () {
        let ngayBatDau = moment($("#ngaydat").val(), "DD-MM-YYYY");
        let ngayHienTai = moment();
        let ngayMin = ngayHienTai.add(1, "days").format("DD-MM-YYYY");

        if (ngayBatDau.isBefore(ngayMin)) {
            alert("Ngày đặt lịch phải sau ngày hiện tại ít nhất 1 ngày!");
            $("#ngaydat").val("");
        }
    });
    $("#btndat").click(function (e) { 
        event.preventDefault();
        
        let maBN = $("#ma").val();
        let matkhau = $('#matkhau').val(); // lấy giá trị của trường có id là "ho"
        let ngay = $("#ngaydat").val();
        let chuyenkhoa = $("#chuyenkhoa option:selected").val();
        var total = 0;
        $.each($("input[type='checkbox']:checked"), function(){
            total += 500000;
        });
        if(ktraMaBN(), ktraMatKhau()){
            stt++;
            let trnew = "<tr><td>" + stt+ "</td><td>"+ maBN+ "</td><td>"+ matkhau+"</td><td>"+ ngay +"</td><td>"+ total+ "</td><td>" +chuyenkhoa+"</td></tr>"
            $("#tbl").append(trnew);
            $("#ma,#matkhau ,#ngaydat,#chuyenkhoa ,input[type='checkbox']").val("");
        }
    });

});