
import Btn from '../bottone/Btn';
import img from '../../assets/koda.png';

export default function CreateImgCard() {
    return (
        <div className='imgcard'>
            <img src={img} alt="descrizione immagine" />
            <div className="description">
                <h3>My favorite Disney movie</h3>
                <p>Descrizione</p>
                <Btn /> {Btn}
            </div>
        </div>
    );
}
