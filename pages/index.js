import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list'
function HomePage() {
  const filteredEvents = getFeaturedEvents()
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  )
}

export default HomePage
