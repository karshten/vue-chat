<template>
  <nav>
    <div>
      <p>Welcome {{user.displayName}}</p>
      <p class="email">Successfully loged in with email...{{user.email}} </p>
    </div>
    <button @click="handleClick">Exit</button>
  </nav>
</template>

<script>
import useLogout from "@/composables/useLogout";
import {getUser} from "../composables/getUser.js";
import { useRouter } from "vue-router";
export default {
  components: {},
  setup() {
    const router = useRouter();
    const { error, logout } = useLogout();
    const {user} = getUser()


    const handleClick = async () => {
      await logout();
      if (!error.value) {
        router.push("/");
      }
    };

    return { error, handleClick, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
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
</style>