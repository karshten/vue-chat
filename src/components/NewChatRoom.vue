<template>
    <form @submit.prevent="handleSubmit">
        <h3 class="invalid-message" v-if="isInvalidMessage">Invalid message</h3>
        <input
                @keypress.prevent.enter="handleSubmit"
                placeholder="Type a message and hit enter to send"
                v-model="comment">
        <button class="submit">send message</button>
    </form>
</template>

<script>
    import {Timestamp} from "firebase/firestore"
    import {getUser} from "../composables/getUser";
    import {ref} from "vue"
    import {useCollections} from "../composables/useCollections";


    export default {
        setup() {
            const {user} = getUser()
            const {addDocument} = useCollections('comments')
            const comment = ref('')
            const isInvalidMessage = ref(false)


            const handleSubmit = async () => {
                if (comment.value.trim()) {
                    isInvalidMessage.value = false
                    const newComment = {
                        name: user.value.displayName,
                        message: comment.value,
                        createdAt: Timestamp.fromDate(new Date()),
                        authorId: user.value.uid
                    }
                    comment.value = ''
                    await addDocument(newComment)
                } else isInvalidMessage.value = true
            }

            return {comment, handleSubmit, isInvalidMessage}
        }
    }
</script>

<style scoped>
    form {
        margin: 20px 0;
    }

    input {
        resize: vertical;
        width: 100%;
        margin-bottom: 6px;
        padding: 20px;
        border-radius: 12px;
        outline: none;
        border: #2c3e50 1px solid;
    }

    .error {
        text-align: center;
        color: #ff2a58;
        font-size: 12px;
        padding: 10px 0;
    }

    .submit {
        display: block;
        margin-left: auto;
    }
    .invalid-message {
        transition: 1s linear;
        margin: 10px 0 20px;
    }
</style>