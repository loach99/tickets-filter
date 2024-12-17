import styles from './styles/Button.module.css'
interface ButtonProps {
    price: number
}
const Button = ({ price }: ButtonProps) => {
    return (
        <button className={styles.button}>
            <div>Купить </div>
            за {price} руб
        </button>
    );
}

export default Button;
