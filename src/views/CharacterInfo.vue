<template>
  <div class="container">
    <h1>Character Info</h1>
    <div class="container character-info">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <img
            :src="characterCards[($route.params.id % 20) - 1].image"
            alt="characterCards[($route.params.id % 20)-1].name"
          />
        </div>
        <div class="col-lg-8 col-md-8">
          <h2>{{ characterCards[($route.params.id % 20) - 1].name }}</h2>
          <h4>{{ characterCards[($route.params.id % 20) - 1].species }}</h4>
          <h4>{{ characterCards[($route.params.id % 20) - 1].type }}</h4>
          <h4>{{ characterCards[($route.params.id % 20) - 1].gender }}</h4>
          <h4>
            {{ characterCards[($route.params.id % 20) - 1].location.name }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["characterCards", "posicion"]),
  },
};
</script>

<style lang="scss" scoped>
.character-info {
    margin-top: 4rem;
}
</style>
