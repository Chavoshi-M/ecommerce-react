import { Component } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header/Header';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import { connect } from 'react-redux';
 import Homepage from './pages/homepage/HomePage';
import {selectCurrrentUser} from './redux/user/selectors';

import ShopPage from './pages/shoppage/ShopPage';
import Checkout from './pages/Checkout/Checkout'; 
import { checkUserSession } from './redux/user/action';

class  App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount(){ 
    this.props.checkUserSession();
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exect path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<AuthenticationPage/>)}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/' component={Homepage}/>
        </Switch>
      </div>
    );
  }
}

const mapSttaeToProps = (state)=>({
  currentUser:selectCurrrentUser(state)
}) 
const mapDispatchToProps = dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
})
export default connect(mapSttaeToProps,mapDispatchToProps)(App);
