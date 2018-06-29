<template lang='pug'>
div
  .card.m-3(style='width: 15rem;')
    .card-body
      h5.card-title(v-text='thecardtitle')
      p.card-text
        | I'm a 
        b sister
        | .
      button.btn.btn-warning(@click='messageBrother') Message Brother
      .mt-3.alert.alert-secondary(v-if='messagedaughter', v-html='messagedaughter')

</template>
 
<script>
    export default {
        props: ['messagedaughter'],
 
        data() {
            return {
                thecardtitle: 'Child Component!'
            }
        },
 
        methods: {
            messageBrother() {
                this.$emit('sistersaid', 'Mom said do your homework!')
            }
        }
    }
</script>
 
<style scoped>
    div.card {
        color: #856404;
        border: 4px solid #ffeeba;
    }
</style>
