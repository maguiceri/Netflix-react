import React from 'react';
import logo from '../../base/img/breakingbadlogo.png'
import hand from '../../base/img/hand.png'
import "./styles.scss"
class CoverPageB extends React.Component {
    render(){
        return(
           <div className="coverPage">
               <div className="page">
                    <div className="text">
                        <img className="im" src={logo}></img>
                        <div className="statistics"><span className="coincidence">95% de coincidencia</span><span className="year">2016 </span> <div className="adult">16+</div> <span className="season">5 temporadas</span></div>
                        <div className="buttons">
                            <button className="play">Reproducir</button>
                            <a href="#" className="list"> + mi lista</a> 
                            <img className="hand" src={hand}></img>
                        </div>
                    </div>                
                </div>
           </div>
        )
    }
}

export default CoverPageB;