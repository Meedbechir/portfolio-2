import React from 'react';
import photo11 from '../Images/photo11.png';
import photo12 from '../Images/photo12.png';
import photo13 from '../Images/photo13.png';
import photo14 from '../Images/photo14.png';

const Logos = () => {
  return (
    <div className='container py-5 logos'>
        <div className="row">
            <div className="col-sm-3 text-center">
                <div className="icon">
                    <img src={photo11} alt="Icon" />
                </div>
            <h3 className='text-white'>18 Projets</h3>
            </div>
            <div className="col-sm-3 text-center">
                <div className="icon">
                    <img src={photo12} alt="Icon" />
                </div>
            <h3 className='text-white'>30 Algorithmes</h3>
            </div>
            <div className="col-sm-3 text-center">
                <div className="icon">
                    <img src={photo13} alt="Icon" />
                </div>
            <h3 className='text-white'>10 console.log</h3>
            </div>
            <div className="col-sm-3 text-center">
                <div className="icon">
                    <img src={photo14} alt="Icon" />
                </div>
            <h3 className='text-white'>16 border : solid red 1px</h3>
            </div>
        </div>
    </div>
  )
}

export default Logos