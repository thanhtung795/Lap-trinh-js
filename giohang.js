    var demsp = 0;
    var arr =[];
    function themvaogio(id, tensp, gia){
        var đãcótronggiỏhàng = false;
        for(i = 0; i < arr.length; i++){
            var sp = arr[i];
            if(sp[0] == id){
                sp[3]++;
                đãcótronggiỏhàng = true;
            }
        }
        if( đãcótronggiỏhàng == false){
            arr.push([id, tensp, gia,1]);
        }
        document.getElementById("sosp").innerText=arr.length;
        console.log(arr);
        localStorage.setItem('cart', JSON.stringify(arr));
    }
