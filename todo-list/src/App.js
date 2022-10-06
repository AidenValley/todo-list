import './App.css';
import ListItem from './components/ListItem';
import MyList from './components/MyList';

function App() {
  const toDos =['Cook for Dinner', 'Go to the Gym', 'Do the Laundry'];
  return (
    <div className="App">
      <MyList theList={toDos}/>
    </div>
  );
}

export default App;
