import React from 'react';
import './styles.scss';
class Coverpage extends React.Component {
    render(){
        return(          
            <div className="cover-page" id="cover">
                <div className="page">
                    <div className="text">   
                        <span className="original">Original de COURFLIX</span>
                        <p className="title">BLACK SUMMER</p>
                        <span className="sub-title-mobile">2019 - +16 - Temporada</span>
                        <div className="buttons">
                                <button class="play"> Reproducir </button>
                                <a href="#" class="list"> + mi lista </a>    
                        </div>
                        
                        <span className="look">Ve la temporada 1</span>
                        <p className="description">Una ansiada luna de miel. Un asesinato terrible.Varios sospechosos. Si sobreviven seran unas vacaiones de ensueño.</p>
                    </div>
                </div >
            </div>         
        )
    }
}

export default Coverpage;