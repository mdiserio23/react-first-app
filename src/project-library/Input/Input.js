import styles from './Input.module.css'

const Input = props => {

    return (
        <input type={props.type} className={styles.input}/>
    )
};

export default Input;