import { Switch,BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Report from './pages/Report';
import Start from './pages/Start';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/start" component={Start} exact/>
        <Route path="/quiz" component={Quiz} exact/>
        <Route path="/report" component={Report} exact/>
        <Route path="/report/:idReport" component={Report} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
