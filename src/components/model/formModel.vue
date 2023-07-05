<template>
  <el-form
    class="formModel"
    :size="size"
    :inline="inline"
    ref="ruleFormRef"
    :model="ruleForm"
    label-width="120px"
  >
    <el-form-item
      v-for="i in formItem"
      :key="i.prop"
      :label="i.label"
      :prop="i.prop"
      :rules="i.rules"
    >
      <el-space wrap>
        <template v-if="i.type === 'input'">
          <el-input
            :style="i.style || itemStyle"
            :maxlength="i.maxlength"
            show-word-limit
            v-model="ruleForm[i.prop]"
            clearable
          />
        </template>
        <template v-if="i.type === 'input-number'">
          <el-input-number
            :style="i.style || itemStyle"
            v-model="ruleForm[i.prop]"
            :min="i.min"
            :max="i.max"
          />
        </template>
        <template v-if="i.type === 'select'">
          <el-select
            :style="i.style || itemStyle"
            v-model="ruleForm[i.prop]"
            placeholder="请选择"
            clearable
            filterable
            :multiple="i.multiple"
            collapse-tags
            collapse-tags-tooltip
          >
            <el-option v-for="item in i.options" :label="item.label" :value="item.value" />
          </el-select>
        </template>
        <template v-if="['date', 'datetime', 'datetimerange', 'daterange'].includes(i.type)">
          <el-date-picker
            :style="i.style || itemStyle"
            v-model="ruleForm[i.prop]"
            :type="i.type"
            :format="i.format"
            :value-format="i.format"
            :default-time="[new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 1, 1, 23, 59, 59)]"
            clearable
          />
        </template>
        <template v-if="i.type === 'switch'">
          <el-switch v-model="ruleForm[i.prop]" />
        </template>
        <template v-if="i.type === 'checkbox'">
          <el-checkbox-group :style="i.style || itemStyle" v-model="ruleForm[i.prop]">
            <el-checkbox
              v-for="item in i.options"
              :key="item.label"
              :label="item.label"
              :name="i.prop"
              >{{ item.name || item.label }}</el-checkbox
            >
          </el-checkbox-group>
        </template>
        <template v-if="i.type === 'radio'">
          <el-radio-group :style="i.style || itemStyle" v-model="ruleForm[i.prop]">
            <el-radio v-for="item in i.options" :key="item.label" :label="item.label">
              {{ item.name || item.label }}
            </el-radio>
          </el-radio-group>
        </template>
        <template v-if="i.type === 'textarea'">
          <el-input
            :style="i.style || itemStyle"
            v-model="ruleForm[i.prop]"
            type="textarea"
            :rows="i.row"
            :maxlength="i.maxlength"
            show-word-limit
          />
        </template>
        <slot :name="i.prop" :item="i" />
      </el-space>
      <template v-if="i.type === 'searchBtn'">
        <el-button type="primary" @click="emit('submit')" :disabled="loading">查询</el-button>
        <el-button :disabled="loading" @click="reset">重置</el-button>
      </template>
      <template v-if="i.type === 'submitBtn'">
        <el-button type="primary" @click="emit('submit')" :disabled="loading">提交</el-button>
        <el-button :disabled="loading" @click="emit('close')">关闭</el-button>
      </template>
    </el-form-item>
    <el-form-item>
      <slot />
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const ruleFormRef = ref<any>()

export interface formType {
  prop?: string
  label?: string
  rules?: any[]
  type?: string
  min?: number
  max?: number
  options?: any[]
  datetype?: string
  format?: string
  maxlength?: number
  style?: any
  multiple?: boolean
  row?: number
}

export interface Props {
  formData: any
  formItem: any[]
  itemStyle?: any
  inline?: boolean
  size?: string
}

const props = withDefaults(defineProps<Props>(), {
  formData: undefined,
  formItem: undefined,
  itemStyle: undefined,
  inline: false,
  size: '',
})

const emit = defineEmits(['submit', 'close'])

const ruleForm = reactive<any>(props.formData)

const loading = ref(false)

const submitForm = async () => {
  let res: any = reactive({
    valid: false,
    data: ruleForm,
    fields: null,
  })
  await ruleFormRef.value?.validate((valid: boolean, fields: any) => {
    if (valid) {
      res.valid = true
    } else {
      console.log('error submit!', fields)
      res.fields = fields
    }
  })
  return res
}

const reset = () => {
  resetFields()
  emit('submit')
}

const resetFields = () => {
  setLoading(false)
  ruleFormRef.value?.resetFields()
}

const validateField = (field: string) => {
  ruleFormRef.value?.validateField(field)
}

const changeValue = (key: string, value: any) => {
  ruleForm[key] = value
}

const setLoading = (state: boolean) => {
  loading.value = state
}

defineExpose({ submitForm, resetFields, validateField, changeValue, setLoading })
</script>

<style lang="stylus" scoped>
.formModel .el-form-item {
  margin-right 10px
}
</style>
