import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDJ0FE6srYSG5DDClZA24lHzZubf9013Hw',
	authDomain: 'todo-app-c3e1e.firebaseapp.com',
	projectId: 'todo-app-c3e1e',
	storageBucket: 'todo-app-c3e1e.appspot.com',
	messagingSenderId: '797269006418',
	appId: '1:797269006418:web:3046d3fd3129deaf3de78b',
	measurementId: 'G-BR4Q9EW6H9',
});

const db = firebaseApp.firestore();

export default db;
