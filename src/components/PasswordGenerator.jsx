import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const PasswordGenerator = ({handleClick, password}) => {
    
    const [loading,setLoading]= useState(false)
    
    useEffect(() => {
        setLoading(true)

        console.log('spinner prendido')
        
    },[] );


    useEffect(() =>{
        setTimeout(() => {
            setLoading(false)
            console.log('spinner apagado')
        }, 1500);
    },)

    return (
        <div >
            {
                loading ? (
                    <div>
                        <Spinner animation="grow" variant="success" className='m-5'/>-
                        <Spinner animation="border" variant="success" className='m-5'/>-
                        <Spinner animation="grow" variant="success" className='m-5'/>-
                        <Spinner animation="border" variant="success" className='m-5'/>-
                        <Spinner animation="grow" variant="success" className='m-5'/>-
                        <Spinner animation="border" variant="success" className='m-5'/>-
                    </div>
                    ) : (
                            <div className="container mt-5 border border-dark p-5 rounded-circle bg-dark">
                                <h1 className="display-4 text-center m-5 text-white fw-bold">Secure Password Generator</h1>
                                <p className="lead text-center m-5 bg-secondary p-5 rounded-circle ">
                                    It is crucial to use strong and unique passwords for your online accounts
                                    to protect your sensitive information from unauthorized access. 
                                    This password generator tool helps you create secure passwords that
                                    meet the recommended criteria for strength and complexity.
                                </p>
                                <div className="text-center">
                                    <button className="btn btn-success btn-lg p-3" onClick={handleClick}>
                                        <span className='m-3'>Generate PASSWORD</span>                                    
                                        <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                    </button>
                                </div>
                                    {password && (
                                        <div className="alert alert-dark mt-4 fs-3 rounded " role="alert">
                                            Your secure password is: <p className='fw-bold'>{password}</p>
                            </div>
                        )}
                    </div>
                )
            }
        </div>
        
    )
}

export default PasswordGenerator




