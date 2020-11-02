import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  // Link,
  BrowserRouter
} from "react-router-dom";
import WorkList from './components/WorkList/WorkList';
import WorkItemDetail from './components/WorkList/WorkItemDetail';
import NotFound from './components/WorkList/NotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path='/workDetail/:id' component={WorkItemDetail}></Route>
          <Route exact path="/" component={WorkList} />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
