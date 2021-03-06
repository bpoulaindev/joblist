import firebase from "firebase";
import uniqid from "uniqid";

const firebaseConfig = {
  apiKey: "AIzaSyB5Nigu5hzO187RL883aBBZdLLq-yWfY8I",
  authDomain: "joblist-bpoulain.firebaseapp.com",
  databaseURL: "https://joblist-bpoulain-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "joblist-bpoulain",
  storageBucket: "joblist-bpoulain.appspot.com",
  messagingSenderId: "338256733061",
  appId: "1:338256733061:web:c4b9c6563089274b42daec",
  measurementId: "G-05PJCVCT68"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const jobsRef = db.collection('jobs');
export default class TicketsService {

    async getAllJobs() {
      const snapshot = await jobsRef.get();
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      return snapshot
    }
    async getOneJob(jobId) {
      const snapshot = await jobsRef.doc(jobId).get();
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      return snapshot
    }
    async pushJob(job) {
      await jobsRef.doc(uniqid()).set(job)
    }
}