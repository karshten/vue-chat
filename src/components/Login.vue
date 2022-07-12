<template>
    <form @submit.prevent="loginUser" action="">
        <h3 v-if="error">{{error}}</h3>
        <input type="email" required placeholder="Email" v-model="email">
        <input type="password" required placeholder="Password" v-model="password">
        <button>Login</button>
    </form>
</template>

<script>
    import {ref} from "vue"
    import {useLogin} from "../composables/useLogin";
    export default {
        setup(props, context){
            const name = ref("")
            const email = ref("")
            const password = ref("")

            const {error, login} = useLogin()

            const loginUser = async () =>{
                const user = await login(email.value, password.value)
                if(user){
                    context.emit("login")
                }
            }

            return {name, email, password, error, loginUser}
        }
    }
</script>

<style scoped>

</style>