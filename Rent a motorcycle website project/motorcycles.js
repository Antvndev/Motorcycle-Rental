async function loadMotorcycles() {
    const response = await fetch("motorcycles.json");
    const motorcycles = await response.json();

    const bikeListContainer = document.querySelector(".Bike-list-container");
    const imagePreview = document.querySelector(".image-preview img");
    const detailsCaption = document.querySelector(".details-table caption");

    const modelValue = document.getElementById("model-value");
    const markValue = document.getElementById("mark-value");
    const yearValue = document.getElementById("year-value");
    const ccValue = document.getElementById("cc-value");
    const hpValue = document.getElementById("hp-value");
    const transValue = document.getElementById("trans-value");
    const fuelValue = document.getElementById("fuel-value");
    const licenseValue = document.getElementById("license-value");

    bikeListContainer.innerHTML = "";
    motorcycles.forEach((bike, index) => {
        const bikeDiv = document.createElement("div");
        bikeDiv.classList.add("Bike");
        bikeDiv.textContent = bike.model;

        bikeDiv.addEventListener("click", () => {
            imagePreview.src = bike.image;
            imagePreview.alt = bike.mark + " " + bike.model;

            markValue.textContent = bike.mark;
            modelValue.textContent = bike.model;
            yearValue.textContent = bike.year;
            ccValue.textContent = `${bike.cc}cc`;
            hpValue.textContent = `${bike.hp} HP`;
            transValue.textContent = bike.transmission;
            fuelValue.textContent = bike.fuel;
            licenseValue.textContent = bike.license;

            detailsCaption.innerHTML = `<strong>$${bike.pricePerDay}</strong> / rent per day`;

            document.querySelectorAll(".Bike").forEach(el => el.classList.remove("active"));
            bikeDiv.classList.add("active");
        });

        bikeListContainer.appendChild(bikeDiv);

        if (index === 0) {
            bikeDiv.click();
        }
});}
document.addEventListener("DOMContentLoaded", loadMotorcycles);
