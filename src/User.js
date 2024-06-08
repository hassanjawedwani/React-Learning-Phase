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


// import React from 'react';

// const User = () => {
//     const [isShowing, setIsShowing] = React.useState(true);
//     const toggle = () => {
//         setIsShowing(!isShowing);
       
//     }
//     return (
//         <div>
//             <button type="button" onClick={toggle}>Toggle</button>
//             {isShowing && <h1>Heading is Showing</h1> }
//         </div>
//     );
// }

// export default User;


// import React, {useState} from 'react';

// import './User.css'

// const User = () => {

//     const [username, setUsername] = useState("");
//     const [favouriteMovie, setFavouriteMovie] = useState("");
//     const [gender, setGender] = useState("");
//     const [hobbies, setHobbies] = useState({
//         cricket: false,
//         football: false,
//         hockey: false
//     })

//     const submitForm = event => {
//         event.preventDefault();
        
//         console.log("Username:" , username);
//         console.log("Favorite Movie:", favouriteMovie)
//         console.log("Gender: ", gender);
//         console.log("Hobbies", Object.keys(hobbies).filter(key=>hobbies[key]).join(", "));

//         // merging data to Object
//         // const data = {
//         //     username: username,
//         //     favouriteMovie: favouriteMovie,
//         //     gender: gender,
//         //     Hobbies: Object.keys(hobbies).filter(key=>hobbies[key]).join(", ")
//         // }
//         // console.log(data);
       
//     }

//     const usernameHandler = event => {
//         setUsername(event.target.value);
//     }

//     const moviesOptionHandler = event => {
//         setFavouriteMovie(event.target.value);
//     }

//     const genderHandler = event => {
//         setGender(event.target.value);       
//     }

//     const handleHobbies = event => {
//         const {name, checked} = event.target;
//         setHobbies(prevHobbies=>({
//             ...prevHobbies,
//             [name]: checked
//         }))
//     }

//     return (
//         <form action="#" method="post" onSubmit={submitForm}>
//             <label htmlFor="username"> Enter UserName:
//                 <input id="username" name="username" type="text" placeholder="e.g. John Smith" onChange={usernameHandler}  />
//             </label>
//             <label htmlFor="moviesOption">Favorite Movie:
//                 <select id="moviesOption" name="moviesOption" onChange={moviesOptionHandler}>
//                     <option value="" disabled selected>(Select any Movie)</option>
//                     <option value="marvel">Marvel</option>
//                     <option value="dc">DC</option>
//                     <option value="pak">Pakistani</option>
//                 </select>
//             </label>
//             <fieldset>
//                 <legend>Gender: </legend>
//                 <label htmlFor="male"> 
//                     <input type="radio" id="male" name="gender" value="male" checked={gender==='male'} onChange={genderHandler}/> Male
//                 </label>
//                 <label htmlFor="female"> 
//                     <input type="radio" id="female" name="gender" value="female" checked={gender==='female'} onChange={genderHandler}/> Female
//                 </label>
//             </fieldset>
//             <fieldset>
//                 <legend>Hobbies:</legend>
//                 <label htmlFor="cricket">
//                     <input type="checkbox" id="cricket" name="cricket" value="cricket" checked={hobbies.cricket} onChange={handleHobbies}/> Cricket
//                 </label>
//                 <label htmlFor="football">
//                     <input type="checkbox" id="football" name="football" value="football" checked={hobbies.football} onChange={handleHobbies}/> Football
//                 </label>
//                 <label htmlFor="hockey">
//                     <input type="checkbox" id="hockey" name="hockey" value="hockey" checked={hobbies.hockey} onChange={handleHobbies}/> Hockey
//                 </label>
//             </fieldset>
//             <button type="submit" id="submit-form">Submit</button>
//         </form>
//     );
// }

// export default User;