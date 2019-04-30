import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC40OrXPV5IRojpykhMl-9E2xWqITgadEY",
    authDomain: "catch-of-the-day-27971.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-27971.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp };

export default base;