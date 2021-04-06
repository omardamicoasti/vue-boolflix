/* Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
1.	Titolo
2.	Titolo Originale
3.	Lingua
4.	Voto */


var app = new Vue({
  el: "#app",

  mounted() {
    if (!this.userInput == "") {
      axios.get(this.urlDMDB + this.userInput).then((res) => {
        console.log(res.data.results);
        console.log(this.userInput);
      });
    } else {
      
    }
    
  },

  data: {
    userInput: "vietnam",
    urlDMDB: "https://api.themoviedb.org/3/search/movie?api_key=a608fd695887ae73aa29798f86f15792&query=",
  },

  methods: {
    filterGenre(singleAlbum) {
      /*if ((this.selectedGenre == singleAlbum.genre) || (this.selectedGenre == "All")) {
          return true;
        } else {
          return false;
        }*/
    },
  },
});
Vue.config.devtools = true;



