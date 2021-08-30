import { Route, Switch } from 'react-router-dom';
import './App.css'; 
import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
