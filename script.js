//1. WRITE A PROGRAM TO SWAP TWO VARIABLES AND DISPLAY IT.

// let a = 2 
// let b = 3
// let c = 0 
// c=a
// a=b
// b=c
// console.log("a:"+a)
// console.log("b:"+b)

//2. WRITE A PROGRAM TO CHECK THE GIVEN CHARACTER IS A VOWEL OR CONSONANT OR NUMBER USING A SWITCH STATEMENT.
// let ch = prompt("Enter a character")
// switch(ch){
//     case "a":console.log("The character is vowel")
//         break
//     case "e":console.log("The character is vowel")
//         break
//     case "i":console.log("The character is vowel")
//         break
//     case "o":console.log("The character is vowel")
//         break
//     case "u":console.log("The character is vowel")
//         break
//     default :console.log("The character is consonant")
// }

//3.WRITE A PROGRAM TO PRINT THE SUM OF DIGITS IN A NUMBER.
// let num = 12345
// let sum = 0 
// let rem =0
// while(num>0){
//     a = num%10
//     sum = sum+a
//     num = parseInt(num/10)
    
// }
// console.log("Sum of digits in a number:"+sum)

//4.PROGRAM TO PRINT THE NUMBER OF DIGITS IN A GIVEN NUMBER.
// let num = 12345
// let rem = 0
// let b = 0
// while(num>0){
//     a = num%10
//     rem = rem*10+a
//     num = parseInt(num/10)
//     b++
// }
// console.log("Number of digits in a given number is:"+b)

//5. PROGRAM TO FIND WHETHER A NUMBER IS ODD NUMBER OR EVEN NUMBER
// let num = parseFloat(prompt("Enter a number"))
// if(num%2==0){
//     console.log(num+" is even")
// }
// else{
//     console.log(num+ "is odd")
// }

//6.WRITE A PROGRAM TO REVERSE A NUMBER.
// let num = 12345
// let rem = 0
// while(num>0){
//     a = num%10
//     rem = rem*10+a
//     num = parseInt(num/10)
// }
// console.log("Reverse of a number:"+rem)

//7.PROGRAM TO FIND A GIVEN NUMBER IS AVAILABLE IN AN ARRAY.
// let arr = [1,2,3,4,5]
// let num = parseFloat(prompt("Enter a number"))
// let a = 0
// for(i=0;i<arr.length;i++){
//     if(num==arr[i]){
//         a++
//     }
// }
// if(a>0){
//     console.log(num + " is available in this array")
// }
// else{
//     console.log(num + " is not available in this array")
// }

//8.PROGRAM TO FIND HOW MANY POSITIVE NUMBERS ARE AVAILABLE IN AN ARRAY OF 10 ELEMENTS.
// let arr = [1,-2,3,-4,-5,6,-7,8,-9,10]
// let pos=0
// for(i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         pos++
//     }
// }
// console.log(pos +" positive numbers are available in this array")

//9.WRITE A PROGRAM WITH 4 FUNCTIONS FOR ADDITION,SUBTRACTION, MULTIPLICATION, AND DIVISION. PASS 2 PARAMETERS FOR ALL FUNCTIONS AND DISPLAY THE RESULT.
// function addition(a,b){
//     s = a+b
//     console.log("Addition:"+s)
// }
// function substration(a,b){
//     s = a-b
//     console.log("Substraction:"+s)
// }
// function multiplication(a,b){
//     s = a*b
//     console.log("Multiplication:"+s)
// }
// function division(a,b){
//     s = a/b
//     console.log("Division:"+s)
// }
// addition(2,3)
// substration(3,2)
// multiplication(2,3)
// division(4,2)

//10.WRITE A PROGRAM TO PRINT A DIAMOND PATTERN.
// let n = 5
// string = ""
// for(i=1;i<=n;i++){
//     for(j=0;j<n-i;j++){
//         string += " "
//     }
//     for(k=0;k<i*2-1;k++){
//         string += "*"
//     }
//     string +="\n"
// }
// for(i=1;i<=n;i++){
//     for(j=0;j<i;j++){
//         string += " "
//     }
//     for(k=0;k<2*(n-i)-1;k++){
//         string +="*"
//     }
//     string +="\n"
// }
// console.log(string)

