console.log('hello')
//console.log is a statement and this is a comment   

// debug is used for finding problems in code
//alert('hi')
//alert is a statement

//variables
//variables are used to store variables

let score=0;

//here let is used to declare variable and score is a variable and 0 is value this is called initialization
score=10;//1010 this is binary value of 10 js storing taking every number values as binary values only 
//we can change the variable value
//it is dynamically typed languages that means we can store number and string

const pi=3.14
//const store the value constantly we cant change after declaration

//get input from user
//let tickets=prompt('how many tickets you want')
//console.log('you should pay',tickets*20)
//prompt always taking everthing as string only
//if we want work with number first we need to convert that to number
//console.log('you should pay',Number(tickets)*20) 

// let a=prompt('enter a number')
// console.log(a+10)
// this code is given ans like if i give in webpage 4 then it gives me 410 beacuse it takes that as a string
//before that we need to convert this into number
// let a=prompt('enter a number')
// console.log(Number(a)+10)

//document object model(dom)
//document is used to access everything in html page it is a javascript command
//document is used to access html from the javascript 
//by this we can control the html page
//html is working like a tree structure in that each and every element is called as node those all are saved in this document file 


//template literals
  //backtick(``)
  let msg=`hi how are u`
  console.log(msg)
  //by using this and help of $ symbol we can easily given space to our codings
  let ms='hi'
  let msg1='how'
  let msg2='are'
  let msg3='u'
  console.log(`${ms} ${msg1} ${msg2} ${msg3}`)

  //arrays
  //storing many values in single variable

  let cities=['chennai','madurai','trichy']
  let marks=[78,52,68,46,85]

  console.log(cities)
  console.log(marks.length)
  // anything inside this [] braces is called as array 
  //in array index starts from 0 to n-1

  //to find last element
  console.log(marks[marks.length-1])

    //mix of int and string
    //inside this [] bracket we can pass anything like [12,'name',0.8] we can pass string characters and anything
    let arr=[12,4,5,6,"abc",[3,4]]
    console.log(arr)
    //in here we can one more array in same array

    //2d array
    let mat=[[3,4,5],[2,6,7],[5,8,2]]
    console.log(mat)
    //this is called two dimensional array we can store more arrays in inside of array
    console.log(mat[0][0])

    //how we take 8num in the third array
    console.log(mat[2][1])
    //in here [2] is refers the position of total array elements
    //and [1] is represents the position of the value of [2]nd array

    //push- to add elements in the end of the array
    let array=['a','b','c']
    console.log(array)
    //in array integer has no need for '' but strin(or)char we need to declare with ''
    array.push('f')
    console.log(array)

    //pop-it removes the end value in array and returned the value
    console.log(array.pop())
    //now its removes the last value and returns the value in console
    console.log(array)
   
    //shift-it removes the first element of the array
    //it returns the removed value
    console.log(array.shift())
    //now its removing the first value and returns in console
    //now
    console.log(array)
    







