import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


// Method 1
//  ReactDOM.render(
//    <h1> Hello DJ!!</h1>,   document.getElementById('root')
//    );

// Method 2
// ReactDOM.render(React.createElement('h1','null','Hello DJ :)'),
// document.getElementById('root'));

// Method 3
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello DJ :)";
// document.getElementById('root').appendChild(h1);

// // Multiple Elements 

// Method 1
// wrapp in the div. It will create another div inside main div with id root.
// ReactDOM.render(
//   <div>
//       <h1> Hello DJ</h1>
//       <h2> How are you?</h2>
//       <h2> I am good. Thank you for asking :)</h2>
//   </div>
//   ,document.getElementById('root'));

// Method 2
// use array of elements. It will not create extra div. 
// ReactDOM.render([
//   <h1> Hello DJ !!</h1>,
//   <h2> How are you?</h2>,
//   <h3> I am good. Thank you for asking :)</h3>
// ],
//   document.getElementById('root'));

// Method 3
// ReactDOM.render(
//   <React.Fragment>
//     <h1> Hello DJ !!</h1>
//     <h2> How are you?</h2>
//     <h3> I am good. Thank you for asking :)</h3>
//   </React.Fragment>,
//   document.getElementById('root'));

// Method 4
// <> => React.Fragment syntax sugar form.
// ReactDOM.render(
//   <>
//     <h1> Hello DJ !!</h1>
//     <h2> How are you?</h2>
//     <h3> I am good. Thank you for asking :)</h3>
//   </>,
//   document.getElementById('root'));

// ReactDOM.render(
//   <>
//     <h1> Hello {name} :)</h1>
//     <p>{ `Today's date is ${today} and current time is ${time}`}</p>
//     <p> This is the list of my favorite Netflix Shows </p>
//     <ol>
//       <li> The 100</li>
//       <li> Games of Thrones</li>
//       <li> Money Hesit</li>
//       <li> 13 Reasons Why</li>
//       <li> Insidious</li>
//       <li> Dark</li>
//     </ol>
//   </>,
//   document.getElementById('root'));


const name = "Darshkumar Jasani";
var today = new Date().toLocaleDateString();
var time =  new Date().toLocaleTimeString();

const mainStyle = {
  color : 'rgb(93, 2, 177)',
  fontFamily : '"Sevillana", cursive'
};
var hour = new Date().getHours();
console.log(hour);
var greetings = "";
var styleOfGreetings;
if( hour-12 >= 0 && hour-12 <= 7){
    greetings = "Good Afternoon";
    styleOfGreetings = {
      color : 'rgb(5,250,17)',
      fontFamily : '"Sevillana", cursive'
    };
}
else if( hour-12 <= -1 && hour-12 >= -11){
  greetings = "Good Morning";
  styleOfGreetings = {
    color : 'rgb(250,127,5)',
    fontFamily : '"Sevillana", cursive'
  };
}
else{
  greetings = "Good Night";
  styleOfGreetings = {
    color : 'rgb(10,10,10)',
    fontFamily : '"Sevillana", cursive'
  };
}

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>
      <h1 style = {mainStyle}>
        Hello Sir,<span style ={styleOfGreetings}>{greetings}</span>
      </h1>
    </div>
   </>
);