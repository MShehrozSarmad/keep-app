import './button.component.styles.css';

const Button = ({type, clickFunc}) => {
    return <button onClick={clickFunc} >{type}</button>
}

export default Button;