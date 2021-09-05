import { Component } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header/Header';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/action'
import Homepage from './pages/homepage/HomePage';
import {selectCurrrentUser} from './redux/user/selectors';

import ShopPage from './pages/shoppage/ShopPage';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import Checkout from './pages/Checkout/Checkout'; 
class  App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth)=>{ 
      if (userAuth) {
        const userRef =await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({ 
              id:snapshot.id,
              ...snapshot.data() 
          }) 
        })
      } 
      setCurrentUser(userAuth) 
    });
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
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapSttaeToProps,mapDispatchToProps)(App);
