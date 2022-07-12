<template>
    <form @submit.prevent="handleSubmit" action="">
        <input type="text" required placeholder="Name" v-model="name">
        <input type="email" required placeholder="Email" v-model="email">
        <input type="password" required placeholder="Password" v-model="password">
        <button>Sign Up</button>
    </form>
</template>

<script>
    import {ref} from "vue"
    import {useSignup} from "../composables/useSignup.js"

    export default {
        setup(props, context) {
            const name = ref("")
            const email = ref("")
            const password = ref("")

            const handleSubmit = async () => {
                const user = await useSignup(email.value, password.value, name.value)
                if(user){
                    context.emit("signup");
                }
            }

            return {name, email, password, handleSubmit}
        }
    }
</script>

<style scoped>

</style>