function Plate(props) {
    return(
        <article className="plate-card">
            <img className='img-plate' src={props.image}/>
            <div>
                <div>
                    <h4>{props.plate}</h4>
                    <h4>{props.price}</h4>
                </div>
                <p>{props.description}</p>
                <div>
                    <h6>Order delivery +1</h6>
                    <img src={require('../Assets/Dish icon.svg')} />
                </div>
            </div>
        </article>
    )
}

export default Plate;