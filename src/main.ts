import { ElButton, ElInput, ElDatePicker, ElTimePicker } from 'element-plus'
import { createApp } from 'vue'
import App from './App.vue'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'

// 设置语言
locale.use(lang)

import router from './router/index'

const app = createApp(App);

app.use(router)
app.use(ElButton)
app.use(ElInput)
app.component(ElDatePicker.name, ElDatePicker)
app.component(ElTimePicker.name, ElTimePicker)
app.mount('#app')
