// import React from 'react';

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