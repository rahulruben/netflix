import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {/* %FIREBASE_CONFIG_HERE% */}

const firebase = Firebase.initializeApp(config);

export { firebase };