<template>
    <a v-if="href" :href="href" :class="`btn btn-${variant}`">
        <slot></slot>
    </a>

    <button v-else :class="`btn btn-${variant}`">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    href: String,
    variant: String
})
</script>