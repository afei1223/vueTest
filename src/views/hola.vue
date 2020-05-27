<template>
  <div class="ll-header">
    <div class="ll-menu">
      <ul>
        <li v-for="(item, index) in menuList"
            :key="item"
            @click="ChangeMenu(index)"
        >
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: ['登陆/注册', '首页', '好友', '群组'],
      username: 'lib',
      message1: 'lb'
    }
  },
  methods: {
    ChangeMenu (index) {
      switch (index) {
        case 0:
          this.$router.push({path: '/Login', query: {username: this.message1}})
          break
        case 1:
          this.$router.push({name: 'login', params: {username: this.username}})
          break
      }
    }
  }
}
</script>

<style scoped>

</style>
