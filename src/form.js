import React from "react"
import { useState } from "react";
import './App.css'

// const Form =()=> {
//      let [name, setname] = useState("")
//      let [dept, setdept] = useState("")
//      let [rate, setrate] = useState('')

//     // const handleOnName =(e) =>{
//     //     console.log("event is" , e.target.value);
//     //     setname(e.target.value)
//     // }

//     // const handleOnDept =(e) =>{
//     //     console.log("dept is" , e.target.value);
//     //     setdept(e.target.value)
//     // }

//     // const handleOnRate =(e)=>{
//     //     setrate(e.target.value)
//     // }

//     const handleOnChange =(event)=>{
//         name = event.target.name;

//         switch(name){
//             case "name" : {
//                 console.log("name" , event.target.value);
//                 setname(event.target.value)
//                 break;
//             }
//             case "department" : {
//                 console.log("deptment" , event.target.value);
//                 setdept(event.target.value)
//                 break;
//             }

//             case "rating" : {
//                 console.log("rating" , event.target.value);
//                 setrate(event.target.value)
//                 break;
//             }

//             default : {
//                 return;
//             }
                
//         }
//      }

//     return (
//         <div>
//             <form>
//                 <div>
//                     <label >
//                         Name : &nbsp; &nbsp;
//                         <input className="input1" 
//                         type={"text"} 
//                         placeholder="type your name" 
//                         value={name}
//                         name = "name"
//                         onChange={handleOnChange}
//                         />
//                     </label>
//                 </div>
//                 <br/> <br/> 

//                 <div >
//                     <label>
//                         Department : &nbsp; &nbsp;
//                         <input className="input2"
//                         type={"text"} 
//                         placeholder="type your department" 
//                         value={dept}
//                         name ="department"
//                         onChange={handleOnChange}
//                         />
//                     </label>
//                 </div>

//                 <br/> <br/> 
//                 <div >
//                     <label>
//                         Rating : &nbsp; &nbsp;
//                         <input className="input3"
//                         type={"number"} 
//                         placeholder="give rating" 
//                         value={rate}
//                         name = "rating"
//                         onChange={handleOnChange}
//                         />
//                     </label>
//                 </div>
//                 <br/><br/>

//                 <button className="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

const Form =()=>{

    const [name, setname] = useState('')
    const [department, setdepartment] = useState('')
    const [rating, setrating] = useState('')
    const [record, setrecord] = useState([])

    // const handleOnName = (event) =>{
    //     console.log("event is" , event.target.value);
    //     setname(event.target.value);
    // }

    const handleOnSubmit =(e)=>{
      let name = e.target.name
        switch(name){
            case "name" :{
                console.log("name" , e.target.value);
                setname(e.target.value)
                break;
            }

            case "department" :{
                console.log(" proffesion is" , e.target.value);
                setdepartment(e.target.value)
                break;
            }

            case "rating" :{
                console.log(" rating is" , e.target.value);
                setrating(e.target.value)
                break;
            }

            default: {
                return;
            }
        }
    }

    const submitButton =(event) =>{
        event.preventDefault();

        // console.log(name , department , rating);
        const freshRecord = {name , department , rating , id:new Date().getTime.toString()}

        setrecord([...record , freshRecord])
        setname('')
        setdepartment('')
        setrating('')
        // console.log(freshRecord);
    }

    return (
      <div>

        <form onSubmit={submitButton}>
          <div>
            <label>
              Name : &nbsp; &nbsp;
              <input className="input1"
                type={"text"}
                placeholder="type your name"
                value={name}
                onChange={handleOnSubmit}
                name="name"
              />
            </label>
          </div>
          
          <br /> <br />

          <div>
            <label>
              department : &nbsp; &nbsp;
              <input className="input1"
                type={"text"}
                placeholder="type your field"
                value={department}
                onChange={handleOnSubmit}
                name="department"
              />
            </label>
          <div/>  
            <br /> <br />

            <div>
              <label>
                Rating : &nbsp; &nbsp;
                <input className="input1"
                  type={"number"}
                  placeholder="give rating"
                  value={rating}
                  onChange={handleOnSubmit}
                  name="rating"
                />
              </label>
            </div>
            <br /> <br /> <br />
            <button type="submit" className="submit">Submit</button>
          </div>
        </form>
        <br /> <br /> <br />

        <div className="freshRecord-div">
            {
                record.map((item) => {
                   const {name , department , rating} = item

                    return(
                        <div className="show">
                            <p>Name : {name} | Department : {department} | Rating : {rating}</p>
                        </div>
                    )
                })
            }
               
        </div>
      </div>
    );
}


export default Form