import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header/Header';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import {auth} from './firebase/firebase.utils';

class  App extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(  (user)=>{
        if(user){
          this.setState({currentUser:user})
          
        }
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route path='/signin' component={AuthenticationPage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/' component={Homepage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
