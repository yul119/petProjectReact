import React, {useState, useEffect} from 'react'
import './style.css'
import Values from 'values.js'
import { Row, Col } from 'reactstrap';

//rgb to hex
function componentToHex(c) {
var hex = c.toString(16);
return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const Colors = () => {
    const [color, setColor] = useState('')
    const [colors, setColors] = useState(new Values('#45d1ed').all(10))
    const [hex, setHex] = useState(colors.map( cl => rgbToHex(cl.rgb[0],cl.rgb[1],cl.rgb[2])))
    const [err, setErr] = useState(false)

    useEffect(()=>{
        setHex(colors.map( cl => rgbToHex(cl.rgb[0],cl.rgb[1],cl.rgb[2])))
    },[colors])

    useEffect(()=>{
        if(err){
            setColor('')
            setColors(new Values('#45d1ed').all(10))
            alert('Please enter the correct form!')
            setErr(false)
        }
    },[err])

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            setColors(new Values(color).all(10))
            setColor('')
            setErr(false)
        } catch (error) {
            setErr(true)
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type='text '
                    placeholder='#xxxxxx'
                    value={color}
                    onChange={ e =>setColor(e.target.value)}
                />
                <input type='submit' value='Submit'/>
            </form>
            <Row>
                {
                    colors.map((cl,i) => {
                        const style={
                            'backgroundColor': hex[i],
                            'height': '150px',
                            'padding': '10px'
                        }
                        return <Col sm="3" style={style}
                                onClick={()=>navigator.clipboard.writeText(hex[i])}
                                className='color'
                                >
                                <p>{hex[i]}</p>
                            </Col>
                    })
                }
            </Row>
        </div>
    )
}

export default Colors
