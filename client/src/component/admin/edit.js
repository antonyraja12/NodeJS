import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export function Editmodule(){
    
    
    let {s_no}=useParams();


    const [Name,setName]=useState('');
    const [Place,setPlace]=useState('');
    const [Role,setRole]=useState('');
    const[Salary,setSalary]=useState('');
    const[DateOfJoining,setDateOfJoining]=useState('');
    useEffect(()=>{
        fetch("http://localhost:3307/edit/"+s_no+'')
        .then(res=>res.json())
        .then((res)=>{ 
            setName(res[0].Name)
            setPlace(res[0].Place)
            setRole(res[0].Role)
            setSalary(res[0].Salary)
            setDateOfJoining(res[0].DateOfJoining)
        })
        
        console.log(DateOfJoining)
        
    },[])

        const submission = async(event)=>{
            event.preventDefault();
            var datastring = new FormData(event.target)
            var config={header:{"enctype":"multipart/form-data"}};

            
            await axios.put("http://localhost:3307/updated/"+s_no+'',{Name,Place,Role,Salary,DateOfJoining},config)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("error");
                    window.location.reload();
                }
                else if(res.data.status==="success"){
                    alert("updated");
                    window.location.href='/adminedit'
                }
            },[])
            .catch((error)=>{
                alert("Catch error")
                window.location.reload();
            })

        }
    return(

        <>
          <div>


<h1 className="text-center">Registration</h1>
<div className="offset-lg-4  ">
    <form onSubmit={submission} >






        <label className="w-25 p-3">Enter Your Name</label>


        : <input type="text" id="name" name="name" className="inputs p-2"value={Name} onChange={(e)=>setName(e.target.value)} required /><span id="span_name" ></span><br />



        <label className="w-25 p-3">Place</label>
        : <input type="text" id="place" name="place" className="inputs p-2" value={Place} onChange={(e)=>setPlace(e.target.value)} required /><br />


        <label className="w-25 p-3">Designation</label>
        : <input type="text" id="role" name="role" className="inputs p-2" value={Role} onChange={(e)=>setRole(e.target.value)} required /><br />

        <label className="w-25 p-3">Salary</label>
        : <input type="text" id="sal" name="salary" className="inputs p-2" value={Salary} onChange={(e)=>setSalary(e.target.value)} required /><br />

        <label className="w-25 p-3"> Update the Joining Date </label>
        <input type="text" value={DateOfJoining}/>
        : <input type="date" id="dat" name="DateOfJoining"  onChange={(e)=>setDateOfJoining(e.target.value)} required /><br />

        <p className="text-center"><input type="submit" value="Update" className="btn btn-primary" /></p>



    </form>
</div>
</div>


        </>
    );
}