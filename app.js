/* 

Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o
parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono 
ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
1.	Titolo
2.	Titolo Originale
3.	Lingua
4.	Voto 

Milestone 2:
Trasformiamo il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare 
a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote :P)
Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, 
gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film 
che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie 
  e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs


Milestone 3:
In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. 
Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella
porzione di URL tante dimensioni diverse. Dovremo prendere quindi l’URL base delle immagini di TMDB:
https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le 
dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi 
aggiungere la parte finale dell’URL passata dall’API.
Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

*/


var app = new Vue({
  el: "#app",

  mounted() {},

  data: {
    urlDMDB:
      "https://api.themoviedb.org/3/search/movie?api_key=a608fd695887ae73aa29798f86f15792&query=",
    urlDMDBseries:
      "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=",
    userInput: "",
    moviesSelected: [],
    seriesSelected: [],
    flagUrl: "",
    flagInDatabase: false,
  },

  methods: {
    searchMovies() {
      axios.get(this.urlDMDB + this.userInput).then((res) => {
        this.moviesSelected = res.data.results;
        console.log(this.moviesSelected);
      });
    },
    searchSeries() {
      axios.get(this.urlDMDBseries + this.userInput).then((res) => {
        this.seriesSelected = res.data.results;
        console.log(this.seriesSelected);
      });
      this.userInput = "";
    },
    starsCalculate(vote) {
      return Math.ceil(vote / 2);
    },
    starsEmpy(num, starsCalculate) {
      return num - starsCalculate;
    },
    setFlag(language) {
      this.flagInDatabase = true;
      return "img/" + language + ".png";
    },
  },
});
Vue.config.devtools = true;



