
<template lang='pug'>
div
  slot(name='title')
  span
    slot(name='subtitle') Default Sub Title
  slot

</template>
 
<style>
    h1 {
        color: blue;
    }
</style>
