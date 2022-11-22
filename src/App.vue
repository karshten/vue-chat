<template>
    <div :class="classTheme">
        <router-view @changeTheme="handleChangeClass"/>
    </div>
</template>

<script>
    import {ref} from "vue"

    export default {
        setup() {
            const classTheme = ref(localStorage.getItem('chatTheme') ?? 'wrapper-light')
            const handleChangeClass = (isDark) => {
                localStorage.setItem('chatTheme', isDark ? 'wrapper-dark' : 'wrapper-light')
                isDark ? classTheme.value = 'wrapper-dark' : classTheme.value = 'wrapper-light'
            }

            return {classTheme, handleChangeClass}
        }
    }
</script>

<style lang="scss">
    @import "assets/base";
</style>