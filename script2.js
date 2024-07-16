// 1.Sorting the array
let arr=[5,1,3,7,2]
function msg(){
    return arr.sort()
}
console.log(msg())


// 2.ADD,REMOVE
let arr=[2,5,7]
console.log("PUSH AND POP")
arr.push(1)

console.log(arr)
arr.pop()
console.log(arr)


// 3.MAX AND MIN
let arr=[6,1,8,3,9]
arr.sort()
function maxim(){
    arr.reverse()
    return arr[0]
}
function minim(){
    arr.reverse()
    return arr[0]
}
console.log("maximum value is " +maxim())
console.log("minimum value is " +minim())



// 4.flattening array
let matrix=[[1,3,5],[2,4,6],[6,8,9]]
let arr=matrix.flat()
console.log("flattening array")
console.log(arr)



// 5 Searching the elements of the array and return its index if its present
let arr=[7,4,6,1,3]
let tar=3;
let temp=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]==tar){
        temp.push(i)
    }
}
console.log("3 is inside the array at index: "+temp)




// 6.merging 
let arr1=[2,4,6]
let arr2=[1,3,5]
let res=arr1.concat(arr2)
console.log("Merging of two arrays")
console.log(res)


