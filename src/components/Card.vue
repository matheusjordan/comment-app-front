<template>
  <div class="card">
    <div class="header">
        <span class="material-icons">
            person
        </span>
        <label v-if="!isEdit" class="format-text">
            {{ authorField }}
        </label>
        <input type="text" v-model="authorField" v-else-if="isEdit" class="author-field">

        <div class="actions">
            <button class="btn" @click="treatEdit" v-if="!isEdit">
                <span class="material-icons">
                    create
                </span>
            </button>
            <button class="btn btn-delete" v-if="isEdit" @click="deleteComment">
                <span class="material-icons">
                    delete
                </span>
            </button>
            <button class="btn btn-done" v-if="isEdit" @click="saveEdit">
                <span class="material-icons">
                    done
                </span>
            </button>
        </div>
    </div>
    <div class="line"></div>
    <div class="content" v-if="!isEdit" clas="format-text-1">
        {{ textField }}
    </div>
    <textarea v-model="textField" v-else-if="isEdit" class="text-field"></textarea>
    <div class="line"></div>
    <div class="footer">
        <small>
            {{ transformDate(comment.createdAt) }}
        </small>
    </div>
  </div>
</template>

<script>
import { successToast, errorToast } from '../services/toast.service';
import { update, remove } from '../services/comments.service';

export default {
    props: {
        comment: Object,
    },
    methods: {
        treatEdit: function() {
            this.isEdit = !this.isEdit;
        },
        saveEdit: function() {
            const comment = this.transformComment();
            
            update(comment)
                .then((data) => {
                    if (data) {
                        this.isEdit = false;
                        successToast(this, 'Comentário editado com sucesso!');
                        this.$emit('refresh', null);
                    } else {
                        errorToast(this, 'Falha ao editar comentário!')
                    }
                });
        },
        deleteComment: function() {
            const id = this.comment.id;

            remove(id)
                .then((data) => {
                    if (data) {
                        successToast(this, 'Comentário removido com sucesso!');
                        this.$emit('refresh', null);
                    } else {
                        errorToast(this, 'Falha ao remover comentário');
                    }
                })
        },

        transformDate: function(value) {
            const date = new Date(value);
            const formatedDate = `${date.getMinutes()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

            return formatedDate;
        },
        transformComment: function () {
            const comment = { id: this.comment.id, text: this.textField, author: this.authorField }
            return comment;
        }
    },
    data() {
        return {
            isEdit: false,
            textField: this.comment.text,
            authorField: this.comment.author
        }
    }
}
</script>

<style scoped>

    .line {
        height: 1px;
        background: white;
        margin: 4px 0px;
    }

    .card {
        background: #dcedc8;
        padding: 16px;
        margin:8px;
        display: flex;
        flex-flow: column;
        max-width: 256px;
        min-width: 256px;
        max-height: 140px;
        border-radius: 32px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .header {
        display: flex;
    }

    .header > label {
        margin: 4px 0px 8px 8px;
        font-weight: 600;
    }

    .header > .actions {
        margin-left: auto;
    }

    .header > .actions > .btn {
        padding: 0px;
        border: 0px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: white;
        cursor: pointer;
        position: relative;
        bottom: 4px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .btn-delete {
        margin-left: 8px;
        color: #f44336;
    }

    .btn-done {
        margin-left: 8px;
        color: #087f23;
    }

    .content {
        min-height: 64px;
        max-height: 64px;
    }

    .author-field {
        height: 20px;
        width: calc(100% - 128px);
        margin-left: 8px;
    }

    .text-field {
        max-width: 100%;
        margin: 0px;
        min-height: 64px;
        max-height: 64px;
    }

    .footer {
        display: flex;
    }

    .footer > small {
        margin-left: auto;
        margin-top: 8px;
        font-size: .8rem;
    }

    .format-text {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .format-text-1 {
        overflow: auto;
        overflow-wrap: break-word;
    }
</style>