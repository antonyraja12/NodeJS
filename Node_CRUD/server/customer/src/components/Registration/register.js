import React from "react";
import axios from 'axios'




export function Register() {
    var formsubmit = async (event) => {
        var config = { header: { 'enctype': 'multipart/form-data' } }

        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var pincode = document.getElementById("pincode").value;
        var country = document.getElementById("country").value;
        console.log(name);
        var Nameptn = /^[a-zA-Z ]{2,30}$/;
        if (address === '' || address === 'null') {
            alert("Enter SNO")

        } else if (city === '' || city === 'city') {
            alert("city field required input")
        } else if (pincode === '' || pincode === 'null') {
            alert("pincode field is empty")
        }
        else if (!Nameptn.test(name)) {
            alert("enter your name properly")
        }
        else {
            // insertion API to get details from Customer ;
            await axios.post("http://localhost:3308/insertdata", { name, address, city, pincode, country }, config)
                .then((res) => {

                    if (res.data.status === "error") {
                        alert("error");
                        window.location.reload();
                    }
                    else if (res.data.status === "success") {
                        alert("Success");
                        window.location.href = '/'

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
                <div className="  lands  " style={{ paddingLeft: '30%' }}>
                    <form onSubmit={formsubmit} >





                        <label className="w-25 p-3">Enter Your Name</label>


                        : <input type="text" id="name" name="name" className="inputs p-2   " required /><span id="span_name" ></span><br />



                        <label className="w-25 p-3">Address</label>
                        : <input type="text" id="address" name="address" className="inputs p-2" required /><br />


                        <label className="w-25 p-3">City</label>
                        : <input type="text" id="city" name="city" className="inputs p-2" required /><br />

                        <label className="w-25 p-3">pincode</label>
                        : <input type="tel" id="pincode" name="pincode" className="inputs p-2" required /><br />

                        <label className="w-25 p-3"> Country</label>
                        : <input type="text" id="country" name="country" className="inputs p-2" required /><br />

                        <p className="offset-lg-3"><input type="submit" value="Submit" className="btn btn-primary" /></p>



                    </form>
                </div>
            </div>

        </>
    );
}
