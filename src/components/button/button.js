import alertLabelValue from './buttonAlert'

const Button = ({label}) =>{
    return <button onClick={() => alertLabelValue(label)}>{label}</button>
}

export default Button