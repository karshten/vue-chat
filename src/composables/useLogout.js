import {ref} from "vue"
import {signOut} from "firebase/auth"
import {auth} from "../firebase/config.js"

const error = ref(null)

const logout = async () =>{
    error.value = null
    try {
        await signOut(auth)
    } catch(err) {
        error.value = err.message
    }
}

const useLogout = () =>{
    return {error, logout}
}

export default useLogout