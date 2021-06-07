import React  from "react";
import { Route , Switch} from 'react-router-dom';
import Allmeetup from './components/pages/Allmeetup';
import Favorite from './components/pages/Favorite';
import Newmeetup from './components/pages/Newmeetup';

function App() {
  return (
    <Switch>
        <Route path='/' exact> 
            <Allmeetup />
        </Route>
        <Route path='/favorite'>
            <Favorite />
        </Route>
        <Route path='/newmeetup'>
            <Newmeetup />
        </Route>
    </Switch>
  );
}

export default App;
