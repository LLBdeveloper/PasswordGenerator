// import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light rounded mt-5 p-5" >
            <div className="container py-4">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                        <p>Powered by <span className="fw-bold">WEB MASTER STUDIO</span> ® | Copyright 2024 ©</p> 
                        <p>Todos los Derechos Reservados</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end mt-3 mt-md-0 d-flex justify-content-center align-items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/eshopreactcoder2.appspot.com/o/wmsLogo.png?alt=media&token=087124e0-573e-485b-af1f-8e8214829392" className="rounded" alt="WMS Logo" style={{ maxWidth: '200px' }} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;