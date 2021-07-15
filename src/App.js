import { useState } from 'react';
import './App.css';
import SearchBar from './components/search-bar/search-bar';
import MsgList from './components/msg-list/msg-list';
import BtnAction from './components/btn-action/btn-action';

const INITIAL_DATA = [
  {id: 0, content: 'Hello'},
  {id: 1, content: 'World'},
  {id: 2, content: 'Riri'},
  {id: 3, content: 'Fifi'},
  {id: 4, content: 'Zaza'}
]

function App() {

  const [data, setData] = useState(INITIAL_DATA);
  const [filtre, setfiltre] = useState('');

  const handleSearch = (search) => {
    console.log(search);
    setfiltre(search);
  };

  const handleAdd = () => {
    const newId = Math.max(...data.map(d => d.id)) +1;
    const newElement = {id: newId, content: 'Test'};

    setData(data => [...data, newElement]);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      <h2>La liste</h2>
      <BtnAction onAction={handleAdd}/>
      <MsgList msgs={data} filtre={filtre}/>
    </div>
  );
}

export default App;
