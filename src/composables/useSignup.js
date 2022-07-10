import {ref} from "vue"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../firebase/config.js"

export const useSignup = async (email, password, name) => {
    const error = ref(null)

    try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password)
        if (!user) {
            throw new Error('Imposable to register')
        }
        await updateProfile(user, {
            displayName: name
        })
        return user
    }
    catch (err) {

        throw new Error(err.message)
    }
}