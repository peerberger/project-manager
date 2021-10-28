import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAq6blj18_Uny62zab5G2SGzoDVZyQJQ0k",
  authDomain: "projectmanager-3d1d6.firebaseapp.com",
  projectId: "projectmanager-3d1d6",
  storageBucket: "projectmanager-3d1d6.appspot.com",
  messagingSenderId: "50235440055",
  appId: "1:50235440055:web:e837cd9ca88cd7efc74632"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }