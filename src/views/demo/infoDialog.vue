<template>
  <DialogModel title="新增" :model-value="modelValue" width="400px" @close="close">
    <formModel
      label-width="90px"
      ref="ruleFormRef"
      :formData="form"
      :formItem="formItem"
      @submit="submit"
      @close="close"
    >
    </formModel>
  </DialogModel>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { http } from '@/utils/http'

const props = defineProps(['modelValue', 'typeOptions'])

const emit = defineEmits(['update:modelValue', 'submit'])

const ruleFormRef = ref()

const form = reactive({
  label: '',
  value: '',
  type: 'type',
})

const formItem = reactive<any[]>([
  {
    label: '类型',
    prop: 'type',
    type: 'select',
    options: props.typeOptions,
  },
  {
    label: '名称',
    prop: 'label',
    rules: [{ required: true, message: '请输入名称', trigger: 'blur' }],
    type: 'input',
  },
  {
    label: '值',
    prop: 'value',
    rules: [{ required: true, message: '请输入值', trigger: 'blur' }],
    type: 'input',
  },
  {
    prop: 'submitBtn',
  },
])

const submit = async () => {
  const { valid, data } = await ruleFormRef.value?.submitForm()
  if (valid) {
    ruleFormRef.value?.setLoading(true)
    http(`https://5ykenqzacs.hk.aircode.run/addOption`, data)
      .then(({ success, result }) => {
        if (success) {
          ElMessage.success('添加成功')
          close()
          emit('submit')
        } else {
          ElMessage.error(result || '添加失败')
          ruleFormRef.value?.setLoading(false)
        }
      })
      .catch(() => {
        ElMessage.error('添加失败')
        ruleFormRef.value?.setLoading(false)
      })
  }
}

const close = () => {
  ruleFormRef.value?.resetFields()
  emit('update:modelValue', false)
}
</script>
