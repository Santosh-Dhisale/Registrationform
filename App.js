import React,{useState} from 'react';

const Registrationform = () => {

   const [userRegistration, setuserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
   });

   const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setuserRegistration({...userRegistration, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userRegistration, id: new Date().getTime().toString()}

    setRecords([ ...records, newRecord])
  }
  return (
    <center>
      <>
    <form action="" onSubmit={handleSubmit}>
    <br/><br/>
      <div>
        <label htmlFor="username">Fullname :-</label>
        <input type="text" autoComplete="off" value={userRegistration.username} 
        onChange={handleInput}
        name="username" id="username"/>
      </div><br/>

      <div>
        <label htmlFor="username">emil :-</label>
        <input type="text" autoComplete="off" value={userRegistration.email} 
        onChange={handleInput}
        name="email" id="email"/>
      </div> <br/>

      <div>
        <label htmlFor="username">phone :-</label>
        <input type="text" autoComplete="off" value={userRegistration.phone} 
        onChange={handleInput}
        name="phone" id="phone"/>
      </div><br/>

      <div>
        <label htmlFor="username">password :-</label>
        <input type="text" autoComplete="off" value={userRegistration.password} 
        onChange={handleInput}
        name="password" id="password"/>
      </div>
      <br/>

<button type="submit">Registration</button>

    </form>
    <div>
      {
        records.map((curElem) =>{
          return (
            <div className="showDataStyle" >
              <p>{curElem.username}</p>
              <p>{curElem.email}</p>
              <p>{curElem.phone}</p>
              <p>{curElem.password}</p>
            </div>
          )
        })
      }
    </div>
    </>
    </center>
  );
}

export default Registrationform;








//  import React , {useState , useEffect} from "react";

// const  App = () =>{

//  const [name,setName] = useState();
//  const [email,setEmail] = useState();
//  const [Course,setCourse]=useState();
//  const [users ,setUsers]=useState([])

//  const handleSubmit = (e) =>{
//    e.preventDefault();
//    users.splice(1,0,name);
//    console.log(users);
//  }
      
//   return(
//       <center>
//     <div className="mainDive">
//       <h2>Registration form</h2>
//       <form onSubmit={handleSubmit}>
//       <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/><br></br>
//       <input type="email" placeholder='Enter your email'value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
//       <select value={Course} onChange={(e)=>setCourse(e.target.value)}>
//         <option value="React">React</option>
//         <option value="HTML">HTML</option>
//         <option value="CSS">CSS</option>
//         <option value="Javascript">Javaript</option>
//         </select><br></br>
//       <button type="Submit">Submit</button><br></br>
//       </form>
//       <br></br>
//       <h2>Users Available</h2>
//       <ol>
//         {
//           users.map((user,index) => <li key={index}>{user}</li>)
//         }
//       </ol>
//     </div>
//     </center>
// )
// }

// export default App;


