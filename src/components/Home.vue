<template>
  <div>
    <h5>{{ componentName }}</h5>
    <router-link class="navi-link" :to="{ path: 'product' }">Product 组件</router-link>
    <router-link class="navi-link" :to="{ path: 'live' }">Live 组件</router-link>
    <div>{{ a }}</div>
    <div>{{ b }}</div>
    <div>
      <el-button @click="addA">A+</el-button>
      <el-button @click="addB">B+</el-button>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import axios from '@/api/axios'
import { AxiosResponse } from 'axios'
import { ResponseType } from '@/utils/mytype'
import { saveAs } from 'file-saver'

const { add } = require('lodash')

export default defineComponent({
  setup() {
    const a = ref(0)
    const b = ref(0)
    const componentName = ref('Home 组件')

    const addA = () => {
      a.value += 1
    }
    const addB = () => {
      b.value += 1
    }

    onMounted((): void => {
      axios
        .get<ResponseType>('/topics')
        .then((response: AxiosResponse<ResponseType>) => {
          console.log('response => ', response)
          // const { data } = response;
        })
        .catch((reason: any) => console.log('reason => ', reason))

      console.log('$ => ', $)
      console.log('jquery => ', jQuery)
      console.log('saveAs => ', saveAs)
      console.log('lodash add => ', add(1, 5))
    })

    watch(a, (ca: number) => {
      console.log('watch a => ', ca)
    })
    watch(b, (cb: number) => {
      console.log('watch b => ', cb)
    })

    return {
      a,
      b,
      componentName,
      addA,
      addB
    }
  }
})
</script>

<style></style>
