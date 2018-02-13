<template>
  <div class="content-editable"
       v-html="innerText"
       :contenteditable="canEdit"
       @focus="isLocked = true"
       @blur="isLocked = false"
       @input="input">
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'content-editable',
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
        isLocked: false
      }
    },
    watch: {
      'value'() {
        if (!this.isLocked || !this.innerText) {
          this.innerText = this.value;
        }
      }
    },
    methods: {
      input() {
        this.$emit('input', this.$el.innerHTML);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/scss">
  .content-editable {
    width: 100%;
    height: 100%;
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
