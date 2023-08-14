let button=document.querySelectorAll('button');
let str="";
button.forEach((btn)=>{
btn.addEventListener("click",(e)=>{
    let n=str.length-1;
    if( n>0 &&(str[n]=='+' || str[n]=='-' ||str[n]=='*'|| str[n]=='/' )) {
        if(str[n-1]=='+' || str[n-1]=='-' ||str[n-1]=='*'|| str[n-1]=='/') {
            document.querySelector('input').value="Error";
            str="";
        }
        else {
            str+=btn.innerHTML;
     document.querySelector('input').value=str;
        }
    }
    else {
    if(btn.innerHTML == '=') {
        str=eval(str);
        document.querySelector('input').value=str;
    }
    else if(btn.innerHTML=='C') {
        str="";
        document.querySelector('input').value=str;
    }
    else{
   str+=btn.innerHTML;
     document.querySelector('input').value=str;
    }
}
})
})