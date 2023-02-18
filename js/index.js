document.getElementById('tinhTongKet').onclick = function() {
    //input
    var diemMon1 =document.getElementById('diem1').value;
    var diemMon2 =document.getElementById('diem2').value;
    var diemMon3 =document.getElementById('diem3').value;
    var khuVuc =document.getElementById('khuVuc').value;
    var doiTuong =document.getElementById('doiTuong').value;
    var tongKetDiem =document.getElementById('ketQuaBai1');
    var tong3Mon;
    var diemChuan=document.getElementById('diemChuan').value;
    tongKetDiem=0;
    
    //progess 
   
    if (diemMon1>0 && diemMon2 >0 && diemMon3>0 ){
        tong3Mon = Number(diemMon1) + Number(diemMon2) +Number(diemMon3);
    }
    else{
        document.getElementById('ketQua').innerHTML='Rớt' + ' ' +'do có điểm nhỏ hơn hoặc bằng 0'
    }
    tongKetDiem=Number(tong3Mon)+ Number(khuVuc) +Number(doiTuong)  ;
     if(tongKetDiem>= diemChuan){
        document.getElementById('ketQua').innerHTML= 'Bạn Đã Đậu.' + ' ' +'Tổng điểm là:' +' ' + tongKetDiem 
        
   
    }
    else{
        document.getElementById('ketQua').innerHTML='Bạn Đã Rớt' + ' ' +'Tổng điểm là:' +' ' + tongKetDiem 
    }
}

    //bai2:Tính tiền điện
    document.getElementById('tinhTienDien').onclick = function () {
    //input
    debugger
    var khachHang = document.getElementById('ten').value;
    var soKw = document.getElementById('soKw').value;
    var tongTien=0;
    //progess
    if(soKw <=50){
        tongTien= soKw * 500
    }
    else if (soKw>50 && soKw <= 100) {
    tongTien= 25000 + (Number(soKw -50)*650)
    }
    else if (soKw >100 && soKw <=200){
        tongTien=57500 + (Number(soKw-100)*850)
    }
    else if (soKw > 200 && soKw<= 350){
        tongTien= 142500 + (Number(soKw-200)*1100)
    }
    else if (soKw>350){
        tongTien=307500 +(Number(soKw-350)*1300)
    }
    //output
    document.getElementById('ketQuaBai2').innerHTML= 'Họ và tên:' + ' ' + khachHang +';' +' '+ 'Tiền điện:' +' ' +tongTien;
    }

    //bai3 
    document.getElementById('tinhThue').onclick = function (){
        //input
        
        var hoTen = document.getElementById('hoTen').value;
        var thuNhap= document.getElementById('tongThuNhap').value;
        var soNguoi= document.getElementById('soNguoiPhuThuoc').value
        var tongThuNhap= 0;
        var thuNhapChiuThue=0;
        var tienThue=0;
        //progress
        tongThuNhap =thuNhap - 4000000;
        thuNhapChiuThue=tongThuNhap - (soNguoi *1600000)
        if(thuNhapChiuThue<= 60000000){
            tienThue=thuNhapChiuThue*0.05;
        }
        else if(thuNhapChiuThue>60000000 && thuNhapChiuThue<=120000000){
         tienThue=thuNhapChiuThue*0.1
        }
        else if(thuNhapChiuThue>120000000 && thuNhapChiuThue <=210000000){
            tienThue=thuNhapChiuThue*0.15
        }
        else if (thuNhapChiuThue>210000000 && thuNhapChiuThue <=384000000){
            tienThue=thuNhapChiuThue*0.2
        }
        else if (thuNhapChiuThue>384000000 && thuNhapChiuThue <=624000000){
            tienThue=thuNhapChiuThue*0.25
        }
        else if (thuNhapChiuThue>624000000 && thuNhapChiuThue <=960000000){
            tienThue=thuNhapChiuThue*0.3
        }
        else if (thuNhapChiuThue>960000000){
            tienThue=thuNhapChiuThue*0.35
        }
        //output
        document.getElementById('tenBai3').innerHTML= 'Họ và tên:' + ' ' + hoTen + ';' 
        document.getElementById('ketQuaBai3').innerHTML='Tiền Thuế thu nhập cá nhân:'+ ' '+  tienThue.toLocaleString() +'VND'
        document.getElementById('ketQuaBai3').in

    }
    // debugger
    // document.getElementById('mySelect').onchange = function () {
    //     var a = document.getElementById("mySelect").value;
       
    //         var b = document.createElement("p")
    //         var node = document.createTextNode("Some new text");
    //         b.appendChild(node);
    //         var div = document.getElementById("show");
    //         //gắn p vào div
    //         div.appendChild(b);
    //         b.appendChild(node);
    //         b.style.backgroundColor = 'red';
    //         b.style.padding = "10px";
    //         b.style.color = "white";
            
        // //bai 5
        // document.getElementById('tinhTienCap').onclick= function(){
        //     //input
        //     var maKhachHang = document.getElementById ('maKhachHang').value;
        //     var soKenh= document.getElementById('soKenhCaoCap').value;
        //     var nhaDan = document.getElementById('nhaDan');
        //     var doanhNghiep= document.getElementById('doanhNghiep');
        //     var soKetNoi= document.getElementById('soKetNoi').value;
        //     var tienCapDan =0;
        //     var tienCapDoanhNghiep=0;
        //     //progess
        //     if (nhaDan==true){
        //         tienCapDan= 20 + soKenh;
        //     }
        //     if(doanhNghiep==true){
        //          tienCapDoanhNghiep= 90 + 
        //     }

        // }

        function showFields() {
			var loai_khach_hang = document.getElementById("loai_khach_hang").value;
			if (loai_khach_hang == "doanh_nghiep") {
				document.getElementById("so_ket_noi_div").style.display = "block";
			} else {
				document.getElementById("so_ket_noi_div").style.display = "none";
			}
		}

	 var b4LoaiKhachHang = document.querySelector("#b4-loai-khach-hang");
            b4LoaiKhachHang.addEventListener("change", (event) => {
                const nhapCapThuong = document.querySelector("#b4-input-cap-thuong");
                console.log("event.target.value", event.target.value);
                if(event.target.value ==="nha-dan"){
                    nhapCapThuong.classList.add("d-none")
                }else if(event.target.value === "doanh-nghiep"){
                    nhapCapThuong.classList.remove("d-none")
                }
            })
    debugger
            document.getElementById('btn-bai-4').onclick = function () {
                var soKetNoi=document.getElementById('b4-so-ket-noi').value;
                var loaiKhachHang = document.getElementById("b4-loai-khach-hang").value;
                var soKenh = document.getElementById ('so-kenh-cao-cap').value
                var maKhachHang=document.getElementById('ma-khach-hang').value
                var phiXuLy = 0;
                var dichVuCoBan = 0
                var kenhCaoCap =0
                var tongTien =0
                
              
                if (loaiKhachHang == "nha-dan") {
                    phiXuLy = 4.5;
                    dichVuCoBan = 20.5;
                    kenhCaoCap = 7.5 * soKenh;
                } else if (loaiKhachHang == "doanh-nghiep") {
                    phiXuLy = 15;
                  dichVuCoBan = 75 + (soKetNoi - 10) * 5;
                  kenhCaoCap= 50 * soKenh;
                }
              
                 tongTien = phiXuLy+dichVuCoBan  + kenhCaoCap;
              
                document.getElementById("result").innerHTML="Ma Khach hang:"+ maKhachHang +" "+"Tổng cộng: " + Number(tongTien)+ "$";
                
              }
   
           


   



