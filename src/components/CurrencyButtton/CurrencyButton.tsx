import { useState } from 'react';
import styles from './styles/CurrencyButton.module.css'
import { currencyList } from '../../constants';
const CurrencyButton = () => {

    const [active, setActive] = useState<number>(Number(localStorage.getItem('currency')));
    const setBtnToStorage = (id: number) => {
        localStorage.setItem('currency', JSON.stringify(id));
        setActive(id);
    };
    return (
        <div className={styles.button_container}>
            {currencyList?.map((currency) => (
                <button
                    key={currency.id}
                    onClick={() => setBtnToStorage(currency.id)}
                    className={active === currency.id ? styles.button_active : styles.button}>
                    {currency.name}
                </button>))}
        </div>
    );
}

export default CurrencyButton;