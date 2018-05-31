<template lang='pug'>
.d-flex.justify-content-center
  slots-example
    h1(slot='title') {{ slotMarkup }}
    h5(slot='subtitle') The Sub Title Passed In
    h3 This is some body text son.

</template>
 
<script>
    import SlotsExample from './SlotsExample.vue';
 
    export default {
        components: {SlotsExample},
 
        data() {
            return {
                slotMarkup: 'THE REAL DEAL'
            }
        }
    }
</script>
