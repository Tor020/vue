<template lang='pug'>
div
  .card.m-3(style='width: 25rem;')
    .card-body
      h5.card-title(v-text='thecardtitle')
      p.card-text(v-html='thecardbody')
      .card-text.alert.alert-warning(v-if='parentmessage', v-html='parentmessage')
      button.btn.btn-success(v-if='parentmessage', @click='ok') Ok
</template>
 
<script>
  // callback example

   export default {
        props: ['parentmessage', 'ok'],
 
        data() {
            return {
                thecardtitle: "Child Component!",
                thecardbody: "I'm just a child."
            }
        }
    }
</script>


<style>
 
</style>
