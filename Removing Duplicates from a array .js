//Write a function that takes an array of integers and returns a new array with all the duplicates removed 
var antiDuplicates = (arr1) =>{
    var temp = arr1.length
    for (var i=0;i<temp;i++){
        for (var j=i+1;j<temp;j++){
            if (arr1[i]==arr1[j]){
                arr1.splice(i,1)
            }
            if (i == j ){
                continue
            }
        }
    }
    return arr1
}
var res = antiDuplicates([5,5,9,10,11,5,5,6,7])
console.log(res)
//Made by Syed Ahmed Haider Razvi 
