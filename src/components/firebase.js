import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyB2btsclWUb_0BZV6soAlJkYw6CQIkfy3o",
  authDomain: "login-app-67704.firebaseapp.com",
  databaseURL: "https://login-app-67704.firebaseio.com",
  projectId: "login-app-67704",
  storageBucket: "login-app-67704.appspot.com",
  messagingSenderId: "588094574502"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }
}

export default new Firebase();
