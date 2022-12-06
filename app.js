var count = document.getElementById("count");
var i = 0;
// var inr_html= count.innerHTML;
function clr(){
    if(i>0){
        count.style.color="green";
    }
    else if(i<0){
        count.style.color="red";
    }
    else{
        count.style.color="black";
    }
}
function inc(){
    i=i+1;
    count.innerHTML=i;
    clr();
}
function reset(){
    i=0;
    count.innerHTML=i;
    clr();
}
function dec(){
    i=i-1;
    count.innerHTML=i;
    clr();
}