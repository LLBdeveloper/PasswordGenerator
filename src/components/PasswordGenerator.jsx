import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './PasswordGenerator.css'
import { Container } from 'react-bootstrap';


const PasswordGenerator = ({handleClick, password}) => {
    
    const [loading,setLoading]= useState(false)
    
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    useEffect(() => {
        setLoading(true)

        console.log('spinner prendido')
        
    },[] );


    useEffect(() =>{
        setTimeout(() => {
            setLoading(false)
            console.log('spinner apagado')
        }, 2000);
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
                            <Container className={hovered ? 'boton hover' : 'boton '}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                                <div className="container mt-5 border border-dark p-5 rounded-circle bg-dark cajaMain '">
                                    <p className="lead text-center m-5 bg-secondary p-5 rounded-circle fs-5 fw-bold">
                                        It is crucial to use strong and unique passwords for your online accounts
                                        to protect your sensitive information from unauthorized access. 
                                        This password generator tool helps you create secure passwords that
                                        meet the recommended criteria for strength and complexity.
                                    </p>
                                    <div className="text-center">
                                        <button className="btn btn-success btn-lg p-3" onClick={handleClick}>
                                            <span className='m-3 fw-bold'>Generate PASSWORD</span>                                    
                                            <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                        {password && (
                                            <div className="alert alert-dark mt-4 fs-3 rounded " role="alert">
                                                Your secure password is: <p className='fw-bold'>{password}</p>
                                            </div>
                                        )}
                                </div>
                            </Container>
                    )
            }
        </div>
        
    )
}

export default PasswordGenerator




