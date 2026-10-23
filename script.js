// --- VIIKKOTEHTÄVÄ 4: API-haku ---
 
const nappi = document.getElementById("haeNappi");
const tulos = document.getElementById("tulosTeksti");
 
nappi.addEventListener("click", function() {
 
tulos.textContent = "Haetaan Tampereen säätietoja...";
 
fetch("https://api.open-meteo.com/v1/forecast?latitude=61.50&longitude=23.79&current=temperature_2m&timezone=Europe%2FHelsinki")
.then(function(vastaus) {
 
if (!vastaus.ok) {
throw new Error("Säätietojen hakeminen epäonnistui.");
}
 
return vastaus.json();
})
 
.then(function(data) {
 
console.log("API:n palauttama säädata:", data);
 
const lampotila = data.current.temperature_2m;
 
tulos.innerHTML =
"Tampereella on nyt " +
lampotila +
" °C. Aina on hyvä sää syödä pullaa! " +
'<a href="https://www.foreca.fi/Finland/Tampere" target="_blank">Katso Tampereen sää Forecasta</a>';
})
 
.catch(function(virhe) {
 
console.error("Virhe:", virhe);
 
tulos.textContent =
"Säätietojen hakeminen epäonnistui. Yritä uudelleen.";
});
 
});