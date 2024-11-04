async function getSunsetForMountain(lat, lng) {
    let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data;
}
document.addEventListener("DOMContentLoaded", () => {
    const mountainsSelect = document.getElementById("mountainsSelect");
    mountainsArray.forEach(m => mountainsSelect.appendChild(new Option(m.name)));
    mountainsSelect.addEventListener("change", async e => {
        const index = mountainsSelect.selectedIndex;
        if (index) { //not help whoch 0 is falsey
            const m = mountainsArray[index - 1]

            const coords = m.coords.lat
            results.innerHTML = `
            <h1>${m.name}</h1>
            Elevation:   <b>${m.elevation}</b><br>
            Effort:      <b>${m.effort}</b><br>
            Coordinates: <b>${m.coords.lat.toFixed(3)}, $
            <br>
            ${m.desc}
            <br></br>
            `;

            if (m.img) {
                const i = document.createElement("img");
                i.alt = "Mountain Image";
                i.src = "data/images/" + m.img;
                results.appendChild(i);
            }
            //to do: fetch sunset (pdf) // function that can "fetch" the sunrise/sunset times
            const data = await getSunsetForMountain(m.coords.lat, m.coords.lng);
            results.innerHTML += "<br> sunrise - sunset: ";
             results.innerHTML += data.results.sunrise;
             results.innerHTML += " - ";
             results.innerHTML += data.results.sunset;
        }
    });
});