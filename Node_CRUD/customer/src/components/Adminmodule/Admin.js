import React, { useEffect, useState } from "react";
import { Eye, PencilSquare, Search, Trash } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

import axios from 'axios';

export function Admin() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    //get call for fetch all data
    fetch("http://localhost:3308/getalluser")
      .then(res => res.json())
      .then(datas => setDatas(datas));
    console.log(datas);
  }, []);

  const del_data = (id) => {
    var str = { id: id };
    var config = { Headers: { 'enctype': 'multipart/form-data' } }
    axios.post("http://localhost:3308/deletecus", str, config)
      .then((res) => {
        if (res.data.status === 'error') {
          alert('error');
          window.location.reload();
        }
        else if (res.data.status === 'success') {
          alert("deleted");
          window.location.reload();
        }
      })
      .catch(function (error) {
        alert("error");
        window.location.reload();
      })
  }




  return (<>
    <div className='row p-1 m-5'>
      <h1 className='col-lg-8'>Customer Details</h1>
      <span className='col-lg-3 pt-3'> <Search /><input type="search" className='search'  /></span>
    </div>
    <div className='m-5'>
      <table >
        <thead>
          <th className="wid">#</th>
          <th className="wid">Name</th>
          <th className="wid">Address</th>
          <th className="wid">City</th>
          <th className="wid">Pincode</th>
          <th className="wid">Country</th>
          <th className="wid">Action</th>
        </thead>
        <tbody>{
          datas.map((value, index) => (
            <>
              <tr>
                <td className="border border-dark">{value.id} </td>
                <td className="border border-dark">{value.name} </td>
                <td className="border border-dark">{value.address} </td>
                <td className="border border-dark">{value.city} </td>
                <td className="border border-dark">{value.pincode} </td>
                <td className="border border-dark">{value.country} </td>
                <td className="border border-dark d-flex">
                  <Link to={`/singledata/${value.id}`} className="ms-3 nav-link text-info" ><Eye /></Link>
                  <Link to={`/edits/${value.id}`} className="ms-3 nav-link" ><PencilSquare /></Link>

                  <button className="ms-3 nav-link text-danger" onClick={() => { del_data(value.id) }} ><Trash /></button>
                </td>
              </tr>

            </>

          ))

        }
        </tbody>
      </table>


    </div>

  </>)
}