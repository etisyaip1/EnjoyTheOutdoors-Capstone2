document.addEventListener("DOMContentLoaded" , () => {
    const mountainsSelect = document.getElementById("mountainsSelect");
    mountainsArray.forEach(m => mountainsSelect.appendChild(new Option (m.name)));
    mountainsSelect.addEventListener("change" , e => {
        const index = mountainsSelect.selectedIndex;
        if(index){ //not help whoch 0 is falsey
            const m = mountainsArray[selectedIndex - 1]
            
            const coords = m.coords.lat
            results.innerHTML = `
            <h1>${m.name}</h1>
            Elevation:   <b>${m.elevation}</b><br>
            Effort:      <b>${m.effort      }</b><br>
            Coordinates: <b>${m.coofds.lat.toFixed(3)}, $
            <br>
            ${m.desc}
            <br></br>
            `;

            if(m.img){
                const i = document.createElement("img");
                i.alt = "Mountain Image";
                i.src = "data/images/" + m.img;
                results.appendChild(i);
            }
        }
    });
});