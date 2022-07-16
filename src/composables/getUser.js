import {onAuthStateChanged} from "firebase/auth"
import {ref} from "vue"
import {auth} from "../firebase/config"

const user = ref(auth.currentUser)

onAuthStateChanged(auth, (user_) => {
    user.value = user_
})


export const getUser = () => {
    return {user}
}