<template>
  <a-result :title='`Hello ${store.state.name} `' sub-title="you are sucessflly login " status="success">
    <template #extra>
    </template>
  </a-result>

  <div class="calender">
    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>

<script lang="ts"  >
import { defineComponent, ref } from 'vue';
import { message } from 'ant-design-vue';
import { Dayjs } from 'dayjs';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const value = ref();
    const store = useStore()
    const onPanelChange = (value: Dayjs, mode: string) => {
      console.log(value, mode);
      message.success(value+ "");
    };
    return {
      store,
      value,
      onPanelChange,
    };
  },
});
</script>

<style scoped>
.calender {
  width: 95%;
  height: 400px;
  background-color: white;
  margin-left: 2.5%;
  margin-top: 2.5vh;
}
</style>