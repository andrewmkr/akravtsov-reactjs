import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

import './App.css';
import Header from '../components/Header';
import CardList from '../components/CardList';
import NavBar from '../components/NavBar';
import LoginPage from '../components/LoginPage';
import PageNotFound from '../components/PageNotFound';
import FullCard from '../components/FullCard';
import Settings from '../components/Settings';
import { fetchData } from '../store/cards';
import { getSession } from '../store/auth';


function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(getSession());
  },[dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => 
          <div>
            <Header>
              Приветствую, {state.auth.user.userName || 'Гость'}
            </Header>
            <CardList />
          </div>
        } />
        <Route path="/card/:id" exact component={FullCard} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/settings" exact component={Settings} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
