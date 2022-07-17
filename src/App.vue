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
    @import "assets/base";
</style>