function bubbleSort(arr){
    for(i=0; i < arr.length; i++){
        
        for(k=0; k < arr.length-1; k++){
            var holder;
            if(arr[k] > arr[k+1]){
                holder = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = holder;
            }
        }
    }
    return arr;
}