import { useDispatch, useSelector } from "react-redux"
import {toggleImportanceOf} from '../reducers/cardReducer'

function Cards ({cards}) {
    return (<div className="cardsContainer">
        {cards.map(card => {
            return(<div key={card.id} className="card mb-3 cardShadow" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={card.card_images[0].image_url} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex p-2 justify-content-between">
                                <h5 className="card-title">{card.name}</h5>
                                <h5 className="card-title">{card.type}</h5>
                            </div>
                            <p className="card-text">{card.desc}</p>
                            <p className="float-end">Precio: {card.card_prices[0].tcgplayer_price}</p>
                        </div>
                    </div>
                </div>
        </div>
            )
        })}
    </div>)
}

export default function CardsContainer({cards, pages, paginatedCards, currentPage, pagination}) {
    //Obtener sólo la data de nuestro objeto para mostrar las cartas
    /*const dispatch = useDispatch();
    const cards = useSelector(state => state.cards.data);
    console.log("CARTAS: ", {cards})

    const toggleImportant = (id) => {
        dispatch(toggleImportanceOf(id))
    }*/

    return(<>
    {/*<nav className="d-flex justify-content-center">
        <ul className="pagination">
            {pages.map((page) => {
                 return(<li className={page === currentPage ? "page-item active" : "page-item"}>
                    <p className="page-link" onClick={()=>pagination(page)}>{page}</p>
                </li>)
            })}
        </ul>
        </nav>}*/}
    <Cards cards={cards}/>
    </>
    )
}