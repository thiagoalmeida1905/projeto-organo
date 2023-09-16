import './ListaSuspensa.css'
import {useState} from 'react';

const ListaSuspensa = (props) => {

    return (
        <div className="lista-suspensa">
            <label id='titulo'>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}> 
                <option value=""></option>
                {props.itens.map(item => { return <option key={item}>{item}</option>})}
            </select>
        </div>
    )
}

export default ListaSuspensa