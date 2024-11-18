<template>
    <Modal title="Editer l'article" :show="isEditing">
        <form action="" @submit.prevent="">
            <div class="header">
                <h5 class="modal-title">Editer l'article</h5>
            </div>
            <div class="modal-body d-flex flex-column mt-3">
                <label for="title">Titre</label>
                <input type="text" id="title" v-model="post.title">
                <label for="content" class="mt-2">Contenu</label>
                <textarea id="content" v-model="post.body"></textarea>
            </div>
            <div class="modal-footer mt-3 gap-3">
                <Button variant="secondary" @click="emitClose" :disable="state === 'loading'">Annuler</Button>
                <Button variant="primary" @click="onSubmit" :disable="state === 'loading'">Sauvegarder</Button>
            </div>
        </form>
    </Modal>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';
import Modal from './Modal.vue';

const props = defineProps({
    post: Object,
    isEditing: Boolean
})

const emits = defineEmits(['isEditing', 'save'])
const emitClose = () => {
    emits('isEditing', false)
}
const state = ref('idle')
const onSubmit = () => {
    state.value = 'loading'
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`, {
        method: 'put',
        body: JSON.stringify(props.post),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then((r) => {
        if (r.ok) {
            return r.json()
        }
        state.value = error
        throw new Error('Erreur lors de la MAJ du post')
    })
    .then((data) => {
        emits('save', data)
    })
    .catch(() => {
        state.value = error
    })
}
</script>

<style scoped>
    form {
        margin: 6px;
    }
</style>