function removerPares(array){

    if (!array) return -1;

    for(num of array){
        if (array[num] %2 == 0){
            array[num] = 0;
        }
    }
    return array;
}

console.log(removerPares([1,2,3,5,4]));