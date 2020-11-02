import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
  useLocation 
} from "react-router-dom";
import WorkList from './components/WorkList/WorkList';
import WorkItemDetail from './components/WorkList/WorkItemDetail';
import NotFound from './components/WorkList/NotFound';
import Header from './components/Header/Header';
import WorkAssigmentList from './components/WorkAssignmentList/WorkAssigmentList';

function App() {
  // const location = useLocation();
  return (
    <HashRouter>
    <div className="App">
      <Header/>
      <div id='linkHeader'>
        <div id='home-page' className='link-active'>
          <Link to="/">
              Việc Cần Làm
          </Link>
        </div>
        <div id='home-assigment'>
          <Link to="/workassigment">
              Việc Phân Công
          </Link>
        </div>
      </div>
        <Switch>
          <Route exact path='/workDetail/:id' component={WorkItemDetail}></Route>
          <Route exact path="/" component={WorkList} />
          <Route exact path="/workassigment" component={WorkAssigmentList} />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
