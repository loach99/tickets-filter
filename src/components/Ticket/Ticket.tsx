import Button from '../Button/Button';
import styles from './styles/Ticket.module.css'
import logo from '../../assets/Turkish_Airlines_logo_2019_compact.svg.png'
export interface TicketProps {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
}
const Ticket = ({ origin, origin_name, destination, destination_name, departure_date, departure_time, arrival_date, arrival_time, stops, price }: TicketProps) => {
    function parseDate(dateString: string):string {
        const [day, month, year] = dateString.split('.');
        const formattedDate = `20${year}-${month}-${day}`;
        const date = new Date(formattedDate);
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'short',  
            day: '2-digit',  
            month: 'long', 
            year: 'numeric',
        };
        const formatted = new Intl.DateTimeFormat('ru-RU', options).format(date);
        return formatted;
    }
    return (
        <div className={styles.ticket_container}>
            <div className={styles.ticket_header}>
                <div className={styles.ticket_logo}>
                    <img src={logo} alt="" />
                </div>
                <Button price={price} />
            </div>
            <div className={styles.ticket_body}>
                <div className={styles.ticket_info}>
                    <div className={styles.ticket_info_item}>
                        <span className={styles.ticket_time}>{departure_time}</span>
                        <div className={styles.ticket_airport}>
                            <span>{origin_name},</span>
                            <span>{origin}</span>
                            <div>{parseDate(departure_date)}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.stops_container}>
                    <div className={styles.stops}>
                        {stops <= 0 ? 'Без пересадок' : stops <= 1 ? '1 пересадка' : `${stops} пересадки`}
                    </div>
                </div>
                <div className={styles.ticket_info}>
                    <div className={styles.ticket_info_item}>
                        <span className={styles.ticket_time}>{arrival_time}</span>
                        <div className={styles.ticket_airport}>
                            <span>{destination_name}</span>
                            <span>{destination}</span>
                            <div>{parseDate(arrival_date)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ticket;