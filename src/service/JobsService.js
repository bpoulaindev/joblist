import firebase from "firebase";
import axios from 'axios';
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
export default class TicketsService {

    getJson() {
        // return axios.get('data.json')
        // .then(res => res.data.data
        //     .sort((a, b) => a.created_at < b.created_at ? 1 : -1)
        // );
    }
}