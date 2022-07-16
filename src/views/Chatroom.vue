<template>
    <div class="container">
        <Navbar/>
        <input @change="handleChangeTheme" class="switch" type="checkbox">
        <h2 class="title">Chatroom</h2>
        <ChatWindow/>
        <NewChatRoom/>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue'
    import NewChatRoom from "../components/NewChatRoom.vue";
    import ChatWindow from "../components/ChatWindow.vue";
    import {ref} from "vue"

    export default {
        components: {NewChatRoom, Navbar, ChatWindow},
        setup(props, context){
            const theme = ref(false)
            const handleChangeTheme = () =>{
                theme.value = !theme.value
                context.emit("changeTheme", theme.value)
                return theme.value
            }

            return {handleChangeTheme}
        }
    }
</script>

<style>
    .title {
        margin: 20px 0;
    }

    .switch {
        margin: 20px 0;
        --inactive-bg: #cfd8dc;
        --active-bg: #182533;
        --size: 2rem;
        appearance: none;
        width: calc(var(--size) * 2.2);
        height: var(--size);
        display: inline-block;
        border-radius: calc(var(--size) / 2);
        cursor: pointer;
        background-color: var(--inactive-bg);
        background-image: radial-gradient(
                circle calc(var(--size) / 2.1),
                #fff 100%,
                #0000 0
        ),
        radial-gradient(circle calc(var(--size) / 1.5), #0003 0%, #0000 100%);
        background-repeat: no-repeat;
        background-position: calc(var(--size) / -1.75) 0;
        transition: background 0.2s ease-out;
    }

    .switch:checked {
        background-color: var(--active-bg);
        background-position: calc(var(--size) / 1.75) 0;
    }
</style>