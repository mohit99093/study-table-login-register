import React from 'react'
import './Sec1.scss'

export default function Sec1(props) {
    return (
        <div className="sec1" style={{backgroundImage:`url(${props.image})`}} >
            <h1>{props.title}</h1>
        </div>
    )
}
