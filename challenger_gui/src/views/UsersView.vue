<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Users</h2>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <p class="card-text"></p>
            </div>
          </div>
    </div>
</template>

<script>

    export default {
        computed:{
            users() {
                return this.$store.state.users
            }
        },
        mounted() {
            this.$store.dispatch('fetchUsers')
            console.log(this.users);
        }
    }
</script>

<style scoped>

</style>