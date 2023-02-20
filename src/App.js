import { useEffect, useState } from 'react';
import './App.css';
import CardsContainer from './components/showCards'
import { getAll } from './services/cards';
import { initCards } from './reducers/cardReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import _ from "lodash"

function App() {
  const dispatch = useDispatch()
  const [cards, setCards] = useState([])
  const [paginatedCards, setPaginatedCards] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 50;

  useEffect(() => {
      //inicializar el estado de la store con las cartas
      /*getAll().then(cards => {
        dispatch(initCards(cards))
      })*/
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then(res => {
          console.log(res.data)
          setCards(res.data.data)
          setPaginatedCards(_(res.data.data).slice(0).take(pageSize).value())
        })
        .catch(err => {
          console.log(err)
        })
  }, []) //el dispatch no cambia

  /*const filterSelected = value => {
    console.log(value)
  }*/
  const pageCount = cards ? Math.ceil(cards.length/pageSize) :0;

  if (pageCount === 1) {
    return null
  }

  const pages = _.range(1, pageCount+1)

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(cards).slice(startIndex).take(pageSize).value();
    setPaginatedCards(paginatedPost)
  }

  return (
    <div className="App">
      <div>
        {/*console.log("Tarjetas", cards.data)}
        {cards.map(card => {
          return(
            <li key={card.id}>
              {card.name}
            </li>
          )
        })*/}
        <CardsContainer cards={cards} pages={pages} paginatedCards={paginatedCards} currentPage={currentPage} pagination={pagination}/>
      </div>
    </div>
  );
}

export default App;