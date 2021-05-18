import { Switch,BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Start from './pages/Start';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/start" component={Start} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
