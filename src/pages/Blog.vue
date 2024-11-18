<template>
    <div class="d-flex flex-column flex-nowrap vh-100">
        <div class="d-flex align-items-center justify-content-center mt-2">
            <h4 class="mb-0">Liste des posts</h4>
        </div>

        <div class="d-grid justify-content-center mt-2">
            <Spinner v-if="state === 'loading'" />
            <Alert v-else-if="state === 'error'" type="danger">Erreur: Impossible de récupérer les posts</Alert>
        </div>

        <div v-if="state === 'idle'" class="d-flex align-items-center justify-content-center">
            <div class="row row-cols-3 w-75">
                <PostCard v-for="(post, index) in posts" :key="index" :post="post" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Alert from '@/components/Alert.vue';
import PostCard from '@/components/PostCard.vue';
import Spinner from '@/components/Spinner.vue';
import useFetch from '@/composables/useFetch.js';

const { data: posts, state } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
</script>