<template>
    <div id="app" class="flex flex-col items-center">
      <router-link to="/">
      <img role="Logo" alt="pokemon" src="./assets/images/img_pokemon.webp" class="w-75 h-40">
      </router-link>
      <transition name="route" mode="out-in">
      <router-view></router-view>
      </transition>
    </div>
</template>

<style lang="scss">
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-active {
  transition: all 0.5s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
