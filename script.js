/* =========================
   SCROLL
========================= */

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
            <img class="nutrition-image" src="${selectedNutrition.image}" alt="">
            <div class="nutrition-copy">
                <h3>${selectedNutrition.title}</h3>
                ${selectedNutrition.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
                <strong>${selectedNutrition.tagline}</strong>
            </div>
        </div>
    `;
}

/* =========================
   PROGRAMS - NOUVELLE VERSION
========================= */

const programData = {
    recomposition: {
        colorClass: "green",
        title: "BODY RECOMPOSITION",
        paragraphs: [
            "Lose fat while building muscle. This method focuses on improving your body composition rather than just your weight, making it the most balanced and sustainable approach over time.",
            "It combines strength training, progressive overload and adequate protein intake with controlled nutrition to help your body burn fat while developing muscle efficiently.",
            "Ideal if you want long-term results without extreme dieting or strict phases."
        ],
        tagline: "Slow, steady, sustainable transformation.",
        difficulty: 1,
        duration: 5,
        frequency: 3
    },

    weightloss: {
        colorClass: "pink",
        title: "WEIGHT LOSS",
        paragraphs: [
            "Lose body fat by creating a controlled calorie deficit while maintaining an active training routine. This approach focuses on reducing fat while preserving muscle mass and supporting overall energy levels.",
            "It combines efficient workouts, consistent habits, and structured eating patterns to help you stay on track without feeling restricted or overwhelmed during the process.",
            "Ideal if your priority is to lose weight and feel lighter every day."
        ],
        tagline: "Burn fat, keep your energy.",
        difficulty: 3,
        duration: 4,
        frequency: 3
    },

    mass: {
        colorClass: "blue",
        title: "MASS GAINING",
        paragraphs: [
            "Build muscle by providing your body with the right training stimulus and enough fuel to grow consistently over time. This approach focuses on increasing strength, size, and overall physical performance.",
            "It combines progressive strength training, structured workouts, and a slight calorie surplus with protein intake to support muscle growth and recovery effectively.",
            "Ideal if your goal is to gain muscle and improve overall strength."
        ],
        tagline: "Build strength, gain muscle.",
        difficulty: 2,
        duration: 4,
        frequency: 4
    }
};

function createProgramDots(activeDots) {
    let dots = "";

    for (let i = 1; i <= 5; i++) {
        dots += `<span class="program-detail-dot ${i <= activeDots ? "active" : ""}"></span>`;
    }

    return dots;
}

function showProgram(programType) {
    const selectedProgram = programData[programType];
    const programButtons = document.querySelectorAll(".program-choice");
    const programDetailCard = document.getElementById("program-detail-card");

    programButtons.forEach((button) => {
        button.classList.remove("active", "green", "pink", "blue");

        if (button.dataset.program === programType) {
            button.classList.add("active", selectedProgram.colorClass);
        }
    });

    programDetailCard.className = `program-detail-card ${selectedProgram.colorClass}`;

    programDetailCard.innerHTML = `
        <h3>${selectedProgram.title}</h3>

        ${selectedProgram.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}

        <strong>${selectedProgram.tagline}</strong>

        <div class="program-detail-separator"></div>

        <div class="program-detail-metrics">

            <div class="program-detail-metric">
                <h4>Difficulty level</h4>
                <div class="program-detail-dots">
                    ${createProgramDots(selectedProgram.difficulty)}
                </div>
            </div>

            <div class="program-detail-metric">
                <h4>Program duration</h4>
                <div class="program-detail-dots">
                    ${createProgramDots(selectedProgram.duration)}
                </div>
            </div>

            <div class="program-detail-metric">
                <h4>Session frequency</h4>
                <div class="program-detail-dots">
                    ${createProgramDots(selectedProgram.frequency)}
                </div>
            </div>

        </div>
    `;
}

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
    showNutrition("flexitarian");
    showProgram("recomposition");

    document.querySelectorAll(".nutrition-tab").forEach((button) => {
        button.addEventListener("click", () => {
            showNutrition(button.dataset.nutrition);
        });
    });

    document.querySelectorAll(".program-choice").forEach((button) => {
        button.addEventListener("mouseenter", () => {
            showProgram(button.dataset.program);
        });

        button.addEventListener("click", () => {
            showProgram(button.dataset.program);
        });
    });
});
