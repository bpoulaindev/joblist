import React, { Component, useState, useEffect } from "react";
import JobsService from '../service/JobsService';


// export class AllJobs extends Component {
    
//     constructor(props) {
//         super(props);

//         this.state = {
//             jobs: []
//         };
//         this.jobService = new JobsService();
//         this.itemTemplate = this.itemTemplate.bind(this);
//     }

//     async componentDidMount() {
//       const data = await this.jobService.getAllJobs()
//       this.setState({ jobs: data })
//       console.log(this.state.jobs)
//       this.state.jobs.forEach(doc => {
//         console.log(doc.id, '=>', doc.data());
//       });
//     }

//     itemTemplate(data) {
//         return (
//             <div className="ticket-item">
//                 <h1>wesh</h1>
//             </div>
//         );
//     }

//     render() {
//         return (
//             <div className="row">
//               <ul>
//                 {this.state.jobs.forEach(el => (
//                   <li>
//                     {console.log(el)}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//         );
//     }
// }

export default function WeshAlors() {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    async function test() {
      const jobService = new JobsService();
      console.log('wesh')
      const data = await jobService.getAllJobs()
      const data2 = []
      data.forEach(doc => {data2.push([doc.data(), doc.id])})
      setJobs(data2)
    }
    test();
  },[])

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {jobs.map(([el, id]) => (
          <div key={id} className="card">
            <p>{el.obj.description}</p>
          </div>
        ))}
    </div>
  );
}