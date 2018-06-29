<template lang='pug'>
div
  .card.m-2(style='width: 40rem;')
    .card-body
      h5.card-title(v-text='thecardtitle')
      button.btn.btn-info(@click='sendMessage') Send Child A Message
      child-card(:parentmessage='parentmessage', :ok='ok', @finished='finished')

</template>
 
<script>
    import ChildCard from './AChildCard.vue';
 
    export default {
        components: {ChildCard},
 
        data() {
            return {
                thecardtitle: 'Parent Component!',
                parentmessage: ''
            }
        },
 
        methods: {
            sendMessage() {
                this.parentmessage = '<b>Message From Parent:</b> Do Your Homework'
            },
 
            finished() {
                this.parentmessage = ''
            }
        }
    }
</script>
 
<style>
</style>