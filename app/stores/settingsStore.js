import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';

const config = {
    apiKey: "AIzaSyCSCUpEgSpvHUkP52y9zliwyzeko2-dXUM",
    authDomain: "dinder-79da9.firebaseapp.com",
    databaseURL: "https://dinder-79da9.firebaseio.com",
    projectId: "dinder-79da9",
    storageBucket: "dinder-79da9.appspot.com",
    messagingSenderId: "813435511718"
  };

export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config);
    super(firebase.database().ref());

    this.splashTime = 5000;
    this.splashImg = require('../../images/splash.jpg');
  }

  get SplashTime() {
    return this.splashTime;
  }

  get SplashImg() {
    return this.splashImg;
  }
}
