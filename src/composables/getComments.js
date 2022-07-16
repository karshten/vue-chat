import {onSnapshot, collection} from "firebase/firestore"
import {firestore} from "../firebase/config";
import {ref} from "vue"


export const getCommentsCollection = (collectionName) => {
    const comments = ref([])
    const error = ref(null)
    const collectionRef = collection(firestore, collectionName)

    // onSnapshot(collectionRef, (snapshot) => {
    //     comments.value = snapshot.docs.map((_doc) => {
    //         return {..._doc.data(), id: _doc.id}
    //     })
    //     comments.value.sort((a, b) => b.timestamp - a.timestamp)
    // })

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
