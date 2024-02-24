import React, { useState } from 'react';

function TrafficLight () {

    const [ state, setState ] = useState(          null        );

    console.log(state);

    return <div>
        <div id='poste_semáforo'></div>
        <div id='cabeza_de_semáforo'>
        <div className={`luz roja ${state.red ? 'selected' : ''}`} onClick={() => setState({ red: true, yellow: null, green: null })}></div>
        <div className={`luz amarilla ${state.yellow ? 'selected' : ''}`} onClick={() => setState({ red: null, yellow: true, green: null })}></div>
        <div className={`luz verde ${state.green ? 'selected' : ''}`} onClick={() => setState({ red: null, yellow: null, green: true })}></div>
        </div>
    </div>
}

export default TrafficLight; 
