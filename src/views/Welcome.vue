<template>
  <div class="container">
    <a-result :title='`Hello ${store.state.name}, welcome to `' sub-title="Boyuan's intervew ">
      <template #icon>
        <smile-twoTone />
      </template>
      <template #extra>
        <a-button type="primary" @click="handleClick">Greet</a-button>
      </template>
    </a-result>
  </div>

</template>

<script lang="ts">
import { SmileTwoTone } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';


export default defineComponent({
  components: {
    SmileTwoTone,
  },
});
</script>


<script  lang="ts" setup>
import { message } from 'ant-design-vue';
import { useStore } from 'vuex';
const store = useStore()
const handleClick = () => {
  message.info('Hello ' + store.state.name);
};
</script>

<style scoped>
.container {
  width: 95%;
  height: 600px;
  background-color: white;
  margin-left: 2.5%;
  margin-top: 2.5vh;
}
</style>
