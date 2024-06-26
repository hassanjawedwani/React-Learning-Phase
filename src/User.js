// import React from 'react';

import { forwardRef } from "react";

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

//passing function as args

// import PropTypes from 'prop-types';

// const ChildComponent = (props) => {
//     return (
//         <div>
//           <h1>Child Component</h1>
//           <button type="button" onClick={props.alertProp}>Alert</button>
//         </div>
//     );
// }

// ChildComponent.propTypes = {
//     alertProp: PropTypes.func.isRequired
// }

// const User = () => {
//     const alertFunc = () => {
//         alert("Hello World");
//     }
//     return (
//         <div>
//             <ChildComponent alertProp={alertFunc}/>
//         </div>
//     )
// }

// export default User;

// import React, {useState, useEffect} from 'react';

// const User = () => {
//     const [count, setCount] = useState(0);
//     const [count2, setCount2] = useState(0);
//     useEffect(()=>{                         //useEffect as ComponentDidUpdate
//         console.log("useEffect Called");
//     }, [count]);
//     useEffect(()=>{                         //useEffect as ComponentDidUpdate
//         console.log("useEffect2 Called");
//     },[count2]);
//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button type="button" onClick={()=>{setCount(count+1)}}>Increment</button>
//             <h1>Count2: {count2}</h1>
//             <button type="button" onClick={()=>{setCount2(count2+1)}}>Increment</button>
//         </div>
//     );
// }

// export default User;

// import React, {useState, useEffect} from 'react';

// const Child = (props) => {
//     useEffect(()=>{
//         console.log("Child useEffect Called");
//     });
//     return (
//         <h1>Child Element: {props.arg}</h1>
//     );
// }

// const User = () => {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button type="button" onClick={()=>{setCount(count+1)}}>Increment</button>
//             <Child arg={count}/>
//         </div>
//     );
// }

// export default User;
// import './styles.css'
// import style from './custom.module.css';

// const User = () => {
//     const Styles = {
//         backgroundColor: "blue"
//     };
//     return (
//         <div>
//             <h1 className="primary">Hello World</h1>
//             <h1 style={{backgroundColor: "red"}}>Hello World</h1>
//             <h1 style={Styles}>Hello World</h1>
//             <h1 className={style.success}>Hello World</h1>
//         </div>
//     );
// }

// export default User;
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Table} from 'react-bootstrap';

// const User = () => {
//     const myData = [
//         {name: "Hassan Jawed", ag: "2021-ag-5883", class: 12, address: {home: "Chak878", office: "pirmahal", town: "lahoe"}},
//         {name: "Numan Jawed", ag: "2020-ag-5883", class: 2, address: {home: "Chak878", office: "pirmahal", town: "lahoe"}},
//         {name: "Sohail Jawed", ag: "2019-ag-5883", class: 11, address: {home: "Chak878", office: "pirmahal", town: "lahoe"}},
//         {name: "Shoaib Jawed", ag: "2018-ag-5883", class: 8, address: {home: "Chak878", office: "pirmahal", town: "lahoe"}},
//     ];
//     return (
//         <>
//             <Table variant='dark' striped>
//                 <thead>
//                     <tr>
//                         <th>Serial No</th>
//                         <th>Name</th>
//                         <th>Rollno</th>
//                         <th>Class</th>
//                         <th>Address</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                    {
//                     myData.map((student, index) => (
//                     <tr key={index}>
//                         <td>{index+1}</td>
//                         <td>{student.name}</td>
//                         <td>{student.ag}</td>
//                         <td>{student.class}</td>
//                         <td>
//                             {
//                                 <Table variant='warning' striped>
//                                     <thead>
//                                         <tr>
//                                             <th>Home Address</th>
//                                             <th>office Address</th>
//                                             <th>Town Address</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {
//                                             <tr>
//                                                 <td>{student.address.home}</td>
//                                                 <td>{student.address.office}</td>
//                                                 <td>{student.address.town}</td>
//                                             </tr>
//                                         }
//                                     </tbody>
//                                 </Table>
//                             }
//                         </td>
//                     </tr>
//                     ))
//                    }
//                 </tbody>
//             </Table>
//         </>
//     );
// }

// export default User;

// const User = () => {
//     const myData = [
//         {name: "Hassan Jawed", ag: "2021-ag-5883", class: 12, address: {home: "Chak878", office: "pirmahal", town: "lahoe"}},
//         {name: "Numan Jawed", ag: "2020-ag-5883", class: 2, address: {home: "Chak878", office: "pirmahal", town: "lahoe"}},
//         {name: "Sohail Jawed", ag: "2019-ag-5883", class: 11, address: {home: "Chak878", office: "pirmahal", town: "lahoe"}},
//         {name: "Shoaib Jawed", ag: "2018-ag-5883", class: 8, address: {home: "Chak878", office: "pirmahal", town: "lahoe"}},
//     ];
//     return (
//         <div>
//             <h1>My Data:</h1>
//             {
//                 myData.map(obj => (
//                     <Bold data={obj}/>
//                 ))
//             }
//         </div>
//     );
// }

// const Bold = (props) => {
//     return (
//         <h2>
//         <span style={{fontWeight: "bold"}}>{props.data.name} </span>
//         <span style={{fontWeight: "bold"}}>{props.data.ag} </span>
//         <span style={{fontWeight: "bold"}}>{props.data.class} </span>
//         </h2>
//     );
// }

// export default User;
// import React, {useState, useMemo} from 'react';

// const User = () => {
//     const [count, setCount] = useState(0);
//     console.log("parent render");
//     return (

//         <div>
//             <h1>Parent Component</h1>
//             <Child />
//             <h2>{count}</h2>
//             <button onClick={()=>{update}}>Update</button>
//         </div>
//     );

// }

// const Child = React.memo(() => {

//         console.log("child render");
//         return (
//             <h1>Hello</h1>
//         );

// });

// import React, {useState, useMemo, useEffect} from 'react';

// const User = () => {
//     const [count, setCount] = useState(0);
//     const [count2, setCount2] = useState(0);
//     const update = useEffect(()=>{
//         console.log("update called");
//     }, [count]);
//     return (

//         <div>
//             <h2>{count2}</h2>
//             <button onClick={()=>{setCount(count+1)}}>Update</button>
//             <h2>{count2}</h2>
//             <button onClick={()=>{setCount2(count2+1)}}>Update</button>
//         </div>
//     );

// }

// export default User;

// import React, { useRef, useEffect } from "react";
// const User = () => {
//   const focusRef = useRef(null);

//   const keydownHandler = (event) => {
//     if (event.key === "/") {
//       event.preventDefault();
//       if (focusRef.current) {
//         focusRef.current.focus();
//       }
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("keydown", keydownHandler);
//     return() => {
//     document.removeEventListener("keydown", keydownHandler);

//     }
//   }, []);

//   return (
//     <div>
//       <input
//         style={{ borderRadius: 20 }}
//         type="search"
//         placeholder="Search"
//         ref={focusRef}
//       />
//     </div>
//   );
// };

// export default User;
// import { useRef } from "react";

// const Child = forwardRef((props, forward) => {
//   return <input type="text" placeholder="Enter text" ref={forward} />;
// });

// const User = () => {
//   const focusInput = useRef(null);

//   const focusInputFunc = () => {
//     focusInput.current.focus();
//   };

//   return (
//     <div>
//       <Child ref={focusInput} />
//       <button onClick={focusInputFunc}>Focus</button>
//     </div>
//   );
// }

// export default User;

// import React from 'react'

// const RedHOC = (props) => {
//     return <div style={{backgroundColor: "red"}}><props.cmp/></div>;
// }
// const GreenHOC = (props) => {
//     return <div style={{backgroundColor: "green"}}><props.cmp/></div>;
// }

// const Counter = () => {
//     const [count, setCount] = React.useState(0);
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button type="button" onClick={()=>{setCount(count+1)}}>Update</button>
//         </div>
//     );
// }

// const User = () => {
//     return (
//         <div>
//             <Counter/>
//             <RedHOC cmp={Counter}/>
//             <GreenHOC cmp={Counter}/>
//         </div>
//     );
// }
// export default User;