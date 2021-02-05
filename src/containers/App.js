import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from '../components/Header';
import CardList from '../components/CardList';
import CardContextComponent from '../context/card-context';
import NavBar from '../components/NavBar';
import LoginPage from '../components/LoginPage';
import PageNotFound from '../components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <CardContextComponent>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact render={() => 
              <div>
                <Header>Покемоны</Header>
                <CardList />
              </div>
            } />
            <Route path="/login" exact component={LoginPage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>  
      </CardContextComponent>
    </BrowserRouter>
  );
}

export default App;
