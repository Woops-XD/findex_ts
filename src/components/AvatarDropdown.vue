<template>
  <div style="margin-right: 12px">
    <a-space>
      <a-dropdown>
        <template #overlay>
          <a-menu>

            <a-menu-item @click="$router.push('/user')">
              <template #icon>
                <SettingOutlined />
              </template>
              <span>User Info</span>
            </a-menu-item>

            <a-menu-item @click="handleLogout">
              <template #icon>
                <LogoutOutlined />
              </template>
              <span>Logout</span>
            </a-menu-item>
          </a-menu>
        </template>
        <a-avatar shape="square" size="small">
          <template #icon>
            <UserOutlined />
          </template>

        </a-avatar>
      </a-dropdown>
    </a-space>
  </div>
</template>



<script  lang="ts" setup >
import { UserOutlined, SettingOutlined, LogoutOutlined, } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter()
const store = useStore()
// call logout fucntion
const handleLogout = async () => {
  store.dispatch('Logout').then(() => {
    //logout then  navi to login
    router.push({ name: 'login' })
  }).catch(err => {
    message.error("logout fail")
  })
}



</script>
