/* ==========================================================================
   APP.JS - Simplified CAT Quants Solution Companion
   ========================================================================== */

const CLASSIC_SUMS = [
    {
        id: "sum1",
        blockId: "numbers",
        blockName: "Number Systems",
        lod: "LOD 1 (Moderate)",
        year: "CAT Classic",
        title: "Page Digits Arithmetic",
        question: "A printer numbers the pages of a book starting with 1 and uses 3,189 digits in total. How many pages does the book have?",
        hint: "Break the digit counts into brackets: 1-digit pages, 2-digit pages, 3-digit pages. Count the remaining digits that must belong to 4-digit pages.",
        traditional: {
            intro: "The standard algebraic approach is to count digits by ranges, sum them up, and solve for the final range.",
            steps: [
                { num: "Step 1", desc: "Calculate digits for single-digit pages: Pages 1 to 9 have 9 pages. Digits used = 9 * 1 = 9 digits." },
                { num: "Step 2", desc: "Calculate digits for two-digit pages: Pages 10 to 99 have 90 pages. Digits used = 90 * 2 = 180 digits." },
                { num: "Step 3", desc: "Calculate digits for three-digit pages: Pages 100 to 999 have 900 pages. Digits used = 900 * 3 = 2,700 digits." },
                { num: "Step 4", desc: "Sum digits used so far: 9 + 180 + 2,700 = 2,889 digits for the first 999 pages." },
                { num: "Step 5", desc: "Find remaining digits for 4-digit pages: 3,189 - 2,889 = 300 digits." },
                { num: "Step 6", desc: "Calculate 4-digit pages: 300 digits / 4 digits per page = 75 pages. Total Pages = 999 + 75 = 1,074 pages." }
            ],
            highlight: "Total Pages = 1,074."
        },
        shortcut: {
            intro: "Arun Sharma's method relies on memorable direct formula shortcuts. Knowing these formulas lets you skip range division entirely.",
            steps: [
                { num: "Formula", desc: "For any N-page book where N is a 4-digit number (between 1000 and 9999), the total number of digits used is always given by: <strong>Total Digits = 4N - 1,107</strong>." },
                { num: "Calculation", desc: "Set up the equation directly:<br>3,189 = 4N - 1,107<br>4N = 3,189 + 1,107<br>4N = 4,296<br>N = 1,074 pages." }
            ],
            highlight: "Solve in under 15 seconds! (Memorize: 3-digit book digits = 3N - 108 | 4-digit book digits = 4N - 1107)."
        }
    },
    {
        id: "sum2",
        blockId: "arithmetic",
        blockName: "Arithmetic (TSD)",
        lod: "LOD 2 (Advanced)",
        year: "CAT Favorite",
        title: "Train Meeting Distance",
        question: "Two trains start at the same time from Aligarh and Delhi, proceeding towards each other at 16 km/h and 21 km/h. When they meet, it is found that one train has traveled 60 km more than the other. Find the distance between Aligarh and Delhi.",
        hint: "Since they start at the same time and meet, the time of travel for both trains is identical. Speed is directly proportional to distance when time is constant.",
        traditional: {
            intro: "The standard textbook approach uses variables for time, sets up a system of equations, and solves step-by-step.",
            steps: [
                { num: "Step 1", desc: "Let the time taken for the trains to meet be 't' hours." },
                { num: "Step 2", desc: "Distance covered by the slower train = 16 * t km." },
                { num: "Step 3", desc: "Distance covered by the faster train = 21 * t km." },
                { num: "Step 4", desc: "We are given that one train traveled 60 km more: 21t - 16t = 60 km." },
                { num: "Step 5", desc: "Simplify the equation: 5t = 60 => t = 12 hours." },
                { num: "Step 6", desc: "Calculate total distance: Distance = 16t + 21t = 37t = 37 * 12 = 444 km." }
            ],
            highlight: "Total Distance = 444 km."
        },
        shortcut: {
            intro: "Arun Sharma's ratio technique allows you to solve this entire sum in your head by eliminating variables.",
            steps: [
                { num: "Ratio Concept", desc: "Since time is constant, the ratio of distances traveled is equal to the ratio of their speeds: <strong>Ratio = 21 : 16</strong>." },
                { num: "Difference", desc: "The difference in ratio parts is: 21 - 16 = 5 parts.<br>These 5 parts correspond exactly to the extra 60 km traveled.<br>Therefore, 1 part = 60 / 5 = 12 km." },
                { num: "Total Distance", desc: "The total distance is the sum of the ratio parts: 21 + 16 = 37 parts.<br>Total Distance = 37 parts * 12 km/part = 444 km." }
            ],
            highlight: "Solve mentally! 21 - 16 = 5 parts = 60 km => 1 part = 12 km => Total = 37 * 12 = 444 km."
        }
    },
    {
        id: "sum3",
        blockId: "algebra",
        blockName: "Algebra",
        lod: "LOD 2 (Tricky)",
        year: "CAT Exam",
        title: "Modulus Real Roots",
        question: "Find the number of distinct real roots of the equation: x² - 5|x| + 6 = 0",
        hint: "Remember that x² is mathematically identical to |x|². Rewrite the equation in terms of |x| and solve it as a basic quadratic equation.",
        traditional: {
            intro: "The standard algebraic method divides the solution space into two distinct domains (x ≥ 0 and x < 0), solves both quadratics, and checks valid boundaries.",
            steps: [
                { num: "Case 1", desc: "If x ≥ 0, then |x| = x. The equation becomes: x² - 5x + 6 = 0.<br>Factorizing gives: (x - 2)(x - 3) = 0 => x = 2 or x = 3. Both values satisfy x ≥ 0, so we have 2 real roots." },
                { num: "Case 2", desc: "If x < 0, then |x| = -x. The equation becomes: x² - 5(-x) + 6 = 0 => x² + 5x + 6 = 0.<br>Factorizing gives: (x + 2)(x + 3) = 0 => x = -2 or x = -3. Both values satisfy x < 0, so we have 2 more real roots." },
                { num: "Total Roots", desc: "Adding roots from both cases: {2, 3, -2, -3} gives a total of 4 distinct real roots." }
            ],
            highlight: "Total distinct real roots = 4."
        },
        shortcut: {
            intro: "Arun Sharma's graphical and identity methods allow you to see the roots immediately by inspection.",
            steps: [
                { num: "Identity", desc: "Since x² = |x|², write the equation as: |x|² - 5|x| + 6 = 0.<br>This factors directly into: (|x| - 2)(|x| - 3) = 0.<br>This yields: |x| = 2 or |x| = 3.<br>For each absolute value, we get two symmetrical results: x = ±2 and x = ±3. Total = 4 roots." },
                { num: "Graphical", desc: "The function y = x² - 5|x| + 6 is an even function (symmetric about y-axis). It forms a W-shape that crosses the x-axis 4 times, as the roots for positive x are both positive real numbers." }
            ],
            highlight: "Symmetric equations with |x| double the root count of positive roots."
        }
    },
    {
        id: "sum4",
        blockId: "geometry",
        blockName: "Geometry",
        lod: "LOD 1 (Easy)",
        year: "CAT Classic",
        title: "Altitude of Right Triangle",
        question: "In a right-angled triangle ABC, angle B is 90°. Sides AB = 6 cm and BC = 8 cm. Find the length of the altitude BD drawn from B to the hypotenuse AC.",
        hint: "Find the hypotenuse AC using Pythagoras. Equate the area of the triangle using the base-height relationships on the perpendicular sides, and then on the hypotenuse.",
        traditional: {
            intro: "Standard textbook methods find the hypotenuse first, then calculate the area, and then solve for the unknown height.",
            steps: [
                { num: "Step 1", desc: "Find Hypotenuse AC using Pythagoras: AC = √(AB² + BC²) = √(6² + 8²) = √100 = 10 cm." },
                { num: "Step 2", desc: "Find area of ΔABC using legs: Area = 1/2 * Base * Height = 1/2 * 8 * 6 = 24 cm²." },
                { num: "Step 3", desc: "Equate area using hypotenuse AC and altitude BD: Area = 1/2 * AC * BD." },
                { num: "Step 4", desc: "Substitute values and solve: 24 = 1/2 * 10 * BD => 24 = 5 * BD => BD = 24 / 5 = 4.8 cm." }
            ],
            highlight: "BD = 4.8 cm."
        },
        shortcut: {
            intro: "Arun Sharma teaches to directly memorize the geometric relation for right-angled triangles to eliminate intermediate area calculations.",
            steps: [
                { num: "Property", desc: "In any right-angled triangle with legs 'a' and 'b' and hypotenuse 'c', the altitude 'h' to the hypotenuse is always given by: <strong>h = (a * b) / c</strong>." },
                { num: "Execution", desc: "Legs are 6 and 8. The hypotenuse is 10 (standard 3-4-5 scaled by 2).<br>BD = (6 * 8) / 10 = 48 / 10 = 4.8 cm." }
            ],
            highlight: "One-line calculation: 6 * 8 / 10 = 4.8. Done."
        }
    },
    {
        id: "sum5",
        blockId: "modern",
        blockName: "Modern Math (P&C)",
        lod: "LOD 3 (Challenging)",
        year: "Advanced CAT",
        title: "Circular Alternating Seating",
        question: "In how many ways can 5 boys and 5 girls be seated around a circular table such that no two girls sit adjacent to each other?",
        hint: "To ensure girls don't sit together, seat the boys around the circular table first. Then place the girls in the available gaps between the boys.",
        traditional: {
            intro: "The standard textbook solution explains circular arrangements, identifies gaps, and calculates permutations step-by-step.",
            steps: [
                { num: "Step 1", desc: "First, arrange the 5 boys in a circle. Since circular starting positions are identical, 5 boys can be seated in: (5 - 1)! = 4! = 24 ways." },
                { num: "Step 2", desc: "Seating 5 boys creates 5 gaps between them around the circle." },
                { num: "Step 3", desc: "To satisfy the condition, the 5 girls must be seated in these 5 gaps so that they are separated by boys." },
                { num: "Step 4", desc: "Since the boys are already seated, the circular symmetry is broken. The 5 gaps are now distinct, unique positions. We can seat the 5 girls in these gaps in: 5! = 120 ways." },
                { num: "Step 5", desc: "Total arrangements = (Ways to seat boys) * (Ways to seat girls) = 24 * 120 = 2,880 ways." }
            ],
            highlight: "Total ways = 2,880."
        },
        shortcut: {
            intro: "Arun Sharma's formula sheet outlines a generalized shortcut for circular alternating arrangements that can be applied instantly.",
            steps: [
                { num: "Formula", desc: "For 'n' items of type A and 'n' items of type B to be arranged circularly such that no two items of type B are adjacent, the number of ways is: <strong>Ways = (n - 1)! * n!</strong>." },
                { num: "Calculation", desc: "Substitute n = 5 into the formula:<br>Ways = (5 - 1)! * 5!<br>Ways = 4! * 5!<br>Ways = 24 * 120 = 2,880 ways." }
            ],
            highlight: "Circular alternating arrangement shortcut: (n-1)! * n! = 2,880."
        }
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // Merge Percentages LOD 1 question bank
    if (typeof PERCENTAGES_LOD1_SUMS !== 'undefined') {
        CLASSIC_SUMS.push(...PERCENTAGES_LOD1_SUMS);
    }

    initTheme();
    renderProblemList();
    
    // Auto-select Q19 if available, else sum1
    const defaultSum = CLASSIC_SUMS.find(s => s.id === 'sum19') ? 'sum19' : 'sum1';
    selectProblem(defaultSum);
});

// 1. Theme Setup
function initTheme() {
    const savedTheme = localStorage.getItem("quantum_theme") || "dark";
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.remove("light-theme");
    }

    document.getElementById("theme-toggle").addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");
        localStorage.setItem("quantum_theme", isLight ? "light" : "dark");
    });
}

// 2. Render Sidebar List
function renderProblemList() {
    const listContainer = document.getElementById("problem-list");
    listContainer.innerHTML = "";

    CLASSIC_SUMS.forEach(sum => {
        const item = document.createElement("div");
        item.className = "problem-item";
        item.setAttribute("data-id", sum.id);
        
        // Extract display number from sum ID
        const numStr = sum.id.replace("sum", "Q");
        
        item.innerHTML = `
            <span class="problem-num">${numStr}</span>
            <span class="problem-title">${sum.title}</span>
        `;
        
        item.addEventListener("click", () => {
            selectProblem(sum.id);
        });
        
        listContainer.appendChild(item);
    });
}

// 3. Select a Problem and Load Solutions
function selectProblem(sumId) {
    const sum = CLASSIC_SUMS.find(s => s.id === sumId);
    if (!sum) return;

    // Highlight active sidebar item
    document.querySelectorAll(".problem-item").forEach(item => {
        if (item.getAttribute("data-id") === sumId) {
            item.classList.add("active");
            item.scrollIntoView({ block: "nearest", behavior: "smooth" });
        } else {
            item.classList.remove("active");
        }
    });

    // Update Header Title
    const numStr = sum.id.replace("sum", "Question ");
    document.getElementById("curr-question-title").innerText = `${numStr}: ${sum.title}`;

    // Populate Content
    const view = document.getElementById("solution-view");
    
    const traditionalStepsHTML = sum.traditional.steps.map(step => `
        <div class="step-card">
            <span class="step-label">${step.num}</span>
            <div class="step-text">${step.desc}</div>
        </div>
    `).join("");

    const shortcutStepsHTML = sum.shortcut.steps.map(step => `
        <div class="step-card shortcut-step">
            <span class="step-label shortcut-label">${step.num}</span>
            <div class="step-text">${step.desc}</div>
        </div>
    `).join("");

    view.innerHTML = `
        <div class="question-container animate-fade-in">
            <div class="meta-row">
                <span class="meta-tag block-tag">${sum.blockName}</span>
                <span class="meta-tag lod-tag">${sum.lod}</span>
                <span class="meta-tag source-tag">${sum.year}</span>
            </div>
            <p class="question-text">${sum.question}</p>
            ${sum.hint ? `
                <div class="hint-card">
                    <strong>💡 Hint:</strong> ${sum.hint}
                </div>
            ` : ''}
        </div>

        <div class="explanations-container animate-fade-in">
            <div class="column traditional-column">
                <div class="column-header">
                    <h3>Traditional Formula Method</h3>
                    <p class="method-intro">${sum.traditional.intro}</p>
                </div>
                <div class="steps-list">${traditionalStepsHTML}</div>
                <div class="result-highlight traditional-result">
                    <strong>Output:</strong> ${sum.traditional.highlight}
                </div>
            </div>

            <div class="column shortcut-column">
                <div class="column-header">
                    <h3>Arun Sharma Shortcut</h3>
                    <p class="method-intro">${sum.shortcut.intro}</p>
                </div>
                <div class="steps-list">${shortcutStepsHTML}</div>
                <div class="result-highlight shortcut-result">
                    <strong>Speed Key:</strong> ${sum.shortcut.highlight}
                </div>
            </div>
        </div>
    `;
}
