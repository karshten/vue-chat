<template>
    <form @submit.prevent="login(email, password)" action="">
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
        setup(){
            const name = ref("")
            const email = ref("")
            const password = ref("")

            const {error, login} = useLogin()

            return {name, email, password, error, login}
        }
    }
</script>

<style scoped>

</style>