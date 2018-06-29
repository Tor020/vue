<template lang='pug'>
div
  .card.m-2(style='width: 40rem;')
    .card-body
      h5.card-title(v-text='thecardtitle')
      button.btn.btn-info(@click='sendMessage') Send Child A Message
                    // calls sendMessageEvent 
                    // which changes value of this.parentmessage
                    // parentmessage is a prop that is read by the child

      child-card(:parentmessage='parentmessage', :ok='ok', @finished='finished')
                                                  // listens for the finished event from child 
                                                  // then calls the finished method on the parent
</template>
 
<script>
// customevent example
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