<template>
    <div :class="`alert alert-${type}`" role="alert">
        <slot></slot>
    </div>         
</template>

<script setup>
const props = defineProps({
    type: {type: String, default: 'info'}
})
</script>