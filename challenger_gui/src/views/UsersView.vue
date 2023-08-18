<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Users</h2>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
        }
    }
</script>

<style scoped>

</style>