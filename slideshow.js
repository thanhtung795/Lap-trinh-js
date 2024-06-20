var arr_hinh=[
    "slideshow/1.webp",
    "slideshow/2.webp",
    "slideshow/3.webp",
    "slideshow/4.webp", 
];
 var index = 0;
function prve(){
    index --;
    if(index < -0) index = arr_hinh.length -1;
    document.getElementById("hinh").src =  arr_hinh[index];
}

function next(){
     index ++;
    if(index >= arr_hinh.length) index = 0;
    document.getElementById("hinh").src =  arr_hinh[index];
}
setInterval("next()",5000);
