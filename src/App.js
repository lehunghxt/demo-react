import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import WorkList from './components/WorkList/WorkList';
import WorkItemDetail from './components/WorkList/WorkItemDetail';
import NotFound from './components/WorkList/NotFound';
import Header from './components/Header/Header';
import WorkAssigmentList from './components/WorkAssignmentList/WorkAssigmentList';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        <div id='linkHeader' >
          <div id='home-page'>
            <NavLink to="/work" activeClassName='link-active'>
                Việc Cần Làm
            </NavLink>
          </div>
          <div id='home-assigment'>
            <NavLink to="/workassigment" activeClassName='link-active'>
                Việc Phân Công
            </NavLink>
          </div>
        </div>
          <Switch>
            <Route exact path='/work/:id' component={WorkItemDetail}></Route>
            <Route exact path="/" component={WorkList} />
            <Route exact path="/work" component={WorkList} />
            <Route exact path="/workassigment" component={WorkAssigmentList} />
            <Route path='*' exact={true} component={NotFound} />
          </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
