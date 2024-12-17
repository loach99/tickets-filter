import { useState } from 'react'
import Filter from '../Filter/Filter'
import Ticket from '../Ticket/Ticket'
import { tickets } from '../../constants'
import styles from './styles/App.module.css'
function App() {
  const [ticketsList, setTickets] = useState(tickets);
  return (
    <div className={styles.app}>
      <Filter setTickets={setTickets} />
      <div className={styles.ticket_container}>
        {ticketsList.map(ticket => {
          return (<Ticket
            price={ticket.price}
            origin={ticket.origin}
            origin_name={ticket.origin_name}
            destination={ticket.destination}
            destination_name={ticket.destination_name}
            arrival_date={ticket.arrival_date}
            arrival_time={ticket.arrival_time}
            departure_date={ticket.departure_date}
            departure_time={ticket.departure_time}
            carrier={ticket.carrier}
            stops={ticket.stops}
          />)
        })}
      </div>

    </div>
  )
}

export default App
