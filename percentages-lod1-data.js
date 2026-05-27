/* ==========================================================================
   PERCENTAGES-LOD1-DATA.JS - Arun Sharma Percentages LOD 1 Questions 19 to 60
   ========================================================================== */

const PERCENTAGES_LOD1_SUMS = [
    {
        id: "sum19",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q19",
        title: "Successive Balances of Savings",
        question: "Sharad spends 20% of his monthly income on his household expenditure, 30% of the rest on food, 10% of the rest on clothes and saves the rest. On counting, he comes to know that he has finally saved ₹10,080. Find his monthly income (in ₹).",
        hint: "When a person spends a percentage of the 'rest' (remaining amount), it's a case of successive percentage decrease. Use multiplying factors for what is left after each expense.",
        traditional: {
            intro: "The classic algebraic method sets up variables step-by-step for each expenditure category.",
            steps: [
                { num: "Step 1", desc: "Let the total monthly income be <em>X</em>." },
                { num: "Step 2", desc: "Household expenditure = 20% of <em>X</em> = 0.2<em>X</em>.<br>Remaining balance (Rest 1) = <em>X</em> - 0.2<em>X</em> = 0.8<em>X</em>." },
                { num: "Step 3", desc: "Food expenditure = 30% of Rest 1 = 30% of 0.8<em>X</em> = 0.24<em>X</em>.<br>Remaining balance (Rest 2) = 0.8<em>X</em> - 0.24<em>X</em> = 0.56<em>X</em>." },
                { num: "Step 4", desc: "Clothes expenditure = 10% of Rest 2 = 10% of 0.56<em>X</em> = 0.056<em>X</em>.<br>Final savings = 0.56<em>X</em> - 0.056<em>X</em> = 0.504<em>X</em>." },
                { num: "Step 5", desc: "Equate final savings to the given value:<br>0.504<em>X</em> = 10,080<br><em>X</em> = 10,080 / 0.504 = 20,000." }
            ],
            highlight: "Monthly Income = ₹20,000. (Option c)"
        },
        shortcut: {
            intro: "The successive multiplier method lets you write a single equation in your head for the remaining amount.",
            steps: [
                { num: "Multiplier Rule", desc: "If you spend <em>p%</em> of your money, you are left with $(100 - p)\%$.<br>- Spending 20% leaves 80% (multiplier 0.8)<br>- Spending 30% of rest leaves 70% (multiplier 0.7)<br>- Spending 10% of rest leaves 90% (multiplier 0.9)" },
                { num: "Single-Line Equation", desc: "Savings = Income × 0.80 × 0.70 × 0.90<br>10,080 = Income × 0.504<br>Income = 10,080 / 0.504 = 20,000." }
            ],
            highlight: "Direct mental calculation: Income = 10,080 / (0.8 × 0.7 × 0.9) = ₹20,000."
        }
    },
    {
        id: "sum20",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q20",
        title: "Price-Consumption-Expenditure Rel.",
        question: "The price of sugar is reduced by 25% but inspite of the decrease, Aayush ends up increasing his expenditure on sugar by 20%. What is the percentage change in his monthly consumption of sugar?",
        hint: "Remember: Price × Consumption = Expenditure. If the price falls and yet expenditure goes up, the consumption must have increased significantly.",
        traditional: {
            intro: "Set up equations using variables for original price (P), consumption (C), and expenditure (E).",
            steps: [
                { num: "Step 1", desc: "Original relation: P × C = E => C = E / P." },
                { num: "Step 2", desc: "New Price = 0.75P (since it is reduced by 25%).<br>New Expenditure = 1.2E (since it increases by 20%)." },
                { num: "Step 3", desc: "Let new consumption be C'. Since New Price × C' = New Expenditure:<br>0.75P × C' = 1.2E<br>C' = 1.2E / 0.75P = 1.6 (E / P) = 1.6C." },
                { num: "Step 4", desc: "Percentage change in consumption = [(1.6C - C) / C] × 100 = 60% increase." }
            ],
            highlight: "Consumption change = +60%. (Option a)"
        },
        shortcut: {
            intro: "The standard 'Assume 100' technique makes this calculation instant and visual.",
            steps: [
                { num: "Initial Values", desc: "Assume initial Price = ₹100/kg, Consumption = 100 kg.<br>Total Expenditure = 100 × 100 = ₹10,000." },
                { num: "Apply Changes", desc: "New Price = ₹75/kg (25% drop).<br>New Expenditure = ₹12,000 (20% increase)." },
                { num: "Solve Consumption", desc: "New Consumption = New Expenditure / New Price = 12,000 / 75 = 160 kg." },
                { num: "Find Increase", desc: "Consumption went from 100 kg to 160 kg. This is a direct 60% increase." }
            ],
            highlight: "Quick check: New C = 120 / 0.75 = 160. Increase = 60%."
        }
    },
    {
        id: "sum21",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q21",
        title: "Product Constancy in Price Drop",
        question: "The price of rice falls by 20%. How much rice can be bought now with the money that was sufficient to buy 20 kg of rice previously?",
        hint: "When price falls and total budget remains constant, the quantity you can buy increases. Price and Quantity are inversely proportional.",
        traditional: {
            intro: "Textbook equations use variable price P and total budget to find the new quantity.",
            steps: [
                { num: "Step 1", desc: "Let original price be P. Money available = 20 × P." },
                { num: "Step 2", desc: "New price = 20% lower than P = 0.8P." },
                { num: "Step 3", desc: "New quantity = Money / New price = 20P / 0.8P = 25 kg." }
            ],
            highlight: "Quantity = 25 kg. (Option c)"
        },
        shortcut: {
            intro: "Arun Sharma's Fraction Inverse Rule solves this in one second.",
            steps: [
                { num: "Fraction Rule", desc: "A 20% fall in price means the price becomes 80% (or 4/5) of its original value." },
                { num: "Inverse Proportion", desc: "Since Expenditure is constant, Quantity must become the inverse fraction of the price: 5/4 of the original quantity." },
                { num: "Solve", desc: "New Quantity = 20 kg × (5/4) = 25 kg." }
            ],
            highlight: "Mental Math: Price falls by 1/5 => Quantity increases by 1/(5-1) = 1/4. 1/4 of 20 is 5 kg. Total = 20 + 5 = 25 kg."
        }
    },
    {
        id: "sum22",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q22",
        title: "Basic Linear Percentage Equation",
        question: "Thirty percent of a number when subtracted from 91, gives the number itself. Find the number.",
        hint: "Translate the verbal statement directly into an algebraic equation. '30% of a number' is 0.3x.",
        traditional: {
            intro: "The standard algebraic equation represents the number as x and solves.",
            steps: [
                { num: "Step 1", desc: "Let the number be <em>N</em>." },
                { num: "Step 2", desc: "Write the equation: 91 - 30% of <em>N</em> = <em>N</em>." },
                { num: "Step 3", desc: "Convert percent to decimal: 91 - 0.3<em>N</em> = <em>N</em>." },
                { num: "Step 4", desc: "Add 0.3<em>N</em> to both sides: 91 = 1.3<em>N</em>." },
                { num: "Step 5", desc: "Solve for <em>N</em>: <em>N</em> = 91 / 1.3 = 70." }
            ],
            highlight: "Number = 70. (Option c)"
        },
        shortcut: {
            intro: "Using basic percentage percentages or option checking can solve this mentally.",
            steps: [
                { num: "Percentage logic", desc: "If you subtract 30% of a number from 91, you get the remaining 100% of the number.<br>This means 91 must represent exactly 130% (100% + 30%) of that number." },
                { num: "Direct division", desc: "If 130% = 91, then 10% = 7, and 100% = 70." }
            ],
            highlight: "Direct formula: N = 91 / 1.30 = 70."
        }
    },
    {
        id: "sum23",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q23",
        title: "Comparative Variable Relationships",
        question: "When 60% of a number A is added to another number B, B becomes 175% of its previous value. Then which of the following is true regarding the values of A and B?",
        hint: "Translate the change in B into an equation. B becoming 175% of its value means it increased by 75% of its value.",
        traditional: {
            intro: "Set up the percentage additions and simplify to find the ratio between A and B.",
            steps: [
                { num: "Step 1", desc: "Write the equation: B + 60% of A = 175% of B." },
                { num: "Step 2", desc: "Convert to decimals: B + 0.6A = 1.75B." },
                { num: "Step 3", desc: "Subtract B from both sides: 0.6A = 0.75B." },
                { num: "Step 4", desc: "Find the ratio: A / B = 0.75 / 0.60 = 5/4 = 1.25." }
            ],
            highlight: "A = 1.25B. (Option d/a)"
        },
        shortcut: {
            intro: "Understand the 'cause and effect' of percentage increases to skip algebraic steps.",
            steps: [
                { num: "Logic Check", desc: "B becomes 175% of itself. This means B has increased by 75% of its value." },
                { num: "Equating", desc: "The cause of this 75% increase in B is the addition of 60% of A.<br>Therefore: 60% of A = 75% of B." },
                { num: "Ratio", desc: "A / B = 75 / 60 = 5 / 4.<br>If both A and B are positive, A > B. If they are negative, B > A. Thus, Option d (either can be true depending on signs) is the most mathematically complete choice." }
            ],
            highlight: "60% of A = 75% of B => A : B = 5 : 4."
        }
    },
    {
        id: "sum24",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q24",
        title: "Two-Tier Election Percentages",
        question: "At an election, the candidate who got 60% of the votes cast won by 200 votes. Find the total number of voters on the voting list if 66.67% people cast their vote and there were no invalid votes.",
        hint: "Solve this in two stages: First, find the total votes cast. Second, scale it up to find the total registered voters using the 66.67% fraction (2/3).",
        traditional: {
            intro: "The standard textbook solution defines variables for both total voters and cast votes, solving them sequentially.",
            steps: [
                { num: "Step 1", desc: "Let the total number of registered voters be V, and cast votes be C." },
                { num: "Step 2", desc: "Winner got 60% of C. Since there are only two candidates and no invalid votes, the loser got 40% of C." },
                { num: "Step 3", desc: "The winner won by 200 votes: 60% of C - 40% of C = 200 => 20% of C = 200 => C = 1000 votes cast." },
                { num: "Step 4", desc: "66.67% of registered voters cast their votes: (2/3) × V = 1000 => V = 1000 × 1.5 = 1500." }
            ],
            highlight: "Total Voters = 1500. (Option d)"
        },
        shortcut: {
            intro: "Using fractions and percentage gaps makes the arithmetic much quicker.",
            steps: [
                { num: "Vote Gap", desc: "The gap between winner and loser is 60% - 40% = 20% of cast votes.<br>If 20% of cast votes = 200, then 100% of cast votes = 1000." },
                { num: "Fraction Scaling", desc: "66.67% is exactly 2/3.<br>So, 2/3 of the voters list = 1000.<br>Voters list = 1000 × (3/2) = 1500." }
            ],
            highlight: "Mental Flow: Gap 20% = 200 => Total Cast = 1000. 2/3 of List = 1000 => List = 1500."
        }
    },
    {
        id: "sum25",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q25",
        title: "Compound Growth Timeline",
        question: "The population of a village is 1,00,000. The rate of increase is 10% per annum. Find the population at the start of the third year.",
        hint: "Be careful with timelines! 'Start of the third year' is exactly equivalent to 'end of the second year' (i.e. 2 years of compound growth).",
        traditional: {
            intro: "Apply the standard compound interest formula for population growth.",
            steps: [
                { num: "Step 1", desc: "Formula: P_new = P_original × (1 + R/100)^N." },
                { num: "Step 2", desc: "Substitute P = 1,00,000, R = 10, and N = 2 (start of 3rd year means 2 full years have passed)." },
                { num: "Step 3", desc: "P_new = 1,00,000 × (1.1)² = 1,00,000 × 1.21 = 1,21,000." }
            ],
            highlight: "Population = 1,21,000. (Option b)"
        },
        shortcut: {
            intro: "Perform successive 10% additions, which is extremely easy to calculate.",
            steps: [
                { num: "Year 1 Increase", desc: "Start: 1,00,000. Add 10% (+10,000) => End of Year 1: 1,10,000." },
                { num: "Year 2 Increase", desc: "Start: 1,10,000. Add 10% (+11,000) => End of Year 2 (Start of Year 3): 1,21,000." }
            ],
            highlight: "Mental Math: 1.1 × 1.1 = 1.21. 100,000 × 1.21 = 121,000."
        }
    },
    {
        id: "sum26",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q26",
        title: "Varying Yearly Percentage Changes",
        question: "The population of the village of Gavas is 10,000 at this moment. It increases by 10% in the first year. However, in the second year, due to emigration, the population drops by 5%. Find the population at the end of the third year if in the third year, the population increases by 20%.",
        hint: "Multiply the initial population by the successive multipliers for each year's respective change (+10%, -5%, +20%).",
        traditional: {
            intro: "The standard approach calculates the population at the end of each year sequentially.",
            steps: [
                { num: "Year 1", desc: "Initial: 10,000. 10% increase = 1,000.<br>End of Year 1: 10,000 + 1,000 = 11,000." },
                { num: "Year 2", desc: "Start: 11,000. 5% decrease = 550.<br>End of Year 2: 11,000 - 550 = 10,450." },
                { num: "Year 3", desc: "Start: 10,450. 20% increase = 2,090.<br>End of Year 3: 10,450 + 2,090 = 12,540." }
            ],
            highlight: "Final Population = 12,540. (Option b)"
        },
        shortcut: {
            intro: "Solve this in a single line using fractions or decimal multipliers, grouping terms to simplify calculations.",
            steps: [
                { num: "Multipliers", desc: "+10% is 1.1, -5% is 0.95, +20% is 1.2." },
                { num: "Combine Multipliers", desc: "Population = 10,000 × (1.1 × 1.2) × 0.95<br>Combine 1.1 × 1.2 = 1.32.<br>Population = 10,000 × 1.32 × 0.95 = 13,200 × 0.95." },
                { num: "Subtract 5%", desc: "To find 13,200 × 0.95, simply subtract 5% of 13,200 from itself:<br>13,200 - 660 = 12,540." }
            ],
            highlight: "Mental Math: 13,200 - 660 = 12,540."
        }
    },
    {
        id: "sum27",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q27",
        title: "Three-Way Comparative Pricing",
        question: "Raju sells his goods 20% cheaper than Bharat and 20% dearer than Charan. By how much percentage are Charan's goods cheaper/dearer than Bharat's?",
        hint: "Assume a base value of 100 for Bharat to find the relative values of Raju and Charan.",
        traditional: {
            intro: "Write algebraic ratios for each comparison and solve.",
            steps: [
                { num: "Step 1", desc: "Let Bharat's price be B, Raju's be R, and Charan's be C." },
                { num: "Step 2", desc: "Raju is 20% cheaper than Bharat: R = 0.8B." },
                { num: "Step 3", desc: "Raju is 20% dearer than Charan: R = 1.2C." },
                { num: "Step 4", desc: "Equate the two expressions for R: 1.2C = 0.8B => C = (0.8 / 1.2) B = (2/3) B." },
                { num: "Step 5", desc: "Charan's price is 2/3 of Bharat's. Percentage cheaper = [ (B - (2/3)B) / B ] × 100 = 33.33% cheaper." }
            ],
            highlight: "Charan's goods are 33.33% cheaper. (Option a)"
        },
        shortcut: {
            intro: "Using a starting value of 100 makes the math intuitive.",
            steps: [
                { num: "Assume Bharat = 100", desc: "If Bharat = 100, then Raju = 80 (20% cheaper)." },
                { num: "Find Charan", desc: "Raju is 20% dearer than Charan: 80 = Charan × 1.2<br>Charan = 80 / 1.2 = 800 / 12 = 66.67." },
                { num: "Compare", desc: "Charan (66.67) is cheaper than Bharat (100) by: 100 - 66.67 = 33.33." }
            ],
            highlight: "Since Bharat is 100, the difference of 33.33 is exactly 33.33% cheaper."
        }
    },
    {
        id: "sum28",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q28",
        title: "Two-Stage Ore Extraction",
        question: "Out of the total production of Aluminum from Bauxite, an ore of Aluminum, 30% of the ore gets wasted, and out of the remaining ore, only 30% is pure Aluminum. If the pure Aluminum obtained in a year from a mine of Bauxite was 42,000 kg, then the quantity of Bauxite mined from that mine in the year is:",
        hint: "This is a compound percentage problem. First find the remaining ore percentage, then find 30% of that remainder.",
        traditional: {
            intro: "The standard textbook approach uses algebra to set up equations for wastage and extraction.",
            steps: [
                { num: "Step 1", desc: "Let the total Bauxite mined be B." },
                { num: "Step 2", desc: "30% is wasted. Remaining ore = 70% of B = 0.7B." },
                { num: "Step 3", desc: "Pure Aluminum is 30% of the remaining ore: Pure Al = 30% of 0.7B = 0.21B." },
                { num: "Step 4", desc: "Given Pure Al = 42,000 kg: 0.21B = 42,000 => B = 42,000 / 0.21 = 2,00,000 kg." }
            ],
            highlight: "Total Bauxite = 2,00,000 kg. (Option b)"
        },
        shortcut: {
            intro: "Express the percentages as fractions to do the division mentally.",
            steps: [
                { num: "Fractional equivalent", desc: "70% remaining = 7/10. 30% of that = 3/10." },
                { num: "Net extraction rate", desc: "Total extraction = (7/10) × (3/10) = 21/100 of the total bauxite." },
                { num: "Direct solving", desc: "21% = 42,000 kg.<br>1% = 2,000 kg.<br>100% = 2,00,000 kg." }
            ],
            highlight: "Mental flow: 21% = 42k => 1% = 2k => 100% = 200k kg."
        }
    },
    {
        id: "sum29",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Challenging)",
        year: "Arun Sharma Q29",
        title: "Class Average with Attendance Filters",
        question: "In a class, 25% of the students were absent for an exam. Thirty percent failed by 20 marks and 10% just passed because of grace marks of 5. Find the average score of the class, if the remaining students scored an average of 60 marks and the pass marks are 33 (counting the final scores of the candidates).",
        hint: "Note that 'the class' average typically refers to the average of the candidates who actually appeared. Check how percentages are defined.",
        traditional: {
            intro: "Represent the class size as 100 and evaluate scores for each student segment.",
            steps: [
                { num: "Step 1", desc: "Assume total students in class = 100. Absent = 25, Present = 75." },
                { num: "Step 2", desc: "30% (of the class = 30 students) failed by 20 marks. Since pass marks are 33, their score = 33 - 20 = 13 marks.<br>Total marks = 30 × 13 = 390." },
                { num: "Step 3", desc: "10% (of the class = 10 students) got 33 marks (just passed).<br>Total marks = 10 × 33 = 330." },
                { num: "Step 4", desc: "Remaining present students = 75 - 30 - 10 = 35 students. Their average is 60.<br>Total marks = 35 × 60 = 2100." },
                { num: "Step 5", desc: "Sum of marks = 390 + 330 + 2100 = 2820.<br>Average of present students = 2820 / 75 = 37.6." }
            ],
            highlight: "Average Score of Present Candidates = 37.6. (Option b)"
        },
        shortcut: {
            intro: "Use the weighted average formula to calculate the average of the present students directly.",
            steps: [
                { num: "Present students ratio", desc: "The present students are divided in ratio: 30 (failed) : 10 (grace pass) : 35 (remaining) = 6 : 2 : 7." },
                { num: "Weighted average", desc: "Avg = [ (6 × 13) + (2 × 33) + (7 × 60) ] / (6 + 2 + 7)<br>Avg = [ 78 + 66 + 420 ] / 15 = 564 / 15 = 37.6." }
            ],
            highlight: "Simplifies calculation using small ratios: 564 / 15 = 37.6."
        }
    },
    {
        id: "sum30",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q30",
        title: "Variable Addition Ratios",
        question: "When 40% of a number A is added to another number B, B becomes 125% of its previous value. Then which of the following is true regarding the values of A and B?",
        hint: "Translate B's growth: B becoming 125% means B increased by 25% of its original value.",
        traditional: {
            intro: "Construct the equation and solve for the relative relationship of A and B.",
            steps: [
                { num: "Step 1", desc: "Write the equation: B + 0.4A = 1.25B." },
                { num: "Step 2", desc: "Subtract B from both sides: 0.4A = 0.25B." },
                { num: "Step 3", desc: "Multiply by 100 to clear decimals: 40A = 25B => 8A = 5B." },
                { num: "Step 4", desc: "Solve for B: B = 1.6A. Since 1.6 > 1, B must be greater than A (assuming positive numbers)." }
            ],
            highlight: "B > A. (Option b)"
        },
        shortcut: {
            intro: "Equate the absolute change of B to the added portion of A.",
            steps: [
                { num: "Direct matching", desc: "40% of A must equal the 25% increase in B.<br>0.4A = 0.25B." },
                { num: "Comparison", desc: "Since the percentage coefficient of A (40%) is larger than that of B (25%), the base value of A must be smaller than the base value of B to keep them equal.<br>Thus, A < B or B > A." }
            ],
            highlight: "Logical Deduction: Higher percentage of A equals smaller percentage of B => A is smaller => B > A."
        }
    },
    {
        id: "sum31",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q31",
        title: "Option Test in Budget Savings",
        question: "Hans and Bhaskar have salaries that jointly amount to ₹10,000 per month. They spend the same amount monthly and then it is found that the ratio of their savings is 6 : 1. Which of the following can be Hans's salary?",
        hint: "Since they spend the same amount, the difference in their salaries is exactly equal to the difference in their savings. Test options to find a mathematically valid expenditure.",
        traditional: {
            intro: "Solve using variables for salaries and expenditure.",
            steps: [
                { num: "Step 1", desc: "Let Hans's salary be H, Bhaskar's be B, and expenditure be E." },
                { num: "Step 2", desc: "H + B = 10,000 => B = 10,000 - H." },
                { num: "Step 3", desc: "Savings ratio: (H - E) / (B - E) = 6 / 1 => H - E = 6B - 6E => H = 6B - 5E." },
                { num: "Step 4", desc: "Substitute B: H = 6(10,000 - H) - 5E => 7H = 60,000 - 5E => E = (60,000 - 7H) / 5." },
                { num: "Step 5", desc: "Since Hans has higher savings (6 times Bhaskar's), Hans's salary must be higher than Bhaskar's. Test H = 6,000: E = (60,000 - 42,000)/5 = 3,600. Hans's savings = 2,400, Bhaskar's = 400. Ratio = 6:1. Valid!" }
            ],
            highlight: "Hans's salary = ₹6,000. (Option a)"
        },
        shortcut: {
            intro: "Use option elimination and simple logic to bypass tedious equations.",
            steps: [
                { num: "Salaries and Savings", desc: "If Hans's salary is H and Bhaskar's is B, and they spend the same, Hans's savings are higher. So H must be greater than B. Since their sum is 10,000, Hans must earn more than 5,000. This eliminates option c (4000) and d (3000)." },
                { num: "Test remaining options", desc: "Test Option (a) Hans = 6,000 => Bhaskar = 4,000.<br>Difference in salary = 2,000. Since they spend the same, the difference in savings is also 2,000.<br>Let savings be 6x and 1x. Difference = 5x = 2,000 => x = 400.<br>Hans savings = 2,400. Bhaskar savings = 400.<br>Expenditure = Salary - Savings = 6,000 - 2,400 = 3,600 (or 4,000 - 400 = 3,600). Positive and valid!" }
            ],
            highlight: "Salary difference = Savings difference. 5 parts = 2000 => 1 part = 400. Hans savings = 2400. Salary = 6000."
        }
    },
    {
        id: "sum32",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q32",
        title: "Comparative Discounts Bargain",
        question: "Recently, while shopping in Meena Market in Lucknow, I came across two new trousers selling at a discount. I decided to buy one of them for my little boy Sherry. The shopkeeper offered me the first trouser for ₹42 and said that it usually sold for 8/7 of that price. He then offered me the other trouser for ₹36 and said that it usually sold for 7/6 of that price. Of the two trousers which one do you think is a better bargain and what is the percentage discount on it?",
        hint: "Find the original price for each trouser by multiplying the offered price by the given fractions, then calculate the discount percentages.",
        traditional: {
            intro: "The standard textbook solution calculates the regular price and discount percentage for both items.",
            steps: [
                { num: "Trouser 1", desc: "Offered price = ₹42. Regular price = 42 × 8/7 = ₹48.<br>Discount = 48 - 42 = ₹6.<br>Discount % = (6 / 48) × 100 = 12.5%." },
                { num: "Trouser 2", desc: "Offered price = ₹36. Regular price = 36 × 7/6 = ₹42.<br>Discount = 42 - 36 = ₹6.<br>Discount % = (6 / 42) × 100 = 14.28%." }
            ],
            highlight: "Better bargain = Second trouser (14.28%). (Option b)"
        },
        shortcut: {
            intro: "Simplify calculations by observing the fractional discounts directly.",
            steps: [
                { num: "Fractional discount 1", desc: "Regular price is 8/7 of sale price. This means the sale price is 7/8 of the regular price.<br>A price of 7/8 represents a discount of 1/8, which is exactly 12.5%." },
                { num: "Fractional discount 2", desc: "Regular price is 7/6 of sale price. This means the sale price is 6/7 of the regular price.<br>A price of 6/7 represents a discount of 1/7, which is exactly 14.28%." },
                { num: "Compare", desc: "1/7 is a larger fraction than 1/8. So the second trouser offers a higher percentage discount." }
            ],
            highlight: "1/7 (14.28%) > 1/8 (12.5%) => Second trouser is the better bargain."
        }
    },
    {
        id: "sum33",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q33",
        title: "Salary Hike Comparisons",
        question: "Vicky's salary is 75% more than Ashu's. Vicky got a raise of 40% on his salary while Ashu got a raise of 25% on his salary. By what percent is Vicky's salary more than Ashu's?",
        hint: "Assume Ashu's initial salary is 100. This makes Vicky's salary 175. Apply the respective percentage raises and compare.",
        traditional: {
            intro: "The standard algebraic solution uses variables and computes the percentage increase.",
            steps: [
                { num: "Step 1", desc: "Let Ashu's salary be S. Vicky's salary = 1.75S." },
                { num: "Step 2", desc: "Vicky's new salary = 1.75S × 1.4 = 2.45S." },
                { num: "Step 3", desc: "Ashu's new salary = S × 1.25 = 1.25S." },
                { num: "Step 4", desc: "Difference = 2.45S - 1.25S = 1.2S." },
                { num: "Step 5", desc: "Percentage difference = (1.2S / 1.25S) × 100 = 96%." }
            ],
            highlight: "Vicky's salary is 96% more. (Option a)"
        },
        shortcut: {
            intro: "Using a base of 100 removes variables and simplifies calculations.",
            steps: [
                { num: "Initial Values", desc: "Ashu = 100, Vicky = 175." },
                { num: "Apply Raises", desc: "Ashu's new salary = 125.<br>Vicky's new salary = 175 + 40% of 175 = 175 + 70 = 245." },
                { num: "Comparison", desc: "Vicky's salary is 120 more than Ashu's (245 - 125 = 120).<br>Percentage more = (120 / 125) × 100 = 120 × (4/5) = 24 × 4 = 96%." }
            ],
            highlight: "Mental arithmetic: 120/125 is 24/25, which is 96/100 = 96%."
        }
    },
    {
        id: "sum34",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q34",
        title: "Demographic Segment Percentages",
        question: "In a conference, out of 200 men, 100 women, 400 children present inside the building premises, 10% of the men, 20% of the women and 30% of the children were Indians. Find the percentage of people who were not Indian.",
        hint: "First find the total number of Indian attendees across all groups, subtract from the total to find the non-Indians, and calculate the percentage.",
        traditional: {
            intro: "Sum the total number of attendees, find the number of Indians in each category, and calculate.",
            steps: [
                { num: "Step 1", desc: "Total population = 200 men + 100 women + 400 children = 700 people." },
                { num: "Step 2", desc: "Indian men = 10% of 200 = 20.<br>Indian women = 20% of 100 = 20.<br>Indian children = 30% of 400 = 120." },
                { num: "Step 3", desc: "Total Indians = 20 + 20 + 120 = 160." },
                { num: "Step 4", desc: "Total non-Indians = 700 - 160 = 540." },
                { num: "Step 5", desc: "Non-Indian % = (540 / 700) × 100 = 77.14% (approx. 77%)." }
            ],
            highlight: "Non-Indian percentage = 77%. (Option b)"
        },
        shortcut: {
            intro: "Calculate the total percentage of Indians first, then subtract from 100% to save a step.",
            steps: [
                { num: "Indians Sum", desc: "Indian count = (0.1 × 200) + (0.2 × 100) + (0.3 × 400) = 20 + 20 + 120 = 160." },
                { num: "Indian %", desc: "Indian % = 160 / 700 = 16/70 = 22.85%." },
                { num: "Non-Indian %", desc: "Non-Indian % = 100% - 22.85% = 77.15%." }
            ],
            highlight: "Direct: 100% - 22.85% = 77.15% (which is close to 77%)."
        }
    },
    {
        id: "sum35",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q35",
        title: "Alloy Concentration in Ore",
        question: "An ore contains 25% of an alloy that has 90% iron. Other than this, in the remaining 75% of the ore, there is no iron. How many kilograms of the ore are needed to obtain 60 kg of pure iron?",
        hint: "Find the net iron concentration in the raw ore. 25% of the ore is alloy, and 90% of that alloy is iron.",
        traditional: {
            intro: "The standard approach sets up equations using variables for ore and alloy weights.",
            steps: [
                { num: "Step 1", desc: "Let the total weight of the ore be W kg." },
                { num: "Step 2", desc: "Alloy weight = 25% of W = 0.25W kg." },
                { num: "Step 3", desc: "Iron weight = 90% of Alloy = 0.90 × 0.25W = 0.225W kg." },
                { num: "Step 4", desc: "Equate to 60 kg: 0.225W = 60 => W = 60 / 0.225 = 266.66 kg." }
            ],
            highlight: "Ore required = 266.66 kg. (Option d)"
        },
        shortcut: {
            intro: "Express percentages as fractions to perform the division quickly without decimals.",
            steps: [
                { num: "Fractional content", desc: "Alloy is 1/4 of ore. Iron is 9/10 of alloy.<br>Total Iron fraction = (1/4) × (9/10) = 9/40 of the ore." },
                { num: "Solve", desc: "9/40 of Ore = 60 kg => Ore = 60 × (40/9) = 2400 / 9 = 266.66 kg." }
            ],
            highlight: "Mental step: 2400 / 9 = 800 / 3 = 266.67 kg."
        }
    },
    {
        id: "sum36",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q36",
        title: "Population Split via Deviation",
        question: "The population of a town is 6000. If the number of males increases by 10% and the number of females increases by 20%, then the population becomes 6800. Find the population of females in the town.",
        hint: "Try the deviation method instead of solving simultaneous equations. Assume a uniform increase rate.",
        traditional: {
            intro: "Construct two linear equations for males (M) and females (F) and solve.",
            steps: [
                { num: "Step 1", desc: "M + F = 6000 => M = 6000 - F." },
                { num: "Step 2", desc: "1.1M + 1.2F = 6800." },
                { num: "Step 3", desc: "Substitute M: 1.1(6000 - F) + 1.2F = 6800 => 6600 - 1.1F + 1.2F = 6800." },
                { num: "Step 4", desc: "Simplify: 0.1F = 200 => F = 2000." }
            ],
            highlight: "Female Population = 2000. (Option c)"
        },
        shortcut: {
            intro: "Arun Sharma's Deviation Method solves this in your head.",
            steps: [
                { num: "Uniform growth assumption", desc: "If both males and females had increased by the lower rate (10%), the total population would have increased by: 10% of 6000 = 600." },
                { num: "Compare with actual", desc: "The actual increase is 6800 - 6000 = 800.<br>The extra increase is 800 - 600 = 200." },
                { num: "Isolate females", desc: "This extra 200 is due to the additional 10% increase in the female population (20% - 10% = 10%).<br>10% of F = 200 => F = 2000." }
            ],
            highlight: "Direct mental shortcut: (800 - 600) / 0.10 = 2000."
        }
    },
    {
        id: "sum37",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q37",
        title: "Compound Growth Timeline II",
        question: "The population of a village is 1,00,000. Increase rate per annum is 10%. Find the population at the starting of the fourth year.",
        hint: "Note that 'starting of the fourth year' means 3 full years have passed. Apply compound growth for N = 3.",
        traditional: {
            intro: "Apply the compound interest formula directly for 3 years.",
            steps: [
                { num: "Step 1", desc: "Formula: P_new = P_original × (1 + R/100)^N." },
                { num: "Step 2", desc: "Substitute P = 1,00,000, R = 10, N = 3." },
                { num: "Step 3", desc: "P_new = 1,00,000 × (1.1)³ = 1,00,000 × 1.331 = 1,33,100." }
            ],
            highlight: "Population = 1,33,100. (Option a)"
        },
        shortcut: {
            intro: "Apply the successive multiplication rule mentally.",
            steps: [
                { num: "Logic", desc: "A 10% increase repeated 3 times results in a net increase of 33.1% (since 1.1 × 1.1 × 1.1 = 1.331)." },
                { num: "Multiply", desc: "1,00,000 × 1.331 = 1,33,100." }
            ],
            highlight: "Direct: 1.331 × 100,000 = 133,100."
        }
    },
    {
        id: "sum38",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q38",
        title: "Election Voter Turnout Ratios",
        question: "4/5 th of the voters in Kanpur promised to vote for Modi and the rest promised to vote for Advani. Of these voters, 10% of the voters who had promised to vote for Modi, did not vote on the election day, while 20% of the voters who had promised to vote for Advani did not vote on the election day. What is the total number of votes polled if Modi got 2,16,000 votes?",
        hint: "Assume a base of 100 voters, split them into Modi and Advani supporters, apply the absentee rates, and scale the final values.",
        traditional: {
            intro: "Formulate equations based on total voter list V.",
            steps: [
                { num: "Step 1", desc: "Let total voters who promised be V. Modi supporters = 0.8V, Advani = 0.2V." },
                { num: "Step 2", desc: "Modi voters who voted = 0.8V × 0.90 = 0.72V." },
                { num: "Step 3", desc: "Advani voters who voted = 0.2V × 0.80 = 0.16V." },
                { num: "Step 4", desc: "Given Modi got 2,16,000 votes: 0.72V = 2,16,000 => V = 3,00,000." },
                { num: "Step 5", desc: "Total votes polled = Modi's votes + Advani's votes = 0.72V + 0.16V = 0.88V.<br>Total polled = 0.88 × 3,00,000 = 2,64,000." }
            ],
            highlight: "Total votes polled = 2,64,000. (Option c)"
        },
        shortcut: {
            intro: "Using a base of 100 makes the scaling factor easy to find.",
            steps: [
                { num: "Voter Split", desc: "Assume 100 voters: 80 for Modi, 20 for Advani." },
                { num: "Voted Count", desc: "Modi voters who voted = 80 × 0.9 = 72.<br>Advani voters who voted = 20 × 0.8 = 16." },
                { num: "Scale Factor", desc: "Modi's votes: 72 units = 2,16,000 => 1 unit = 3,000." },
                { num: "Total Polled", desc: "Total polled = 72 + 16 = 88 units.<br>Total polled = 88 × 3,000 = 2,64,000." }
            ],
            highlight: "Quick mental flow: 88 units × 3000 = 2,64,000."
        }
    },
    {
        id: "sum39",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q39",
        title: "Dozen Unit Pricing",
        question: "A cow and a calf cost ₹2000 and ₹1400, respectively. If the price of the cow and that of the calf is increased by 20% and 30%, respectively then the price of 1 dozen cows and 2 dozens calves is:",
        hint: "First find the new price of a single cow and a single calf after their respective increases, then multiply by 12 (1 dozen) and 24 (2 dozens).",
        traditional: {
            intro: "Calculate individual price increases, then sum the total cost for 12 cows and 24 calves.",
            steps: [
                { num: "Step 1", desc: "New Cow price = 2000 × 1.20 = ₹2,400." },
                { num: "Step 2", desc: "New Calf price = 1400 × 1.30 = ₹1,820." },
                { num: "Step 3", desc: "Total Cost = (12 × 2400) + (24 × 1820) = 28,800 + 43,680 = ₹72,480." }
            ],
            highlight: "Total Cost = ₹72,480. (Option a)"
        },
        shortcut: {
            intro: "Simplify calculations by grouping quantities together.",
            steps: [
                { num: "Unit Cost", desc: "1 cow + 2 calves = ₹2,400 + 2 × (₹1,820) = 2,400 + 3,640 = ₹6,040." },
                { num: "Multiply by Dozen", desc: "Since we need 1 dozen (12) cows and 2 dozen (24) calves, we simply multiply our unit cost by 12:<br>Total = 12 × 6,040 = ₹72,480." }
            ],
            highlight: "Quick math: 12 × 6040 = 72,480."
        }
    },
    {
        id: "sum40",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q40",
        title: "Ratio Split Dividend Income",
        question: "Shyam invests ₹40,000 in some shares in the ratio 1 : 4 : 5 which pay dividends of 10%, 15% and 25% (on his investment) for that year respectively. Find his dividend income.",
        hint: "Split the ₹40,000 investment into three parts based on the ratio 1:4:5, then calculate the respective dividends.",
        traditional: {
            intro: "Determine the value of each share and calculate the individual dividend yields.",
            steps: [
                { num: "Step 1", desc: "Total ratio parts = 1 + 4 + 5 = 10 parts." },
                { num: "Step 2", desc: "Value of 1 part = 40,000 / 10 = ₹4,000." },
                { num: "Step 3", desc: "Investment split: Share A = ₹4,000; Share B = ₹16,000; Share C = ₹20,000." },
                { num: "Step 4", desc: "Dividends:<br>- A: 10% of 4,000 = ₹400<br>- B: 15% of 16,000 = ₹2,400<br>- C: 25% of 20,000 = ₹5,000" },
                { num: "Step 5", desc: "Total Dividend = 400 + 2400 + 5000 = ₹7,800." }
            ],
            highlight: "Total Dividend = ₹7,800. (Option d)"
        },
        shortcut: {
            intro: "Use the weighted average percentage to find the dividend in a single calculation.",
            steps: [
                { num: "Weighted %", desc: "Weighted Dividend % = [ (1 × 10) + (4 × 15) + (5 × 25) ] / 10<br>Weighted % = [ 10 + 60 + 125 ] / 10 = 195 / 10 = 19.5%." },
                { num: "Calculate", desc: "Total Dividend = 19.5% of ₹40,000 = 0.195 × 40,000 = ₹7,800." }
            ],
            highlight: "Direct: 19.5% of 40,000 = 7,800."
        }
    },
    {
        id: "sum41",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q41",
        title: "Rate Change Capacity",
        question: "During winters, an athlete can run 'x' metres on one bottle of Glucose. But in the summer, he can only run 0.5 x metres on one bottle of Glucose. How many bottles of Glucose are required to run 400 metres during summer?",
        hint: "Divide the total target distance by the runner's summer capacity per bottle.",
        traditional: {
            intro: "Set up the rate equation for the summer scenario.",
            steps: [
                { num: "Step 1", desc: "Summer running capacity per bottle = 0.5x metres." },
                { num: "Step 2", desc: "Total distance to cover = 400 metres." },
                { num: "Step 3", desc: "Bottles needed = Total distance / Capacity per bottle = 400 / 0.5x = 800 / x." }
            ],
            highlight: "Bottles required = 800/x. (Option a)"
        },
        shortcut: {
            intro: "Compare seasonal capacities to scale the number of bottles.",
            steps: [
                { num: "Ratio analysis", desc: "Summer capacity is exactly half of winter capacity (0.5x vs. x).<br>Therefore, the athlete needs twice as many bottles to cover any distance in summer." },
                { num: "Calculate", desc: "Winter bottles for 400m = 400/x.<br>Summer bottles = 2 × (400/x) = 800/x." }
            ],
            highlight: "Double the winter bottles: 2 × 400/x = 800/x."
        }
    },
    {
        id: "sum42",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q42",
        title: "Multi-Variable Mark Comparisons",
        question: "In an examination, Madan obtained 20% more than Sahir but 40% less than Ravi. If the marks obtained by Sahir is 80, find the percentage marks obtained by Ravi if the full marks is 200.",
        hint: "Find Madan's marks from Sahir's. Then use Madan's marks to find Ravi's, and divide by the maximum marks (200).",
        traditional: {
            intro: "Calculate individual marks step-by-step.",
            steps: [
                { num: "Step 1", desc: "Sahir's marks = 80." },
                { num: "Step 2", desc: "Madan got 20% more than Sahir: Madan = 80 × 1.2 = 96." },
                { num: "Step 3", desc: "Madan got 40% less than Ravi: Madan = 0.6 × Ravi => 96 = 0.6 × Ravi." },
                { num: "Step 4", desc: "Ravi's marks = 96 / 0.6 = 160." },
                { num: "Step 5", desc: "Ravi's percentage = (160 / 200) × 100 = 80%." }
            ],
            highlight: "Ravi's percentage = 80%. (Option a)"
        },
        shortcut: {
            intro: "Write the relationships as fractions to find Ravi's score directly.",
            steps: [
                { num: "Fractional Links", desc: "Madan = 6/5 of Sahir. Madan = 3/5 of Ravi.<br>Therefore: (3/5) × Ravi = (6/5) × Sahir." },
                { num: "Solve Ravi", desc: "Ravi = 2 × Sahir = 2 × 80 = 160." },
                { num: "Find Percentage", desc: "160 out of 200 is exactly 8/10, which is 80%." }
            ],
            highlight: "Ravi = 2 × Sahir = 160. % = 160 / 200 = 80%."
        }
    },
    {
        id: "sum43",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q43",
        title: "Net Return on Investment (ROI)",
        question: "A man buys a truck for ₹2,50,000. The annual repair cost comes to 2.0% of the price of purchase. Besides, he has to pay an annual tax of ₹2000. At what monthly rent must he rent out the truck to get a return of 15% on his net investment of the first year?",
        hint: "Net investment is the sum of purchase price, repairs, and taxes. Find 15% of this total to get the required annual rent, then divide by 12.",
        traditional: {
            intro: "The standard textbook solution calculates the total investment and annual rental yield.",
            steps: [
                { num: "Step 1", desc: "Purchase price = ₹2,50,000.<br>Repair cost = 2% of 2,50,000 = ₹5,000.<br>Annual tax = ₹2,000." },
                { num: "Step 2", desc: "Net Investment = 2,50,000 + 5,000 + 2,000 = ₹2,57,000." },
                { num: "Step 3", desc: "Required return = 15% of 2,57,000 = 0.15 × 2,57,000 = ₹38,550 annually." },
                { num: "Step 4", desc: "Required monthly rent = 38,550 / 12 = ₹3,212.50." }
            ],
            highlight: "Monthly Rent = ₹3,212.50. (Option d)"
        },
        shortcut: {
            intro: "Work with simplified arithmetic to divide by 12 efficiently.",
            steps: [
                { num: "Net Investment", desc: "Investment = ₹2,57,000." },
                { num: "Rent Calculation", desc: "Monthly Rent = (15% of 2,57,000) / 12 = (15/12)% of 2,57,000 = 1.25% of 2,57,000." },
                { num: "Solve", desc: "1.25% is exactly 1/80.<br>Rent = 2,57,000 / 80 = 25,700 / 8 = ₹3,212.50." }
            ],
            highlight: "Quick division: 25,700 / 8 = ₹3,212.50."
        }
    },
    {
        id: "sum44",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q44",
        title: "Row Distribution Ratios",
        question: "On a morning prayer all the students of a school stand in three rows, the first row has 20% more students than the second row and the third row contains 20% less students than the second row. If the total number of students in all the rows is 300, then find the number of students in the first row.",
        hint: "Express the student counts in the first and third rows in terms of the second row, then set up a simple sum equation.",
        traditional: {
            intro: "The standard algebraic solution uses variables for each row.",
            steps: [
                { num: "Step 1", desc: "Let the number of students in Row 2 be X." },
                { num: "Step 2", desc: "Row 1 = 1.2X (20% more than Row 2).<br>Row 3 = 0.8X (20% less than Row 2)." },
                { num: "Step 3", desc: "Total students = Row 1 + Row 2 + Row 3 = 1.2X + X + 0.8X = 3X." },
                { num: "Step 4", desc: "Equate to 300: 3X = 300 => X = 100." },
                { num: "Step 5", desc: "Row 1 students = 1.2 × 100 = 120." }
            ],
            highlight: "Row 1 Students = 120. (Option a)"
        },
        shortcut: {
            intro: "Use symmetric ratio parts to solve this mentally.",
            steps: [
                { num: "Ratio setup", desc: "If Row 2 = 100%, then Row 1 = 120% and Row 3 = 80%." },
                { num: "Symmetry", desc: "Notice that the +20% and -20% changes cancel each other out around the center row.<br>Therefore, the average number of students per row is exactly equal to the number of students in the second row." },
                { num: "Solve", desc: "Row 2 = 300 / 3 = 100 students.<br>Row 1 = 1.20 × 100 = 120 students." }
            ],
            highlight: "Direct: Row 2 = 100 => Row 1 = 120."
        }
    },
    {
        id: "sum45",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q45",
        title: "Sports Win Ratio Timeline",
        question: "Last year, the Australian Football team played 80 football matches out of which they managed to win only 20%. This year, so far it has played some matches, which has made it mandatory for it to win 80% of the remaining matches to maintain its existing winning percentage. Find the number of matches played by Australia so far this year.",
        hint: "Let the matches played so far this year be x. Analyze the number of equations and variables available.",
        traditional: {
            intro: "Identify the variables and check if they can be uniquely determined.",
            steps: [
                { num: "Step 1", desc: "Last year matches = 80. Wins = 20% of 80 = 16 wins." },
                { num: "Step 2", desc: "Let matches played so far this year be <em>x</em>, with <em>w</em> wins.<br>Let remaining matches this year be <em>r</em>." },
                { num: "Step 3", desc: "To maintain the 20% overall win rate:<br>Total Wins = 0.20 × (Total Matches)<br>16 + <em>w</em> + 0.8<em>r</em> = 0.20 × (80 + <em>x</em> + <em>r</em>)" },
                { num: "Step 4", desc: "Simplify: 16 + <em>w</em> + 0.8<em>r</em> = 16 + 0.2<em>x</em> + 0.2<em>r</em> => <em>w</em> + 0.6<em>r</em> = 0.2<em>x</em>." },
                { num: "Step 5", desc: "We have one equation with three unknowns (<em>w</em>, <em>r</em>, <em>x</em>). This cannot be solved." }
            ],
            highlight: "Insufficient Information. (Option d)"
        },
        shortcut: {
            intro: "Use logical reasoning about degrees of freedom to identify insufficient information immediately.",
            steps: [
                { num: "Variables Check", desc: "We are not given:<br>- How many matches the team has won so far this year.<br>- The total number of matches scheduled for this year." },
                { num: "Conclusion", desc: "Since the number of matches played so far (x) depends on these unknown parameters, the problem lacks sufficient constraints to yield a single numerical solution." }
            ],
            highlight: "Answer is 'Insufficient Information'."
        }
    },
    {
        id: "sum46",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q46",
        title: "Venn Diagram Double Pass",
        question: "In an examination, 80% students passed in Physics, 70% in Chemistry while 15% failed in both the subjects. If 325 students passed in both the subjects, find the total number of students who appeared in the examination.",
        hint: "Use set theory. If 15% failed in both, then 85% must have passed in at least one of the two subjects.",
        traditional: {
            intro: "The standard textbook solution uses Venn diagrams and the union formula.",
            steps: [
                { num: "Step 1", desc: "Total students = 100%. Failed in both = 15%." },
                { num: "Step 2", desc: "Passed in at least one subject (Physics ∪ Chemistry) = 100% - 15% = 85%." },
                { num: "Step 3", desc: "Union formula: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).<br>85% = 80% + 70% - P(Physics ∩ Chemistry)." },
                { num: "Step 4", desc: "P(Physics ∩ Chemistry) = 150% - 85% = 65%." },
                { num: "Step 5", desc: "Given 65% of students = 325:<br>Total students = 325 / 0.65 = 500." }
            ],
            highlight: "Total Students = 500. (Option a)"
        },
        shortcut: {
            intro: "Apply a quick mental sum to find the overlap percentage.",
            steps: [
                { num: "Percentage Check", desc: "Sum of individual passes = 80% + 70% = 150%.<br>Since only 85% of students passed anything, the excess is the overlap." },
                { num: "Overlap %", desc: "Overlap (passed both) = 150% - 85% = 65%." },
                { num: "Scale up", desc: "65% of Total = 325.<br>Observe that 325 is exactly 5 times 65.<br>So, 100% = 500." }
            ],
            highlight: "65% = 325 => 1% = 5 => 100% = 500."
        }
    },
    {
        id: "sum47",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q47",
        title: "Compound Spend with Fixed Base",
        question: "Ravana spends 30% of his salary on house rent, 30% of the rest he spends on his children's education and 24% of the total salary, he spends on clothes. After his expenditure, he is left with ₹2,500. What is Ravana's salary?",
        hint: "Be careful! Some percentages are of the 'rest' (remaining balance), while others are of the 'total salary'. Align all segments to the total salary.",
        traditional: {
            intro: "Set up a step-by-step algebraic breakdown of the expenditures based on total salary S.",
            steps: [
                { num: "Step 1", desc: "Let total salary be S." },
                { num: "Step 2", desc: "House rent = 30% of S = 0.3S.<br>Remaining balance (Rest) = 0.7S." },
                { num: "Step 3", desc: "Education = 30% of Rest = 30% of 0.7S = 0.21S." },
                { num: "Step 4", desc: "Clothes = 24% of total salary = 0.24S." },
                { num: "Step 5", desc: "Total Expenditure = 0.3S (rent) + 0.21S (education) + 0.24S (clothes) = 0.75S." },
                { num: "Step 6", desc: "Remaining Savings = S - 0.75S = 0.25S.<br>0.25S = 2,500 => S = 2,500 / 0.25 = ₹10,000." }
            ],
            highlight: "Salary = ₹10,000. (Option c)"
        },
        shortcut: {
            intro: "Express everything in percentage units of the total salary to solve quickly.",
            steps: [
                { num: "Percentage Breakdown", desc: "- Rent: 30%<br>- Education: 30% of 70% = 21%<br>- Clothes: 24% (of total)" },
                { num: "Total spent", desc: "Total spent = 30% + 21% + 24% = 75%." },
                { num: "Savings", desc: "Savings = 100% - 75% = 25% of total salary.<br>If 25% = ₹2,500, then 100% (total salary) = ₹10,000." }
            ],
            highlight: "Mental Math: 25% = 2,500 => 100% = 10,000."
        }
    },
    {
        id: "sum48",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q48",
        title: "Revenue Balance Price Drop",
        question: "The entrance ticket at the Minerva theatre in Mumbai is worth ₹250. When the price of the ticket was lowered, the sale of tickets increased by 50% while the collections recorded a decrease of 17.5%. Find the deduction in the ticket price.",
        hint: "Remember: Price × Quantity = Collections (Revenue). Use multiplying factors to find the new price ratio.",
        traditional: {
            intro: "The standard textbook solution sets up equations for price and sales volume.",
            steps: [
                { num: "Step 1", desc: "Let original price be P (₹250) and original ticket sales volume be Q." },
                { num: "Step 2", desc: "New sales volume = 1.5Q (50% increase).<br>New collections = 0.825 × (P × Q) (17.5% decrease)." },
                { num: "Step 3", desc: "Let new price be P'. Since New Price × New Volume = New Collections:<br>P' × 1.5Q = 0.825 × P × Q => P' = (0.825 / 1.5) × P." },
                { num: "Step 4", desc: "Calculate: P' = 0.55 × P. The new price is 55% of the original." },
                { num: "Step 5", desc: "Deduction % = 100% - 55% = 45% decrease.<br>Deduction amount = 45% of 250 = ₹112.50." }
            ],
            highlight: "Deduction = ₹112.50. (Option b)"
        },
        shortcut: {
            intro: "Use fractions to simplify the multiplication factor division.",
            steps: [
                { num: "Fractions", desc: "Sales factor = 3/2 (1.5). Revenue factor = 825/1000 = 33/40." },
                { num: "Price factor", desc: "Price factor = Revenue factor / Sales factor = (33/40) / (3/2) = (33/40) × (2/3) = 11/20." },
                { num: "Percentage drop", desc: "A price factor of 11/20 means the price dropped by 9/20, which is 45%." },
                { num: "Calculate", desc: "Deduction = 45% of 250 = (45 × 2.5) = ₹112.50." }
            ],
            highlight: "Mental flow: 33/40 × 2/3 = 11/20 (55% price). Drop = 45% of 250 = 112.50."
        }
    },
    {
        id: "sum49",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q49",
        title: "Algebraic Savings Expression",
        question: "Ravi's monthly salary is A rupees. Of this, he spends X rupees. The next month he has an increase of C% in his salary and D% in his expenditure. What is the new amount saved?",
        hint: "Savings is always Salary minus Expenditure. Express both terms after applying their respective percentage increases.",
        traditional: {
            intro: "Write the expressions for new salary and new expenditure step-by-step.",
            steps: [
                { num: "Step 1", desc: "Initial Salary = A. Monthly savings = A - X." },
                { num: "Step 2", desc: "Salary increases by C%: New Salary = A × (1 + C/100)." },
                { num: "Step 3", desc: "Expenditure increases by D%: New Expenditure = X × (1 + D/100)." },
                { num: "Step 4", desc: "New Savings = New Salary - New Expenditure = A(1 + C/100) - X(1 + D/100)." }
            ],
            highlight: "New Savings = A(1 + C/100) - X(1 + D/100). (Option a)"
        },
        shortcut: {
            intro: "Identify the formula direct from definition.",
            steps: [
                { num: "Logic", desc: "Since percentage increases act as multipliers (e.g. 1 + rate/100), the new salary is A(1 + C/100) and the new expenditure is X(1 + D/100). The difference between them is the savings." }
            ],
            highlight: "Correct expression: A(1 + C/100) - X(1 + D/100)."
        }
    },
    {
        id: "sum50",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q50",
        title: "Market Share Redistribution",
        question: "In the year 2000, the luxury car industry had two car manufacturers—Maruti and Honda with market shares of 25% and 75%, respectively. In 2001, the overall market for the product increased by 50% and a new player BMW also entered the market and captured 15% of the market share. If we know that the market share of Maruti increased to 50% in the second year, the share of Honda in that year was:",
        hint: "Assume the initial market size is 100 units. Grow it by 50% to find the new market size (150 units), then distribute the new sales volumes.",
        traditional: {
            intro: "The standard approach translates shares into absolute unit sales.",
            steps: [
                { num: "Step 1", desc: "Year 2000: Market size = 100 units. Maruti = 25 units, Honda = 75 units." },
                { num: "Step 2", desc: "Year 2001: Market size grows by 50% to 150 units." },
                { num: "Step 3", desc: "BMW captures 15% of 150 = 22.5 units." },
                { num: "Step 4", desc: "Maruti's share becomes 50% of 150 = 75 units." },
                { num: "Step 5", desc: "Honda's unit sales = Total - (Maruti + BMW) = 150 - (75 + 22.5) = 52.5 units." },
                { num: "Step 6", desc: "Honda's new market share = (52.5 / 150) × 100 = 35%." }
            ],
            highlight: "Honda's share = 35%. (Option d)"
        },
        shortcut: {
            intro: "Perform the math using percentage share calculations directly.",
            steps: [
                { num: "Year 2001 Split", desc: "New market share total = 100%." },
                { num: "BMW & Maruti", desc: "BMW share = 15%. Maruti share = 50%.<br>Combined share = 65%." },
                { num: "Honda share", desc: "Remaining share belongs to Honda: 100% - 65% = 35%.<br>Observe that we don't even need to calculate the 50% market growth because market shares must always sum to 100% regardless of total volume!" }
            ],
            highlight: "Elegant logic: Maruti (50%) + BMW (15%) + Honda (H%) = 100% => Honda = 35%. Done in 2 seconds!"
        }
    },
    {
        id: "sum51",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q51",
        title: "Score Share Equation",
        question: "Two students appeared at an examination. One of them secured 6 marks more than the other and his marks was 52% of the sum of their marks. Find the marks obtained by the better student.",
        hint: "Express the scores as x and x - 6. Set up the equation using 52% of their sum.",
        traditional: {
            intro: "The standard algebraic solution sets up equations for both marks.",
            steps: [
                { num: "Step 1", desc: "Let the higher mark be x. The lower mark is x - 6." },
                { num: "Step 2", desc: "Sum of marks = x + x - 6 = 2x - 6." },
                { num: "Step 3", desc: "Equation: x = 0.52 × (2x - 6) = 1.04x - 3.12." },
                { num: "Step 4", desc: "Solve: 0.04x = 3.12 => x = 3.12 / 0.04 = 78." }
            ],
            highlight: "Better student's marks = 78. (Option b)"
        },
        shortcut: {
            intro: "Solve this using percentage difference ratios.",
            steps: [
                { num: "Percentage Gap", desc: "One student got 52% of the sum. Therefore, the other must have got 48% (100% - 52%) of the sum." },
                { num: "Ratio of marks", desc: "Ratio of their marks = 52 : 48 = 13 : 12." },
                { num: "Find Values", desc: "The difference in ratio parts is 1 part, which corresponds to the 6 marks difference.<br>So, 1 part = 6 marks.<br>Better student (13 parts) = 13 × 6 = 78 marks." }
            ],
            highlight: "Ratio: 13:12. Diff = 1 part = 6 => 13 parts = 78. Solved mentally!"
        }
    },
    {
        id: "sum52",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q52",
        title: "Double Variable Percentage Equality",
        question: "Two numbers A and B are such that the sum of 6% of A and 4% of B is two-third of the sum of 7% of A and 8% of B. Find the ratio of A:B.",
        hint: "Translate the verbal equation directly into mathematics, multiply out the denominator, and group terms with A and B.",
        traditional: {
            intro: "Write the equation and simplify step-by-step.",
            steps: [
                { num: "Step 1", desc: "Equation: 0.06A + 0.04B = (2/3) × (0.07A + 0.08B)." },
                { num: "Step 2", desc: "Multiply by 3: 0.18A + 0.12B = 0.14A + 0.16B." },
                { num: "Step 3", desc: "Subtract 0.14A from both sides: 0.04A + 0.12B = 0.16B." },
                { num: "Step 4", desc: "Subtract 0.12B: 0.04A = 0.04B => A = B." },
                { num: "Step 5", desc: "Therefore, the ratio A:B = 1:1." }
            ],
            highlight: "Ratio A:B = 1:1. (Option a)"
        },
        shortcut: {
            intro: "Ignore percentage signs and decimals by working with whole numbers.",
            steps: [
                { num: "Setup", desc: "6A + 4B = (2/3) × (7A + 8B)." },
                { num: "Multiply", desc: "18A + 12B = 14A + 16B." },
                { num: "Group", desc: "4A = 4B => A : B = 1 : 1." }
            ],
            highlight: "Direct: 18A + 12B = 14A + 16B => 4A = 4B => A:B = 1:1."
        }
    },
    {
        id: "sum53",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q53",
        title: "Rebate and Sales Tax Sequence",
        question: "Rajeev buys goods worth ₹6000. He gets a rebate of 10% on it. After getting the rebate, he pays sales tax @ 20%. Find the amount he will have to pay for the goods.",
        hint: "Apply the 10% rebate (reduction) first to find the taxable price, then add 20% sales tax (increase).",
        traditional: {
            intro: "Calculate the discounted value, find the tax amount, and add them.",
            steps: [
                { num: "Step 1", desc: "Rebate amount = 10% of 6,000 = ₹600." },
                { num: "Step 2", desc: "Discounted Price = 6,000 - 600 = ₹5,400." },
                { num: "Step 3", desc: "Sales Tax = 20% of 5,400 = ₹1,080." },
                { num: "Step 4", desc: "Final Price = 5,400 + 1,080 = ₹6,480." }
            ],
            highlight: "Amount paid = ₹6,480."
        },
        shortcut: {
            intro: "Solve this in a single line using multipliers.",
            steps: [
                { num: "Multipliers", desc: "- 10% rebate means multiplying by 0.9.<br>- 20% sales tax means multiplying by 1.2." },
                { num: "Calculate", desc: "Price = 6,000 × 0.9 × 1.2 = 6,000 × 1.08 = ₹6,480." }
            ],
            highlight: "Mental Math: 6,000 × 1.08 = 60 × 108 = ₹6,480."
        }
    },
    {
        id: "sum54",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q54",
        title: "Successive Defective Stock Splits",
        question: "Out of the total trousers manufactured at Abhijit Textiles, 18% are defective. 20% of the rest are sold in the domestic market. If the remaining 8528 trousers are exported, find the number of trousers manufactured by the company.",
        hint: "Use successive multipliers for the remaining goods: 18% defective leaves 82% good. 20% domestic leaves 80% exported.",
        traditional: {
            intro: "The standard textbook solution uses variables to trace stock distribution.",
            steps: [
                { num: "Step 1", desc: "Let total trousers manufactured be T." },
                { num: "Step 2", desc: "18% are defective. Non-defective = 82% of T = 0.82T." },
                { num: "Step 3", desc: "20% of the non-defective trousers are sold domestically. Exported = 80% of 0.82T = 0.656T." },
                { num: "Step 4", desc: "Equate to 8528: 0.656T = 8528 => T = 8528 / 0.656 = 13,000." }
            ],
            highlight: "Total Trousers = 13,000."
        },
        shortcut: {
            intro: "Express multipliers as clean fractions to perform easy divisions.",
            steps: [
                { num: "Fractions", desc: "82% non-defective = 82/100. 80% exported = 4/5." },
                { num: "Equation", desc: "Exported = T × (82/100) × (4/5) = 8528.<br>T × (328/500) = 8528." },
                { num: "Solve", desc: "Observe that 8528 divided by 328: 8528 / 328 = 26.<br>T = 26 × 500 = 13,000." }
            ],
            highlight: "Quick division: 8528 / 328 = 26 => 26 × 500 = 13,000."
        }
    },
    {
        id: "sum55",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q55",
        title: "Weighted Non-Admission Rate",
        question: "The number of girls appearing for the medical entrance exams is three times the number of boys. If, 20% of the girls and 30% of the boys get admission, the percentage of candidates, who do not get admission is:",
        hint: "Assume the number of boys is 100, which makes the number of girls 300. Find the total candidates and total admitted.",
        traditional: {
            intro: "Set up the variables for boys and girls and calculate non-admitted candidates.",
            steps: [
                { num: "Step 1", desc: "Let boys be B and girls be G. G = 3B. Total candidates = 4B." },
                { num: "Step 2", desc: "Girls admitted = 20% of G = 0.2 × 3B = 0.6B." },
                { num: "Step 3", desc: "Boys admitted = 30% of B = 0.3B." },
                { num: "Step 4", desc: "Total admitted = 0.6B + 0.3B = 0.9B." },
                { num: "Step 5", desc: "Total not admitted = 4B - 0.9B = 3.1B." },
                { num: "Step 6", desc: "Percentage not admitted = (3.1B / 4B) × 100 = 77.5%." }
            ],
            highlight: "Percentage not admitted = 77.5%."
        },
        shortcut: {
            intro: "Solve this using assumed numbers to make calculations quick.",
            steps: [
                { num: "Assume", desc: "Boys = 100 => Girls = 300. Total = 400." },
                { num: "Admitted", desc: "Boys admitted = 30.<br>Girls admitted = 60.<br>Total admitted = 90." },
                { num: "Not Admitted", desc: "Not admitted = 400 - 90 = 310.<br>Percentage not admitted = 310 / 400 = 310 / 4 = 77.5%." }
            ],
            highlight: "Mental Math: 310 / 4 = 77.5%."
        }
    },
    {
        id: "sum56",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q56",
        title: "FD and Savings Bank Distribution",
        question: "Amarjeet invests 40% of his monthly savings in fixed deposits. 20% of the rest he invests in stocks and the rest goes into his savings bank account held in SBI, HDFC Bank and Citibank. If the total amount deposited by him in the banking system (including fixed deposits and savings account) is ₹70,400, then Amarjeet's monthly savings are:",
        hint: "Note that 'the banking system' includes both fixed deposits and savings bank accounts, but NOT stock market investments.",
        traditional: {
            intro: "Formulate the percentage allocations based on total savings S.",
            steps: [
                { num: "Step 1", desc: "Let total savings be S." },
                { num: "Step 2", desc: "Fixed Deposits (FD) = 40% of S = 0.4S.<br>Remaining balance (Rest) = 60% of S = 0.6S." },
                { num: "Step 3", desc: "Stocks = 20% of Rest = 20% of 0.6S = 0.12S.<br>Savings accounts (Rest of Rest) = 80% of 0.6S = 0.48S." },
                { num: "Step 4", desc: "Banking system deposits = FD + Savings accounts = 0.4S + 0.48S = 0.88S." },
                { num: "Step 5", desc: "Equate to ₹70,400: 0.88S = 70,400 => S = 70,400 / 0.88 = ₹80,000." }
            ],
            highlight: "Total Savings = ₹80,000."
        },
        shortcut: {
            intro: "Recognize that stocks are the only non-banking segment to simplify calculations.",
            steps: [
                { num: "Stocks share", desc: "Stocks investment = 20% of the remaining 60% = 12% of total savings." },
                { num: "Banking share", desc: "Since only stocks lie outside the banking system, the total banking deposits must be: 100% - 12% = 88%." },
                { num: "Solve", desc: "88% = 70,400.<br>Observe that 704 / 88 = 8.<br>So 100% = ₹80,000." }
            ],
            highlight: "Mental Math: 88% = 70,400 => 1% = 800 => 100% = 80,000."
        }
    },
    {
        id: "sum57",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q57",
        title: "Succeeding Salary Hike and Cut",
        question: "I recently got a promotion accompanied by 23% hike in salary but due to recession my company reduced my salary by 32%. What was the net change in my salary?",
        hint: "Apply the successive percentage change formula: Net Change = x + y + (xy / 100), where x is +23 and y is -32.",
        traditional: {
            intro: "The standard textbook solution multiplies the successive rates.",
            steps: [
                { num: "Step 1", desc: "Let initial salary be 100." },
                { num: "Step 2", desc: "After 23% hike: Salary = 123." },
                { num: "Step 3", desc: "After 32% cut: New Salary = 123 × (1 - 0.32) = 123 × 0.68." },
                { num: "Step 4", desc: "Multiply: 123 × 0.68 = 83.64." },
                { num: "Step 5", desc: "Net change = 100 - 83.64 = 16.36% decrease (or -16.36%)." }
            ],
            highlight: "Net change = -16.36%."
        },
        shortcut: {
            intro: "The successive percentage formula makes the calculation much faster.",
            steps: [
                { num: "Formula", desc: "Net % = x + y + (xy / 100)." },
                { num: "Substitution", desc: "Net % = 23 - 32 + (23 × (-32)) / 100." },
                { num: "Calculate", desc: "Net % = -9 - (736 / 100) = -9 - 7.36 = -16.36%." }
            ],
            highlight: "Direct formula: 23 - 32 - 7.36 = -16.36%."
        }
    },
    {
        id: "sum58",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q58",
        title: "Two-Digit Reversal Typo Analysis",
        question: "A number when reversed becomes 45% greater than the original. By how much percentage is the units place digit lesser than the tens' place digit?",
        hint: "Note that there are two common interpretations due to a print typo in some textbook editions. We will solve both: the percentage interpretation and the numerical increase interpretation.",
        traditional: {
            intro: "The standard algebraic setup for a two-digit number 10x + y, where x is tens and y is units.",
            steps: [
                { num: "Step 1", desc: "Let original number be 10x + y. Reversed number = 10y + x." },
                { num: "Step 2", desc: "Equation: 10y + x = 1.45 × (10x + y) => 10y + x = 14.5x + 1.45y." },
                { num: "Step 3", desc: "Group terms: 8.55y = 13.5x => y/x = 13.5 / 8.55 = 30 / 19." },
                { num: "Step 4", desc: "Since digits cannot be 30 and 19, the percentage interpretation indicates a typo. The percentage difference if comparing the digits is: (30 - 19) / 19 = 57.89% (units digit greater) or (30 - 19) / 30 = 36.67% (tens digit lesser)." },
                { num: "Step 5", desc: "Alternative Typo: If the reversed number is 45 (not 45%) greater: (10y + x) - (10x + y) = 45 => 9(y - x) = 45 => y - x = 5. The units digit is 5 greater than the tens digit." }
            ],
            highlight: "Ratio y/x = 30/19 (approx. 57.89% units greater) OR y - x = 5."
        },
        shortcut: {
            intro: "Understand how to identify and handle textbook typos quickly in the exam.",
            steps: [
                { num: "Interpretation A", desc: "If we solve 10y + x = 1.45(10x + y), we get y : x = 30 : 19.<br>Percentage difference of units digit (y) relative to tens digit (x) is (11/19) × 100 = 57.89%.<br>Percentage difference of tens digit (x) relative to units digit (y) is (11/30) × 100 = 36.67%." },
                { num: "Interpretation B", desc: "If the question meant '45 greater':<br>Difference between a reversed two-digit number and its original is always 9 × (difference of digits).<br>9 × (y - x) = 45 => y - x = 5.<br>Examples: 16 -> 61, 27 -> 72, 38 -> 83, 49 -> 94." }
            ],
            highlight: "Review options to see which interpretation matches the print key: 36.67%, 57.89% or digit difference of 5."
        }
    },
    {
        id: "sum59",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Easy)",
        year: "Arun Sharma Q59",
        title: "Batsman Run Split",
        question: "A batsman scored 100 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?",
        hint: "Subtract the runs scored through boundaries (fours) and sixes from the total score of 100.",
        traditional: {
            intro: "Sum the boundary runs and calculate the remainder.",
            steps: [
                { num: "Step 1", desc: "Runs from boundaries (4s) = 3 × 4 = 12 runs." },
                { num: "Step 2", desc: "Runs from sixes (6s) = 8 × 6 = 48 runs." },
                { num: "Step 3", desc: "Total boundary runs = 12 + 48 = 60 runs." },
                { num: "Step 4", desc: "Runs from running between wickets = 100 - 60 = 40 runs." },
                { num: "Step 5", desc: "Percentage = (40 / 100) × 100 = 40%." }
            ],
            highlight: "Running runs percentage = 40%."
        },
        shortcut: {
            intro: "Perform simple mental addition and subtraction.",
            steps: [
                { num: "Mental Math", desc: "Boundary runs = 12 + 48 = 60.<br>Running runs = 100 - 60 = 40.<br>Since the total runs are exactly 100, the percentage is directly 40%." }
            ],
            highlight: "Direct: 100 - (12 + 48) = 40%."
        }
    },
    {
        id: "sum60",
        blockId: "arithmetic",
        blockName: "Arithmetic (Percentages)",
        lod: "LOD 1 (Moderate)",
        year: "Arun Sharma Q60",
        title: "Election Margin Difference",
        question: "In an election contested by two parties, Party SJP secured 12% of the total votes more than Party SJD. If party SJD got 1,32,000 votes and there are no invalid votes, by how many votes did it lose the election?",
        hint: "SJP getting 12% of total votes *more* than SJD means the margin is 12% of total votes. Set up equations using SJD's votes.",
        traditional: {
            intro: "The standard textbook solution defines variables for total votes and solves the system.",
            steps: [
                { num: "Step 1", desc: "Let the total votes be V. SJD votes = 1,32,000." },
                { num: "Step 2", desc: "Since there are only two parties and no invalid votes, SJP votes = V - 1,32,000." },
                { num: "Step 3", desc: "We are given that SJP secured 12% more than SJD:<br>SJP - SJD = 0.12V => (V - 1,32,000) - 1,32,000 = 0.12V." },
                { num: "Step 4", desc: "Simplify: V - 2,64,000 = 0.12V => 0.88V = 2,64,000." },
                { num: "Step 5", desc: "Solve for V: V = 2,64,000 / 0.88 = 3,00,000." },
                { num: "Step 6", desc: "Losing margin = 12% of total votes = 0.12 × 3,00,000 = 36,000 votes." }
            ],
            highlight: "Losing margin = 36,000 votes."
        },
        shortcut: {
            intro: "Solve this using percentage split logic without variable equations.",
            steps: [
                { num: "Vote Split", desc: "SJP's votes + SJD's votes = 100% of total votes.<br>SJP's votes - SJD's votes = 12% of total votes." },
                { num: "Individual Share", desc: "Adding the two equations: 2 × SJP = 112% => SJP = 56% of total votes.<br>Subtracting: SJD = 44% of total votes." },
                { num: "Solve", desc: "Given SJD got 1,32,000 votes:<br>44% of Total = 1,32,000 => 1% of Total = 3,000.<br>Losing margin (12%) = 12 × 3,000 = 36,000 votes." }
            ],
            highlight: "Mental flow: SJD % = (100 - 12)/2 = 44%. 44% = 132k => 1% = 3k => margin 12% = 36k."
        }
    }
];
