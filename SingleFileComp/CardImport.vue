
<template lang='pug'>
div
  .card(style='width: 18rem;')
    .card-body
      h5.card-title(v-text='thecardtitle')
      p.card-text(v-html='thecardbody')
      button.btn.btn-primary(@click='setTitle') Set Title
      button.btn.btn-success(@click='setBody') Set Body
  hr

</template>
 
<script>
    export default {

      
        data() {
            return {
                thecardtitle: 'The Card Title',
                thecardbody: 'Here we have some text. It is great text, that I can tell you.'
            }
        },
 
        methods: {
            setTitle() {
                this.thecardtitle = 'NEW card title!'
            },
 
            setBody() {
                this.thecardbody = 'Now we have <b>NEW</b> text. It is STILL great text, that I can tell you.'
            }
        }
    }



</script>
 
