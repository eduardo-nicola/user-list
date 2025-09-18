<template>
  <div :class="containerClass">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      @click="$emit('update:modelValue', tab.value)"
      :class="getTabClass(tab.value)"
      :disabled="tab.disabled"
    >
      <component 
        v-if="tab.icon" 
        :is="tab.icon" 
        :class="iconClass"
      />
      <svg 
        v-else-if="tab.iconSvg" 
        :class="iconClass" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          :d="tab.iconSvg" 
        />
      </svg>
      <span>{{ tab.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
interface TabItem {
  label: string
  value: string | number
  icon?: Component
  iconSvg?: string
  disabled?: boolean
}

interface Props {
  modelValue: string | number
  tabs: TabItem[]
  size?: 'sm' | 'md' | 'lg'
  variant?: 'pills' | 'underline' | 'solid'
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'pills',
  fullWidth: false
})

defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const sizeClasses = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-2.5'
}

const iconSizeClasses = {
  sm: 'w-3 h-3 mr-1.5',
  md: 'w-4 h-4 mr-2',
  lg: 'w-5 h-5 mr-2'
}

const containerClass = computed(() => {
  const baseClasses = 'flex'
  
  if (props.variant === 'pills') {
    return `${baseClasses} bg-gray-100 rounded-lg p-1 ${props.fullWidth ? 'w-full' : ''}`
  }
  
  if (props.variant === 'underline') {
    return `${baseClasses} border-b border-gray-200 ${props.fullWidth ? 'w-full' : ''}`
  }
  
  return `${baseClasses} ${props.fullWidth ? 'w-full' : ''}`
})

const iconClass = computed(() => iconSizeClasses[props.size])

const getTabClass = (value: string | number) => {
  const isActive = props.modelValue === value
  const baseClasses = `flex items-center justify-center font-medium transition-all duration-200 ${props.fullWidth ? 'flex-1' : ''} ${sizeClasses[props.size]}`
  
  if (props.variant === 'pills') {
    return `${baseClasses} rounded-md ${
      isActive
        ? 'bg-white text-blue-600 shadow-sm'
        : 'text-gray-500 hover:text-gray-700'
    }`
  }
  
  if (props.variant === 'underline') {
    return `${baseClasses} border-b-2 ${
      isActive
        ? 'border-blue-600 text-blue-600'
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    }`
  }
  
  // variant === 'solid'
  return `${baseClasses} border rounded-md ${
    isActive
      ? 'bg-blue-600 text-white border-blue-600'
      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
  }`
}
</script>
