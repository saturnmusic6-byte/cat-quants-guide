/* ==========================================================================
   APP.JS - Simplified CAT Quants Solution Companion
   ========================================================================== */

const CLASSIC_SUMS = [];

document.addEventListener("DOMContentLoaded", () => {
    // Merge Percentages LOD 1 question bank
    if (typeof PERCENTAGES_LOD1_SUMS !== 'undefined') {
        CLASSIC_SUMS.push(...PERCENTAGES_LOD1_SUMS);
    }

    initTheme();
    renderProblemList();
    
    // Auto-select first question if available
    const defaultSum = CLASSIC_SUMS.length > 0 ? CLASSIC_SUMS[0].id : '';
    if (defaultSum) {
        selectProblem(defaultSum);
    }
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
