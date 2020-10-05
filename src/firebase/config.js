import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBwn_g20LW004xnB47RlJW5gwN2Uxa-8qU',
  authDomain: 'yresq-8bc77.firebaseapp.com',
  databaseURL: 'https://resq-8bc77.firebaseio.com',
  projectId: 'resq-8bc77',
  storageBucket: 'resq-8bc77.appspot.com',
  messagingSenderId: '77831454203',
  appId: '1:77831454203:android:ed9b6df655b49baee91f5e',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };