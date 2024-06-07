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