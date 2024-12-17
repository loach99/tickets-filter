import styles from './styles/Checkbox.module.css'
interface CheckboxProps {
    stops: string;
    filterStops: (stops:string) => void;
    handleChexboxChange: (stops:string) => void
}
const Checkbox = ({stops,handleChexboxChange}:CheckboxProps) => {

    return (
        <label className={styles.custom_checkbox}>
            <input onChange={()=>handleChexboxChange(stops)} type="checkbox"/>
                <span className={styles.checkbox}></span>
                <span>{stops}</span>
        </label>
    );
}

export default Checkbox;