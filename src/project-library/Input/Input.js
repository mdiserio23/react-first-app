import styles from './Input.module.css'

const Input = props => {

    return (
        <input type={props.type} value={props.value} onChange={props.onChange} className={styles.input}/>
    )
};

export default Input;