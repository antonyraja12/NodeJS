import React from "react";
import './register.css'
import axios from 'axios'
// import { response } from "express";



export function Registration() {
    var handlesubmit = async (event) => {
        var Datastring = new FormData(event.target);
        var config = { header: { 'enctype': 'multipart/form-data' } }

        var name = document.getElementById("name").value;
        var place = document.getElementById("place").value;
        var role = document.getElementById("role").value;
        var salary = document.getElementById("sal").value;
        var dat = document.getElementById("dat").value;
        var Nameptn = /^[a-zA-Z ]{2,30}$/;
        if (place === '' || place === 'null') {
            alert("Enter SNO")

        } else if (role === '' || role === 'null') {
            alert("role")
        } else if (salary === '' || salary === 'null') {
            alert("salary")
        }
        else if (!Nameptn.test(name)) {
            alert("enter name ")
        }
        else {

            await axios.post("http://localhost:3307/insertdata", { name, place, role, salary, dat }, config)
                .then((res) => {

                    if (res.data.status === "error") {
                        alert("error");
                        window.location.reload();
                    }
                    else if (res.data.status === "success") {
                        alert("Success");
                        window.location.reload()

                    }

                })
                .catch(function (error) {
                    alert("Catch error")
                    window.location.reload();
                })

        }

    }








    return (
        <>
            <div>


                <h1 className="text-center">Registration</h1>
                <div className="offset-lg-4  ">
                    <form onSubmit={handlesubmit} >





                        <label className="w-25 p-3">Enter Your Name</label>


                        : <input type="text" id="name" name="name" className="inputs p-2   " required /><span id="span_name" ></span><br />



                        <label className="w-25 p-3">Place</label>
                        : <input type="text" id="place" name="place" className="inputs p-2" required /><br />


                        <label className="w-25 p-3">Designation</label>
                        : <input type="text" id="role" name="role" className="inputs p-2" required /><br />

                        <label className="w-25 p-3">Salary</label>
                        : <input type="text" id="sal" name="salary" className="inputs p-2" required /><br />

                        <label className="w-25 p-3"> Date Of Joining </label>
                        : <input type="date" id="dat" name="dat" required /><br />

                        <p className="text-center"><input type="submit" value="Submit" className="btn btn-primary" /></p>



                    </form>
                </div>
            </div>

        </>
    );
}
// }