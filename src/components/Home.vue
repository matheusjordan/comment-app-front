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
        <Card :comment="comment" v-for="comment of comments" :key="comment.id"/>
    </div>
    <div class="actions">
        <button aria-placeholder="Criar comentário">
            <span class="material-icons">
                add_circle_outline
            </span>
        </button>
    </div>
</template>

<script>
import Card from './Card'

export default {
    components: {
        Card
    },
    data() {
        return {
            comments: [
                { id: 1, text: 'comentario de teste 1', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
                { id: 2, text: 'comentario de teste 2', author: 'admin' },
            ]
        }
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
</style>