<template lang="pug">


.d-flex.flex-column.align-items-center
  CardImport(v-for='keyToRemoveWarning in keyToRemoveWarning')

// if you render these with dynamic content, the :key  on the vue object should be passed as each items :key value
// :key = card.Text


</template>




<script>
import CardImport from './ACardImport';

export default {

  components: {
    CardImport
  },



  data() {
    return {
      keyToRemoveWarning: 2
    };
  }


};


</script>
