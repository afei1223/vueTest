<template>
  <div class="hola-login">
    <h2 v-if="seen">账号：{{ id }}</h2>
    <h2 v-if="seen">密码：{{ password }}</h2>
    <h2 v-if="seen-param">来自param:{{ usernameParams }}</h2>
    <h2 v-if="seen-query">来自query:{{ usernameQuery }}</h2>
    <input v-model="id">
    <input type="password" v-model="password">
    <input type="submit" @click="submit">
  </div>

</template>

<script>
export default {
  name: 'bobo',
  computed: {
    usernameParams () {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    },
    usernameQuery () {
      return this.$route.query.username
    }

  },
  beforeCreate () {
    if (this.usernameParams != null) {
      this.seen_params = true
    }
    if (this.usernameQuery != null) {
      this.seen_query = true
    }
  },
  data () {
    return {
      menuList: ['登陆/注册', '首页', '好友', '群组'],
      seen: false,
      id: '',
      password: '',
      seen_params: false,
      seen_query: false
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
