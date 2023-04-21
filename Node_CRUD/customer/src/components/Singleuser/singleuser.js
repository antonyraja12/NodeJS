import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export function Singledata() {

    let { id } = useParams();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        // fetch single data to show the full details of the customer
        fetch("http://localhost:3308/singledata/" + id + '')
            .then(res => res.json())
            .then((res) => {
                setName(res[0].name);
                setAddress(res[0].address);
                setCity(res[0].city);
                setPincode(res[0].pincode);
                setCountry(res[0].country);
            })
        console.log(city)
    }, [])


    return (<>

        <div className='land'>
            <h1 className='text-center'>Customer Description</h1>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src='https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg' alt="no pic" className='container-fluid' /></div>

                <div className='col-lg-6 m-5'>
                    <h2>Name    <span className='ms-5 '>:{name}</span></h2>
                    <h2>Address <span className='ms-3'>:{address}</span></h2>
                    <h2>City _   <span className='ms-5'>:{city}</span> </h2>
                    <h2>Pincode <span className='ms-2'>:{pincode}</span> </h2>
                    <h2>Country <span className='ms-2'>:{country}</span> </h2>
                    <h2>Description</h2>from ......
                </div>
            </div>

        </div>


    </>)
}