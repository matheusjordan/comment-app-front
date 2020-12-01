<template>
    <nav class="nav">
        <div class="title">
            <span class="material-icons">
                library_books
            </span>
            ComentáriosApp
        </div>
    </nav>
    <div class="content">
        <div v-if="comments.length > 0">
            <Card :comment="comment" v-for="comment of comments" :key="comment.id" @refresh="getComments"/>
        </div>
        <div class="spinner-container" v-if="comments.length === 0">
            <div class="spinner-text">
                {{ loadingText }}
            </div>
            <Spinner/>
        </div>
        <div v-if="showModal">
            <Modal @close="create"/>
        </div>
    </div>
    <div class="actions">
        <button aria-placeholder="Criar comentário" @click="openModal">
            <span class="material-icons">
                add_circle_outline
            </span>
        </button>
    </div>
</template>

<script>
import Card from './Card';
import Modal from './Modal';
import Spinner  from './Spinner';

import { errorToast } from '../services/toast.service';
import { getAll } from '../services/comments.service';

export default {
    created() {
        setInterval(() => {
            this.getComments();
        }, 5000);
    },
    components: {
        Card,
        Modal,
        Spinner
    },
    data() {
        return {
            comments: [],
            showModal: false,
            loadingText: 'Carregando comentários...' 
        }
    },
    methods: {
        openModal: function() {
            this.showModal = !this.showModal;
        },
        create: function() {
            this.showModal = false;
            this.getComments();
        },
        getComments: function() {
            getAll()
                .then((data) => {
                    if (data) {
                        this.comments = data;
                        this.loadingText = 'Aguardando comentários...'
                    } else {
                        errorToast(this, 'Falha ao obter comentários!');
                    }
                })
        },
    }
}
</script>

<style scoped>
    .title {
        font-size: 1.2rem;
        font-weight: 600;
    }

    .title > span {
        position: relative;
        top: 6px;
    }

    .content {
        margin: 16px;
        height: calc(100vh - 62px);
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .nav {
        display: flex;
        flex-flow: row;
        padding: 16px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        background: #dcedc8;
        position: sticky;
        top: 0px;
        z-index: 99;
    }

    .actions {
        margin-left: auto;
        position: sticky;
        bottom: 16px;
        width: fit-content;
        right: 16px;
    }

    .actions > button {
        border-radius: 50%;
        padding: 0px;
        border: 0px;
        width: 48px;
        height: 48px;
        background: #087f23;
        cursor: pointer;
        box-shadow: 0 0 4px #999;
    }

    .actions > button > span {
        font-size: 40px;
        padding: 4px;
        color: white;
    }

    .spinner-container {
        margin-top: 80px;
    }

    .spinner-container > .spinner-text {
        font-size: 1.2rem;
        font-weight: 700;
    }
</style>