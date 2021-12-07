import { Item } from '../../Item';
import './styles.css';

export const HomePage = () => {
    return (
        <div className="home-page">
            <Item name="Wilbur" image="https://upload.wikimedia.org/wikipedia/commons/0/0e/Wilbur_Soot_2020.jpg" price="$69.420" shortDescr="Wilbur Soot is a musician and minecraft twitch streamer." isOwned={false} id={12}/>
        </div>
    )
}