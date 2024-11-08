function addPark(parkTypeName, parkTypeSelect) {
    parkTypeSelect.appendChild(new Option(parkTypeName));
}

function addLocation(text, target) {
    target.appendChild(new Option(text));
}

function Park(parkObject) {
    
    const e = document.createElement("div");
    e.className = "park-card";
    e.innerHTML = `
    
    <b>${parkObject.LocationName}</b> <br>
    State: ${parkObject.State} <br>
    Zip Code: ${parkObject.ZipCode} <br>
    Phone Number: ${parkObject.Phone} <br>
    Latitude: ${parkObject.Latitude} <br>
    Longitude: ${parkObject.Longitude} <br>
    `;
    return e;
}

function renderParks() {
    const results = document.getElementById("results");
    const selectedType = parkTypeSelect.value;
    const selectedLocation = parkLocationSelect.value;

    results.innerHTML = "";

    let filtered = nationalParksArray;
    if (selectedType) {
        filtered = filtered.filter(p => p.LocationName.toLowerCase().includes(selectedType.toLowerCase()));
    }
    if (selectedLocation) {
        filtered = filtered.filter(p => p.State.toLowerCase() === selectedLocation.toLowerCase());
    }

    filtered.forEach(p => {
        const card = Park(p);
        results.appendChild(card);
    });

    if (filtered.length < 1) {
        results.innerHTML = "No results found matching the filter!";
    }
}
function onContent() {
    const parkTypeSelect = document.getElementById("parkTypeSelect");
    const parkLocationSelect = document.getElementById("parkLocationSelect");
    const results = document.getElementById("results");
    parkTypesArray.forEach(parkTypeName => addPark(parkTypeName, parkTypeSelect));
    locationsArray.forEach(parkLocationName => addLocation(parkLocationName, parkLocationSelect))
    filterButton.addEventListener("click", renderParks);
    parkTypeSelect.addEventListener("change", renderParks);
    parkLocationSelect.addEventListener("change", renderParks);
}

document.addEventListener("DOMContentLoaded", onContent);