import './App.css';
import Home from './Home'
import Nav from './nav'
import Login from './login'
import Checkout from './Checkout'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {useStateVale} from './Basket'
import {auth} from './firebase'
import {useEffect} from 'react'
import { Unsubscribe } from '@material-ui/icons';
function App() {
  const [{user},dispatch]=useStateVale()
  
  
  useEffect(() => {
   const Unsubscribe= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:'setUser',
          user:authUser,
        })
      }
      else{

        dispatch({
          type:'setUser',
          user:null,
        })

      }
    })
    
    return () => {
      Unsubscribe();
      
    }
  }, [])
  
  
  return (
    <Router>
    <Nav/>
    <div className="App">
    <Switch>
    <Route path='/kui'>
<h2>Checkout</h2>
    </Route>
    <Route path='/login'>
    <Login/></Route>
    <Route exact path='/'>
    <Home/>
    </Route>
    <Route path='/Check'>
    welcome to checkout
    <Checkout/>
    </Route>
    
    </Switch>
    
    
    </div>
    </Router>
  );
}

export default App;
