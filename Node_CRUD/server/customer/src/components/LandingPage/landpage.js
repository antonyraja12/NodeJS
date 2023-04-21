import react from 'react'
import './land.css'
import { Link } from 'react-router-dom';


export function Landpage() {
    return (<>
        <div className='land text-center row '>
            <div className='col-lg-5 m-3 '>
                <h1 className='text-light'>Welcome  All</h1>
                <h3 className='text-light pt-2'>We offer the finest solutions to your problems.  </h3>
                <h3 className='text-light pt-2'> We are skilled professionals who can convey your ideas.</h3>
                <p className='text-center'><button className='btn btn-outline-dark'>
                    <Link to='/register' className='nav-link'> Register </Link>
                </button></p>

            </div>
            <div className='col-lg-6 m-3'>
                <img src='https://d3nn873nee648n.cloudfront.net/900x600/10833/220-SM308911.jpg' alt='no pic' className='col-11' />

            </div>


        </div>


    </>);
}