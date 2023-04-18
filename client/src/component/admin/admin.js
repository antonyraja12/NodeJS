import React, { useEffect, useState } from "react";
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import axios from 'axios'


export function Adminedit(){

    const [datas,setDatas]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3307/studentdet")
        .then(res=>res.json())
        .then(datas=>setDatas(datas))
        console.log(datas);
    },[])
    const data_del = (s_no)=>{
        var datastring ={s_no:s_no};
        var config = {headers:{"enctype":"multipart/form-data"}};
        axios.post('http://localhost:3307/Delete',datastring,config)
        .then(function(res){
            if(res.data.status === 'error'){
                alert('error');
                window.location.reload();
            }
            else if(res.data.status === 'success'){
                alert("deleted");
                window.location.reload();
            }
        })
        .catch(function(error){
            alert(error);
            window.location.reload();
        })
    }


    return(<>

<div className="">
        <table className="table1" >
            <thead>
            <tr className="table1">
                <th>S.NO</th>
                <th>Name</th>
                <th>Place</th>
                <th>Role</th>
                <th>Salary</th>
                <th>Date Of Joining</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
           <tbody >{
            
           datas.map((value,index)=>(
    <>
            <tr>
                <td className="border">{value.s_no}</td> 
                <td className="border">{value.Name}</td>
                <td className="border">{value.Place}</td>
                <td className="border">{value.Role}</td>
                <td className="border">{value.Salary}</td>
                <td className="border">{value.DateOfJoining}</td>
                <td className="border text-center" ><Link to={`/edit/${value.s_no}`}>{<PencilSquare/>} Edit</Link></td>
                <td className="border text-center" ><button type="button" onClick={()=>{data_del(value.s_no)}}>Delete</button></td>
            </tr>
    </>
           
           
            
           ))
           }




     </tbody>     

   </table>
    </div>




    
    </>);
}