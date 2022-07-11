<template>
  <a-layout class="container">
    <!--  Navbar in header  -->
    <a-layout-header class="header">
      <div>
        <div class="logo" />

        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
          <a-menu-item key="1" @click="$router.push('/home')">Home</a-menu-item>
          <a-menu-item key="2" @click="$router.push('/chart')">Charts</a-menu-item>
          <a-menu-item key="3" @click="$router.push('/user')">User</a-menu-item>
        </a-menu>
      </div>
      <!-- avatar with dropdown list -->
      <div class="avatar">
        <avatar-dropdown  />
      </div>
    </a-layout-header>
    <!-- import views using  router-view -->
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <router-view></router-view>
    </a-layout-content>

  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import AvatarDropdown from '../components/AvatarDropdown.vue'
export default defineComponent({
  components: {
    AvatarDropdown,
  },
  setup() {
    return {
      selectedKeys:  ref<string[]>(['1']),
    };
  },


});
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}

.header {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

.avatar {
  /* background-color: azure; */
  /* float: left; */
  margin-right: 10px;
  align-self: flex-end;
}
</style>