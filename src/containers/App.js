import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './App.css';
import Header from '../components/Header';
import CardList from '../components/CardList';
import NavBar from '../components/NavBar';
import LoginPage from '../components/LoginPage';
import PageNotFound from '../components/PageNotFound';
import FullCard from '../components/FullCard';
import { fetchData } from '../store/cards';


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchData());
  },[dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => 
          <div>
            <Header>Покемоны</Header>
            <CardList />
          </div>
        } />
        <Route path="/card/:id" exact component={FullCard} />
        <Route path="/login" exact component={LoginPage} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
