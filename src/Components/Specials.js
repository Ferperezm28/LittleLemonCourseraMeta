import Plate from './Plate.js';
import Button from './Button.js';
import greekSalad from '../Assets/greek salad.jpg';

function Specials() {
    return(
        <section className='special-section'>
            <h3>Specials</h3>
            <Button title='Online menu'/>
            <div>
                <Plate 
                image={greekSalad}
                plate='Greek Salad'
                price='$12.99'
                description='Lorem ipsum dolor sit amet consectetur adipiscing elit, metus sed hac ac blandit ultrices in penatibus, risus aliquam odio vel dignissim quis.'
                />
                <Plate 
                image={greekSalad}
                plate='Greek Salad'
                price='$12.99'
                description='Lorem ipsum dolor sit amet consectetur adipiscing elit, metus sed hac ac blandit ultrices in penatibus, risus aliquam odio vel dignissim quis.'
                />
                <Plate 
                image={greekSalad}
                plate='Greek Salad'
                price='$12.99'
                description='Lorem ipsum dolor sit amet consectetur adipiscing elit, metus sed hac ac blandit ultrices in penatibus, risus aliquam odio vel dignissim quis.'
                />
            </div>
        </section>
    )
}

export default Specials;