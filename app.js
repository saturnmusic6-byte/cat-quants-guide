/* ==========================================================================
   APP.JS - The Brain of the Interactive CAT Quants Guide
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. DATA LAYERS: Theory, Classic Sums, and Quiz Problems
// --------------------------------------------------------------------------

// 1.1 Study Planner Syllabus Chapters
const SYLLABUS_CHAPTERS = [
    { id: "ch1", block: "numbers", name: "Number Systems Basics", focus: "Factors, Divisibility, Base systems, Multiples" },
    { id: "ch2", block: "numbers", name: "Advanced Remainders", focus: "Euler's Theorem, Fermat's, Wilson's, Chinese Remainder" },
    { id: "ch3", block: "numbers", name: "Progressions & Series", focus: "AP, GP, HP, Arithmetic-Geometric Series, Summation" },
    { id: "ch4", block: "arithmetic", name: "Averages & Deviations", focus: "Weighted averages, Equal distribution, Ages" },
    { id: "ch5", block: "arithmetic", name: "Alligations & Mixtures", focus: "Rule of Alligation, Solution replacements, Ratios" },
    { id: "ch6", block: "arithmetic", name: "Percentages & Product Constancy", focus: "Successive change, Price-Consumption, Scaling factors" },
    { id: "ch7", block: "arithmetic", name: "Profit, Loss & Discount", focus: "Markup, Successive discounts, Dishonest dealers" },
    { id: "ch8", block: "arithmetic", name: "Time, Speed & Distance", focus: "Relative speed, Average speed, Trains, Escapes, Races" },
    { id: "ch9", block: "arithmetic", name: "Time and Work", focus: "Individual efficiencies, Pipes-Cisterns, Alternate days" },
    { id: "ch10", block: "algebra", name: "Equations & Roots", focus: "Linear systems, Quadratic equations, Nature of roots" },
    { id: "ch11", block: "algebra", name: "Inequalities & Modulus", focus: "Wavy curve method, Modulus graphs, Maxima-Minima" },
    { id: "ch12", block: "algebra", name: "Logarithms & Functions", focus: "Log properties, Domain/Range, Composite functions" },
    { id: "ch13", block: "geometry", name: "Triangles & Polygons", focus: "Similarity, Congruency, Area formulas, Regular polygons" },
    { id: "ch14", block: "geometry", name: "Circles & Mensuration", focus: "Chords/Tangents properties, 3D solids surface areas/volumes" },
    { id: "ch15", block: "modern", name: "Permutations & Combinations", focus: "Arrangement, Selection, Circular seating, Grid paths" }
];

// 1.2 Theory & Cheat Sheet Database
const THEORY_DATABASE = [
    {
        id: "numbers",
        title: "Block I: Numbers",
        icon: "fa-hashtag",
        color: "#6366F1",
        desc: "Build strong foundational numeric intuition, prime factors, divisibility, and advanced modular remainder rules.",
        chapters: [
            {
                title: "Advanced Remainders & Euler's Totient",
                formulas: [
                    { name: "Fermat's Little Theorem", math: "a^(p-1) ≡ 1 (mod p)", desc: "When 'p' is a prime number and 'a' is not divisible by 'p'. Extremely useful for prime denominators." },
                    { name: "Euler's Totient Theorem", math: "a^φ(n) ≡ 1 (mod n)", desc: "Where 'a' and 'n' are co-prime, and φ(n) = n * Π(1 - 1/p) for all prime factors 'p' of 'n'." },
                    { name: "Wilson's Theorem", math: "(p - 1)! ≡ -1 (mod p)", desc: "Useful for factorials divided by a prime number. E.g., 6! divided by 7 leaves a remainder of 6." }
                ]
            },
            {
                title: "Factors & Multiples",
                formulas: [
                    { name: "Total Number of Factors", math: "N(factors) = (a+1)(b+1)(c+1)...", desc: "For a prime-factorized number N = p1^a * p2^b * p3^c..." },
                    { name: "Sum of All Factors", math: "Sum = [(p1^(a+1) - 1)/(p1 - 1)] * ...", desc: "Multiplies the geometric progression sums of each prime factor group." },
                    { name: "Highest Power of Prime 'p' in N!", math: "E_p(N!) = [N/p] + [N/p²] + [N/p³]...", desc: "Legendre's Formula. Greatest integer functions added until divisor exceeds N." }
                ]
            }
        ]
    },
    {
        id: "arithmetic",
        title: "Block II: Arithmetic",
        icon: "fa-calculator",
        color: "#8B5CF6",
        desc: "Master the bread and butter of the CAT exam. Focus on percentages, ratios, mixtures, speed, and work.",
        chapters: [
            {
                title: "Product Constancy & Multiplying Factors",
                formulas: [
                    { name: "Product Constancy Rule", math: "A * B = Constant (Speed * Time = Dist)", desc: "If A increases by 1/x, B must decrease by 1/(x+1) to keep the product constant. No equations needed." },
                    { name: "Successive Percentage Changes", math: "Net Change % = x + y + (xy/100)", desc: "Applies to compound growth, successive discounts, or sequential price alterations." }
                ]
            },
            {
                title: "Time, Speed & Distance Hacks",
                formulas: [
                    { name: "Average Speed (Equal Distances)", math: "Avg Speed = 2S1*S2 / (S1 + S2)", desc: "Harmonic mean of speeds when travel distances are identical." },
                    { name: "Relative Speed (Opposite vs. Same Direction)", math: "S_rel = S1 + S2 (Opposite) | S1 - S2 (Same)", desc: "Speed of one object relative to another. Essential for trains, chases, and circular tracks." },
                    { name: "Escalator / Stream Equation", math: "T = D / (S_man ± S_medium)", desc: "Use addition for downstream/riding up and subtraction for upstream/walking against movement." }
                ]
            }
        ]
    },
    {
        id: "algebra",
        title: "Block III: Algebra",
        icon: "fa-square-root-variable",
        color: "#10B981",
        desc: "Shift from numbers to variables. Solve polynomials, quadratic systems, inequalities, functions, and logarithmic series.",
        chapters: [
            {
                title: "Quadratic & Polynomial Equations",
                formulas: [
                    { name: "Sum and Product of Roots", math: "Roots α, β: α+β = -b/a | α*β = c/a", desc: "For any quadratic equation ax² + bx + c = 0." },
                    { name: "Condition for Real Roots", math: "Discriminant (D) = b² - 4ac", desc: "D > 0: two distinct real roots; D = 0: real & equal roots; D < 0: imaginary conjugate roots." }
                ]
            },
            {
                title: "Inequalities & Modulus Graphs",
                formulas: [
                    { name: "Modulus Triangular Inequality", math: "|x + y| ≤ |x| + |y|", desc: "Equality holds true if and only if x and y have the same algebraic sign." },
                    { name: "AM ≥ GM ≥ HM Inequality", math: "(a+b)/2 ≥ √(ab) ≥ 2ab/(a+b)", desc: "For positive real numbers. Extremely useful for finding absolute minimum or maximum values." }
                ]
            }
        ]
    },
    {
        id: "geometry",
        title: "Block IV: Geometry & Mensuration",
        icon: "fa-draw-polygon",
        color: "#F59E0B",
        desc: "Visualize space, coordinates, and properties of triangles, circles, and 3D solids.",
        chapters: [
            {
                title: "Triangles & Standard Altitudes",
                formulas: [
                    { name: "Altitude in Right Triangle", math: "h = (a * b) / c", desc: "Where a and b are perpendicular sides and c is the hypotenuse. Area balance method." },
                    { name: "Apollonius Theorem", math: "AB² + AC² = 2(AD² + BD²)", desc: "Where AD is the median drawn to side BC, and D is the midpoint of BC." }
                ]
            },
            {
                title: "Mensuration Formulas",
                formulas: [
                    { name: "Volume of regular Prism / Cylinder", math: "Volume = Area of Base * Height", desc: "Universal prism formula." },
                    { name: "Volume of Pyramid / Cone", math: "Volume = 1/3 * Area of Base * Height", desc: "Universal pyramid formula. One-third of corresponding prism volume." }
                ]
            }
        ]
    },
    {
        id: "modern",
        title: "Block V: Modern Mathematics",
        icon: "fa-lightbulb",
        color: "#EF4444",
        desc: "Explore arrangements, selections, sets, Venn diagrams, and calculations of probability.",
        chapters: [
            {
                title: "Permutations & Combinations",
                formulas: [
                    { name: "Circular Permutations", math: "P_circular = (n - 1)!", desc: "Seating arrangements around a circular table. Reverses relative start reference." },
                    { name: "Seating with Gaps Method", math: "Ways = (n-1)! * n!", desc: "Seating n boys circularly, then n girls in the gaps so no two girls are adjacent." }
                ]
            },
            {
                title: "Set Theory Maxima-Minima",
                formulas: [
                    { name: "Three-Set Intersection Formula", math: "A ∪ B ∪ C = A + B + C - (AnB + BnC + CnA) + (AnBnC)", desc: "Fundamental principle of inclusion-exclusion for three overlapping groups." }
                ]
            }
        ]
    }
];

// 1.3 The Classic Sums Database (Unfolder)
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
                { num: "Formula Concept", desc: "For any N-page book where N is a 4-digit number (between 1000 and 9999), the total number of digits used is always given by: <strong>Total Digits = 4N - 1,107</strong>." },
                { num: "Calculations", desc: "Set up the equation directly:<br>3,189 = 4N - 1,107<br>4N = 3,189 + 1,107<br>4N = 4,296<br>N = 1,074 pages." }
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
                { num: "Difference Analysis", desc: "The difference in ratio parts is: 21 - 16 = 5 parts.<br>These 5 parts correspond exactly to the extra 60 km traveled.<br>Therefore, 1 part = 60 / 5 = 12 km." },
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
                { num: "Identity Method", desc: "Since x² = |x|², write the equation as: |x|² - 5|x| + 6 = 0.<br>This factors directly into: (|x| - 2)(|x| - 3) = 0.<br>This yields: |x| = 2 or |x| = 3.<br>For each absolute value, we get two symmetrical results: x = ±2 and x = ±3. Total = 4 roots." },
                { num: "Graphical Insight", desc: "The function y = x² - 5|x| + 6 is a symmetric, even function. It forms a distinct W-shape that crosses the x-axis 4 times. By checking that the y-intercept is +6 (positive) and the vertex is at |x|=2.5 with a negative value, it must cross the axis 4 times. Done!" }
            ],
            highlight: "No case-splitting required.Symmetric equations with |x| double the root count of positive roots."
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
                { num: "Standard Property", desc: "In any right-angled triangle with legs 'a' and 'b' and hypotenuse 'c', the altitude 'h' to the hypotenuse is always given by: <strong>h = (a * b) / c</strong>." },
                { num: "Execution", desc: "Legs are 6 and 8. The hypotenuse is 10 (standard 3-4-5 triplet scaled by 2).<br>BD = (6 * 8) / 10 = 48 / 10 = 4.8 cm." }
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
            highlight: "Avoid manual gap visualization! Just apply (n-1)! * n! = 2,880."
        }
    }
];

// 1.4 Practice Arena Quiz Questions
const QUIZ_QUESTIONS = [
    {
        qNum: 1,
        blockId: "numbers",
        blockName: "Number Systems",
        question: "What is the remainder when 3^(102) is divided by 103?",
        options: {
            A: "1",
            B: "3",
            C: "9",
            D: "102"
        },
        correct: "A",
        hint: "103 is a prime number, and 3 is not divisible by 103. Try applying Fermat's Little Theorem.",
        traditional: "By Fermat's Little Theorem: If p is a prime and a is co-prime to p, then a^(p-1) ≡ 1 (mod p). Here, a = 3 and p = 103. Therefore, 3^(103 - 1) = 3^(102) ≡ 1 (mod 103). Thus, the remainder is 1.",
        shortcut: "Fermat's Theorem fits this problem exactly! Since 103 is prime, the power (102) is exactly p-1. The answer is instantly 1. No calculation is needed!"
    },
    {
        qNum: 2,
        blockId: "arithmetic",
        blockName: "Arithmetic",
        question: "The price of sugar increases by 25%. By what percentage must a household reduce its sugar consumption so that its total expenditure on sugar remains unchanged?",
        options: {
            A: "25%",
            B: "20%",
            C: "16.67%",
            D: "33.33%"
        },
        correct: "B",
        hint: "This is a product constancy problem (Price * Consumption = Expenditure). If price increases, consumption must decrease.",
        traditional: "Let original price = P, consumption = C. Expenditure E = P * C. New price = 1.25P. Let new consumption be C'. 1.25P * C' = P * C => C' = C / 1.25 = 0.8C. Consumption reduction = C - 0.8C = 0.2C, which is a 20% reduction.",
        shortcut: "Arun Sharma's Product Constancy Shortcut: If a quantity increases by 1/x, the other must decrease by 1/(x+1) to keep the product constant. An increase of 25% is a fraction increase of 1/4. Thus, consumption must decrease by 1/(4+1) = 1/5 = 20%! Done."
    },
    {
        qNum: 3,
        blockId: "algebra",
        blockName: "Algebra",
        question: "If log_10(x) + log_10(x - 3) = 1, find the number of real solutions for x.",
        options: {
            A: "0",
            B: "1",
            C: "2",
            D: "Infinite"
        },
        correct: "B",
        hint: "Combine the logarithms using product rules. Solve the quadratic equation, but make sure to check the domain constraints for logarithms (x > 0 and x - 3 > 0).",
        traditional: "Combine logs: log_10(x(x-3)) = 1 => x(x-3) = 10^1 => x² - 3x - 10 = 0. Factorizing gives (x - 5)(x + 2) = 0 => x = 5 or x = -2. However, for log_10(x) to be defined, x > 0. For log_10(x-3) to be defined, x > 3. Therefore, x = -2 is invalid. Only x = 5 is a valid solution. So there is exactly 1 real solution.",
        shortcut: "Arun Sharma's Option Verification: Test options or analyze the domain constraint: x must be > 3. Since x must be positive and larger than 3, the negative root is automatically eliminated. This leaves only x=5, giving exactly 1 solution."
    },
    {
        qNum: 4,
        blockId: "geometry",
        blockName: "Geometry",
        question: "What is the area of a circle inscribed in an equilateral triangle of side length 12 cm?",
        options: {
            A: "12π cm²",
            B: "6π cm²",
            C: "36π cm²",
            D: "48π cm²"
        },
        correct: "A",
        hint: "First, find the inradius (r) of an equilateral triangle with side 'a'. The formula is r = a / (2√3). Once you have the radius, apply the circle area formula: A = πr².",
        traditional: "Inradius of equilateral triangle r = a / (2√3) = 12 / (2√3) = 6 / √3 = 2√3 cm. Area of inscribed circle = π * r² = π * (2√3)² = π * 12 = 12π cm².",
        shortcut: "Arun Sharma's Ratio Shortcut: For an equilateral triangle of side 'a', inradius r = a/(2√3). The side is 12, so r = 12/(2√3) = 2√3. Since area is πr², the area is π * (2√3)² = 12π. Keep basic 2D shortcuts handy!"
    },
    {
        qNum: 5,
        blockId: "modern",
        blockName: "Modern Math",
        question: "A box contains 5 red and 4 blue balls. If two balls are drawn at random, what is the probability that both balls are of the same color?",
        options: {
            A: "4/9",
            B: "5/18",
            C: "1/6",
            D: "4/18"
        },
        correct: "A",
        hint: "Calculate the total number of ways to draw 2 balls from 9. Then calculate the number of favorable ways (drawing 2 red OR drawing 2 blue) and divide.",
        traditional: "Total balls = 9. Total ways to draw 2 balls = 9C2 = (9 * 8) / 2 = 36. Ways to draw 2 red balls = 5C2 = 10. Ways to draw 2 blue balls = 4C2 = 6. Favorable ways = 10 + 6 = 16. Probability = Favorable / Total = 16 / 36 = 4/9.",
        shortcut: "Arun Sharma's Successive Draw Rule: Probability of 2 red balls = (5/9) * (4/8) = 20/72. Probability of 2 blue balls = (4/9) * (3/8) = 12/72. Total probability of same color = (20 + 12)/72 = 32/72 = 4/9. Easier fraction arithmetic!"
    }
];

// --------------------------------------------------------------------------
// 2. STATE MANAGER
// --------------------------------------------------------------------------
const APP_STATE = {
    currentSection: "dashboard",
    plannerState: {}, // chapterId: status ("not-started", "in-progress", "mastered")
    quizState: {
        currentIndex: 0,
        score: 0,
        solvedCount: 0,
        totalAttempts: 0,
        history: [], // { questionNum, isCorrect }
        selectedOption: null,
        isAnswered: false
    },
    theme: "dark"
};

// --------------------------------------------------------------------------
// 3. INITIALIZATION & ROUTING
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    loadPlannerState();
    loadQuizState();
    initTheme();
    renderPlannerTable();
    renderTheoryHub();
    renderUnfolderMenu();
    updateStatsDashboard();
    
    // Bind Event Listeners
    bindNavigationEvents();
    bindPlannerEvents();
    bindQuizEvents();
    bindThemeToggle();
    bindGlobalSearch();

    // Default select first sum in Unfolder
    selectClassicSum("sum1");
    // Render first quiz question
    renderQuizQuestion();
});

// 3.1 Theme Setup
function initTheme() {
    const savedTheme = localStorage.getItem("quantum_theme") || "dark";
    APP_STATE.theme = savedTheme;
    const body = document.body;
    const themeBtn = document.getElementById("theme-toggle-btn");
    
    if (savedTheme === "light") {
        body.classList.add("light-theme");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun text-gold"></i>';
    } else {
        body.classList.remove("light-theme");
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

function bindThemeToggle() {
    const themeBtn = document.getElementById("theme-toggle-btn");
    themeBtn.addEventListener("click", () => {
        const body = document.body;
        if (body.classList.contains("light-theme")) {
            body.classList.remove("light-theme");
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem("quantum_theme", "dark");
            APP_STATE.theme = "dark";
            showToast("Dark Mode enabled!");
        } else {
            body.classList.add("light-theme");
            themeBtn.innerHTML = '<i class="fa-solid fa-sun text-gold"></i>';
            localStorage.setItem("quantum_theme", "light");
            APP_STATE.theme = "light";
            showToast("Premium Light Mode enabled!");
        }
    });
}

// 3.2 Navigation and Section Toggling
function bindNavigationEvents() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");
            
            const targetSection = item.getAttribute("data-target");
            switchSection(targetSection);
        });
    });
}

function switchSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(sec => sec.classList.remove("active"));
    
    const targetSec = document.getElementById(sectionId);
    if (targetSec) {
        targetSec.classList.add("active");
        APP_STATE.currentSection = sectionId;
        
        // Update Active Nav Item in Sidebar
        const navItems = document.querySelectorAll(".nav-item");
        navItems.forEach(item => {
            if (item.getAttribute("data-target") === sectionId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        // Trigger animations/render updates if needed
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// --------------------------------------------------------------------------
// 4. MODULE: STUDY PLANNER & DASHBOARD STATS
// --------------------------------------------------------------------------

function loadPlannerState() {
    const saved = localStorage.getItem("quantum_cat_planner_state");
    if (saved) {
        APP_STATE.plannerState = JSON.parse(saved);
    } else {
        // Initialize all to "not-started"
        SYLLABUS_CHAPTERS.forEach(ch => {
            APP_STATE.plannerState[ch.id] = "not-started";
        });
        savePlannerState();
    }
}

function savePlannerState() {
    localStorage.setItem("quantum_cat_planner_state", JSON.stringify(APP_STATE.plannerState));
}

function renderPlannerTable() {
    const tbody = document.getElementById("planner-tbody");
    tbody.innerHTML = "";
    
    SYLLABUS_CHAPTERS.forEach(ch => {
        const tr = document.createElement("tr");
        tr.id = `row-${ch.id}`;
        
        const status = APP_STATE.plannerState[ch.id] || "not-started";
        
        tr.innerHTML = `
            <td>
                <span class="block-tag ${ch.block}">${ch.block}</span>
                <strong style="display:block; margin-top:4px;">${ch.name}</strong>
            </td>
            <td class="text-secondary">${ch.focus}</td>
            <td>
                <select class="status-dropdown ${status}" data-chapter="${ch.id}">
                    <option value="not-started" ${status === 'not-started' ? 'selected' : ''}>Not Started</option>
                    <option value="in-progress" ${status === 'in-progress' ? 'selected' : ''}>In Progress</option>
                    <option value="mastered" ${status === 'mastered' ? 'selected' : ''}>Mastered</option>
                </select>
            </td>
            <td>
                ${getProgressPill(status)}
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function getProgressPill(status) {
    if (status === "mastered") return '<span class="progress-pill high"><i class="fa-solid fa-circle-check"></i> 100% Ready</span>';
    if (status === "in-progress") return '<span class="progress-pill med"><i class="fa-solid fa-spinner"></i> 50% Coding</span>';
    return '<span class="progress-pill low"><i class="fa-solid fa-circle-xmark"></i> 0% Done</span>';
}

function bindPlannerEvents() {
    const tbody = document.getElementById("planner-tbody");
    
    // Change select option status
    tbody.addEventListener("change", (e) => {
        if (e.target.classList.contains("status-dropdown")) {
            const chId = e.target.getAttribute("data-chapter");
            const newStatus = e.target.value;
            
            // Update State
            APP_STATE.plannerState[chId] = newStatus;
            savePlannerState();
            
            // Update Dropdown class styling
            e.target.className = `status-dropdown ${newStatus}`;
            
            // Update parent row's progress pill
            const tr = document.getElementById(`row-${chId}`);
            if (tr) {
                const tdPill = tr.querySelector("td:last-child");
                if (tdPill) tdPill.innerHTML = getProgressPill(newStatus);
            }
            
            // Re-calculate statistics
            updateStatsDashboard();
            showToast("Planner state updated!");
        }
    });

    // Reset button handler
    document.getElementById("reset-progress").addEventListener("click", () => {
        if (confirm("Are you sure you want to reset all syllabus tracker progress?")) {
            SYLLABUS_CHAPTERS.forEach(ch => {
                APP_STATE.plannerState[ch.id] = "not-started";
            });
            savePlannerState();
            renderPlannerTable();
            updateStatsDashboard();
            showToast("Planner reset successful!");
        }
    });
}

function updateStatsDashboard() {
    let masteredCount = 0;
    let inProgressCount = 0;
    let totalChapters = SYLLABUS_CHAPTERS.length;
    
    SYLLABUS_CHAPTERS.forEach(ch => {
        const state = APP_STATE.plannerState[ch.id];
        if (state === "mastered") masteredCount++;
        if (state === "in-progress") inProgressCount++;
    });
    
    // Mastery percentage calculation: Mastered = 100, In Progress = 50, Not Started = 0
    let totalPoints = (masteredCount * 100) + (inProgressCount * 50);
    let maxPoints = totalChapters * 100;
    let masteryPercentage = Math.round((totalPoints / maxPoints) * 100);
    
    // UI Elements Binding
    document.getElementById("mastery-percent").innerText = `${masteryPercentage}%`;
    document.getElementById("mastery-fill").style.width = `${masteryPercentage}%`;
    document.getElementById("completed-count").innerText = `${masteredCount} / ${totalChapters}`;
    
    // Accuracy Stats
    const accuracy = APP_STATE.quizState.totalAttempts > 0 
        ? Math.round((APP_STATE.quizState.solvedCount / APP_STATE.quizState.totalAttempts) * 100)
        : 0;
    
    document.getElementById("practice-accuracy").innerText = `${accuracy}%`;
    document.getElementById("practice-solved").innerText = `${APP_STATE.quizState.solvedCount} of ${APP_STATE.quizState.totalAttempts} answered correctly`;
}

// --------------------------------------------------------------------------
// 5. MODULE: THEORY HUB Collapsibles
// --------------------------------------------------------------------------

function renderTheoryHub() {
    const container = document.getElementById("blocks-container");
    container.innerHTML = "";
    
    THEORY_DATABASE.forEach(block => {
        const card = document.createElement("div");
        card.className = "block-card";
        
        // Structure chapters HTML
        let chaptersHTML = "";
        block.chapters.forEach(ch => {
            let formulasHTML = "";
            ch.formulas.forEach(form => {
                formulasHTML += `
                    <div class="formula-item">
                        <div class="formula-title">${form.name}</div>
                        <div class="formula-math">${form.math}</div>
                        <div class="formula-desc">${form.desc}</div>
                    </div>
                `;
            });
            
            chaptersHTML += `
                <div class="chapter-box">
                    <h4>${ch.title}</h4>
                    <div class="formula-list">
                        ${formulasHTML}
                    </div>
                </div>
            `;
        });
        
        card.innerHTML = `
            <div class="block-card-header" data-block="${block.id}">
                <div class="block-card-title">
                    <div class="block-card-icon" style="background-color: ${block.color}">
                        <i class="fa-solid ${block.icon}"></i>
                    </div>
                    <div class="block-card-info">
                        <h3>${block.title}</h3>
                        <p>${block.desc}</p>
                    </div>
                </div>
                <div class="chevron-icon"><i class="fa-solid fa-chevron-down"></i></div>
            </div>
            <div class="block-card-content">
                <div class="chapters-grid">
                    ${chaptersHTML}
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });

    // Expand Collapse event handler
    const headers = container.querySelectorAll(".block-card-header");
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const parent = header.parentElement;
            const isOpen = parent.classList.contains("open");
            
            // Close other block cards (accordion style)
            container.querySelectorAll(".block-card").forEach(c => {
                c.classList.remove("open");
                c.querySelector(".block-card-content").style.maxHeight = null;
            });

            if (!isOpen) {
                parent.classList.add("open");
                const content = parent.querySelector(".block-card-content");
                // Allow scrolling calculation for dynamic heights
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

// --------------------------------------------------------------------------
// 6. MODULE: THE SUM UNFOLDER
// --------------------------------------------------------------------------

function renderUnfolderMenu() {
    const menu = document.getElementById("problem-menu");
    menu.innerHTML = "";
    
    CLASSIC_SUMS.forEach(sum => {
        const button = document.createElement("button");
        button.className = "problem-menu-item";
        button.setAttribute("data-sum", sum.id);
        button.innerHTML = `
            <span class="p-menu-block">${sum.blockName}</span>
            <span class="p-menu-title">${sum.title}</span>
        `;
        button.addEventListener("click", () => {
            // Remove active classes
            menu.querySelectorAll(".problem-menu-item").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            selectClassicSum(sum.id);
        });
        menu.appendChild(button);
    });
}

function selectClassicSum(sumId) {
    const sum = CLASSIC_SUMS.find(s => s.id === sumId);
    if (!sum) return;
    
    const workspace = document.getElementById("unfolder-workspace");
    workspace.innerHTML = `
        <div class="sum-header">
            <h3>${sum.title}</h3>
            <div class="sum-tags-row">
                <span class="sum-badge catyear">${sum.year}</span>
                <span class="sum-badge ${sum.lod.includes('1') ? 'lod1' : sum.lod.includes('2') ? 'lod2' : 'lod3'}">${sum.lod}</span>
            </div>
        </div>
        
        <div class="sum-body animate-fade-in">
            <span class="q-badge" style="margin-bottom:8px;">QUESTION STATEMENT</span>
            <h3 style="font-family:'Outfit', sans-serif;">${sum.question}</h3>
        </div>

        <div class="unfolder-tabs">
            <button class="unfold-tab-btn active" data-tab="tab-hint">💡 Instant Hint</button>
            <button class="unfold-tab-btn" data-tab="tab-traditional">📜 Traditional Formula Method</button>
            <button class="unfold-tab-btn tab-shortcut" data-tab="tab-shortcut">⚡ Arun Sharma Shortcut</button>
        </div>

        <div class="tab-content-panel">
            <!-- HINT TABS -->
            <div class="tab-pane-content active" id="tab-hint">
                <div class="explanation-card" style="border-left: 4px solid var(--color-warning); background: rgba(245, 158, 11, 0.05)">
                    <h4><i class="fa-solid fa-lightbulb text-gold"></i> Conceptual Hint</h4>
                    <p style="font-size:1rem; line-height:1.7;">${sum.hint}</p>
                </div>
            </div>

            <!-- TRADITIONAL SOL TABS -->
            <div class="tab-pane-content" id="tab-traditional">
                <div class="explanation-card traditional-style">
                    <h4><i class="fa-solid fa-scroll text-indigo"></i> The Formulaic Approach</h4>
                    <p style="margin-bottom: 20px;">${sum.traditional.intro}</p>
                    <div class="step-list">
                        ${sum.traditional.steps.map(step => `
                            <div class="step-card">
                                <span class="step-num">${step.num}</span>
                                <span class="step-desc">${step.desc}</span>
                            </div>
                        `).join("")}
                    </div>
                    <div class="highlight-box">
                        <i class="fa-solid fa-check-double"></i> Verified Mathematical Output: ${sum.traditional.highlight}
                    </div>
                </div>
            </div>

            <!-- SHORTCUT SOL TABS -->
            <div class="tab-pane-content" id="tab-shortcut">
                <div class="explanation-card shortcut-style">
                    <h4><i class="fa-solid fa-bolt" style="color:var(--color-secondary)"></i> The Quantitative Speed hack</h4>
                    <p style="margin-bottom: 20px;">${sum.shortcut.intro}</p>
                    <div class="step-list">
                        ${sum.shortcut.steps.map(step => `
                            <div class="step-card shortcut-step">
                                <span class="step-num">${step.num}</span>
                                <span class="step-desc">${step.desc}</span>
                            </div>
                        `).join("")}
                    </div>
                    <div class="highlight-box" style="background: rgba(139, 92, 246, 0.08); border-color: rgba(139, 92, 246, 0.2); color: var(--color-secondary);">
                        <i class="fa-solid fa-wand-magic-sparkles"></i> Arun Sharma Shortcut Output: ${sum.shortcut.highlight}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Hook tab switches
    const tabBtns = workspace.querySelectorAll(".unfold-tab-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const targetTab = btn.getAttribute("data-tab");
            workspace.querySelectorAll(".tab-pane-content").forEach(pane => pane.classList.remove("active"));
            workspace.querySelector(`#${targetTab}`).classList.add("active");
        });
    });

    // Make the corresponding left menu active as well
    const menu = document.getElementById("problem-menu");
    menu.querySelectorAll(".problem-menu-item").forEach(btn => {
        if (btn.getAttribute("data-sum") === sumId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// --------------------------------------------------------------------------
// 7. MODULE: PRACTICE ARENA (QUIZ ENGINE)
// --------------------------------------------------------------------------

function loadQuizState() {
    const saved = localStorage.getItem("quantum_quiz_state");
    if (saved) {
        const parsed = JSON.parse(saved);
        APP_STATE.quizState.score = parsed.score || 0;
        APP_STATE.quizState.solvedCount = parsed.solvedCount || 0;
        APP_STATE.quizState.totalAttempts = parsed.totalAttempts || 0;
    }
}

function saveQuizState() {
    localStorage.setItem("quantum_quiz_state", JSON.stringify({
        score: APP_STATE.quizState.score,
        solvedCount: APP_STATE.quizState.solvedCount,
        totalAttempts: APP_STATE.quizState.totalAttempts
    }));
}

function renderQuizQuestion() {
    const qIndex = APP_STATE.quizState.currentIndex;
    const qData = QUIZ_QUESTIONS[qIndex];
    
    // Quiz Progress elements
    document.getElementById("current-q-num").innerText = qIndex + 1;
    document.getElementById("total-q-num").innerText = QUIZ_QUESTIONS.length;
    document.getElementById("score-val").innerText = APP_STATE.quizState.score;
    document.getElementById("max-score-val").innerText = APP_STATE.quizState.totalAttempts;
    
    const progressPct = ((qIndex + 1) / QUIZ_QUESTIONS.length) * 100;
    document.getElementById("quiz-progress-bar").style.width = `${progressPct}%`;
    
    // Select Card DOM Nodes
    const practiceCard = document.getElementById("practice-card");
    
    // Clear Previous Solution elements and restore action buttons defaults
    document.getElementById("practice-hint-box").classList.add("hidden");
    document.getElementById("practice-solution-box").classList.add("hidden");
    document.getElementById("quiz-unfold-btn").classList.add("hidden");
    document.getElementById("quiz-next-btn").classList.add("hidden");
    document.getElementById("quiz-submit-btn").classList.remove("hidden");
    document.getElementById("quiz-hint-btn").classList.remove("hidden");
    
    // Set Question Content
    const qBox = practiceCard.querySelector(".question-box");
    qBox.innerHTML = `
        <span class="q-badge">BLOCK: ${qData.blockName.toUpperCase()}</span>
        <h3 class="q-text">${qData.question}</h3>
        <div class="options-container" id="quiz-options-container">
            ${Object.entries(qData.options).map(([key, val]) => `
                <label class="option-item" id="option-${key}">
                    <input type="radio" name="practice-option" value="${key}">
                    <span class="option-marker">${key}</span>
                    <span class="option-text">${val}</span>
                </label>
            `).join("")}
        </div>
    `;

    APP_STATE.quizState.selectedOption = null;
    APP_STATE.quizState.isAnswered = false;

    // Attach click events on option labels for highlights
    const optionLabels = qBox.querySelectorAll(".option-item");
    optionLabels.forEach(label => {
        label.addEventListener("click", () => {
            if (APP_STATE.quizState.isAnswered) return;
            
            optionLabels.forEach(lbl => lbl.classList.remove("selected"));
            label.classList.add("selected");
            
            const radio = label.querySelector('input[type="radio"]');
            radio.checked = true;
            APP_STATE.quizState.selectedOption = radio.value;
        });
    });
}

function bindQuizEvents() {
    // Hint button
    document.getElementById("quiz-hint-btn").addEventListener("click", () => {
        const hintBox = document.getElementById("practice-hint-box");
        const hintText = document.getElementById("practice-hint-text");
        const currentQ = QUIZ_QUESTIONS[APP_STATE.quizState.currentIndex];
        
        hintText.innerText = currentQ.hint;
        hintBox.classList.toggle("hidden");
    });

    // Submit button
    document.getElementById("quiz-submit-btn").addEventListener("click", () => {
        if (APP_STATE.quizState.isAnswered) return;
        
        const selected = APP_STATE.quizState.selectedOption;
        if (!selected) {
            alert("Please select an answer choice before submitting!");
            return;
        }

        const currentQ = QUIZ_QUESTIONS[APP_STATE.quizState.currentIndex];
        APP_STATE.quizState.isAnswered = true;
        APP_STATE.quizState.totalAttempts++;
        
        const selectedLabel = document.getElementById(`option-${selected}`);
        const correctLabel = document.getElementById(`option-${currentQ.correct}`);
        
        // Disable all radio buttons
        const radios = document.querySelectorAll('input[name="practice-option"]');
        radios.forEach(r => r.disabled = true);

        // Grade Answer
        if (selected === currentQ.correct) {
            APP_STATE.quizState.score++;
            APP_STATE.quizState.solvedCount++;
            selectedLabel.classList.remove("selected");
            selectedLabel.classList.add("correct");
            showToast("Excellent! Correct Answer.");
        } else {
            selectedLabel.classList.remove("selected");
            selectedLabel.classList.add("incorrect");
            correctLabel.classList.add("correct");
            showToast("Oops! Incorrect Answer.");
        }

        // Save progress, update stats, reveal solution unfolding triggers
        saveQuizState();
        updateStatsDashboard();
        
        document.getElementById("quiz-submit-btn").classList.add("hidden");
        document.getElementById("quiz-hint-btn").classList.add("hidden");
        document.getElementById("quiz-unfold-btn").classList.remove("hidden");
        document.getElementById("quiz-next-btn").classList.remove("hidden");
    });

    // Unfold Explanation button
    document.getElementById("quiz-unfold-btn").addEventListener("click", () => {
        const currentQ = QUIZ_QUESTIONS[APP_STATE.quizState.currentIndex];
        
        document.getElementById("traditional-sol-text").innerHTML = currentQ.traditional;
        document.getElementById("shortcut-sol-text").innerHTML = currentQ.shortcut;
        
        const solBox = document.getElementById("practice-solution-box");
        solBox.classList.toggle("hidden");
        
        // Smooth scroll to solution
        solBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Next button
    document.getElementById("quiz-next-btn").addEventListener("click", () => {
        if (APP_STATE.quizState.currentIndex < QUIZ_QUESTIONS.length - 1) {
            APP_STATE.quizState.currentIndex++;
            renderQuizQuestion();
        } else {
            // Render End of Quiz Card
            renderQuizCompletionCard();
        }
    });
}

function renderQuizCompletionCard() {
    const practiceCard = document.getElementById("practice-card");
    const qBox = practiceCard.querySelector(".question-box");
    
    // Hide buttons
    document.getElementById("practice-hint-box").classList.add("hidden");
    document.getElementById("practice-solution-box").classList.add("hidden");
    document.getElementById("quiz-unfold-btn").classList.add("hidden");
    document.getElementById("quiz-next-btn").classList.add("hidden");
    document.getElementById("quiz-submit-btn").classList.add("hidden");
    document.getElementById("quiz-hint-btn").classList.add("hidden");

    const pct = Math.round((APP_STATE.quizState.score / QUIZ_QUESTIONS.length) * 100);
    let msg = "Keep practicing! Quantitative Aptitude is all about repetition and patterns.";
    let emoji = "🧠";
    if (pct >= 80) { emoji = "🏆"; msg = "Sensational! Your shortcut speed and logical deduction are incredibly sharp."; }
    else if (pct >= 60) { emoji = "🥈"; msg = "Solid performance! With a bit more shortcut coverage, you will breach 99+ percentile."; }

    qBox.innerHTML = `
        <div class="workspace-placeholder animate-fade-in" style="padding:20px;">
            <span style="font-size:4rem;">${emoji}</span>
            <h2 style="font-size:1.8rem; margin:16px 0 8px 0;">Quiz Completed!</h2>
            <h3 style="color:var(--color-success); margin-bottom:12px;">You Scored ${APP_STATE.quizState.score} / ${QUIZ_QUESTIONS.length} (${pct}%)</h3>
            <p style="color:var(--text-secondary); max-width:80%; margin: 0 auto 24px auto;">${msg}</p>
            <button class="btn btn-primary" id="restart-quiz-btn"><i class="fa-solid fa-rotate-left"></i> Take Quiz Again</button>
        </div>
    `;

    document.getElementById("restart-quiz-btn").addEventListener("click", () => {
        APP_STATE.quizState.currentIndex = 0;
        APP_STATE.quizState.score = 0;
        APP_STATE.quizState.totalAttempts = APP_STATE.quizState.totalAttempts - QUIZ_QUESTIONS.length; // normalize
        if (APP_STATE.quizState.totalAttempts < 0) APP_STATE.quizState.totalAttempts = 0;
        
        saveQuizState();
        updateStatsDashboard();
        renderQuizQuestion();
    });
}

// --------------------------------------------------------------------------
// 8. UTILITIES: TOAST NOTIFICATIONS & GLOBAL SEARCH
// --------------------------------------------------------------------------

function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMsg = toast.querySelector(".toast-message");
    
    toastMsg.innerText = message;
    toast.classList.remove("hidden");
    
    // Reset classes to trigger keyframe animation
    toast.style.animation = 'none';
    toast.offsetHeight; /* trigger reflow */
    toast.style.animation = null; 

    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

function bindGlobalSearch() {
    const search = document.getElementById("global-search");
    
    search.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            // Clear filtering in planning tracker
            renderPlannerTable();
            return;
        }

        // Filter Planner rows in Dashboard
        const tbody = document.getElementById("planner-tbody");
        const rows = tbody.querySelectorAll("tr");
        
        rows.forEach(row => {
            const chName = row.querySelector("strong").innerText.toLowerCase();
            const chFocus = row.querySelector(".text-secondary").innerText.toLowerCase();
            const chBlock = row.querySelector(".block-tag").innerText.toLowerCase();
            
            if (chName.includes(query) || chFocus.includes(query) || chBlock.includes(query)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
}
