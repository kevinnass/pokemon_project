<template>
  <div class="flex police text-black">
    <div :class="pokemon.type" class="flex flex-col rounded-xl shadow-lg card items-center m-5"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
        <div class="text-center mt-3">
          <h2>{{ pokemon.name }}</h2>
        </div>
        <div class="text-center m-2">
          <img role="pkmn" :src="pokemon.image" class="w-32 h-32" :alt="pokemon.image" />
        </div>
        <div class="text-center flex flex-row m-2">
          <h3 class="mt-1">Type: </h3>
          <img :src="type" class="ml-1 h-16 pb-8" alt="type">
        </div>
      <transition name="info">
      <button v-if="hover" @click="viewPokemon" class="border-blue-500 text-base ml-auto mt-1 mr-8 border bg-blue-500 ">Voir le pokemon</button>
      </transition>
    </div>
  </div>
  <!--    <div class="col s12 m5">
        <div class="card-panel teal">
          <span class="white-text">I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
          </span>
        </div>
      </div>-->
</template>

<script>
export default {
  props: ['pokemon'],
  data () {
    return {
      type: null,
      hover: false
    }
  },
  methods: {
    viewPokemon () {
      this.$router.push('/view/' + this.pokemon.id)
    }
  },
  mounted () {
    if (this.pokemon.type === 'feu') {
      this.type = 'https://www.pokebip.com/pages/strategie/images/pokemon-go-fire.png'
    } else if (this.pokemon.type === 'plante') {
      this.type = 'https://cdn.shopify.com/s/files/1/0442/7969/3475/files/pokemon-type-plante_480x480.png?v=1619914434'
    } else if (this.pokemon.type === 'eau') {
      this.type = 'https://www.solutechservices.be/images/tab7.jpg'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
.police {
  font-size: x-large;
  font-family: 'Indie Flower', cursive;
}
.card {
  width: 20rem;
  height: 17.5rem;
}
.info-enter-from, .info-leave-to {
  opacity: 0;
  transform: translateY(30px);
  /*transform: scale(0.0);*/
}
.info-enter-active {
  transition: all 0.5s ease-out;
}
.info-leave-active {
  transition: all 0.5s ease-in;
}
.info-enter-to, .info-leave-from {
  opacity: 1;
  /*transform: translateY(1px);*/
  transform: scale(1.1);
}
.eau {
  background: rgba(0, 0, 255, 0.32);
}
.plante {
  background: rgba(0, 128, 0, 0.27);
}
.feu {
  background: rgba(255, 0, 0, 0.34);
}
</style>
