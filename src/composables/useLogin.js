import {ref} from "vue"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase/config.js"

export const useLogin = () => {
    const error = ref(null)

    const login = async (email, password) => {
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            if (!user) {
                throw new Error('Imposable to register')
            }
            alert('successfully logged in')
            return user
        } catch (err) {
            switch (err.code) {
                case "auth/invalid-email":
                    error.value = "Invalid email"
                    break
                case "auth/user-not-found":
                    error.value = "user not found"
                    break
                case "auth/wrong-password":
                    error.value = "Incorrect password "
                    break
                default:
                    error.value = err.message
                    break
            }
        }
    }
    return {error, login}
}