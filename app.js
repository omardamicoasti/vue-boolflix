/* 

Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
1.	Titolo
2.	Titolo Originale
3.	Lingua
4.	Voto 

*/


var app = new Vue({
  el: "#app",

  mounted() {},

  data: {
    urlDMDB:
      "https://api.themoviedb.org/3/search/movie?api_key=a608fd695887ae73aa29798f86f15792&query=",
    userInput: "",
    moviesSelected: [],
    stars: 0,
  },

  methods: {
    searchMovies() {
      axios.get(this.urlDMDB + this.userInput).then((res) => {
        this.moviesSelected = res.data.results;
        console.log(this.moviesSelected);
      });
      this.userInput = "";
    },
    starsCalculate(index) {
      console.log(parseInt(this.moviesSelected[index].vote_average / 2));
      this.stars = parseInt(this.moviesSelected[index].vote_average / 2);
    },
  },
});
Vue.config.devtools = true;



