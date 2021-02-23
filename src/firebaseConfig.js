import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBWdqyLRxgoMrG4TurKfn9-JjV-xEWIhos",
  authDomain: "tanex-todo-app.firebaseapp.com",
  projectId: "tanex-todo-app",
  storageBucket: "tanex-todo-app.appspot.com",
  messagingSenderId: "426033617264",
  appId: "1:426033617264:web:c510d895d1eaa925b517b5",
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
