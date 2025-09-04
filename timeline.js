async function createTimeline() {
    try {
        const response = await fetch("./siivaevents.json")
        const data = await response.json();
        addTimeline(data);
    } catch (error) {
        console.error("Failed to load events:", error)
    }
}

function addTimeline(obj) {
    const event = document.getElementById("events");
    const years = obj.timeline_data;
    for (const yr of years) {
        const fragment = document.createDocumentFragment();
        const yearT = document.createElement("div");
        yearT.textContent = yr.year;
        yearT.classList.add("year-box");
        fragment.appendChild(yearT);

        const yrEvents = yr.events;
        for (const ev of yrEvents) {
            const container = document.createElement("div");
            container.classList.add("event-container");

            const mainInfo = document.createElement("div");
            mainInfo.classList.add("info-box");
            const mainImage = document.createElement("div");
            mainImage.classList.add("image-box");

            const dateT = document.createElement("div");
            dateT.textContent = ev.display_date;
            dateT.classList.add("date-box");

            const locationT = document.createElement("div");
            locationT.textContent = "Location: " + ev.location;
            locationT.classList.add("mini-info");

            const universeT = document.createElement("div");
            universeT.textContent = "Universe: " + ev.universe;
            universeT.classList.add("mini-info");

            const detailsT = document.createElement("div");
            detailsT.textContent = ev.details;
            detailsT.classList.add("event-details");

            mainInfo.appendChild(dateT);
            mainInfo.appendChild(locationT);
            mainInfo.appendChild(universeT);
            mainInfo.appendChild(detailsT);

            const imgTemp = document.createElement("div");
            imgTemp.textContent = "Test image input";
            imgTemp.classList.add("mini-info");

            mainImage.appendChild(imgTemp);

            container.appendChild(mainInfo);
            container.appendChild(mainImage);
            fragment.appendChild(container);
        }
        event.appendChild(fragment);
    }
}

createTimeline();