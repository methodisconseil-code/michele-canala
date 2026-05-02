// =========================
// SCROLL DOUX VERS LES SECTIONS
// =========================

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}


// =========================
// DONNÉES NUTRITION
// =========================

const nutritionData = {
    flexitarian: {
        image: "takedahrs-japanese-food-7187313.jpg",
        title: "Flexitarian Nutrition",
        paragraphs: [
            "You mainly follow a plant-based diet while still including animal products occasionally. This flexible approach allows you to enjoy a wide variety of foods while building a nutrition strategy that supports your training and long-term progress.",
            "We help you structure your meals with a balanced mix of plant-based proteins, complex carbohydrates, and healthy fats, adapted to your workout intensity and recovery needs. Small adjustments can make a real difference in how you perform and recover.",
            "Whether your goal is fat loss, muscle gain, or body recomposition, your nutrition becomes a powerful tool to support consistent results."
        ],
        tagline: "Balance without restriction."
    },

    vegetarian: {
        image: "pen_ash-smashed-avocado-on-toast-4488463.png",
        title: "Vegetarian Nutrition",
        paragraphs: [
            "You follow a vegetarian diet, excluding meat and fish while still including eggs and/or dairy. With the right structure, this approach can fully support strength development, recovery, and overall performance.",
            "We guide you in building balanced meals that provide enough protein, essential nutrients, and energy to match your training routine. Understanding how to combine different food sources is key to maintaining consistency and progress.",
            "With a clear and practical approach, your nutrition supports your goals: whether it’s fat loss, muscle gain, or improving overall fitness."
        ],
        tagline: "Complete nutrition, consistent results."
    },

    vegan: {
        image: "joannawielgosz-pasta-7209002.jpg",
        title: "Vegan Nutrition",
        paragraphs: [
            "You follow a fully plant-based diet, excluding all animal products. With the right structure and food combinations, this approach can effectively support performance, recovery, and muscle development.",
            "We help you understand how to meet your protein needs, balance your meals, and fuel your body around your workouts using plant-based foods. The focus is on making your nutrition both efficient and easy to follow daily.",
            "With the right guidance, your diet becomes a strong foundation for fat loss, muscle gain, or body recomposition."
        ],
        tagline: "Plant-fueled, performance-ready."
    }
};


// =========================
// AFFICHAGE NUTRITION
// =========================

function showNutrition(type) {
    const selectedNutrition = nutritionData[type];
    const nutritionContent = document.getElementById("nutrition-content");
    const nutritionButtons = document.querySelectorAll(".nutrition-tab");

    nutritionButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.nutrition === type);
    });

    nutritionContent.innerHTML = `
        <div class="nutrition-layout">

            <img
                class="nutrition-image"
                src="${selectedNutrition.image}"
                alt="${selectedNutrition.title}"
            >

            <div class="nutrition-copy">

                <h3>${selectedNutrition.title}</h3>

                ${selectedNutrition.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}

                <strong>${selectedNutrition.tagline}</strong>

            </div>

        </div>
    `;
}


// =========================
// DONNÉES PROGRAMS
// =========================

const programData = {
    recomposition: {
        colorClass: "green",
        metricsClass: "recomposition",
        difficulty: "●●●○○",
        duration: "●●●○○",
        frequency: "●●●○○"
    },

    weightloss: {
        colorClass: "pink",
        metricsClass: "weightloss",
        difficulty: "●●●●○",
        duration: "●●●○○",
        frequency: "●●●●○"
    },

    mass: {
        colorClass: "blue",
        metricsClass: "mass",
        difficulty: "●●●●○",
        duration: "●●●●○",
        frequency: "●●●○○"
    }
};


// =========================
// AFFICHAGE PROGRAMS AU SURVOL
// =========================

function showProgram(programType) {
    const selectedProgram = programData[programType];
    const programCards = document.querySelectorAll(".program-card");
    const metricsContainer = document.getElementById("program-metrics");

    programCards.forEach((card) => {
        const isActive = card.dataset.program === programType;

        card.classList.remove("active", "green", "pink", "blue");

        if (isActive) {
            card.classList.add("active", selectedProgram.colorClass);
        }
    });

    metricsContainer.innerHTML = `
        <div class="program-metrics ${selectedProgram.metricsClass}">

            <div class="metric-row">
                <strong>Difficulty level</strong>
                <span class="metric-dots">${selectedProgram.difficulty}</span>
            </div>

            <div class="metric-row">
                <strong>Program duration</strong>
                <span class="metric-dots">${selectedProgram.duration}</span>
            </div>

            <div class="metric-row">
                <strong>Session frequency</strong>
                <span class="metric-dots">${selectedProgram.frequency}</span>
            </div>

        </div>
    `;
}


// =========================
// INITIALISATION
// =========================

document.addEventListener("DOMContentLoaded", () => {
    showNutrition("flexitarian");
    showProgram("recomposition");

    document.querySelectorAll(".nutrition-tab").forEach((button) => {
        button.addEventListener("click", () => {
            showNutrition(button.dataset.nutrition);
        });
    });

    document.querySelectorAll(".program-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            showProgram(card.dataset.program);
        });
    });
});
