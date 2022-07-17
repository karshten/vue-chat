<template>
    <div class="chat-window">
        <div v-if="error" class="error">{{error}}</div>
        <div v-if="comments.length" class="messages" :ref="($elem) => messageBlock = $elem">
            <div v-for="doc in formattedDocs"
                 class="single"
                 :key="doc.id"
                 :class="{me: doc.authorId === user.uid}">
                <span class="name">{{doc.name}}</span>
                <span class="message">{{doc.message}}</span>
                <span class="created-at">{{doc.createdAt}} ago</span>
            </div>
        </div>
        <div class="empty-chat"  v-else>
            There is no messages yet, be the first one!
        </div>
    </div>
</template>

<script>
    import {getCommentsCollection} from "../composables/getComments";
    import {formatDistanceToNow} from "date-fns"
    import {computed, onUpdated, ref} from "@vue/runtime-core"
    import {getUser} from "../composables/getUser";

    export default {
        setup(props, context) {
            const {comments, error} = getCommentsCollection('comments')
            const {user} = getUser()
            const messageBlock = ref(null)
            const formattedDocs = computed(() => {
                if (comments.value.length) {
                    return comments.value.map((doc) => {
                        let time = formatDistanceToNow(doc.createdAt.toDate())
                        return {...doc, createdAt: time}
                    })
                }
            })
            onUpdated(()=>{
                messageBlock.value ? messageBlock.value.scrollTop = messageBlock.value.scrollHeight : null
            })
            return {comments, formattedDocs, error, user, messageBlock}
        }
    }
</script>

<style scoped>
    .chat-window {
        border-radius: 12px;
        padding: 30px 20px;
    }

    .single {
        display: block;
        margin: 15px 10px 15px 0;
        max-width: 50%;
        padding: 10px;
        border-radius: 12px;
        width: max-content;
    }

    .created-at {
        display: block;
        font-size: 12px;
        margin-bottom: 4px;
    }

    .name {
        display: block;
        font-weight: 700;
        margin-right: 6px;
    }

    .messages {
        max-height: 400px;
        overflow: auto;
    }

    .message {
        max-width: 100%;
        display: inline-block;
        margin: 10px 0;
        word-wrap: break-word;
    }
    
    @media (max-width: 768px) {
        .single {
            margin: 18px 0;
            padding: 7px;
            max-width: 85%;
        }
        .name {
            font-size: 16px;
        }
        .message {
            margin: 5px 0;
            font-size: 13px;
        }
    }
</style>