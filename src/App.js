import { Route, Switch } from 'react-router-dom';
import './App.css'; 
import Homepage from './pages/homepage/HomePage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
