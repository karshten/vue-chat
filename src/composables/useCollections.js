import {ref} from "vue"
import {firestore} from "../firebase/config";
import {addDoc, collection} from "firebase/firestore"

export const useCollections = (collectionName) =>{
    const error = ref(null)

    const addDocument = async (document) =>{
        error.value = null

        try {
            const collectionRef = collection(firestore, collectionName)

            await addDoc(collectionRef, document)

        } catch (err) {
            error.value = err.message
        }
    }

    return{addDocument}
}