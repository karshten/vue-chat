<template>
    <nav v-if="user">
        <div>
            <p>Welcome {{user.displayName}}</p>
            <p class="email">Successfully loged in with email...{{user.email}} </p>
        </div>
        <button @click="handleClick">Exit</button>
    </nav>
</template>

<script>
    import useLogout from "../composables/useLogout.js";
    import {getUser} from "../composables/getUser.js";
    import {useRouter} from "vue-router";

    export default {
        components: {},
        setup() {
            const router = useRouter();
            const {error, logout} = useLogout();

            const {user} = getUser()

            const handleClick = async () => {
                await logout();
                if (!error.value) {
                    router.push("/");
                }
            };

            return {error, user, handleClick};
        },
    };
</script>

<style>
    nav {
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }

    nav p.email {
        font-size: 14px;
        color: #999;
    }

    nav li {
        display: inline-block;
        margin: 10px 20px 20px 0;
    }

    nav a {
        color: #2c3e50;
        text-decoration: none;
    }

    nav a.router-link-active {
        color: #ff3f80;
    }

</style>