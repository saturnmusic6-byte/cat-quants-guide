/* ==========================================================================
   APP.JS - CAT Quants Solution Companion with AI Tutor
   ========================================================================== */

const CLASSIC_SUMS = [];
let currentSum = null;

document.addEventListener("DOMContentLoaded", () => {
    // Load Percentages LOD 1 question bank (Q19–Q60 only)
    if (typeof PERCENTAGES_LOD1_SUMS !== 'undefined') {
        CLASSIC_SUMS.push(...PERCENTAGES_LOD1_SUMS);
    }

    initTheme();
    renderProblemList();
    initAITutor();

    // Auto-select first question
    if (CLASSIC_SUMS.length > 0) {
        selectProblem(CLASSIC_SUMS[0].id);
    }
});

/* ──────────────────────────────────────────────
   1. Theme Toggle
   ────────────────────────────────────────────── */
function initTheme() {
    const saved = localStorage.getItem("quantum_theme") || "dark";
    if (saved === "light") document.body.classList.add("light-theme");

    document.getElementById("theme-toggle").addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");
        localStorage.setItem("quantum_theme", isLight ? "light" : "dark");
    });
}

/* ──────────────────────────────────────────────
   2. Sidebar Question List
   ────────────────────────────────────────────── */
function renderProblemList() {
    const list = document.getElementById("problem-list");
    list.innerHTML = "";

    CLASSIC_SUMS.forEach(sum => {
        const item = document.createElement("div");
        item.className = "problem-item";
        item.setAttribute("data-id", sum.id);
        const num = sum.id.replace("sum", "Q");
        item.innerHTML = `
            <span class="problem-num">${num}</span>
            <span class="problem-title">${sum.title}</span>
        `;
        item.addEventListener("click", () => selectProblem(sum.id));
        list.appendChild(item);
    });
}

/* ──────────────────────────────────────────────
   3. Select & Render a Question
   ────────────────────────────────────────────── */
function selectProblem(sumId) {
    const sum = CLASSIC_SUMS.find(s => s.id === sumId);
    if (!sum) return;
    currentSum = sum;

    // Highlight sidebar
    document.querySelectorAll(".problem-item").forEach(el => {
        if (el.getAttribute("data-id") === sumId) {
            el.classList.add("active");
            el.scrollIntoView({ block: "nearest", behavior: "smooth" });
        } else {
            el.classList.remove("active");
        }
    });

    // Header
    const qNum = sum.id.replace("sum", "Question ");
    document.getElementById("curr-question-title").innerText = `${qNum}: ${sum.title}`;

    // Build solution HTML
    const tradSteps = sum.traditional.steps.map(s => `
        <div class="step-card">
            <span class="step-label">${s.num}</span>
            <div class="step-text">${s.desc}</div>
        </div>
    `).join("");

    const shortSteps = sum.shortcut.steps.map(s => `
        <div class="step-card shortcut-step">
            <span class="step-label shortcut-label">${s.num}</span>
            <div class="step-text">${s.desc}</div>
        </div>
    `).join("");

    document.getElementById("solution-view").innerHTML = `
        <div class="question-container animate-fade-in">
            <div class="meta-row">
                <span class="meta-tag block-tag">${sum.blockName}</span>
                <span class="meta-tag lod-tag">${sum.lod}</span>
                <span class="meta-tag source-tag">${sum.year}</span>
            </div>
            <p class="question-text">${sum.question}</p>
            ${sum.hint ? `<div class="hint-card"><strong>💡 Hint:</strong> ${sum.hint}</div>` : ''}
        </div>

        <div class="explanations-container animate-fade-in">
            <div class="column traditional-column">
                <div class="column-header">
                    <h3>📘 Traditional Method</h3>
                    <p class="method-intro">${sum.traditional.intro}</p>
                </div>
                <div class="steps-list">${tradSteps}</div>
                <div class="result-highlight traditional-result">
                    <strong>✅ Answer:</strong> ${sum.traditional.highlight}
                </div>
            </div>

            <div class="column shortcut-column">
                <div class="column-header">
                    <h3>⚡ Arun Sharma Shortcut</h3>
                    <p class="method-intro">${sum.shortcut.intro}</p>
                </div>
                <div class="steps-list">${shortSteps}</div>
                <div class="result-highlight shortcut-result">
                    <strong>🚀 Speed Key:</strong> ${sum.shortcut.highlight}
                </div>
            </div>
        </div>
    `;

    // Update AI context and suggestions
    updateAIContext(sum);
}

/* ══════════════════════════════════════════════
   4. AI TUTOR MODULE
   ══════════════════════════════════════════════ */

function initAITutor() {
    const sidebar   = document.getElementById("ai-sidebar");
    const openBtn   = document.getElementById("ai-toggle-btn");
    const closeBtn  = document.getElementById("ai-close-btn");
    const sendBtn   = document.getElementById("ai-send-btn");
    const input     = document.getElementById("ai-user-input");
    const settBtn   = document.getElementById("ai-settings-btn");
    const settPanel = document.getElementById("ai-settings-panel");
    const saveKey   = document.getElementById("ai-save-key-btn");

    // Open / Close
    openBtn.addEventListener("click", () => sidebar.classList.toggle("active"));
    closeBtn.addEventListener("click", () => sidebar.classList.remove("active"));

    // Send message
    sendBtn.addEventListener("click", () => handleSend());
    input.addEventListener("keydown", e => {
        if (e.key === "Enter") handleSend();
    });

    // Settings panel toggle
    settBtn.addEventListener("click", () => settPanel.classList.toggle("hidden"));

    // Save Gemini key
    saveKey.addEventListener("click", () => {
        const key = document.getElementById("ai-gemini-key").value.trim();
        if (key) {
            localStorage.setItem("gemini_api_key", key);
            settPanel.classList.add("hidden");
            addBotMessage("✅ Gemini API key saved! I'll now use Google's AI for more detailed answers.");
        }
    });

    // Load saved key
    const savedKey = localStorage.getItem("gemini_api_key");
    if (savedKey) {
        document.getElementById("ai-gemini-key").value = savedKey;
    }

    // Welcome message
    addBotMessage("👋 Hey! I'm your <strong>AI Quants Tutor</strong>. Select any question from the sidebar, then ask me literally anything — even the silliest doubt. I won't judge, I promise! 😊");
}

function handleSend() {
    const input = document.getElementById("ai-user-input");
    const text = input.value.trim();
    if (!text) return;

    addUserMessage(text);
    input.value = "";

    // Show typing indicator
    const typingId = showTyping();

    // Check if Gemini key exists
    const geminiKey = localStorage.getItem("gemini_api_key");

    if (geminiKey) {
        askGemini(text, geminiKey, typingId);
    } else {
        // Use built-in offline AI
        setTimeout(() => {
            removeTyping(typingId);
            const answer = getOfflineAnswer(text);
            addBotMessage(answer);
        }, 400 + Math.random() * 600);
    }
}

/* ── Chat UI Helpers ── */

function addUserMessage(text) {
    const history = document.getElementById("ai-chat-history");
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble user";
    bubble.innerHTML = `<p>${escapeHTML(text)}</p>`;
    history.appendChild(bubble);
    history.scrollTop = history.scrollHeight;
}

function addBotMessage(html) {
    const history = document.getElementById("ai-chat-history");
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble bot";
    bubble.innerHTML = html;
    history.appendChild(bubble);
    history.scrollTop = history.scrollHeight;
}

function showTyping() {
    const history = document.getElementById("ai-chat-history");
    const id = "typing-" + Date.now();
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble bot";
    bubble.id = id;
    bubble.innerHTML = `<p style="opacity:0.5;">Thinking<span class="typing-dots">...</span></p>`;
    history.appendChild(bubble);
    history.scrollTop = history.scrollHeight;
    return id;
}

function removeTyping(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

/* ── Context-Aware Suggestions ── */

function updateAIContext(sum) {
    const ctx = document.getElementById("ai-current-context");
    const num = sum.id.replace("sum", "Q");
    ctx.innerText = `${num}: ${sum.title}`;

    // Generate smart suggestion chips
    const chips = generateSuggestions(sum);
    const container = document.getElementById("ai-suggestions");
    container.innerHTML = "";
    chips.forEach(text => {
        const chip = document.createElement("button");
        chip.className = "suggestion-chip";
        chip.textContent = text;
        chip.addEventListener("click", () => {
            document.getElementById("ai-user-input").value = text;
            handleSend();
        });
        container.appendChild(chip);
    });
}

function generateSuggestions(sum) {
    const base = [
        `Explain this question in very simple language`,
        `Why does the shortcut work here?`,
        `What if I get confused between percentage of and percentage more?`,
        `Can you give me a similar easier example first?`,
    ];

    // Add question-specific suggestions
    const q = sum.question.toLowerCase();

    if (q.includes("price") || q.includes("cost") || q.includes("expenditure")) {
        base.push("What is the relation between Price, Quantity and Expenditure?");
    }
    if (q.includes("population") || q.includes("compound") || q.includes("annum")) {
        base.push("What is compound growth and why do we multiply?");
    }
    if (q.includes("ratio") || q.includes("savings")) {
        base.push("How do ratios and percentages connect?");
    }
    if (q.includes("election") || q.includes("vote")) {
        base.push("How to quickly find total from percentage margin?");
    }
    if (q.includes("salary") || q.includes("income")) {
        base.push("What does '% more than' vs '% of' mean?");
    }
    if (q.includes("discount") || q.includes("cheaper") || q.includes("dearer")) {
        base.push("What is the difference between 'cheaper than' and 'discount on'?");
    }

    return base.slice(0, 5);
}

/* ══════════════════════════════════════════════
   5. OFFLINE AI ENGINE (Built-in Knowledge Base)
   ══════════════════════════════════════════════ */

function getOfflineAnswer(query) {
    const q = query.toLowerCase();

    // ── Build context from current question ──
    let contextBlock = "";
    if (currentSum) {
        contextBlock = `
            <p style="margin-bottom:8px; opacity:0.7; font-size:0.8em;">📌 <em>Answering in context of ${currentSum.id.replace("sum","Q")}: ${currentSum.title}</em></p>
        `;
    }

    // ── Generic percentage concepts ──
    if (q.includes("percentage of") || q.includes("% of") || q.includes("percent of")) {
        return contextBlock + `
            <p><strong>What does "X% of Y" mean?</strong></p>
            <p>It simply means: take Y, and find X parts out of every 100 parts.</p>
            <p><strong>Formula:</strong> X% of Y = (X / 100) × Y</p>
            <p><strong>Example:</strong> 20% of 500 = (20/100) × 500 = 100. That's it!</p>
            <p>Think of it like this: if you have 500 chocolates and someone says "give me 20%", you give them 100 chocolates. 🍫</p>
        `;
    }

    if (q.includes("more than") || q.includes("less than") || q.includes("percentage more") || q.includes("percentage less")) {
        return contextBlock + `
            <p><strong>"X% more than Y" vs "X% of Y" — the #1 confusion!</strong></p>
            <p>These are DIFFERENT things:</p>
            <ul>
                <li><strong>20% of 100</strong> = 20 (just the percentage)</li>
                <li><strong>20% more than 100</strong> = 100 + 20 = <strong>120</strong> (the original PLUS the percentage)</li>
                <li><strong>20% less than 100</strong> = 100 − 20 = <strong>80</strong> (the original MINUS the percentage)</li>
            </ul>
            <p>Quick trick: "more than" means <strong>multiply by (1 + %/100)</strong>. "Less than" means <strong>multiply by (1 − %/100)</strong>.</p>
        `;
    }

    if (q.includes("multiplier") || q.includes("successive") || q.includes("multiply")) {
        return contextBlock + `
            <p><strong>The Successive Multiplier Trick 🔥</strong></p>
            <p>Instead of calculating each step separately, just chain multipliers:</p>
            <ul>
                <li>Spending 20% → you keep 80% → multiplier = <strong>0.80</strong></li>
                <li>Spending 30% of rest → you keep 70% → multiplier = <strong>0.70</strong></li>
                <li>Spending 10% of rest → you keep 90% → multiplier = <strong>0.90</strong></li>
            </ul>
            <p><strong>Final amount = Starting × 0.80 × 0.70 × 0.90</strong></p>
            <p>Just multiply all the "what's left" fractions together. One line, done! ✅</p>
        `;
    }

    if (q.includes("compound") || q.includes("growth") || q.includes("population")) {
        return contextBlock + `
            <p><strong>Compound Growth — Why Multiply?</strong></p>
            <p>When something grows by the same % every year, each year's growth is calculated on the NEW (bigger) amount, not the original.</p>
            <p><strong>Formula:</strong> Final = Initial × (1 + rate/100)^years</p>
            <p><strong>Example:</strong> ₹100 growing at 10% for 2 years:</p>
            <ul>
                <li>Year 1: 100 × 1.10 = ₹110</li>
                <li>Year 2: 110 × 1.10 = ₹121 (NOT 120!)</li>
            </ul>
            <p>The extra ₹1 is the "interest on interest" — that's compounding! 📈</p>
        `;
    }

    if (q.includes("price") && (q.includes("quantity") || q.includes("expenditure"))) {
        return contextBlock + `
            <p><strong>The Price × Quantity = Expenditure Triangle</strong></p>
            <p>This is the golden rule:</p>
            <p style="text-align:center; font-size:1.1em;"><strong>Price × Quantity = Total Expenditure</strong></p>
            <p>If price goes DOWN and expenditure stays SAME → quantity goes UP (inverse relation).</p>
            <p>If price goes DOWN but expenditure goes UP → quantity goes UP even MORE.</p>
            <p><strong>Quick way:</strong> New Quantity = New Expenditure ÷ New Price. Simple division!</p>
        `;
    }

    if (q.includes("ratio") || q.includes("fraction")) {
        return contextBlock + `
            <p><strong>Ratios & Percentages — Same thing, different clothes! 👔</strong></p>
            <ul>
                <li>A ratio of 3:2 means for every 5 parts, first gets 3 and second gets 2</li>
                <li>3 out of 5 = 3/5 = 0.6 = <strong>60%</strong></li>
                <li>2 out of 5 = 2/5 = 0.4 = <strong>40%</strong></li>
            </ul>
            <p>Converting ratio to %: divide each part by total parts, multiply by 100. That's it!</p>
        `;
    }

    if (q.includes("discount") || q.includes("cheaper") || q.includes("dearer") || q.includes("bargain")) {
        return contextBlock + `
            <p><strong>Discounts Decoded</strong></p>
            <p>"20% cheaper" means the sale price is 80% of the original.</p>
            <p>"20% dearer" means the sale price is 120% of the original.</p>
            <p><strong>Trick:</strong> If the regular price is 8/7 of the sale price, the sale price is 7/8 of regular = discount of 1/8 = 12.5%</p>
            <p>Always convert the fraction to see how much you're saving! 🛒</p>
        `;
    }

    if (q.includes("election") || q.includes("vote") || q.includes("margin")) {
        return contextBlock + `
            <p><strong>Election Problems — The Quick Split</strong></p>
            <p>In a 2-candidate election:</p>
            <ul>
                <li>Winner% + Loser% = 100% of votes</li>
                <li>Winner% − Loser% = Margin%</li>
            </ul>
            <p>From these two equations: Winner% = (100 + Margin)/2 and Loser% = (100 − Margin)/2</p>
            <p><strong>Example:</strong> If margin is 20%, winner got 60%, loser got 40%. If margin = 200 votes and it equals 20% of total → total = 1000 votes. Easy!</p>
        `;
    }

    if (q.includes("simple") || q.includes("explain") || q.includes("beginner") || q.includes("easy") || q.includes("understand")) {
        if (currentSum) {
            return contextBlock + `
                <p><strong>Let me break down ${currentSum.title} in the simplest way possible:</strong></p>
                <p>📖 <strong>What the question is really asking:</strong><br>${currentSum.question}</p>
                <p>🎯 <strong>The hint (read this first!):</strong><br>${currentSum.hint || "No special hint needed — read the steps carefully."}</p>
                <p>⚡ <strong>Fastest way to solve:</strong><br>${currentSum.shortcut.intro}</p>
                <p>✅ <strong>Final answer:</strong> ${currentSum.shortcut.highlight}</p>
                <p>If any specific step confuses you, just type it out and I'll explain it like you're 10 years old! 😄</p>
            `;
        }
        return `<p>Select a question from the sidebar first, then ask me to explain it simply! I'll break it down step by step. 😊</p>`;
    }

    if (q.includes("why") && q.includes("shortcut")) {
        if (currentSum) {
            return contextBlock + `
                <p><strong>Why does the shortcut work for ${currentSum.title}?</strong></p>
                <p>The shortcut is just the traditional method compressed into fewer steps. Instead of writing out each intermediate calculation, you:</p>
                <ol>
                    <li>Identify the pattern (what's constant, what's changing)</li>
                    <li>Use a direct formula or mental math trick</li>
                    <li>Jump straight to the answer</li>
                </ol>
                <p>${currentSum.shortcut.intro}</p>
                <p>Both methods give the <strong>exact same answer</strong> — the shortcut just saves you 30-60 seconds in the exam! ⏱️</p>
            `;
        }
    }

    if (q.includes("similar") || q.includes("example") || q.includes("practice")) {
        if (currentSum) {
            return contextBlock + `
                <p><strong>Let me give you a simpler version of this type of problem:</strong></p>
                <p>Imagine this: You have ₹100. You spend 10% on snacks (₹10 gone, ₹90 left). Then you spend 20% of what's left on a book (₹18 gone, ₹72 left).</p>
                <p><strong>Question:</strong> How much did you save?</p>
                <p><strong>Traditional:</strong> ₹100 → minus ₹10 = ₹90 → minus ₹18 = <strong>₹72</strong></p>
                <p><strong>Shortcut:</strong> ₹100 × 0.90 × 0.80 = <strong>₹72</strong></p>
                <p>See? Same answer, but the shortcut is just one multiplication! Now try applying this same logic to the current question. 💪</p>
            `;
        }
    }

    if (q.includes("what is") || q.includes("define") || q.includes("meaning")) {
        return contextBlock + `
            <p>That's a great basic question! Here are the core percentage concepts:</p>
            <ul>
                <li><strong>Percentage</strong> = "per hundred". 25% means 25 out of every 100.</li>
                <li><strong>Increase of X%</strong> = multiply by (1 + X/100)</li>
                <li><strong>Decrease of X%</strong> = multiply by (1 − X/100)</li>
                <li><strong>Successive changes</strong> = multiply the individual multipliers</li>
                <li><strong>Reverse percentage</strong> = if result is given, divide by the multiplier to find the original</li>
            </ul>
            <p>Which specific term or concept are you confused about? Type it and I'll explain it like a friend would! 🤝</p>
        `;
    }

    // ── Catch-all friendly fallback ──
    if (currentSum) {
        return contextBlock + `
            <p>Great question! Here's what I can tell you about <strong>${currentSum.title}</strong>:</p>
            <p>📖 <strong>Key concept:</strong> ${currentSum.hint || currentSum.traditional.intro}</p>
            <p>⚡ <strong>Quick solve:</strong> ${currentSum.shortcut.highlight}</p>
            <p>Try asking me something more specific like:</p>
            <ul>
                <li>"Explain this in simple language"</li>
                <li>"Why does the shortcut work?"</li>
                <li>"What does percentage more than mean?"</li>
                <li>"Give me a similar easier example"</li>
            </ul>
            <p>Or connect your <strong>Gemini API key</strong> (click ⚙️ below) for unlimited AI-powered answers! 🔑</p>
        `;
    }

    return `
        <p>I'm here to help! 😊 Please select a question from the sidebar first, then ask me anything about it.</p>
        <p>No question is too silly — I'll explain everything from scratch if needed!</p>
    `;
}

/* ══════════════════════════════════════════════
   6. GEMINI API INTEGRATION
   ══════════════════════════════════════════════ */

async function askGemini(userQuery, apiKey, typingId) {
    const contextText = currentSum
        ? `The student is studying this CAT exam percentage question: "${currentSum.question}". The traditional solution is: ${currentSum.traditional.steps.map(s => s.desc).join(" ")}. The shortcut is: ${currentSum.shortcut.steps.map(s => s.desc).join(" ")}. Answer: ${currentSum.traditional.highlight}`
        : "The student is studying CAT exam quantitative aptitude (percentages).";

    const systemPrompt = `You are a friendly, patient math tutor for a CAT exam student studying Arun Sharma's Percentages chapter. 
The student might ask very basic or "silly" doubts — never judge them. 
Always explain in simple, beginner-friendly language with examples.
Use short paragraphs. Bold key terms. Give step-by-step breakdowns.
If they ask about a specific step, explain just that step clearly.
Keep answers concise (under 200 words) but thorough.
Context: ${contextText}`;

    try {
        const resp = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    system_instruction: { parts: [{ text: systemPrompt }] },
                    contents: [{ role: "user", parts: [{ text: userQuery }] }],
                    generationConfig: { temperature: 0.7, maxOutputTokens: 512 }
                })
            }
        );

        removeTyping(typingId);

        if (!resp.ok) {
            const errData = await resp.json().catch(() => ({}));
            const errMsg = errData?.error?.message || `HTTP ${resp.status}`;
            addBotMessage(`<p>⚠️ Gemini API error: ${escapeHTML(errMsg)}</p><p>Falling back to built-in answers...</p>`);
            addBotMessage(getOfflineAnswer(userQuery));
            return;
        }

        const data = await resp.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

        if (text) {
            // Convert markdown-like formatting to HTML
            const formatted = formatGeminiResponse(text);
            addBotMessage(formatted);
        } else {
            addBotMessage(getOfflineAnswer(userQuery));
        }
    } catch (err) {
        removeTyping(typingId);
        addBotMessage(`<p>⚠️ Network error — using offline answers instead.</p>`);
        addBotMessage(getOfflineAnswer(userQuery));
    }
}

function formatGeminiResponse(text) {
    // Basic markdown → HTML conversion
    let html = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');

    // Wrap in paragraph if not already
    if (!html.startsWith('<p>')) html = '<p>' + html + '</p>';

    return html;
}
