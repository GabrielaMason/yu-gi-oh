import { useDispatch, useSelector } from "react-redux"
import {toggleImportanceOf} from '../reducers/cardReducer'

function Cards ({cards, toggleImportant}) {
    return (<div className="cardsContainer">
        {cards.map((card, index) => {
            <div key={index} className="card mb-3 cardShadow" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={card.card_images.image_url} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex p-2 justify-content-between">
                                <h5 className="card-title">{card.name}</h5>
                                <h5 className="card-title">{card.type}</h5>
                            </div>
                            <p className="card-text">{card.desc}</p>
                            <p className="float-end">{card.card_prices.tcgplayer_price}</p>
                        </div>
                    </div>
                </div>
        </div>
        })}
    </div>)
}

export default function CardsContainer() {
    //Obtener sólo la data de nuestro objeto para mostrar las cartas
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards.data);
    console.log("CARTAS: ", {cards})

    const toggleImportant = (id) => {
        dispatch(toggleImportanceOf(id))
    }

    return(
        <Cards cards={cards} toggleImportant={toggleImportant} />
    )
}