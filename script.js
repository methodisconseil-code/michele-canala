function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

/* =========================
   NUTRITION
========================= */

const nutritionData = {
    flexitarian: {
        image: "takedahrs-japanese-food-7187313.jpg",
        title: "Flexitarian<br>Nutrition",
        paragraphs: [
            "You mainly follow a plant-based diet while still including animal products occasionally. This flexible approach allows you to enjoy a wide variety of foods while building a nutrition strategy that supports your training and long-term progress.",
            "We help you structure your meals with a balanced mix of plant-based proteins, complex carbohydrates, and healthy fats, adapted to your workout intensity and recovery needs. Small adjustments can make a real difference in how you perform and recover.",
            "Whether your goal is fat loss, muscle gain, or body recomposition, your nutrition becomes a powerful tool to support consistent results."
        ],
        tagline: "Balance without restriction."
    },

    vegetarian: {
        image: "pen_ash-smashed-avocado-on-toast-4488463.png",
        title: "Vegetarian<br>Nutrition",
        paragraphs: [
            "You follow a vegetarian diet, excluding meat and fish while still including eggs and/or dairy. With the right structure, this approach can fully support strength development, recovery, and overall performance.",
            "We guide you in building balanced meals that provide enough protein, essential nutrients, and energy to match your training routine. Understanding how to combine different food sources is key to maintaining consistency and progress.",
            "With a clear and practical approach, your nutrition supports your goals: whether it’s fat loss, muscle gain, or improving overall fitness."
        ],
        tagline: "Complete nutrition, consistent results."
    },

    vegan: {
        image: "joannawielgosz-pasta-7209002.jpg",
        title: "Vegan<br>Nutrition",
        paragraphs: [
            "You follow a fully plant-based diet, excluding all animal products. With the right structure and food combinations, this approach can effectively support performance, recovery, and muscle development.",
            "We help you understand how to meet your protein needs, balance your meals, and fuel your body around your workouts using plant-based foods. The focus is on making your nutrition both efficient and easy to follow daily.",
            "With the right guidance, your diet becomes a strong foundation for fat loss, muscle gain, or body recomposition."
        ],
        tagline: "Plant-fueled, performance-ready."
    }
};

function showNutrition(type) {
    const selectedNutrition = nutritionData[type];
    const nutritionContent = document.getElementById("nutrition-content");
    const nutritionButtons = document.querySelectorAll(".nutrition-tab");

    nutritionButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.nutrition === type);
    });

    nutritionContent.innerHTML = `
        <div class="nutrition-layout">
            <img class="nutrition-image" src="${selectedNutrition.image}" alt="${selectedNutrition.title}">
            <div class="nutrition-copy">
                <h3>${selectedNutrition.title}</h3>
                ${selectedNutrition.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
                <strong>${selectedNutrition.tagline}</strong>
            </div>
        </div>
    `;
}

/* =========================
   PROGRAMS
========================= */

const programData = {
    recomposition: {
        colorClass: "green",
        metricsClass: "recomposition",
        difficulty: 1,
        duration: 5,
        frequency: 3
    },

    weightloss: {
        colorClass: "pink",
        metricsClass: "weightloss",
        difficulty: 3,
        duration: 4,
        frequency: 3
    },

    mass: {
        colorClass: "blue",
        metricsClass: "mass",
        difficulty: 2,
        duration: 5,
        frequency: 4
    }
};

function createDots(activeDots) {
    let dots = "";

    for (let i = 1; i <= 5; i++) {
        dots += `<span class="metric-dot ${i <= activeDots ? "active" : ""}"></span>`;
    }

    return dots;
}

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
        <div class="program-metrics ${selectedProgram.metricsClass} ${selectedProgram.colorClass}">

            <div class="metric-item">
                <div class="metric-text">
                    <h4>Difficulty level</h4>
                    <p>Indicates how demanding the program is in terms of intensity, consistency, and overall effort required to achieve results.</p>
                </div>
                <div class="metric-dots">${createDots(selectedProgram.difficulty)}</div>
            </div>

            <div class="metric-item">
                <div class="metric-text">
                    <h4>Program duration</h4>
                    <p>Represents the typical time needed to see meaningful results, depending on your starting point and level of commitment.</p>
                </div>
                <div class="metric-dots">${createDots(selectedProgram.duration)}</div>
            </div>

            <div class="metric-item">
                <div class="metric-text">
                    <h4>Session frequency</h4>
                    <p>Shows how many training sessions per week are recommended to follow the program effectively and maximize progress.</p>
                </div>
                <div class="metric-dots">${createDots(selectedProgram.frequency)}</div>
            </div>

        </div>
    `;
}

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
