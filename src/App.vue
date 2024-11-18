<template>
    <Header />
    <BlogPage v-if="page === 'blog'" />
    <ContactPage v-else-if="page === 'contact'" />
    <PostPage v-else-if="page === 'post'" :id="param" />
    <NotFoundPage v-else /> 
</template>

<script setup>
import Header from './components/Header.vue';
import usePage from './composables/usePage.js';
import BlogPage from './pages/Blog.vue';
import ContactPage from './pages/Contact.vue';
import NotFoundPage from './pages/NotFound.vue';
import PostPage from './pages/Post.vue';

const {page, param} = usePage();
</script>