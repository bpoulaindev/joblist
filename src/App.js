import './App.css';
import AllJobs from './jobs/AllJobs';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row bg-primary p-4 text-white">
          <div className="col-lg-12 d-flex justify-content-between">
            <div className="p-2 flex"><h3>Indeed en moins bien</h3></div>
            <div className="p-2 flex">hello</div>
          </div>
        </div>
        <AllJobs />
      </div>
    </div>
  );
}

export default App;
