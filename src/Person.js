// import React from 'react';

import { Component } from "react";

// class Person extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//         this.update = this.update.bind(this);
//     }

//     update = () => {
//         this.setState(state =>({
//             count: state.count+1
//         }))
//     }

//     render() {
//         return (
//             <div>
//             <h1>Counter: {this.state.count}</h1>
//             <button onClick={this.update}>increase</button>
//             </div>
//         );
//     }
// };

// export default Person;

//props


// import React from 'react';

// class Student extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Student DATA</h1>
//                 <h3>Student Name: {this.props.data.name}</h3>
//                 <h3>Student Digree: {this.props.data.digree}</h3>
//                 <h3>Student Skills: {this.props.data.skills.join(" ,")}</h3>
//             </div>
//         );
//     }
// };

// class MyClass extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <Student data={{name: "Hassan Jawed", digree: "BSCS", skills: ["HTML", "CSS", "JavaScript"]}}/>
//                 <Student data={{name: "Numan Jawed", digree: "BSIT", skills: ["Teaching", "CSS", "JavaScript"]}}/>
//                 <Student data={{name: "Sohail Jawed", digree: "Diploma", skills: ["Mobiles", "CSS", "JavaScript"]}}/>
//                 <Student data={{name: "Umer Jawed", digree: "MPhill", skills: ["Engineering", "CSS", "JavaScript"]}}/>
//             </div>
//         );
//     }
// };

// export default MyClass;


// form input get

// import React from 'react';

// class Person extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             onChangeValue: '',
//             onClickValue: ''
//         }
//         this.onChangeFunc = this.onChangeFunc.bind(this);
//         this.onClickFunc = this.onClickFunc.bind(this);
//     }
//     onChangeFunc(event) {
//         this.setState({
//             onChangeValue: event.target.value
//         })
//     }
//     onClickFunc() {
//         this.setState({
//             onClickValue: this.state.onChangeValue
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" id="username" name="username" placeholder="Enter Username" onChange={this.onChangeFunc}/>
//                 <button type="button" onClick={this.onClickFunc}>Update</button>
//                 <h2>onChangeValue: {this.state.onChangeValue}</h2>
//                 <h2>onClickValue: {this.state.onClickValue}</h2>

//             </div>
//         );
//     }
// };

// export default Person;

// import React from 'react';
// class Person extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isShowing: true
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <button type="button" onClick={()=>{this.setState(state=>({isShowing: !state.isShowing}))}}>Toggle</button>
//                 {this.state.isShowing && <h1>Heading is showing</h1>}
//             </div>
//         );
//     }
// };

// export default Person;



// import React, {Component} from 'react';
// import './User.css'

// class Person extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             favouriteMovie: "",
//             gender: "",
//             hobbies: {
//                 cricket: false,
//                 football: false,
//                 hockey: false
//             }
//         }
//         this.usernameHandler= this.usernameHandler.bind(this);
//         this.moviesOptionHandler= this.moviesOptionHandler.bind(this);
//         this.genderHandler= this.genderHandler.bind(this);
//         this.handleHobbies= this.handleHobbies.bind(this);
//     }


//     submitForm = event => {
//         event.preventDefault();   
//         console.log("Username:" , this.state.username);
//         console.log("Favorite Movie:", this.state.favouriteMovie)
//         console.log("Gender: ", this.state.gender);
//         console.log("Hobbies", Object.keys(this.state.hobbies).filter(key=>this.state.hobbies[key]).join(", "));

//         //reseting form
//         this.setState ({
//             username: "",
//             favouriteMovie: "",
//             gender: "",
//             hobbies: {
//                 cricket: false,
//                 football: false,
//                 hockey: false
//             }
//         })
//     }

//     usernameHandler = event => {
//         this.setState({
//             username: event.target.value
//         });
//     }

//     moviesOptionHandler = event => {
//         this.setState({
//             favouriteMovie: event.target.value
//         });
//     }

//     genderHandler = event => {
//         this.setState({
//             gender: event.target.value
//         });     
//     }

//     handleHobbies = event => {
//         const {name, checked} = event.target;
//         this.setState(prevHobbies=>({
//             hobbies: {
//             ...prevHobbies.hobbies,
//             [name]: checked
//             }
//         }))
//     }

//     render() {

    
//         return (
//             <form action="#" method="post" onSubmit={this.submitForm}>
//                 <label htmlFor="username"> Enter UserName:
//                     <input id="username" name="username" type="text" placeholder="e.g. John Smith" onChange={this.usernameHandler}  />
//                 </label>
//                 <label htmlFor="moviesOption">Favorite Movie:
//                     <select id="moviesOption" name="moviesOption" onChange={this.moviesOptionHandler}>
//                         <option value="" disabled defaultValue>(Select any Movie)</option>
//                         <option value="marvel">Marvel</option>
//                         <option value="dc">DC</option>
//                         <option value="pak">Pakistani</option>
//                     </select>
//                 </label>
//                 <fieldset>
//                     <legend>Gender: </legend>
//                     <label htmlFor="male"> 
//                         <input type="radio" id="male" name="gender" value="male" checked={this.state.gender==='male'} onChange={this.genderHandler}/> Male
//                     </label>
//                     <label htmlFor="female"> 
//                         <input type="radio" id="female" name="gender" value="female" checked={this.state.gender==='female'} onChange={this.genderHandler}/> Female
//                     </label>
//                 </fieldset>
//                 <fieldset>
//                     <legend>Hobbies:</legend>
//                     <label htmlFor="cricket">
//                         <input type="checkbox" id="cricket" name="cricket" value="cricket" checked={this.state.hobbies.cricket} onChange={this.handleHobbies}/> Cricket
//                     </label>
//                     <label htmlFor="football">
//                         <input type="checkbox" id="football" name="football" value="football" checked={this.state.hobbies.football} onChange={this.handleHobbies}/> Football
//                     </label>
//                     <label htmlFor="hockey">
//                         <input type="checkbox" id="hockey" name="hockey" value="hockey" checked={this.state.hobbies.hockey} onChange={this.handleHobbies}/> Hockey
//                     </label>
//                 </fieldset>
//                 <button type="submit" id="submit-form">Submit</button>
//             </form>
//         );
//     }
// };

// export default Person;

// import React, {Component} from 'react';
// class Person extends Component {

//     constructor(props) {
//         super(props);
//         this.alertFunc = this.alertFunc.bind(this);
//     }

//     alertFunc() {
//         alert("hello");
//     }

//     render() {
//         return (
//             <div>
//                 <Child func={this.alertFunc}/>
//             </div>
//         );
//     }
// };

// class Child extends Component {
//     render() {
//         return (
//             <div>
//                 <button type="button" onClick={this.props.func}>Alert</button>
//             </div>
//         );
//     }
// };

// export default Person;

// import React, {Component} from 'react';

// class Person extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "hassan"
//         }
//         this.update = this.update.bind(this);
//         console.log("constructor called");
//     }

//     update() {
//         this.setState({
//             name: "NUman"
//         })
//         console.log("state update");
//     }

//     render() {
//         console.log("render called");
//         return (
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <button type="button" onClick={this.update}>Update</button>
//             </div>
//         );
//     }
// };

// import React, {Component} from 'react';

// class Child extends Component {
//     constructor(props) {
//         super(props);
//         console.log("Child constructor called");
//     }

//     render() {
//         console.log("Child render called");
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//             </div>
//         );
//     }
// };


// class Person extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "hassan"
//         };
//         this.update = this.update.bind(this);
//         console.log("Parent constructor called");
//     }

//     update() {
//         this.setState({
//             name: "NUman"
//         })
//         console.log("Parent state update");
//     }

//     render() {
//         console.log("Parent render called");
//         return (
//             <div>
//                 <h1><Child name={this.state.name}/></h1>
//                 <button type="button" onClick={this.update}>Update</button>
//             </div>
//         );
//     }
// };

// export default Person;

// import React, {Component} from 'react';

// class Person extends Component {
//     constructor() {
//         super();
//         this.state = {
//             data: ""
//         }
//         console.log("constructor Called")
//     }
//     componentDidMount() {
//         setTimeout(()=>{
//             this.setState({
//                 data: "Hassan Jawed"
//             })
//         }, 1000);
//         console.log("ComponentDidMount called");
//     }
//     render() {
//         console.log("Render called");
//         return(
//             <div>
//                 <h1>Fetching Data: {this.state.data}</h1>
//                 <button type="button" onClick={()=>{this.setState({data: "ahmad"+1})}}>Update</button>
//             </div>
//         );
//     }
// };

// export default Person;


//infinite loop
// import React, {Component} from 'react';
// class Person extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         console.log("render called and count value is ", this.state.count);
//         if (this.state.count < 50) {
//         this.setState(prevState => ({
//             count: prevState.count + 1
//         }));
//         }
        
//         console.log("state Update");
//         return (
//             <div></div>
//         );
//     }
// };

// export default Person;


// import React, {Component} from 'react';

// class Person extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "Hassan",
//             ui: true
//         }
//         console.log("Constructor Called");
//     }
//     componentDidUpdate() {
//         console.log("ComponentDidUpdate called");
//         if (!this.state.ui) {
//             console.log("UI Updated and now you are logout");
//         }
//     }
//     render() {
//     console.log("Render Called");
//         return (
//             <div>
//                 <h1>NAME: {this.state.name}</h1>
//                 <button type="button" onClick={()=>{console.log("Name State update");this.setState({name: "NUMAN"})}}>Update</button>
//                 <button type="button" onClick={()=>{console.log("UI state update");this.setState({UI: false})}}>Logout</button>
//             </div>
//         );
//     }
// };

// export default Person;

// import React, {Component} from 'react';

// class Person extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "hassan"
//         }
//         console.log("Constructor Called");
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//     if(nextState.name !== "hassan") {
//         console.log(nextState);
//         console.log(this.state); 
//        return true;
//     }
//     else {
//          return false;   
//     }
        
//     }
    
//     render() {
//     console.log("Render Called");
//         return (
//             <div>
//                 <h1>Name: {this.state.name}</h1>
//                 <button type="button" onClick={()=>{this.setState({name: "NUMan"})}}>Render</button>
//             </div>
//         );
//     }
// };

// export default Person;

// import React, {Component} from 'react';

// class Child extends Component {
//     constructor(props) {
//         super(props);
//     }
//     componentWillUnmount() {
//         alert("commonent unmount")
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Child Component</h1>
//             </div>
//         );
//     }
// };


// class Person extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             childShow: true
//         }
//         this.toggle = this.toggle.bind(this);
//     }
//     toggle() {
//         this.setState({
//             childShow: !this.state.childShow
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button type="button" onClick={this.toggle}>Toggle</button>
//                 {this.state.childShow && <Child />}
//             </div>
//         );
//     }
// };

// export default Person;


// import './styles.css'
// import style from './custom.module.css';
// import { Component } from 'react';

// class Person extends Component {
//     render() {
//         const Styles = {
//             backgroundColor: "blue"
//         };
//         return (
//             <div>
//                 <h1 className="primary">Hello World</h1>
//                 <h1 style={{backgroundColor: "red"}}>Hello World</h1>
//                 <h1 style={Styles}>Hello World</h1>
//                 <h1 className={style.success}>Hello World</h1>
//             </div>
//         );
//     }
// };
    

// export default Person;

// import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Table} from 'react-bootstrap';

// class Person extends Component {
//     render() {
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
// };
// }

// export default Person;

// import React, {Component, PureComponent} from 'react';
// class Person extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 1
//         }
//     }
//     render() {
//         console.log("parent render");
//         return (
            
//             <div>
//                 <h1>Parent Component</h1>
//                 <Child />
//                 <h2>{this.state.count}</h2>
//                 <button onClick={()=>{this.setState({count: this.state.count+1})}}>Update</button>
//             </div>
//         );
//     }
// };


// class Child extends PureComponent {
//     render() {
//         console.log("child render");
//         return (
//             <h1>Hello</h1>
//         );
//     }
// }

// export default Person;

// import React, { Component } from 'react';
// class Person extends Component {
//     constructor() {
//         super();
//         this.focusRef = React.createRef();
//         this.focusRefFunc = this.focusRefFunc.bind(this);
//     }

//     focusRefFunc() {
//         this.focusRef.current.focus();
//     }

//     render() {
//         return (
//         <div>
//             <input type="email" placeholder="Enter Email" minLength={8} ref={this.focusRef} required />
//             <button type="button" onClick={this.focusRefFunc}>Focus Input</button>
            
//         </div>
//     );
//     }
// }

// export default Person;


// import React, { Component } from 'react';
// class Person extends Component {
//     constructor() {
//         super();
//         this.focusRef = React.createRef();
//         this.keydownHandler = this.keydownHandler.bind(this);
//     }


//     keydownHandler(event) {
//         if(event.key === '/') {
//         event.preventDefault();

//             if(this.focusRef.current) {
//                 this.focusRef.current.focus();
//             }
//         }
//     }

//     componentDidMount() {
//         document.addEventListener('keydown', this.keydownHandler);
//     }

//     componentWillUnmount() {
//         document.removeEventListener('keydown', this.keydownHandler);

//     }

//     render() {
//         return (
//         <div>
//             <input style={{borderRadius: 20}} type="search" placeholder="Search" ref={this.focusRef}  />
//         </div>
//         );
//     }
// }

// export default Person;



// const Child = forwardRef((props, forward) => {
//   return <input type="text" placeholder="Enter text" ref={forward} />;
// });

// import React, {createRef} from 'react';

// const Child = React.forwardRef((props,refer) => {
//     return <input type="text" ref={refer}/>
// });

// class Person extends Component {
//     constructor() {
//         super();
//         this.focusInput = createRef();
//         this.focusInputFunc = this.focusInputFunc.bind(this);
//     }
  
//     focusInputFunc() {
//         this.focusInput.current.focus();
//     };

//     render() {
//         return (
//             <div>
//               <Child ref={this.focusInput} />
//               <button onClick={this.focusInputFunc}>Focus</button>
//             </div>
//         );
//     }
// }

// export default Person;
