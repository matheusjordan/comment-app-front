<template>
  <transition name="modal">
        <div class="modal-background">
            <div class="modal-wrapper">
                <div class="modal-box">
                    <div class="modal-header">
                        <div class="icon">
                            <span class="material-icons">
                                library_books
                            </span>
                        </div>
                        <div class="text">
                            Novo comentário
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="form-container">
                            <form>
                                <div class="form-control">
                                    <label> Autor </label>
                                    <input v-model="authorField" type="text">
                                </div>
                                <div class="form-control">
                                    <label> Comentário </label>
                                    <textarea v-model="commentField"></textarea>
                                </div>
                            </form>
                            <div class="form-btns">
                                <button @click="close" class="cancel">
                                    cancelar
                                </button>
                                <button @click="save" class="save">
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { errorToast, successToast } from '../services/toast.service';
import { create } from '../services/comments.service';

export default {
    data() {
        return {
            authorField: '',
            commentField: ''
        }
    },
    methods: {
        save: function() {
            create({ author: this.authorField, text: this.commentField })
                .then((data) => {
                    if (data) {
                        this.$emit('close', true)
                        successToast(this, 'Comentário criado com sucesso!')
                    } else {
                        errorToast(this, 'Falha ao criar comentário!');
                    }
                })
        },
        close: function() {
            this.$emit('close', null)
        },
    } 
}
</script>

<style scoped>

    .form-control {
        display: flex;
        flex-direction: column;
        padding-bottom: 8px;
    }

    .form-control > input {
        border: solid #2c3e50;
        border-radius: 12px;
        height: 22px;
    }

    .form-control > label {
        font-weight: 700;
        padding-bottom: 4px;
    }

    .form-control > textarea {
        max-height: 72px;
        min-height: 72px;
        max-width: 100%;
        min-width: 95%;
        border: solid #2c3e50;
        border-radius: 12px
    }

    .form-btns {
        display: flex;
        justify-content: flex-end;
        width: fit-content;
        margin-left: auto;
    }

    .form-btns > button {
        height: 32px;
        border-radius: 32px;
        width: 88px;
        font-weight: 700;
        position: relative;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        cursor: pointer;
    }

    .form-btns > .save {
        background: #087f23;
        color: white;
        margin-left: 16px;
    }

    .form-btns > .cancel {
        background: white;
        color: #2c3e50;
    }

    .modal-background {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
     display: table-cell;
     vertical-align: middle;

     width: fit-content;
   }

   .modal-box {
        border-radius: 32px;
        padding: 16px;
        cursor: default;
        background: #dcedc8;
        width: 50%;
        max-width: 400px;
        min-width: 270px;
        height: 50%;
        max-height: 260px;
        min-height: 160px;
        margin: auto;
        z-index: 9999;
        display: flex;
        flex-direction: column;
   }

   .modal-header {
       height: 20%;
       display: flex;
       flex-direction: row;
       margin-left: 8px;
   } 

   .modal-header > .icon {
       margin-right: 8px;
   }

   .modal-header > .text {
        font-size: 1.3rem;
        font-weight: 700;
   }

   .modal-body {
       height: 80%;
   }
</style>