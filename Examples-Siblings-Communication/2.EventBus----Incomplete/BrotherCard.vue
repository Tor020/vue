<template lang='pug'>
div
  .card.m-3(style='width: 15rem;')
    .card-body
      h5.card-title(v-text='thecardtitle')
      p.card-text
        | I'm a 
        b brother
        | .
      button.btn.btn-primary(@click='messageSister') Message Sister
      .mt-3.alert.alert-secondary(v-if='messageson', v-html='messageson')

</template>
 
<script>
    export default {
        props: ['messageson'],
 
        data() {
            return {
                thecardtitle: 'Child Component!'
            }
        },
 
        methods: {
            messageSister() {
                this.$emit('brothersaid', 'Mom said do your homework!')
            }
        }
    }
</script>
 
<style scoped>
    div.card {
        color: #004085;
        border: 4px solid #b8daff;
    }
</style>
