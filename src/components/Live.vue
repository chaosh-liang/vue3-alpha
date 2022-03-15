<template>
  <div>{{ componentName }}</div>
  <el-input v-model="input" />
  <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间" />
  <p>{{input}}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');
    const componentName = ref('Live 组件');
    const input = ref('输入值');

    return {
      value1,
      componentName,
      input
    };
  }
})
</script>

<style>

</style>
