<template>
    <dialog ref="dRef" class="w-50">
        <slot></slot>
    </dialog>
</template>

<script setup>
import { useTemplateRef, watch } from 'vue';

const props = defineProps({
    title: String,
    show: Boolean
})

const dRef = useTemplateRef('dRef')

watch(() => props.show, (newVal) => {
    if (newVal === true) {
        dRef.value?.showModal();
    } else {
        dRef.value?.close();
    }
});
</script>