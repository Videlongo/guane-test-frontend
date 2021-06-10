import axios from "axios"

const characterService = {}

characterService.getTodos = function() {
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
}

export default characterService
