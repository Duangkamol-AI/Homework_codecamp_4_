var array = [0,9,1,8,2,7,3,6,4,5]
for(i=0;i<(array.length -1);i++){
    for(j=0;j<array.length -i;j++){
        if(array[j] < array[j+1]){
            swap = array[j]
            array[j] = array[j+1]
            array[j+1]= swap
        }
    }
}
console.log(array);
