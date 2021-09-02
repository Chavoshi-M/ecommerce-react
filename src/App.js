import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header/Header';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/action'
import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

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
          <Route path='/signin' component={AuthenticationPage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/' component={Homepage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
