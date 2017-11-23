<template>
  <div class="edit-div"
       v-html="innerText"
       :contenteditable="canEdit"
       @input="handleInput">
  </div>
</template>
<script>
  export default {
    name: 'editDiv',
    props: {
      value: {
        type: String,
        default: ''
      },
      canEdit: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        innerText: this.value,
      }
    },
    methods: {
      handleInput() {
        this.$emit('input', this.$el.innerHTML);
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .edit-div {
    overflow: auto;
    word-break: break-all;
    outline: none;
    user-select: text;
    white-space: pre-wrap;
    text-align: left;
    &[contenteditable=true] {
      user-modify: read-write-plaintext-only;
      &:empty:before {
        content: attr(placeholder);
        display: block;
        color: #ccc;
      }
    }
  }
</style>
