import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBxAwIA-zRFS0EBm2OJfa4WQ_VRoEpKsVM",
    authDomain: "oms-ecomm.firebaseapp.com",
    databaseURL: "https://oms-ecomm.firebaseio.com",
    projectId: "oms-ecomm",
    storageBucket: "oms-ecomm.appspot.com",
    messagingSenderId: "272643009668",
    appId: "1:272643009668:web:288da800e896118cf026d1",
    measurementId: "G-Y89NBFNH2E"
  };

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
            
        } catch (error) {
            console.log('error creating user', error.message);
        }
       
    }
    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;