let min=9999999,max=0,i,n;
for (i=1;i<6;i++){
    n = parseInt(prompt("Enter number"))
    if(n>max){
        max =n;
    }
    if (n<min){
        min=n;
    }
}
alert(min)
alert(max)