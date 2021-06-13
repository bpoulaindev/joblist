import './App.css';
import AllJobs from './jobs/AllJobs';
import OneJob from './jobs/OneJob';
import NewJob from './jobs/NewJob';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <div className="container-fluid">
          <div className="row bg-primary p-4 text-white">
            <div className="col-lg-12 d-flex justify-content-between">
              <div className="p-2 flex"><h3>Indeed en moins bien</h3></div>
              <div className="p-2 flex btn">
                <Link to='/newJob' 
                  style={{ textDecoration: 'none' }}
                  className="text-white">
                    Ajouter <i className="fas fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <AllJobs />
            </Route>
            <Route path="/job/:jobId">
              <OneJob />
            </Route>
            <Route path="/newJob">
              <NewJob/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
