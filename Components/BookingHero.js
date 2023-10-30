import ImgChef from '../Assets/restaurant chef B.jpg';

function BookingHero() {
    return(
        <section className="hero-booking">
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <h4>Find a table for any occasion</h4>
            </div>
            <img src={ImgChef} width='300px'/>
        </section>
    )
}

export default BookingHero;