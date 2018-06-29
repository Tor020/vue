<template lang='pug'>
div
  .card.m-2(style='width: 40rem;')
    .card-body
      h4.card-title(v-text='thecardtitle')
      button.btn.btn-block.btn-outline-danger(@click='momSaidChill', v-if='stopFighting()')
        | Mom says
        | stop fighting!
      .d-flex.justify-content-center
        brother-card(:messageson='messageson', @brothersaid='messageDaughter($event)')
        sister-card(:messagedaughter='messagedaughter', @sistersaid='messageSon($event)')

</template>
 
<script>
    import BrotherCard from './BrotherCard.vue';
    import SisterCard from './SisterCard.vue';
 
    export default {
        components: {BrotherCard, SisterCard},
 
        data() {
            return {
                thecardtitle: 'Parent Component!',
                messagedaughter: '',
                messageson: ''
            }
        },
 
        methods: {
            messageDaughter(message) {
                this.messagedaughter = message;
            },
 
            messageSon(message) {
                this.messageson = message;
            },
 
            stopFighting() {
                if (this.messagedaughter && this.messageson) {
                    return true;
                }
                return false;
            },
 
            momSaidChill() {
                this.messagedaughter = '';
                this.messageson = '';
            }
        }
    }
</script>
 
<style scoped>
    div.card {
        color: #721c24;
        border: 4px solid #f5c6cb;
    }
</style>