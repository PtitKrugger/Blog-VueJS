<template>
    <Spinner v-if="state === 'loading'" />
    <Alert v-else-if="state === 'error'" type="danger">Erreur: Impossible de récupérer les posts</Alert>

    <div v-if="state === 'idle'" class="container border p-4 mt-3 rounded shadow-sm">
        <h3>{{post.title}}</h3>
        <img src="/blog-image.jpg" height="300px" width="400px">
        <p>{{post.body}}</p>
        
        <Button variant="primary" @click="handleEdit">Modifier</Button>
        <PostForm v-if="formData" :post="formData" :isEditing="isEditing" @isEditing="handleEditEmit" @save="onSave" />
    </div>
</template>

<script setup>
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
import PostForm from '@/components/PostForm.vue';
import Spinner from '@/components/Spinner.vue';
import useFetch from '@/composables/useFetch.js';
import { computed, ref, toRaw } from 'vue';

const props = defineProps({
    id: String
})

const {data: post, state} = useFetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`);

const isEditing = ref(false)
const formData = computed(() => structuredClone(toRaw(post.value)))

const handleEdit = () => {
    isEditing.value = true
}
const handleEditEmit = (value) => {
    isEditing.value = value
}
const onSave = (newPost) => {
    post.value = newPost
    isEditing.value = false
}
</script>