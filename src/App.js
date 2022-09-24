import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useEffect } from 'react';
import Counter from "components/Counter"
import ShowResult from 'components/ShowResult';
import { Provider } from 'react-redux'
import {store} from "redux/store";
import Users from "components/Users"

function App() {

 


  return (
    <Provider store={store}>
    <div className="App">
      
      <Counter />
      <ShowResult />
      <Users />

      
      
    </div>
    </Provider>
  );
}

export default App;
