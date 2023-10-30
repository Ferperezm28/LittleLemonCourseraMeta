import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero-main">
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem V Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                <button><Link to='/Booking'>Reserve a table</Link></button>
            </div>
            <img src={require('../Assets/restauranfood.jpg')} width='300px' />
        </section>
    )
}

export default Hero;