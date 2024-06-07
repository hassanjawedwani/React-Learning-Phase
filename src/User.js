// import React from 'react';

// const User = () => {
//     const [count, setCount] = React.useState(0);
//     const update = () => {
//         setCount(count+1);
//     }
//     return (
//         <div>
//             <h1>Counter: {count}</h1>
//             <button onClick={update}>increase</button>
//         </div>
//     );
// }
// export default User;

// props 

// const Student = (props) => {
//     return (
//         <div>
//             <h1>Student DATA</h1>
//             <h3>Student Name: {props.data.name}</h3>
//             <h3>Student Digree: {props.data.digree}</h3>
//             <h3>Student Skills: {props.data.skills.join(" ,")}</h3>
//         </div>
//     );
// }

// const MyClass = () => {
//     return (
//         <div>
//             <Student data={{name: "Hassan Jawed", digree: "BSCS", skills: ["HTML", "CSS", "JavaScript"]}}/>
//             <Student data={{name: "Numan Jawed", digree: "BSIT", skills: ["Teaching", "CSS", "JavaScript"]}}/>
//             <Student data={{name: "Sohail Jawed", digree: "Diploma", skills: ["Mobiles", "CSS", "JavaScript"]}}/>
//             <Student data={{name: "Umer Jawed", digree: "MPhill", skills: ["Engineering", "CSS", "JavaScript"]}}/>
//         </div>
//     );
// }

// export default MyClass;


// form input get

// import React from 'react';
// const User = () => {
//     const [onChangeValue, setOnChangeValue] = React.useState('');
//     const [onClickValue, setOnClickValue] = React.useState('');
//     const updateChange = (event) => {
//         setOnChangeValue(event.target.value);
//     }
//     const updateClick = () => {
//         setOnClickValue(document.getElementById('username').value)
//     }

//     return (
//         <div>
//             <input type="text" id="username" name="username" placeholder="Enter username" onChange={updateChange}/>
//             <button type="button" onClick={updateClick}>Get Value</button>
//             <h2>Onchange Value: {onChangeValue}</h2>
//             <h2>Onclick Value: {onClickValue}</h2>
//         </div>

//     );
// }

// export default User;

l