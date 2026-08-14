import ExploreBtn from '@/components/ExploreBtn';
import EventCard from '@/components/EventCard';

const events = [
  {
    image: '/images/event1.png',
    title: 'Event 1',
    slug: 'event-1',
    location: 'location-1',
    date: 'Date-1',
    timne: 'Timne-1',
  },
  {
    image: '/images/event2.png',
    title: 'Event 2',
    slug: 'event-2',
    location: 'location-2',
    date: 'Date-2',
    timne: 'Timne-2',
  },
];

const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        The hub for every dev <br /> event you can't miss
      </h1>
      <p className="text-center mt-5">
        hackathons, meetups and conferences all in one place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
