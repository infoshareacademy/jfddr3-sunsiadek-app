import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD40AVWiQYqMXt5kHj6l-2hVz3mwVpPH4U',
  authDomain: 'sunsiadek-3e508.firebaseapp.com',
  projectId: 'sunsiadek-3e508',
  storageBucket: 'sunsiadek-3e508.appspot.com',
  messagingSenderId: '190138923718',
  appId: '1:190138923718:web:1f2fad1614f7192e0935c7'
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
