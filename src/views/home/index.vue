<!--
About Page
Created at 09/04/2021 11:45
Author: Khaliq ALI
!-->
<template>
<div class="flex justify-center">
    <img role="Logo" alt="pokemon" src="../../assets/images/img_pokemon.webp" class="h-32">
  <pokemon></pokemon>
</div>
</template>

<script>
import Pokemon from '../../components/Pokemon'
export default {
  name: 'index',
  components: {
    Pokemon
  }
}
</script>

<style lang="scss" scoped>
</style>
