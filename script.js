// =========================
// SCROLL VERS SECTION
// Permet de cliquer sur les boutons du hero
// =========================

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


// =========================
// SECTION NUTRITION
// Change le contenu selon le bouton cliqué
// =========================

function showNutrition(type) {

    const content = document.getElementById("nutrition-content");

    let html = "";

    // FLEXITARIAN
    if (type === "flexitarian") {
        html = `
        <div class="nutrition-layout">

            <img class="nutrition-image" src="https://images.unsplash.com/photo-1546069901-eacef0df6022">

            <div class="nutrition-text">
                <h3>Flexitarian Nutrition</h3>

                <p>
                You mainly follow a plant-based diet while still including animal products occasionally.
                </p>

                <p>
                We help you structure your meals with a balanced mix of proteins,
                carbs and healthy fats.
                </p>

                <strong>Balance without restriction.</strong>
            </div>

        </div>
        `;
    }

    // VEGETARIAN
    if (type === "vegetarian") {
        html = `
        <div class="nutrition-layout">

            <img class="nutrition-image" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe">

            <div class="nutrition-text">
                <h3>Vegetarian Nutrition</h3>

                <p>
                You follow a vegetarian diet, excluding meat and fish.
                </p>

                <p>
                We guide you in building balanced meals with enough protein and nutrients.
                </p>

                <strong>Complete nutrition, consistent results.</strong>
            </div>

        </div>
        `;
    }

    // VEGAN
    if (type === "vegan") {
        html = `
        <div class="nutrition-layout">

            <img class="nutrition-image" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd">

            <div class="nutrition-text">
                <h3>Vegan Nutrition</h3>

                <p>
                Fully plant-based diet, excluding all animal products.
                </p>

                <p>
                We help you meet your protein needs and fuel your workouts effectively.
                </p>

                <strong>Plant-fueled, performance-ready.</strong>
            </div>

        </div>
        `;
    }

    content.innerHTML = html;
}


// =========================
// SECTION PROGRAMS
// Affiche le détail du programme sélectionné
// =========================

function showProgram(type) {

    const container = document.getElementById("program-content");

    let html = "";

    if (type === "recomposition") {
        html = `
        <div class="program-details">

            <div class="program-details-row">
                <span>Difficulty level</span>
                <span class="dots">●●●○○</span>
            </div>

            <div class="program-details-row">
                <span>Program duration</span>
                <span>8–16 weeks</span>
            </div>

            <div class="program-details-row">
                <span>Session frequency</span>
                <span>3–5 per week</span>
            </div>

        </div>
        `;
    }

    if (type === "weightloss") {
        html = `
        <div class="program-details">

            <div class="program-details-row">
                <span>Difficulty level</span>
                <span class="dots">●●●●○</span>
            </div>

            <div class="program-details-row">
                <span>Program duration</span>
                <span>6–12 weeks</span>
            </div>

            <div class="program-details-row">
                <span>Session frequency</span>
                <span>4–6 per week</span>
            </div>

        </div>
        `;
    }

    if (type === "mass") {
        html = `
        <div class="program-details">

            <div class="program-details-row">
                <span>Difficulty level</span>
                <span class="dots">●●●●●</span>
            </div>

            <div class="program-details-row">
                <span>Program duration</span>
                <span>12–24 weeks</span>
            </div>

            <div class="program-details-row">
                <span>Session frequency</span>
                <span>4–5 per week</span>
            </div>

        </div>
        `;
    }

    container.innerHTML = html;
}
