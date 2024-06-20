import './styles.css';
import carImg from '../../assets/car-card 1 (1).png';

export default function CardCar () {
    return (
        <div className='tc-card-car'>
            <img src={carImg} alt="car" />
            <h3>Lore ipsum dolor</h3>
        </div>
    );
}