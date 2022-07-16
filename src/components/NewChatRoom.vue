<template>
    <form @submit.prevent="handleSubmit">
        <textarea
                @keypress.prevent.enter="handleSubmit"
                placeholder="Type a message and hit enter to send"
                v-model="comment">
        </textarea>
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


            const handleSubmit = async () => {
                const newComment = {
                    name: user.value.displayName,
                    message: comment.value,
                    createdAt: Timestamp.fromDate(new Date()),
                    authorId: user.value.uid
                }

                await addDocument(newComment)

                comment.value = ''
            }

            return {comment, handleSubmit}
        }
    }
</script>

<style scoped>
    form {
        margin: 20px 0;
    }

    textarea {
        resize: vertical;
        width: 100%;
        margin-bottom: 6px;
        padding: 20px 15px;
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
</style>