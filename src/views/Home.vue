<template>
  <div>
    <h1>Characters</h1>
    <div class="container container-pagination">
      <b-button variant="outline-primary" class="btn-custom" @click="prev"
        >Prev</b-button
      >
      <div class="current-page">{{ currentPage }}</div>
      <b-button variant="outline-primary" class="btn-custom" @click="next"
        >Next</b-button
      >
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6 character-col"
          v-for="character in characterPage"
          :key="character.id"
        >
          <div class="p-3 character" @click="goToCharacter(character.id)">
            <div class="">
              <img :src="character.image" alt="character.name" />
            </div>
            <div class="info-character">
              <h2>{{ character.name }}</h2>
              <h4>{{ character.gender }}</h4>
              <h4>{{ character.species }}</h4>
              <h4>{{ character.status }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Home",
  mounted() {
    console.log("verificando");
    this.$store.dispatch("getcards");
  },
  methods: {
    getTodos() {
      const params = {
        page: this.page,
      };
      console.log("peticion get");
      axios
        // https://rickandmortyapi.com/api/character/?page=<>
        .get("https://rickandmortyapi.com/api/character/", { params })
        .then((res) => {
          this.characters = res.data.results;
          this.pages = res.data.info.pages;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    goToCharacter(id) {
      console.log(`Go to character: ${id}`);
      this.$router.push({ name: "CharacterInfo", params: { id } });
    },
    ...mapMutations(["prev", "next"]),
  },
  computed: {
    characterPage() {
      return this.$store.state.characterCards;
    },
    ...mapState([
      "characterCards",
      "numberOfPages",
      "currentPage",
      "idSelectedCharacter",
      "prevPage",
      "nextPage",
      "apiUrl",
    ]),
  },
};
</script>

<style lang="scss">
body {
  background: #081119;
}
h1 {
  color: #00ff97;
}

h2 {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem;
  background: #00ff97;
  border-radius: 0.8rem;
  margin: 1rem;
}

h4 {
  margin: 1rem;
  color: #ffffff;
  background: #393e46;
  font-weight: inherit;
  border-radius: 0.8rem;
}

input {
  text-align: center;
  background: #002128;
  outline: none;
  border: 0;
  padding: 0.6rem;
  margin: 1rem;
  color: #ffffff;
  font-weight: 700;
  border-radius: 1rem;
}

.container-pagination {
  display: inline-flex;
  margin: 1rem;
  justify-content: center;
}

.current-page {
  margin: 1rem;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #ce1212;
}

.btn-custom {
  color: #f5a962;
  border-color: #47597e;
}
.btn-custom:hover {
  background: #293b5f;
}
.character {
  transition: background 1s;
  border-radius: 1rem;
  padding: 1rem;
  cursor: pointer;
  background: #132c33;
}
.character:hover {
  background: #293b5f;
}
.character-col {
  margin-bottom: 2rem;
}
div img {
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  object-fit: contain;
}
</style>
