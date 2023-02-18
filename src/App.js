import { useEffect } from 'react';
import './App.css';
import CardsContainer from './components/showCards'
import { getAll } from './services/cards';
import { initCards } from './reducers/cardReducer';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
      //inicializar el estado de la store con las cartas
      getAll().then(cards => {
        dispatch(initCards(cards))
      })
  }, [dispatch]) //el dispatch no cambia

  const filterSelected = value => {
    console.log(value)
  }

  return (
    <div className="App">
      <div>
        all
        <input type='radio' name='filter' onChange={() => filterSelected('ALL')}/>
      </div>
      <CardsContainer />
    </div>
  );
}

export default App;