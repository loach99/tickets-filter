import { useEffect, useState } from 'react';
import { stopsListCheckBox, tickets } from '../../constants';
import Checkbox from '../Checkbox/Checkbox';
import CurrencyButton from '../CurrencyButtton/CurrencyButton';
import { TicketProps } from '../Ticket/Ticket';
import styles from './styles/Filter.module.css'
interface FilterProps {
    setTickets: (tickets: TicketProps[]) => void,
}
const Filter = ({ setTickets}: FilterProps) => {
    const [filterArr, setFilterArr] = useState<string[]>([]);

    const handleChexboxChange = (stops: string) => {
        setFilterArr((prevSelectedIds) => {
            if (prevSelectedIds.includes(stops)) {
                return prevSelectedIds.filter((item) => item !== stops);
            }
            return [...prevSelectedIds, stops];
        });
    }
    const filterStops = () => {
        setTickets(tickets.filter((ticket) => {
            if (filterArr.length === 0) {
                return true
            }
            if (filterArr.includes('Все')) {
                return true;
            }
            if (filterArr.includes(`${ticket.stops} пересадка`) ||
                filterArr.includes(`${ticket.stops} пересадки`) ||
                (ticket.stops === 0 && filterArr.includes('Без пересадок'))) {
                return true;
            }
            return false;
        }))
    }
    useEffect(() => {
        filterStops()
    }, [filterArr])
    return (
        <div className={styles.filter_container}>
            <div className={styles.filter}>
                <span>ВАЛЮТА</span>
                <CurrencyButton />
            </div>
            <div className={styles.filter}>
                <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                <div className={styles.checkbox_container}>
                    {stopsListCheckBox.map(elem => {
                        return (<Checkbox handleChexboxChange={handleChexboxChange} filterStops={filterStops} stops={elem.name} />)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Filter;