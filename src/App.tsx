import { Switch,BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Start from './pages/Start';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/start" component={Start} exact/>
        <Route path="/quiz" component={Quiz} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
