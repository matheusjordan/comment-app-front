<template>
  <div class="card">
    <div class="header">
        <span class="material-icons">
            person
        </span>
        <label>
            {{ comment?.author }}
        </label>

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
    <div class="content">
        {{ comment?.text }}
    </div>
    <div class="line"></div>
    <div class="footer">
        <small>
            {{ transformDate(new Date()) }}
        </small>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        comment: Object,
    },
    methods: {
        treatEdit: function() {
            this.isEdit = !this.isEdit;
        },
        saveEdit: function() {
            this.isEdit = false;
            console.log('salvo')
        },
        deleteComment: function() {
            console.log('deletado')
        },

        transformDate: function(value) {
            const date = new Date(value);
            const formatedDate = `${date.getMinutes()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

            return formatedDate;
        }
    },
    data() {
        return {
            isEdit: false
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
        min-height: 48px;
    }

    .footer {
        display: flex;
    }

    .footer > small {
        margin-left: auto;
        margin-top: 8px;
        font-size: .8rem;
    }

</style>