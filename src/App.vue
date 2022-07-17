<template>
    <div :class="classTheme">
        <router-view @changeTheme="handleChangeClass"/>
    </div>
</template>

<script>
    import {ref} from "vue"

    export default {
        setup() {
            const classTheme = ref('wrapper-light')
            const handleChangeClass = (isDark) => {
                isDark ? classTheme.value = 'wrapper-dark' : classTheme.value = 'wrapper-light'
            }

            return {classTheme, handleChangeClass}
        }
    }
</script>

<style lang="scss">
    @import "assets/base.css";

    .wrapper-dark {
        border: 1px solid #1f2021;
        background: #202225;

        & .container {
            background-color: #2f3136;
        }

        .welcome {

            &__name {
                text-align: start;
                color: #eeeeee;
                font-size: 14px;
            }

            &__email {
                color: #b3b3b3;
                font-size: 14px;
            }
        }

        .invalid-message {
            color: #eeeeee;
        }

        .empty-chat {
            color: #fff;
        }

        & .title {
            color: #fff;
        }

        & .chat-window {
            background: #36393f;
        }

        & .single {
            background-color: #42464d;
            color: #fff;
        }

        & .name {
            color: #bfbfbf;
        }

        & .chat-window .me {
            margin-left: auto;
            background-color: #2b5278;
        }

        & .message {
            color: #f5f5f5;
        }

        & .created-at {
            color: #adadad;
        }
        
        button {
            background: #ffffff;
            color: #182533;
        }
    }

    .wrapper-light {
        border: 1px solid #ffffff;
        background: #fff;

        & .container {
            background-color: #ffffff;
        }

        .welcome {

            &__name {
                text-align: start;
                color: #182533;
                font-size: 14px;
            }

            &__email {
                color: #9999;
                font-size: 14px;
            }
        }

        .invalid-message {
            color: #182533;
        }

        .empty-chat {
            color: #182533;
        }

        & .title {
            color: #111;
        }

        & .chat-window {
            background: #e2dddd;
        }

        & .single {
            background-color: #fff;
            color: #111111;
        }

        & .name {
            color: #111;
        }

        & .chat-window .me {
            margin-left: auto;
            background-color: #bbe6df;
        }

        & .message {
            color: #111111;
        }

        & .created-at {
            color: #999;
        }
        
        button {
            background: #182533;
            color:#fff;
        }
    }
</style>