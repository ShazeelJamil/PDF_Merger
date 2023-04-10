// let num = [1,2,3,4,5];
// let a=num.map((element)=>{
//     console.log(element)
//     return element+2 
// })
// console.log("---",a)

// let num = [1, 2, 3, 4, 5]

// let res = num.reduce((a, b) => {
//     return a * b;
// })
// console.log(res)

// let a={
//     a:1,
//     b:2
// }
// console.time()
// console.table(a)
// console.timeEnd() 

// const options = ['s', 'w', 'g'];
// let playAgain = false
// do {
//     const randomIndex = Math.floor(Math.random() * options.length);
//     const randomChoice = options[randomIndex];

//     if (randomChoice === 's' || randomChoice === 'w' || randomChoice === 'g') {
//         let inp = prompt("Select from 's' ,'w' and 'g' ")
//         if (inp === 's' && randomChoice === 'w') {
//             alert("Snake Won!!!")
//         }
//         else if (inp === 's' && randomChoice === 'g') {
//             alert("Gun Won!!!")
//         }
//         else if (inp === 'g' && randomChoice === 'w') {
//             alert("water Won!!!")
//         }
//         else {
//             alert("Draw!!!")
//         }
//         playAgain = confirm("Want to play again???")

//     } else {
//         alert('Error: Invalid choice');
//         playAgain = confirm("Want to play again???")
//     }
// } while (playAgain)



// const jokes=['joke1','joke2','joke3','joke4','joke5']
// let n=Math.floor(Math.random()*jokes.length-1)
// console.log(jokes[n])



// function hello(a,b)
// {
//     console.log("a----",a)
//     console.log("b----",b)
// }
// hello("abs",)

// function resolve()
// {
//     return 4;
// }



// let p = new Promise((resolve, reject) => {
//     // console.log("----",resolve());
//     reject(new Error("There was an error"))
// })
// p.then(() => {
//     console.log("inside then")
// })
// p.catch(() => {
//     console.log("inside catch")
// })
// console.log(p)

// function resolve() {
//     console.log("I am inside the promise resolve function")
// }
// function reject() {
//     console.log("I am inside the promise reject function")
// }




// let p=new Promise((resolve, reject) => {
//     setInterval (()=>{
//         console.log("Working on promis")
//     resolve()
//     },2000)
//     reject()
// })

// console.log(p)
// p.then(()=>{
//     setTimeout(()=>{
//         console.log(p)
//         console.log("INside then")
//     },2000)
// })
// p.catch(()=>{
//     console.log(new Error("Problem with p!!!"))
//     console.log("inside catch")
// })

// //----------------Hackerman
// function st1() {
//     setTimeout(() => {
//         console.log("Initializing 1st step to Obtain Connection with the target....")
//     }, 2000)
// }
// function st2() {
//     setTimeout(() => {
//         console.log("Connection estabished....")
//     }, 2000)
// }
// let hackerman = async () => {

//     let a=await st1()
//     let b=await st2()
// }
//hackerman()


