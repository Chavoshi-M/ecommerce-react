import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header/Header';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class  App extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth)=>{ 
      if (userAuth) {
        const userRef =await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          }) 
        })
      }
      console.log('userAuth',userAuth);
      this.setState({currentUser:userAuth})
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
