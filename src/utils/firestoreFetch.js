import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const firestoreFetch = async (IdCategory) => {
    let q;
    if (IdCategory) {
        q = query(collection(db, "productos"), where('category', '==', IdCategory));
    } else {
        q = query(collection(db, "productos"),orderBy("title"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (IdItem) => {
    const docRef = doc(db, "productos", IdItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: IdItem,
          ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}