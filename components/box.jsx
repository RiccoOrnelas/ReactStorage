/* eslint-disable react/prop-types */
import '../src/App.css'
export default function Box(props) {
    return (
        <div className='box'>
            <p style={{ height: '20%', color: 'aqua', fontWeight: 'bold' }}>{props.name}</p>
            <hr style={{ width: '100%', fontWeight: 'bold' }}></hr>
            <h1 style={{ height: '80%' }}> {props.quant} </h1>
        </div>

    )
}