import dotenv from 'dotenv';
import firebase from 'firebase/app';
import 'firebase/database';

dotenv.config();
const configParams = {
  apiKey: process.env.REACT_APP_APIKEY,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};
firebase.initializeApp(configParams);
const databaseRef = firebase.app().database().ref();

export default databaseRef;
