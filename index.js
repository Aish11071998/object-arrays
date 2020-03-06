// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//................................................
const arr=[1,2,3,4,5]
const objarray=[{id:'1'},{id:'2'}];
for(let a of objarray)
{
  console.log(a)
}
arr.forEach((item,index)=>
{
  console.log(item)
  console.log(index)
 // console.log(arr)
})

const x=arr.map((a,i)=>{
  console.log(i)
  return a*2
})
console.log(x)


const fil=arr.filter((num=>num>1)

)
console.log(fil)

//