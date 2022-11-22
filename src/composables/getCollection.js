import {onSnapshot, collection, query, orderBy} from "firebase/firestore"
import {firestore} from "../firebase/config";
import {ref} from "vue"


export const getCollection = (collectionName) => {
    const comments = ref([])
    const error = ref(null)
    const collectionRef = query(collection(firestore, collectionName), orderBy('createdAt'))

    onSnapshot(collectionRef, (snap) => {
        const result = snap.docs.map(comment => {
            return {...comment.data(), id: comment.id}
        })
        comments.value = result
    }, (err) => {
        error.value = err.message
    })
    return {comments, error}
}
