import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


export function Editmodule() {
    let { id } = useParams();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        //fetch data from data base using id
        fetch("http://localhost:3308/edits/" + id + '')
            .then(res => res.json())
            .then((res) => {
                setName(res[0].name);
                setAddress(res[0].address);
                setCity(res[0].city);
                setPincode(res[0].pincode);
                setCountry(res[0].country);
            })
        console.log(name)
    }, [])

    const updates = async (event) => {
        event.preventDefault();
        var config = { header: { "enctype": "multipart/form-data" } };
        //Insertion  API  after update  (update)
        await axios.put('http://localhost:3308/updateuser/' + id + '', { name, address, city, pincode, country })
            .then((res) => {
                if (res.data.status === "error") {
                    alert("error");
                    window.location.reload();
                }
                else if (res.data.status === "success") {
                    alert("updated");
                    window.location.href = "/admin";
                }
            }, [])
            .catch((error) => {
                alert("API NOT Called")
            })

    }
    return (<>

        <div>


            <h1 className="text-center">Updatation Form</h1>
            <div className="  lands  " style={{ paddingLeft: '30%' }}>
                <form onSubmit={updates}>





                    <label className="w-25 p-3">Update Your Name</label>


                    : <input type="text" id="name" name="name" className="inputs p-2" value={name} onChange={(e) => setName(e.target.value)} required /><span id="span_name" ></span><br />



                    <label className="w-25 p-3">Address</label>
                    : <input type="text" id="address" name="address" className="inputs p-2" value={address} onChange={(e) => setAddress(e.target.value)} required /><br />


                    <label className="w-25 p-3">City</label>
                    : <input type="text" id="city" name="city" className="inputs p-2" value={city} onChange={(e) => setCity(e.target.value)} required /><br />

                    <label className="w-25 p-3">pincode</label>
                    : <input type="tel" id="pincode" name="pincode" className="inputs p-2" value={pincode} onChange={(e) => setPincode(e.target.value)} required /><br />

                    <label className="w-25 p-3"> Country</label>
                    : <input type="text" id="country" name="country" className="inputs p-2" value={country} onChange={(e) => setCountry(e.target.value)} required /><br />

                    <p className="offset-lg-3"><input type="submit" value="UPDATE" className="btn btn-primary" /></p>



                </form>
            </div>
        </div>

    </>);
}