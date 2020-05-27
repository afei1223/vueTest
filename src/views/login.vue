<template>
  <div class="hola-login">
    <h2 v-if="seen">账号：{{ id }}</h2>
    <h2 v-if="seen">密码：{{ password }}</h2>
    <h2 v-if="seen">来自{{ this.$route.params.username }}</h2>
    <input v-model="id">
    <input type="password" v-model="password">
    <input type="submit" @click="submit">
  </div>

</template>

<script>
export default {
  name: 'bobo',
  computed: {
    // username () {
    //   // 我们很快就会看到 `params` 是什么
    //   return this.$route.params.username
    // }

  },
  data () {
    return {
      menuList: ['登陆/注册', '首页', '好友', '群组'],
      seen: false,
      id: '',
      password: ''
    }
  },
  methods: {
    // ChangeMenu (index) {
    //   switch (index) {
    //     case 0:
    //       //   this.$router.push({ path: '/Login'});
    //       break
    //   }
    // },
    submit () {
      if (this.seen === false) {
        this.seen = true
      } else {
        this.seen = false
      }
    }
  }
}
</script>

<style scoped>

</style>
