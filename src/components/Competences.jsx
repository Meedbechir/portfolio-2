import React from 'react';

const Competences = () => {
  return (
    <div className='container py-5'>
        <h1 className="text-center fw-bolder">Mes Compétences</h1>
        <div className="row py-5">
            <div className="col-lg-5 col-md-5 text-end">
                <h2>Outils</h2>
                <div className="row">
                    <div className="col-md-8">
                    <div className="progress">
                         <div className="progress-bar bg-info" role="progressbar" style={{width:'30%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <p className='lead'>Bootstrap</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                    <div className="progress">
                         <div className="progress-bar bg-info" role="progressbar" style={{width:'40%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <p className='lead'>Laravel</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                    <div className="progress">
                         <div className="progress-bar bg-info" role="progressbar" style={{width:'50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <p className='lead'>React</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                    <div className="progress">
                         <div className="progress-bar bg-info" role="progressbar" style={{width:'60%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <p className='lead'>Diango</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-2">

            </div>
            <div className="col-lg-5 col-md-5">
                <h2>Language</h2>
                <div className="row">
                    <div className="col-md-4">
                        <p className='lead'>Html</p>
                    </div>
                    <div className="col-md-8">
                    <div className="progress">
                         <div className="progress-bar bg-info" role="progressbar" style={{width:'30%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p className='lead'>Css</p>
                    </div>
                    <div className="col-md-8">
                    <div className="progress">
                         <div className="progress-bar bg-info" role="progressbar" style={{width:'30%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p className='lead'>Javascript</p>
                    </div>
                    <div className="col-md-8">
                    <div className="progress">
                         <div className="progress-bar bg-info" role="progressbar" style={{width:'30%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p className='lead'>Php</p>
                    </div>
                    <div className="col-md-8">
                    <div className="progress">
                         <div className="progress-bar bg-info" role="progressbar" style={{width:'30%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                </div>
            </div>            
        </div>
        <div className="row mt-5">
            <div className="col-lg-5 text-end">
                <h1>LANGUES</h1>
                <ul className='list-unstyled'>
                    <li className='lead'>FRANCAIS</li>
                    <li className='lead'>ANGLAIS</li>
                    <li className='lead'>POULLAR</li>
                </ul>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
                <h1>HOBBIES</h1>
                <ul className='list-unstyled'>
                    <li className='lead'>Football</li>
                    <li className='lead'>Gaming</li>
                    <li className='lead'>Having fun</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Competences;
