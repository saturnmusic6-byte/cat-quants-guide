/* ==========================================================================
   PERCENTAGES-LOD2-DATA.JS - Arun Sharma Percentages LOD 2 Questions 1 to 47
   ========================================================================== */

const PERCENTAGES_LOD2_SUMS = [
    {
        "id": "sum2_1",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q1",
        "title": "Bales of Cotton Collection",
        "question": "At the end of the year 2022, Ambani, a textile merchant, bought 15 dozen bales of cotton, to begin his trade. Henceforth, each year, he added 'x' per cent bales of cotton to his collection at the start of the year and sold off 'y' per cent of the bales of cotton at the end of the year. He was surprised to notice that in 2032, at the end of the year, after making the sales, he still had 15 dozen bales of cotton. If both x and y are greater than zero, which of the following is true?",
        "hint": "Analyze the base values. Addition occurs at the start of the year (smaller base), whereas subtraction/sale occurs at the end of the year after the addition (larger base).",
        "traditional": {
            "intro": "Write the successive percentage change formula for 10 years and simplify.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let the initial quantity be $Q = 15$ dozen."
                },
                {
                    "num": "Step 2",
                    "desc": "Each year, the quantity becomes: $Q_{new} = Q \\times (1 + x/100) \\times (1 - y/100)$."
                },
                {
                    "num": "Step 3",
                    "desc": "After 10 years (from end of 2022 to end of 2032), the quantity is still 15 dozen:<br>$15 \\times [(1 + x/100)(1 - y/100)]^{10} = 15$."
                },
                {
                    "num": "Step 4",
                    "desc": "This implies: $(1 + x/100)(1 - y/100) = 1$<br>$1 + x/100 - y/100 - xy/10000 = 1$."
                },
                {
                    "num": "Step 5",
                    "desc": "Simplifying: $x - y = xy/100$.<br>Since both $x$ and $y$ are greater than zero, $xy/100 > 0$.<br>Therefore, $x - y > 0 \\Rightarrow x > y$."
                }
            ],
            "highlight": "x > y (Option c)"
        },
        "shortcut": {
            "intro": "Use the concept of base change and successive percentages.",
            "steps": [
                {
                    "num": "Base Rule",
                    "desc": "For a net change of 0% after a percentage increase followed by a decrease, the percentage decrease must be applied to a larger base.<br>Thus, the decrease rate ($y$) must be numerically smaller than the increase rate ($x$) to cancel it out."
                },
                {
                    "num": "Logic Check",
                    "desc": "Since $(1 + x/100)(1 - y/100) = 1$, we get $x - y = xy/100$. As $xy/100$ is positive, $x$ must be greater than $y$."
                }
            ],
            "highlight": "x > y because addition base is smaller than subtraction base."
        }
    },
    {
        "id": "sum2_2",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q2",
        "title": "B-School Placement Salaries",
        "question": "70% of the students placed through the placement activity of a top B-School, are men, and 75% of the men get placed at an annual package of above 25 lacs per annum. If a total of 75% of the students got placed at above 25 lacs per annum, then the fraction of women who were placed at 25 lacs or less per annum was?",
        "hint": "Assume the total number of placed students is 100 and split them into men and women, then calculate the placements above 25 LPA.",
        "traditional": {
            "intro": "Represent the student demographic percentages as counts and solve.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let total students placed = 100.<br>Men = 70, Women = 30."
                },
                {
                    "num": "Step 2",
                    "desc": "Men placed above 25 LPA = 75% of 70 = $0.75 \\times 70 = 52.5$."
                },
                {
                    "num": "Step 3",
                    "desc": "Total students placed above 25 LPA = 75% of 100 = 75."
                },
                {
                    "num": "Step 4",
                    "desc": "Women placed above 25 LPA = Total above 25 LPA - Men above 25 LPA = $75 - 52.5 = 22.5$."
                },
                {
                    "num": "Step 5",
                    "desc": "Women placed at 25 LPA or less = Total women - Women above 25 LPA = $30 - 22.5 = 7.5$."
                },
                {
                    "num": "Step 6",
                    "desc": "Fraction of women at 25 LPA or less = $7.5 / 30 = 1/4$."
                }
            ],
            "highlight": "1/4 (Option b)"
        },
        "shortcut": {
            "intro": "Perform quick ratio scaling in your head.",
            "steps": [
                {
                    "num": "Ratio Setup",
                    "desc": "Men = 7/10, Women = 3/10."
                },
                {
                    "num": "Equation",
                    "desc": "Let $w$ be the fraction of women earning above 25L. We have:<br>$(7/10) \\times 0.75 + (3/10) \\times w = 0.75$<br>Multiply by 10:<br>$5.25 + 3w = 7.5 \\Rightarrow 3w = 2.25 \\Rightarrow w = 0.75$ (or 3/4)."
                },
                {
                    "num": "Find Complement",
                    "desc": "If 3/4 of women earn above 25L, then the fraction of women earning 25L or less is $1 - 3/4 = 1/4$."
                }
            ],
            "highlight": "Fraction = 1 - 3/4 = 1/4."
        }
    },
    {
        "id": "sum2_3",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q3",
        "title": "Calico Republic Demographics",
        "question": "In the Republic of Calico, 30% of the citizens are below 15 years of age, 14.25% are aged between 15 to 24, 15% are aged between 25 to 34, 15.75% are aged between 35 to 44 and the rest are aged above 45 years. If the number of citizens below 35 is equal to 300 million, and the ratio of men to women in the 25 to 34 year age group is 0.98, then find the number of women in that age group (approximate to 1 decimal).",
        "hint": "Find the percentage of the population that is below 35, then use it to find the population of the 25-34 age bracket.",
        "traditional": {
            "intro": "Calculate total population, find the 25-34 age group share, and split it by gender ratio.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Sum the percentages below 35 years:<br>Below 15 (30%) + 15-24 (14.25%) + 25-34 (15%) = 59.25%."
                },
                {
                    "num": "Step 2",
                    "desc": "59.25% of total population = 300 million.<br>Total Population = $300 / 0.5925 \\approx 506.33$ million."
                },
                {
                    "num": "Step 3",
                    "desc": "Size of 25-34 age group = 15% of 506.33 million $\\approx 75.95$ million."
                },
                {
                    "num": "Step 4",
                    "desc": "Ratio of men to women in this group is 0.98. Let women = W, then men = 0.98W.<br>W + 0.98W = 1.98W = 75.95 million."
                },
                {
                    "num": "Step 5",
                    "desc": "W = $75.95 / 1.98 \\approx 38.36$ million (rounds to 38.3 or 38.4 million)."
                }
            ],
            "highlight": "None of these (Option d) - actual answer is ~38.3 million."
        },
        "shortcut": {
            "intro": "Use fractional approximations for quicker division.",
            "steps": [
                {
                    "num": "Approximation",
                    "desc": "59.25% is very close to 60% (or 3/5).<br>If 3/5 of Total = 300M, then Total $\\approx 500$M."
                },
                {
                    "num": "Group count",
                    "desc": "15% of 500M = 75M."
                },
                {
                    "num": "Gender split",
                    "desc": "Men to women ratio 0.98 is almost 1:1, so women are slightly more than half. Half of 75M is 37.5M. The actual value must be slightly higher, which is ~38.3M."
                }
            ],
            "highlight": "Since ~38.3M is not in the options (37.1M, 36.8M, 37.9M), select None of These."
        }
    },
    {
        "id": "sum2_4",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q4",
        "title": "Fresh vs Dry Grapes Weight",
        "question": "Fresh grapes contain 95% water by weight, while dry grapes contain only 20% water by weight. What is the weight of dry grapes available from 40 kgs of fresh grapes?",
        "hint": "Identify what remains constant. The absolute weight of the pulp (non-water component) does not change when grapes dry.",
        "traditional": {
            "intro": "Calculate the constant pulp weight in fresh grapes, then equate it to the pulp percentage in dry grapes.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "In fresh grapes, water = 95%, so pulp = 5%."
                },
                {
                    "num": "Step 2",
                    "desc": "Weight of pulp in 40 kg fresh grapes = 5% of 40 = $0.05 \\times 40 = 2$ kg."
                },
                {
                    "num": "Step 3",
                    "desc": "In dry grapes, water = 20%, so pulp = 80%."
                },
                {
                    "num": "Step 4",
                    "desc": "Let the weight of dry grapes be D. Pulp weight = 80% of D = 2 kg."
                },
                {
                    "num": "Step 5",
                    "desc": "D = $2 / 0.8 = 2.5$ kg."
                }
            ],
            "highlight": "2.5 kg (Option a)"
        },
        "shortcut": {
            "intro": "Use ratios of pulp percentages directly.",
            "steps": [
                {
                    "num": "Pulp Ratio",
                    "desc": "Pulp percentage increases from 5% to 80% (a 16-fold increase)."
                },
                {
                    "num": "Inverse Weight Ratio",
                    "desc": "Since the pulp concentration increases 16 times, the total weight must decrease by 16 times to keep pulp constant."
                },
                {
                    "num": "Solve",
                    "desc": "Weight of dry grapes = $40 \\text{ kg} / 16 = 2.5$ kg."
                }
            ],
            "highlight": "Mental calculation: 40 / 16 = 2.5 kg."
        }
    },
    {
        "id": "sum2_5",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q5",
        "title": "Tea and Coffee Production in Coorg",
        "question": "In Coorg, the production of tea is three times the production of coffee. If a percent more tea and b percent more coffee were produced, the aggregate amount would be 5c percent more. But if b percent more tea and a percent more coffee were produced, the aggregate amount produced would be 3c percent more. What is the ratio a : b?",
        "hint": "Set up equations based on the weighted averages of the percentage increases in tea and coffee.",
        "traditional": {
            "intro": "Represent tea as 3x and coffee as x, construct equations for both cases, and solve for the ratio a/b.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let coffee production = 1 unit, then tea production = 3 units. Total production = 4 units."
                },
                {
                    "num": "Step 2",
                    "desc": "Case 1: $a\\%$ increase in tea and $b\\%$ in coffee leads to $5c\\%$ overall:<br>$(3 \\times a + 1 \\times b) / 4 = 5c \\Rightarrow 3a + b = 20c$."
                },
                {
                    "num": "Step 3",
                    "desc": "Case 2: $b\\%$ increase in tea and $a\\%$ in coffee leads to $3c\\%$ overall:<br>$(3 \\times b + 1 \\times a) / 4 = 3c \\Rightarrow a + 3b = 12c$."
                },
                {
                    "num": "Step 4",
                    "desc": "Divide Case 1 equation by Case 2 equation to eliminate $c$:<br>$(3a + b) / (a + 3b) = 20c / 12c = 5/3$."
                },
                {
                    "num": "Step 5",
                    "desc": "Cross-multiply: $3(3a + b) = 5(a + 3b) \\Rightarrow 9a + 3b = 5a + 15b$."
                },
                {
                    "num": "Step 6",
                    "desc": "Group terms: $4a = 12b \\Rightarrow a/b = 3 \\Rightarrow a : b = 3:1$."
                }
            ],
            "highlight": "3:1 (Option d)"
        },
        "shortcut": {
            "intro": "Use mixture and allegation weighted average logic.",
            "steps": [
                {
                    "num": "Weighted Average Form",
                    "desc": "For quantities in ratio 3:1 (Tea:Coffee):<br>Case 1: $3a + b = \\text{result}_1$<br>Case 2: $3b + a = \\text{result}_2$"
                },
                {
                    "num": "Substitute results",
                    "desc": "Ratio of overall increases = $5c : 3c = 5:3$.<br>Thus: $(3a + b)/(a + 3b) = 5/3 \\Rightarrow 9a + 3b = 5a + 15b \\Rightarrow 4a = 12b \\Rightarrow a/b = 3:1$."
                }
            ],
            "highlight": "a:b = 3:1."
        }
    },
    {
        "id": "sum2_6",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q6",
        "title": "Wheat Production vs Per Capita",
        "question": "In a state, the production of wheat increased by 30%, while the per capita production of wheat increased by 14%. The percentage by which the population of the state increased in the same period is closest to:",
        "hint": "Use the relationship: Total Production = Population x Per Capita Production.",
        "traditional": {
            "intro": "Write variables for the terms and set up the new fractional ratio.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial production be $T$, initial population $P$, and initial per capita production $C$.<br>$T = P \\times C \\Rightarrow P = T / C$."
                },
                {
                    "num": "Step 2",
                    "desc": "After changes, new production $T' = 1.3T$, and new per capita $C' = 1.14C$."
                },
                {
                    "num": "Step 3",
                    "desc": "New population $P' = T' / C' = 1.3T / 1.14C \\approx 1.14035 \\times P$."
                },
                {
                    "num": "Step 4",
                    "desc": "Percentage increase in population = $(1.14035 - 1) \\times 100 \\approx 14.04\\%$."
                }
            ],
            "highlight": "14% (Option b)"
        },
        "shortcut": {
            "intro": "Use percentage change multipliers directly.",
            "steps": [
                {
                    "num": "Multiplier Division",
                    "desc": "Let population multiplier be $m_p$.<br>$1.30 = m_p \\times 1.14 \\Rightarrow m_p = 1.30 / 1.14 \\approx 1.14$."
                },
                {
                    "num": "Deduce Growth",
                    "desc": "Since the multiplier is ~1.14, the population growth is approximately 14%."
                }
            ],
            "highlight": "Closest answer: 14%."
        }
    },
    {
        "id": "sum2_7",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q7",
        "title": "Andaman Forest Animal Census",
        "question": "In 2030, a survey of the Andamans forest, revealed that there were a total of 13500 animals - carnivorous and non-carnivorous in the forest. In 2035, this number had increased to 16310. During this period there was an increase of 22% in the number of carnivorous animals, while there was an increase of 20% in the number of non-carnivorous animals in the forest. How many carnivorous animals were there in the forest in 2035? (Note: The options printed in the textbook are percentages due to a print error, but the numerical answer is required.)",
        "hint": "Set up a system of linear equations using the total animal count and the growth rates.",
        "traditional": {
            "intro": "Solve the system using simultaneous equations or substitution.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let the number of carnivorous animals in 2030 be $C$, and non-carnivorous be $N$.<br>$C + N = 13500$."
                },
                {
                    "num": "Step 2",
                    "desc": "In 2035, the population is $1.22C + 1.2N = 16310$."
                },
                {
                    "num": "Step 3",
                    "desc": "Substitute $N = 13500 - C$:<br>$1.22C + 1.2(13500 - C) = 16310$."
                },
                {
                    "num": "Step 4",
                    "desc": "Simplify: $1.22C + 16200 - 1.2C = 16310$<br>$0.02C = 110 \\Rightarrow C = 5500$ (in 2030)."
                },
                {
                    "num": "Step 5",
                    "desc": "Find carnivorous animals in 2035:<br>$1.22 \\times 5500 = 6710$."
                }
            ],
            "highlight": "6710 (Textbook typo: printed option labels as percentages; correct count is 6710)"
        },
        "shortcut": {
            "intro": "Use the deviation method to solve the equation mentally.",
            "steps": [
                {
                    "num": "Uniform growth assumption",
                    "desc": "If both groups had grown by 20%, total increase would be $13500 \\times 20\\% = 2700$."
                },
                {
                    "num": "Extra growth",
                    "desc": "Actual increase is $16310 - 13500 = 2810$.<br>Extra increase = $2810 - 2700 = 110$."
                },
                {
                    "num": "Isolate C",
                    "desc": "This extra 110 comes from the extra 2% increase in carnivorous animals:<br>2% of $C_{2030} = 110 \\Rightarrow C_{2030} = 5500$."
                },
                {
                    "num": "Calculate 2035 count",
                    "desc": "Carnivorous in 2035 = $5500 \\times 1.22 = 6710$."
                }
            ],
            "highlight": "Deviation: C (2035) = 1.22 * (2810 - 2700)/0.02 = 6710."
        }
    },
    {
        "id": "sum2_8",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q8",
        "title": "Successive Exam Mark Backtracking",
        "question": "In an exam, the score of Aman was 20% less than that of Biman, while the score of Biman was 33.33% more than the score of Chandan. If the score of Chandan was 20% less than the score of Dhiman, then find the score of Dhiman, if Aman scored 128 marks.",
        "hint": "Work backward from Aman's score to Biman's, then to Chandan's, and finally to Dhiman's.",
        "traditional": {
            "intro": "Set up fractions or decimal multipliers and solve step by step.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let Dhiman's score be $D$.<br>Chandan's score $C = 0.8D$ (20% less than $D$)."
                },
                {
                    "num": "Step 2",
                    "desc": "Biman's score $B = C \\times 4/3 = 0.8D \\times 4/3 = 3.2D / 3$ (33.33% or $1/3$ more than $C$)."
                },
                {
                    "num": "Step 3",
                    "desc": "Aman's score $A = 0.8B = 0.8 \\times (3.2D / 3) = 2.56D / 3$ (20% less than $B$)."
                },
                {
                    "num": "Step 4",
                    "desc": "We are given $A = 128$:<br>$2.56D / 3 = 128 \\Rightarrow 2.56D = 384$."
                },
                {
                    "num": "Step 5",
                    "desc": "Solve for $D$: $D = 384 / 2.56 = 150$."
                }
            ],
            "highlight": "150 (Option a)"
        },
        "shortcut": {
            "intro": "Chain fractional multipliers to write a single equation.",
            "steps": [
                {
                    "num": "Fraction Rules",
                    "desc": "- 20% less is $4/5$<br>- 33.33% more is $4/3$<br>- 20% less is $4/5$"
                },
                {
                    "num": "Chain Equation",
                    "desc": "$A = D \\times (4/5) \\times (4/3) \\times (4/5)$<br>$128 = D \\times (64/75)$"
                },
                {
                    "num": "Solve",
                    "desc": "Since $128 = 2 \\times 64$, we have:<br>$D = 2 \\times 75 = 150$."
                }
            ],
            "highlight": "Direct: D = 128 * 75 / 64 = 150."
        }
    },
    {
        "id": "sum2_9",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q9",
        "title": "Poonam's Post-Review Exam Score",
        "question": "Poonam scores 30% in an exam and after a review her score is increased by 60%. However, she still fails by 35 marks. If her, post review score is increased by 25%, she would pass by 25 marks. What was the percentage of marks needed to pass the examination?",
        "hint": "Let the total marks be 100x and express the passing marks under both scenarios.",
        "traditional": {
            "intro": "Create two algebraic expressions representing the passing marks and equate them.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let total marks = $100x$. Initial score = $30x$."
                },
                {
                    "num": "Step 2",
                    "desc": "Post-review score = $30x \\times 1.6 = 48x$."
                },
                {
                    "num": "Step 3",
                    "desc": "Since she fails by 35 marks, Pass Marks = $48x + 35$ (Equation 1)."
                },
                {
                    "num": "Step 4",
                    "desc": "If post-review score increases by 25%, new score = $48x \\times 1.25 = 60x$."
                },
                {
                    "num": "Step 5",
                    "desc": "Since she passes by 25 marks, Pass Marks = $60x - 25$ (Equation 2)."
                },
                {
                    "num": "Step 6",
                    "desc": "Equate the two: $48x + 35 = 60x - 25 \\Rightarrow 12x = 60 \\Rightarrow x = 5$."
                },
                {
                    "num": "Step 7",
                    "desc": "Total marks = 500. Pass marks = $48(5) + 35 = 275$.<br>Pass Percentage = $(275/500) \\times 100 = 55\\%$."
                }
            ],
            "highlight": "55% (Option c)"
        },
        "shortcut": {
            "intro": "Examine the percentage point differences.",
            "steps": [
                {
                    "num": "Percentage gap",
                    "desc": "Initial post-review is 48%. Secondary is 60%.<br>Difference = 12%."
                },
                {
                    "num": "Marks gap",
                    "desc": "Failing by 35 to passing by 25 is a gap of $35 + 25 = 60$ marks."
                },
                {
                    "num": "Equate",
                    "desc": "12% of total marks = 60 marks $\\Rightarrow$ 1% = 5 marks.<br>Total marks = 500."
                },
                {
                    "num": "Pass percentage",
                    "desc": "Pass marks = 48% + 35 marks = 48% + 7% = 55%."
                }
            ],
            "highlight": "Direct: 48% + (35/5)% = 48% + 7% = 55%."
        }
    },
    {
        "id": "sum2_10",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q10",
        "title": "Class Gender Passing Ratio",
        "question": "In a class, 70% of the students are boys and the rest are girls. There are 60 more boys than girls. If 48% of the students including 40 boys pass an exam, then the percentage of girls who do not pass is:",
        "hint": "First find the total number of boys and girls in the class from the given difference.",
        "traditional": {
            "intro": "Use basic algebra to find class numbers, then split the passing students by gender.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Boys = 70%, Girls = 30%. Difference = 40%."
                },
                {
                    "num": "Step 2",
                    "desc": "40% of Total = 60 $\\Rightarrow$ Total class size = 150.<br>Boys = 105, Girls = 45."
                },
                {
                    "num": "Step 3",
                    "desc": "Total passing students = 48% of 150 = 72."
                },
                {
                    "num": "Step 4",
                    "desc": "Passing boys = 40 $\\Rightarrow$ Passing girls = $72 - 40 = 32$."
                },
                {
                    "num": "Step 5",
                    "desc": "Failing girls = Total girls - Passing girls = $45 - 32 = 13$."
                },
                {
                    "num": "Step 6",
                    "desc": "Percentage of girls who fail = $(13 / 45) \\times 100 = 28.89\\%$."
                }
            ],
            "highlight": "28.89% (Option d - None of these/actual count is 28.89%)"
        },
        "shortcut": {
            "intro": "Perform rapid scaling using simple ratios.",
            "steps": [
                {
                    "num": "Ratio",
                    "desc": "Boys : Girls = 7 : 3. Difference = 4 parts = 60 $\\Rightarrow$ 1 part = 15.<br>Boys = 105, Girls = 45, Total = 150."
                },
                {
                    "num": "Pass counts",
                    "desc": "Total passed = 48% of 150 = 72. Passed girls = 72 - 40 = 32."
                },
                {
                    "num": "Fail percentage",
                    "desc": "Failing girls = 45 - 32 = 13 out of 45.<br>$(13/45) \\times 100 = 28.89\\%$."
                }
            ],
            "highlight": "Failed girls % = (13/45)*100 = 28.89%."
        }
    },
    {
        "id": "sum2_11",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q11",
        "title": "Cyclic Steel Production Pattern",
        "question": "The production of steel in an economy follows a certain fixed pattern from 2021 onwards. Starting from 2022, it increases every year by 15% for two consecutive years, while it decreases by 12% in the third year. It then increases again by 15% every year for two consecutive years, while it decreases by 12% in the third year. If we take the end of 2024 as the base year, then what will be the percentage increase in the production by the end of 2028 (to the closest percent)?",
        "hint": "Analyze the pattern from 2024 to 2028: Year 2025 (+15%), 2026 (+15%), 2027 (-12%), 2028 (+15%).",
        "traditional": {
            "intro": "Apply the successive percentage changes sequentially starting from the end of 2024.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let the production at the end of 2024 be 100 units."
                },
                {
                    "num": "Step 2",
                    "desc": "Year 2025 (+15%): Production = $100 \\times 1.15 = 115$."
                },
                {
                    "num": "Step 3",
                    "desc": "Year 2026 (+15%): Production = $115 \\times 1.15 = 132.25$."
                },
                {
                    "num": "Step 4",
                    "desc": "Year 2027 (-12%): Production = $132.25 \\times 0.88 = 116.38$."
                },
                {
                    "num": "Step 5",
                    "desc": "Year 2028 (+15%): Production = $116.38 \\times 1.15 = 133.837$."
                },
                {
                    "num": "Step 6",
                    "desc": "Net percentage increase = $133.84\\% - 100\\% = 33.84\\%$, which rounds to 34%."
                }
            ],
            "highlight": "34% (Option a/b closest)"
        },
        "shortcut": {
            "intro": "Multiply the growth factors together directly.",
            "steps": [
                {
                    "num": "Multipliers",
                    "desc": "Multiplier = $1.15 \\times 1.15 \\times 0.88 \\times 1.15$."
                },
                {
                    "num": "Group terms",
                    "desc": "$1.3225 \\times 1.012 = 1.3384$."
                },
                {
                    "num": "Solve",
                    "desc": "A multiplier of 1.3384 represents a net increase of 33.84% (approx. 34%)."
                }
            ],
            "highlight": "Net multiplier = 1.3384 => +34%."
        }
    },
    {
        "id": "sum2_12",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q12",
        "title": "Tered Sales Commission Tiers",
        "question": "Akhilesh is working as a sales executive with a reputed FMCG Company in Hyderabad. As per the Company's policy, he gets a commission of 7% on all sales upto ₹1,00,000 and 8% on all sales in excess of this amount. From his total collection, Akhilesh deducts his commission and remits the balance to the company's account. If he remits ₹2,95,400 to the FMCG company, then his total sales were worth?",
        "hint": "Check if sales exceed ₹1,00,000. If they do, set up an equation with commission rates for both portions.",
        "traditional": {
            "intro": "Set up an algebraic equation for the total sales and the commission deducted.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let the total sales be $S$. Since the remitted amount is large, $S > 1,00,000$."
                },
                {
                    "num": "Step 2",
                    "desc": "Commission on first 1,00,000 = 7% of 1,00,000 = ₹7,000."
                },
                {
                    "num": "Step 3",
                    "desc": "Commission on remaining sales = 8% of $(S - 1,00,000) = 0.08S - 8000$."
                },
                {
                    "num": "Step 4",
                    "desc": "Total commission = $7000 + 0.08S - 8000 = 0.08S - 1000$."
                },
                {
                    "num": "Step 5",
                    "desc": "Remitted amount = Total sales - Total commission:<br>$S - (0.08S - 1000) = 2,95,400$."
                },
                {
                    "num": "Step 6",
                    "desc": "Simplify: $0.92S + 1000 = 2,95,400$<br>$0.92S = 2,94,400 \\Rightarrow S = 3,20,000$."
                }
            ],
            "highlight": "₹3,20,000"
        },
        "shortcut": {
            "intro": "Use the uniform rate method to make calculation quick.",
            "steps": [
                {
                    "num": "Assume 8% everywhere",
                    "desc": "If the commission were 8% on the entire sales, the company would receive 92% of the sales."
                },
                {
                    "num": "Adjust for difference",
                    "desc": "Since he gets only 7% on the first 1,00,000 (1% less), the company receives an extra $1\\%$ of $1,00,000 = ₹1,000$."
                },
                {
                    "num": "Equalize",
                    "desc": "92% of Sales + 1,000 = 2,95,400 $\\Rightarrow$ 92% of Sales = 2,94,400."
                },
                {
                    "num": "Divide",
                    "desc": "Sales = 2,94,400 / 0.92 = ₹3,20,000."
                }
            ],
            "highlight": "Sales = (295,400 - 1,000) / 0.92 = 3,20,000."
        }
    },
    {
        "id": "sum2_13",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q13",
        "title": "Bill Ambani's Capital Charity",
        "question": "Bill Ambani, a very clever businessman, started off a business with very little capital. In the first year, he earned a profit of 50% and donated 50% of the total capital (initial capital + profit) to a charitable organisation. The same course was followed in the second and third years also. If at the end of three years, he is left with ₹16,875, then find the amount donated by him at the end of the second year.",
        "hint": "Analyze the year-on-year multiplier: Profit of 50% (x1.5) followed by 50% donation (x0.5) results in a net yearly multiplier of 0.75.",
        "traditional": {
            "intro": "Set up the algebraic variables for each year's starting and ending balances.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let the initial capital be $C$."
                },
                {
                    "num": "Step 2",
                    "desc": "Year 1: Capital becomes $1.5C$. After donating 50%, remaining = $0.75C$."
                },
                {
                    "num": "Step 3",
                    "desc": "Year 2: Capital becomes $0.75C \\times 1.5 = 1.125C$.<br>He donates 50%, so donation = $0.5625C$, remaining = $0.5625C$."
                },
                {
                    "num": "Step 4",
                    "desc": "Year 3: Capital becomes $0.5625C \\times 1.5 = 0.84375C$.<br>He donates 50%, remaining = $0.421875C$."
                },
                {
                    "num": "Step 5",
                    "desc": "Given remaining = ₹16,875:<br>$0.421875C = 16,875 \\Rightarrow C = 40,000$."
                },
                {
                    "num": "Step 6",
                    "desc": "Amount donated at end of Year 2 = $0.5625 \\times 40,000 = ₹22,500$."
                }
            ],
            "highlight": "₹22,500 (Option c)"
        },
        "shortcut": {
            "intro": "Use the fraction multiplier trick.",
            "steps": [
                {
                    "num": "Multiplier",
                    "desc": "Net yearly change multiplier = $1.50 \\times 0.50 = 0.75$ (or $3/4$)."
                },
                {
                    "num": "Three years",
                    "desc": "Final Capital = Initial Capital $\\times (3/4)^3 = C \\times 27/64$."
                },
                {
                    "num": "Solve Initial",
                    "desc": "Capital left = 16,875 $\\Rightarrow C \\times 27/64 = 16,875$.<br>$C = (16875 \\times 64) / 27 = 625 \\times 64 = ₹40,000$."
                },
                {
                    "num": "Donation 2",
                    "desc": "Capital at end of Year 2 before donation = $40,000 \\times (3/4) \\times 1.5 = 45,000$.<br>Donation = 50% of 45,000 = ₹22,500."
                }
            ],
            "highlight": "Donation 2 = 50% of (40,000 * 3/4 * 1.5) = ₹22,500."
        }
    },
    {
        "id": "sum2_14",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q14",
        "title": "Double Subject Exam Failure",
        "question": "In an examination, 48% students failed in Hindi and 32% students in History; 20% students failed in both the subjects. If the number of students who passed the examination was 880, how many students appeared in the examination, if the examination consisted only of these two subjects?",
        "hint": "Use a Venn diagram or set theory formula to find the total percentage of students who failed in at least one subject.",
        "traditional": {
            "intro": "Apply the union of sets formula to determine failures, then find the passing percentage.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let Hindi failed be $H = 48\\%$ and History failed be $S = 32\\%$. Failed in both $H \\cap S = 20\\%$."
                },
                {
                    "num": "Step 2",
                    "desc": "Percentage failing in Hindi or History or both is:<br>$H \\cup S = H + S - (H \\cap S) = 48\\% + 32\\% - 20\\% = 60\\%$."
                },
                {
                    "num": "Step 3",
                    "desc": "Percentage passing both subjects = $100\\% - 60\\% = 40\\%$."
                },
                {
                    "num": "Step 4",
                    "desc": "Given 40% of total students = 880."
                },
                {
                    "num": "Step 5",
                    "desc": "Total students = $880 / 0.40 = 2200$."
                }
            ],
            "highlight": "2200 (Option b)"
        },
        "shortcut": {
            "intro": "Use basic Venn diagram logic mentally.",
            "steps": [
                {
                    "num": "Venn Split",
                    "desc": "- Failed Hindi only = $48 - 20 = 28\\%$<br>- Failed History only = $32 - 20 = 12\\%$<br>- Failed both = $20\\%$."
                },
                {
                    "num": "Total failed",
                    "desc": "$28\\% + 12\\% + 20\\% = 60\\%$."
                },
                {
                    "num": "Passed",
                    "desc": "40% passed $\\Rightarrow$ 40% = 880 $\\Rightarrow$ 10% = 220 $\\Rightarrow$ 100% = 2200."
                }
            ],
            "highlight": "Mental math: 40% = 880 => Total = 2200."
        }
    },
    {
        "id": "sum2_15",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q15",
        "title": "IIM Bangalore Fee Concessions",
        "question": "At IIM Bangalore, 60% of the students are boys and the rest are girls. Further 15% of the boys and 7.5% of the girls are getting a fee waiver. If the number of those getting a fee waiver is 90, find the total number of students getting 50% concession if it is given that 50% of those not getting a fee waiver are eligible to get half-fee concession?",
        "hint": "Set total students as 100x and calculate the waiver percentages to find x.",
        "traditional": {
            "intro": "Express waiver candidates as an algebraic function of class size.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let total students = $100x$. Boys = $60x$, Girls = $40x$."
                },
                {
                    "num": "Step 2",
                    "desc": "Boys getting fee waiver = 15% of $60x = 9x$."
                },
                {
                    "num": "Step 3",
                    "desc": "Girls getting fee waiver = 7.5% of $40x = 3x$."
                },
                {
                    "num": "Step 4",
                    "desc": "Total getting fee waiver = $9x + 3x = 12x$."
                },
                {
                    "num": "Step 5",
                    "desc": "We are given $12x = 90 \\Rightarrow x = 7.5$. Total students = 750."
                },
                {
                    "num": "Step 6",
                    "desc": "Students not getting fee waiver = $750 - 90 = 660$."
                },
                {
                    "num": "Step 7",
                    "desc": "Students getting 50% concession = 50% of 660 = 330."
                }
            ],
            "highlight": "330 (Option d)"
        },
        "shortcut": {
            "intro": "Use direct scaling logic in a few mental steps.",
            "steps": [
                {
                    "num": "Waiver percentage",
                    "desc": "Net waiver % = $(0.6 \\times 15) + (0.4 \\times 7.5) = 9\\% + 3\\% = 12\\%$."
                },
                {
                    "num": "Calculate populations",
                    "desc": "12% = 90 $\\Rightarrow$ 88% (no waiver) = $90 \\times (88/12) = 660$."
                },
                {
                    "num": "Apply half-concession",
                    "desc": "50% of those without waiver = $660 / 2 = 330$."
                }
            ],
            "highlight": "Concession = 50% of (90 * 88 / 12) = 330."
        }
    },
    {
        "id": "sum2_16",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q16",
        "title": "Alternate Year Machine Depreciation",
        "question": "A machine depreciates in value each year at the rate of 10% of its previous value. However, every second year there is some maintenance work so that in that particular year, depreciation is only 5% of its previous value. If at the end of the fourth year, the value of the machine stands at ₹1,46,205, then find the value of machine at the start of the first year.",
        "hint": "Note the alternating depreciation rates: Year 1 (-10%), Year 2 (-5%), Year 3 (-10%), Year 4 (-5%).",
        "traditional": {
            "intro": "Multiply the initial value by the respective yearly depreciation factors.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let the initial value of the machine be $V$."
                },
                {
                    "num": "Step 2",
                    "desc": "Value after Year 1 (10% depreciation) = $0.9V$."
                },
                {
                    "num": "Step 3",
                    "desc": "Value after Year 2 (5% depreciation) = $0.9V \\times 0.95 = 0.855V$."
                },
                {
                    "num": "Step 4",
                    "desc": "Value after Year 3 (10% depreciation) = $0.855V \\times 0.9 = 0.7695V$."
                },
                {
                    "num": "Step 5",
                    "desc": "Value after Year 4 (5% depreciation) = $0.7695V \\times 0.95 = 0.731025V$."
                },
                {
                    "num": "Step 6",
                    "desc": "Equate to given value: $0.731025V = 1,46,205 \\Rightarrow V = 2,00,000$."
                }
            ],
            "highlight": "₹2,00,000 (Option b)"
        },
        "shortcut": {
            "intro": "Check the compound multipliers and use option testing.",
            "steps": [
                {
                    "num": "Combined Multipliers",
                    "desc": "Total multiplier = $0.9 \\times 0.95 \\times 0.9 \\times 0.95 = 0.81 \\times 0.9025 \\approx 0.731$."
                },
                {
                    "num": "Option Testing",
                    "desc": "Test Option (b) 2,00,000:<br>$2,00,000 \\times 0.731 = 1,46,200$ (exactly matches 1,46,205 with rounding)."
                }
            ],
            "highlight": "Depreciation factor ~0.73. 2,00,000 * 0.731 = 1,46,200."
        }
    },
    {
        "id": "sum2_17",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q17",
        "title": "Project Report Format Re-sizing",
        "question": "Arushi's project report consists of 25 pages each of 60 lines with 75 characters on each line. In case the number of lines is reduced to 55 but the number of characters is increased to 90 per lines; what is the percentage change in the number of pages? (Assume the number of pages to be a whole number.)",
        "hint": "Find the total number of characters in the report, then divide by the new page capacity and round up to a whole page.",
        "traditional": {
            "intro": "Calculate total capacity and divide by the new page density.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Total characters in report = $25 \\times 60 \\times 75 = 1,12,500$ characters."
                },
                {
                    "num": "Step 2",
                    "desc": "New capacity per page = $55 \\text{ lines} \\times 90 \\text{ characters/line} = 4,950$ characters."
                },
                {
                    "num": "Step 3",
                    "desc": "New pages needed = $1,12,500 / 4,950 \\approx 22.73$ pages."
                },
                {
                    "num": "Step 4",
                    "desc": "Since pages must be a whole number, round up to 23 pages (to fit all characters)."
                },
                {
                    "num": "Step 5",
                    "desc": "Percentage change = $[(23 - 25) / 25] \\times 100 = -8\\%$."
                }
            ],
            "highlight": "-8% (Option c)"
        },
        "shortcut": {
            "intro": "Compare fractional ratios of page capacities.",
            "steps": [
                {
                    "num": "Capacity Ratio",
                    "desc": "Ratio of new page capacity to old = $(55 \\times 90) / (60 \\times 75) = (11 \\times 9) / (12 \\times 15) = 99 / 180 = 0.55$."
                },
                {
                    "num": "Solve Pages",
                    "desc": "New pages = $25 / 1.1 = 22.73 \\rightarrow 23$ pages."
                },
                {
                    "num": "Change",
                    "desc": "A drop of 2 pages out of 25 is exactly a $2/25 = 8\\%$ decrease."
                }
            ],
            "highlight": "Drop from 25 to 23 pages is -8%."
        }
    },
    {
        "id": "sum2_18",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q18",
        "title": "Multiplicative Soap Pricing Factors",
        "question": "The price of soap is collectively decided by five factors: research, raw materials, labour, advertisements and transportation. Assume that the functional relationship is: Price of soap = (k * Research costs * Raw material costs * Labour costs * Advertising cost * Transportation cost). If there are respective changes of 10%, 20%, -20%, 25% and 50% in the five factors, then find the change in the price of soap.",
        "hint": "Since the formula is purely multiplicative, the net change is the product of all individual multipliers.",
        "traditional": {
            "intro": "Set up the successive percentage changes as decimal multipliers.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Write the multipliers for each factor change:<br>- Research (+10%) = 1.1<br>- Raw Materials (+20%) = 1.2<br>- Labour (-20%) = 0.8<br>- Advertising (+25%) = 1.25<br>- Transportation (+50%) = 1.5"
                },
                {
                    "num": "Step 2",
                    "desc": "Multiply the factors together:<br>Net multiplier = $1.1 \\times 1.2 \\times 0.8 \\times 1.25 \\times 1.5$."
                },
                {
                    "num": "Step 3",
                    "desc": "Combine terms:<br>$1.1 \\times 1.2 = 1.32$<br>$1.32 \\times 0.8 = 1.056$<br>$1.056 \\times 1.25 = 1.32$<br>$1.32 \\times 1.5 = 1.98$."
                },
                {
                    "num": "Step 4",
                    "desc": "A net multiplier of 1.98 represents an increase of 98%."
                }
            ],
            "highlight": "98% (Option c)"
        },
        "shortcut": {
            "intro": "Group fraction multipliers to calculate the product mentally.",
            "steps": [
                {
                    "num": "Fraction Form",
                    "desc": "Product = $(11/10) \\times (6/5) \\times (4/5) \\times (5/4) \\times (3/2)$."
                },
                {
                    "num": "Cancel terms",
                    "desc": "Cancel $4/5$ and $5/4$, and cancel $6/2 = 3$:<br>Product = $(11/10) \\times 3 \\times (3/5) = 99/50 = 1.98$."
                },
                {
                    "num": "Answer",
                    "desc": "1.98 multiplier means 98% increase."
                }
            ],
            "highlight": "99/50 = 1.98 => +98%."
        }
    },
    {
        "id": "sum2_19",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q19",
        "title": "Double Rate Successive raises",
        "question": "After receiving two successive raises, Harsh's salary became equal to 15/8 times of his initial salary. By how much percent was the salary raised the first time if the second raise was twice as high (in percent) as the first?",
        "hint": "Let the first raise be r% and the second be 2r%. Set up the multiplier equation.",
        "traditional": {
            "intro": "Formulate a quadratic equation using the raises as decimals.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let the first raise be $r\\%$, so the second is $2r\\%$."
                },
                {
                    "num": "Step 2",
                    "desc": "Successive multiplier equation:<br>$(1 + r/100)(1 + 2r/100) = 15/8 = 1.875$."
                },
                {
                    "num": "Step 3",
                    "desc": "Let $x = r/100$:<br>$(1 + x)(1 + 2x) = 1.875 \\Rightarrow 1 + 3x + 2x^2 = 1.875$."
                },
                {
                    "num": "Step 4",
                    "desc": "Solve quadratic: $2x^2 + 3x - 0.875 = 0 \\Rightarrow 16x^2 + 24x - 7 = 0$."
                },
                {
                    "num": "Step 5",
                    "desc": "Factor the equation:<br>$(4x - 1)(4x + 7) = 0 \\Rightarrow x = 1/4 = 0.25$ (since $x > 0$)."
                },
                {
                    "num": "Step 6",
                    "desc": "First raise $r = x \\times 100 = 25\\%$."
                }
            ],
            "highlight": "25% (Option c)"
        },
        "shortcut": {
            "intro": "Use option checking to identify the correct percentage rapidly.",
            "steps": [
                {
                    "num": "Test 20%",
                    "desc": "If first raise is 20%, second is 40%:<br>Multiplier = $1.20 \\times 1.40 = 1.68 \\neq 1.875$."
                },
                {
                    "num": "Test 25%",
                    "desc": "If first raise is 25%, second is 50%:<br>Multiplier = $1.25 \\times 1.50 = 1.875$ (exactly 15/8)."
                }
            ],
            "highlight": "Option testing: 25% and 50% gives exactly 1.875 (15/8)."
        }
    },
    {
        "id": "sum2_20",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q20",
        "title": "Jim's Monthly Salary Ratio & Bonus",
        "question": "The ratio of Jim's salary for October to his salary for November was 1.5 : 1.333 and the ratio of the salary for November to that for December was 2 : 2.6666. The worker got 40 rupees more for December than for October and received a bonus constituting 40 percent of the salary for three months. Find the bonus. (Assume that the number of workdays is the same in every month.)",
        "hint": "Convert the decimal ratios to simple fractions to find the combined ratio Oct : Nov : Dec.",
        "traditional": {
            "intro": "Set up a unified ratio for all three months and solve for the scaling factor.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Convert October to November ratio:<br>Oct : Nov = $1.5 : 4/3 = 3/2 : 4/3 = 9 : 8$."
                },
                {
                    "num": "Step 2",
                    "desc": "Convert November to December ratio:<br>Nov : Dec = $2 : 8/3 = 6 : 8 = 3 : 4$."
                },
                {
                    "num": "Step 3",
                    "desc": "Unify the ratios using LCM of November (24):<br>Oct : Nov = $27 : 24$<br>Nov : Dec = $24 : 32$<br>Ratio Oct : Nov : Dec = 27 : 24 : 32."
                },
                {
                    "num": "Step 4",
                    "desc": "Let salaries be $27x$, $24x$, and $32x$. Given Dec - Oct = ₹40:<br>$32x - 27x = 5x = 40 \\Rightarrow x = 8$."
                },
                {
                    "num": "Step 5",
                    "desc": "Calculate total salary: $(27 + 24 + 32) \\times 8 = 83 \\times 8 = ₹664$."
                },
                {
                    "num": "Step 6",
                    "desc": "Bonus = 40% of 664 = $0.4 \\times 664 = ₹265.6$."
                }
            ],
            "highlight": "₹265.6 (Option d)"
        },
        "shortcut": {
            "intro": "Convert decimal expressions directly to parts.",
            "steps": [
                {
                    "num": "Ratio parts",
                    "desc": "Oct = 1.5, Nov = 1.333 = 4/3, Dec = (Nov/2) * 2.666 = 1.777 = 16/9 of Nov."
                },
                {
                    "num": "Values",
                    "desc": "Unified: Oct : Nov : Dec = 27 : 24 : 32. Gap Dec-Oct = 5 parts = 40 $\\Rightarrow$ 1 part = 8."
                },
                {
                    "num": "Bonus",
                    "desc": "Total parts = 83. Bonus = 40% of (83 * 8) = 40% of 664 = ₹265.6."
                }
            ],
            "highlight": "Mental check: 5 parts = 40 => Total = 83 * 8 = 664. Bonus = 265.6."
        }
    },
    {
        "id": "sum2_21",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q21",
        "title": "Three Equal Successive Salary Rises",
        "question": "After three successive equal percentage rise in the salary, the sum of 100 rupees turned into 140 rupees and 49 paise. Find the percentage rise in the salary.",
        "hint": "The equation is: 100 x (1 + r/100)^3 = 140.49. Check options for perfect cubes close to 1.4049.",
        "traditional": {
            "intro": "Write the compound interest formula and solve for the percentage rate.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let the raise percentage be $r\\%$."
                },
                {
                    "num": "Step 2",
                    "desc": "Equation: $100 \\times (1 + r/100)^3 = 140.49 \\Rightarrow (1 + r/100)^3 = 1.404928$."
                },
                {
                    "num": "Step 3",
                    "desc": "Take cube root: $1 + r/100 = \\sqrt[3]{1.404928} = 1.12$."
                },
                {
                    "num": "Step 4",
                    "desc": "Solve for $r$: $r/100 = 0.12 \\Rightarrow r = 12\\%$."
                }
            ],
            "highlight": "12% (Option a)"
        },
        "shortcut": {
            "intro": "Check standard option cubes.",
            "steps": [
                {
                    "num": "Approximate",
                    "desc": "We need $(1 + x)^3 \\approx 1.40$."
                },
                {
                    "num": "Test 12%",
                    "desc": "$1.12^3 = (1.12 \\times 1.12) \\times 1.12 = 1.2544 \\times 1.12 = 1.404928$, which matches 140.49 rupees exactly."
                }
            ],
            "highlight": "Testing 1.12^3 matches 1.4049."
        }
    },
    {
        "id": "sum2_22",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q22",
        "title": "Sofa Set Price Reduction",
        "question": "Prema goes to a shop to buy a sofa set costing ₹13,080. The rate of sales tax is 9%. She tells the shopkeeper to reduce the price of the sofa set to such an extent that she has to pay ₹13,080 inclusive of sales tax. Find the percentage reduction needed in the price of the sofa set to just satisfy her requirement.",
        "hint": "Let the reduced price be P. The final price paid after 9% tax must equal ₹13,080.",
        "traditional": {
            "intro": "Calculate the reduced base price and compute the percentage decrease from the original price.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let the reduced price before tax be $P$."
                },
                {
                    "num": "Step 2",
                    "desc": "With 9% tax, the amount paid is $P \\times 1.09 = 13,080$."
                },
                {
                    "num": "Step 3",
                    "desc": "Solve for $P$: $P = 13,080 / 1.09 = ₹12,000$."
                },
                {
                    "num": "Step 4",
                    "desc": "Reduction amount = $13,080 - 12,000 = ₹1,080$."
                },
                {
                    "num": "Step 5",
                    "desc": "Percentage reduction = $(1,080 / 13,080) \\times 100 = 8.2568\\%$, which is approximately 8.26%."
                }
            ],
            "highlight": "8.26% (Option b)"
        },
        "shortcut": {
            "intro": "Use the percentage base change formula.",
            "steps": [
                {
                    "num": "Base formula",
                    "desc": "Reduction ratio required is $t / (100 + t)$, where $t$ is the tax rate."
                },
                {
                    "num": "Substitute",
                    "desc": "Percentage reduction = $9 / 109 \\times 100 \\approx 8.26\\%$."
                }
            ],
            "highlight": "Direct: 9 / 109 = 8.26%."
        }
    },
    {
        "id": "sum2_23",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q23",
        "title": "Article Price and Consumption Rise",
        "question": "The price of a certain article was raised by 10% in India. The consumption of the same article was increased from 200 tons to 225 tons. By how much percent will the expenditure on the article rise in the Indian economy?",
        "hint": "Expenditure = Price x Consumption. Calculate the individual multipliers for both price and consumption.",
        "traditional": {
            "intro": "Express the final expenditure as a product of the percentage change factors.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial Price = $P$ and initial Consumption = 200 tons."
                },
                {
                    "num": "Step 2",
                    "desc": "Initial Expenditure $E = 200P$."
                },
                {
                    "num": "Step 3",
                    "desc": "New Price $P' = 1.1P$."
                },
                {
                    "num": "Step 4",
                    "desc": "New Consumption = 225 tons. Increase = $(225 - 200) / 200 = 12.5\\%$."
                },
                {
                    "num": "Step 5",
                    "desc": "New Expenditure $E' = 225 \\times 1.1P = 247.5P$."
                },
                {
                    "num": "Step 6",
                    "desc": "Percentage increase in expenditure = $[(247.5 - 200) / 200] \\times 100 = (47.5 / 200) \\times 100 = 23.75\\%$."
                }
            ],
            "highlight": "23.75% (Option c)"
        },
        "shortcut": {
            "intro": "Use the successive percentage formula: A + B + AB/100.",
            "steps": [
                {
                    "num": "Identify rates",
                    "desc": "Price change A = +10%. Consumption change B = +12.5% (from 200 to 225 tons)."
                },
                {
                    "num": "Solve",
                    "desc": "Net Expenditure change = $10 + 12.5 + (10 \\times 12.5)/100 = 22.5 + 1.25 = 23.75\\%$."
                }
            ],
            "highlight": "Mental math: 10 + 12.5 + 1.25 = 23.75%."
        }
    },
    {
        "id": "sum2_24",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q24",
        "title": "Rajesh's Target Average Grade",
        "question": "In the university examination last year, Rajesh scored 65% in English and 82% in History. What is the minimum percent he should score in Sociology, which is out of 50 marks (if English and History were for 100 marks each), if he aims at getting 78% overall?",
        "hint": "Find the total target marks across all subjects first, then subtract English and History marks.",
        "traditional": {
            "intro": "Compute total target points and subtract current scored points.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Maximum Marks: English = 100, History = 100, Sociology = 50. Total = 250."
                },
                {
                    "num": "Step 2",
                    "desc": "Target points = 78% of 250 = $0.78 \\times 250 = 195$."
                },
                {
                    "num": "Step 3",
                    "desc": "Points scored: English = 65, History = 82. Combined = 147."
                },
                {
                    "num": "Step 4",
                    "desc": "Required Sociology marks = $195 - 147 = 48$."
                },
                {
                    "num": "Step 5",
                    "desc": "Sociology Percentage = $(48 / 50) \\times 100 = 96\\%$."
                }
            ],
            "highlight": "96% (Option d)"
        },
        "shortcut": {
            "intro": "Use weighted average deviations from the target of 78%.",
            "steps": [
                {
                    "num": "Weightages",
                    "desc": "Sociology weight = 50 marks, English/History weights = 100 marks each (Ratio 1 : 2 : 2)."
                },
                {
                    "num": "Deviations",
                    "desc": "- English (65%): $-13\\% \\times 2 = -26$<br>- History (82%): $+4\\% \\times 2 = +8$<br>- Net current deviation = $-26 + 8 = -18$."
                },
                {
                    "num": "Balance",
                    "desc": "Sociology must balance $-18$ points with a weight of 1, meaning it needs $+18\\%$ above the target:<br>Sociology target = $78\\% + 18\\% = 96\\%$."
                }
            ],
            "highlight": "Deviation balancing: 78 + (26 - 8) = 96%."
        }
    },
    {
        "id": "sum2_25",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q25",
        "title": "King Dashratha's Gold Distribution",
        "question": "King Dashratha, at his eleventh hour, called his three queens and distributed his gold in the following way: He gave 50% of his wealth to his first wife, 50% of the rest to his second wife and again 50% of the rest to his third wife. If their combined share is worth 1,30,900 kilograms of gold, find the quantity of gold King Dashratha was having initially.",
        "hint": "Define the wives' shares as fractions of the initial gold. First gets 1/2, second gets 1/4, third gets 1/8.",
        "traditional": {
            "intro": "Sum the fractions of wealth given to the three wives, and equate to the given combined value.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial gold = $W$."
                },
                {
                    "num": "Step 2",
                    "desc": "First wife gets = $0.5W$."
                },
                {
                    "num": "Step 3",
                    "desc": "Remaining gold = $0.5W$. Second wife gets 50% of remainder = $0.25W$."
                },
                {
                    "num": "Step 4",
                    "desc": "Remaining gold = $0.25W$. Third wife gets 50% of remainder = $0.125W$."
                },
                {
                    "num": "Step 5",
                    "desc": "Combined share = $0.5W + 0.25W + 0.125W = 0.875W$."
                },
                {
                    "num": "Step 6",
                    "desc": "Equate and solve: $0.875W = 1,30,900$<br>$W = 1,30,900 / 0.875 = 1,30,900 \\times 8 / 7 = 1,49,600$ kg."
                }
            ],
            "highlight": "1,49,600 kg (Option b)"
        },
        "shortcut": {
            "intro": "Write combined share as a simple fraction.",
            "steps": [
                {
                    "num": "Fraction",
                    "desc": "Combined share = $1/2 + 1/4 + 1/8 = 7/8$ of the total gold."
                },
                {
                    "num": "Solve",
                    "desc": "$7/8 \\text{ of Total} = 1,30,900 \\Rightarrow \\text{Total} = 1,30,900 \\times 8 / 7 = 18,700 \\times 8 = 1,49,600$ kg."
                }
            ],
            "highlight": "Total = 130,900 * 8 / 7 = 1,49,600 kg."
        }
    },
    {
        "id": "sum2_26",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q26",
        "title": "Immigration compounding population",
        "question": "The population of New Foundland increases with a uniform rate of 8% per annum, but due to immigration, there is a further increase of population by 1% (however, this 1% increase in population is to be calculated on the population after the 8% increase and not on the previous years population). Find what will be the percentage increase in population after two years.",
        "hint": "Calculate the net annual growth multiplier by compounding the 8% increase and the 1% immigration.",
        "traditional": {
            "intro": "Compute the single-year multiplier and apply it for two years.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial population be $P$."
                },
                {
                    "num": "Step 2",
                    "desc": "At the end of Year 1: Population becomes $1.08P$. With 1% immigration calculated on this, it becomes:<br>$1.08P \\times 1.01 = 1.0908P$."
                },
                {
                    "num": "Step 3",
                    "desc": "So the net yearly growth multiplier is 1.0908."
                },
                {
                    "num": "Step 4",
                    "desc": "After 2 years: Population = $P \\times (1.0908)^2 \\approx 1.18984 \\times P$."
                },
                {
                    "num": "Step 5",
                    "desc": "Net percentage increase = $18.984\\%$."
                }
            ],
            "highlight": "18.984% (Option a)"
        },
        "shortcut": {
            "intro": "Use successive percentages formula.",
            "steps": [
                {
                    "num": "Yearly Rate",
                    "desc": "Yearly rate = $8 + 1 + (8 \\times 1)/100 = 9.08\\%$."
                },
                {
                    "num": "Two Years",
                    "desc": "Successive rate after 2 years = $9.08 + 9.08 + (9.08 \\times 9.08)/100 = 18.16 + 0.824 = 18.984\\%$."
                }
            ],
            "highlight": "2-year compound rate = 18.984%."
        }
    },
    {
        "id": "sum2_27",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q27",
        "title": "Multi-Stage Mexico Migration",
        "question": "Ten percent of Mexico's population migrated to South Asia, 10% of the remaining migrated to America and 10% of the rest migrated to Australia. If the female population, which was left in Mexico, remained only 3,64,500, find the population of Mexico City before the migration and its effects, if it is given that before the migration the female population was half the male population and this ratio did not change after the migration.",
        "hint": "Succesive decreases of 10% are applied. Also, note that the ratio of females to males remains constant.",
        "traditional": {
            "intro": "Set up equations based on the successive 10% decreases in female population.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial female population be $F_i$. Since migration affects both genders equally, we have:<br>$F_i \\times 0.9 \\times 0.9 \\times 0.9 = 3,64,500$."
                },
                {
                    "num": "Step 2",
                    "desc": "Simplify: $F_i \\times 0.729 = 3,64,500 \\Rightarrow F_i = 3,64,500 / 0.729 = 5,00,000$."
                },
                {
                    "num": "Step 3",
                    "desc": "Before migration, female population was half the male population ($M_i = 2F_i$)."
                },
                {
                    "num": "Step 4",
                    "desc": "Total population before migration = $F_i + M_i = 3F_i = 3 \\times 5,00,000 = 15,00,000$."
                }
            ],
            "highlight": "15,00,000 (Option c)"
        },
        "shortcut": {
            "intro": "Recognize the 0.729 multiplier (cube of 0.9) to simplify arithmetic.",
            "steps": [
                {
                    "num": "Successive Ratios",
                    "desc": "Remaining females = 72.9% of initial females = 3,64,500 $\\Rightarrow$ Initial females = 5,00,000."
                },
                {
                    "num": "Scale to total",
                    "desc": "Total population is $1 + 2 = 3$ times the female population.<br>Total = $3 \\times 5,00,000 = 15,00,000$."
                }
            ],
            "highlight": "Total = 3 * (364,500 / 0.729) = 15,00,000."
        }
    },
    {
        "id": "sum2_28",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q28",
        "title": "Gujarat & Andhra Pradesh FDI Split",
        "question": "According to a recent survey report issued by the Commerce Ministry, Government of India, 30% of the total FDI goes to Gujarat and 20% of this goes to rural areas. If the FDI in Gujarat, which goes to urban areas, is $72 m, then find the size of FDI in rural Andhra Pradesh, which attracts 50% of the FDI that comes to Andhra Pradesh, which accounts for 20% of the total FDI?",
        "hint": "First calculate the total national FDI using Gujarat's urban share, then find AP's rural share.",
        "traditional": {
            "intro": "Use percentages of total FDI to construct a step-by-step ratio mapping.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let total national FDI = $T$."
                },
                {
                    "num": "Step 2",
                    "desc": "FDI to Gujarat = 30% of $T = 0.3T$."
                },
                {
                    "num": "Step 3",
                    "desc": "FDI to urban Gujarat = 80% of $0.3T = 0.24T$ (since 20% is rural)."
                },
                {
                    "num": "Step 4",
                    "desc": "We are given: $0.24T = \\$72$ million $\\Rightarrow T = 72 / 0.24 = \\$300$ million."
                },
                {
                    "num": "Step 5",
                    "desc": "FDI to Andhra Pradesh = 20% of $T = 20\\%$ of 300 = $\\$60$ million."
                },
                {
                    "num": "Step 6",
                    "desc": "FDI to rural AP = 50% of AP's share = 50% of 60 = $\\$30$ million."
                }
            ],
            "highlight": "$30 m (Option a)"
        },
        "shortcut": {
            "intro": "Map the ratio paths directly.",
            "steps": [
                {
                    "num": "National FDI",
                    "desc": "Gujarat Urban = $30\\% \\times 80\\% = 24\\%$ of total. 24% = 72M $\\Rightarrow$ Total = 300M."
                },
                {
                    "num": "AP Rural",
                    "desc": "AP Rural = $20\\% \\times 50\\% = 10\\%$ of total.<br>Rural AP FDI = 10% of 300M = $\\$30$M."
                }
            ],
            "highlight": "Rural AP = 10% of (72M / 0.24) = $30m."
        }
    },
    {
        "id": "sum2_29",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q29",
        "title": "FDI growth & Urban Maharashtra",
        "question": "If in question 28, the growth in the size of FDI for the next year with respect to the previous year is 20%, then find the share of urban Maharashtra next year if 12% of the total FDI going to Maharashtra went to urban areas (provided Maharashtra attracted only 10% of the total share for both years).",
        "hint": "Scale the previous year's total FDI of $300m by 1.2, then calculate Maharashtra's urban share.",
        "traditional": {
            "intro": "Apply the growth rate and calculate next year's regional allocations.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Previous total FDI = $\\$300$ million. With 20% growth, new total = $\\$300 \\times 1.2 = \\$360$ million."
                },
                {
                    "num": "Step 2",
                    "desc": "Maharashtra's share = 10% of new total = 10% of 360 = $\\$36$ million."
                },
                {
                    "num": "Step 3",
                    "desc": "Urban Maharashtra share = 12% of Maharashtra's share = 12% of 36 = $\\$4.32$ million."
                }
            ],
            "highlight": "$4.32 m (Option b)"
        },
        "shortcut": {
            "intro": "Multiply the percentage multipliers directly.",
            "steps": [
                {
                    "num": "Product",
                    "desc": "Urban Maharashtra next year = $300 \\times 1.20 \\times 0.10 \\times 0.12$."
                },
                {
                    "num": "Solve",
                    "desc": "$360 \\times 0.012 = \\$4.32$ million."
                }
            ],
            "highlight": "360M * 0.10 * 0.12 = $4.32m."
        }
    },
    {
        "id": "sum2_30",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q30",
        "title": "Family Food Expenditure share",
        "question": "The cost of food accounted for 25% of the income of a particular family. If the income gets raised by 20%, then what should be the percentage point decrease in the food expenditure as a percentage of the total income to keep the food expenditure unchanged between the two years?",
        "hint": "Remember that percentage point decrease is the direct subtraction of the two percentages.",
        "traditional": {
            "intro": "Calculate food expenditure share before and after income increase, and find their difference.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial income = 100. Food expenditure = 25% of 100 = 25."
                },
                {
                    "num": "Step 2",
                    "desc": "New income = $100 \\times 1.2 = 120$."
                },
                {
                    "num": "Step 3",
                    "desc": "To keep food expenditure unchanged, new food expenditure = 25."
                },
                {
                    "num": "Step 4",
                    "desc": "New food expenditure percentage = $(25 / 120) \\times 100 = 20.83\\%$."
                },
                {
                    "num": "Step 5",
                    "desc": "Percentage point decrease = $25\\% - 20.83\\% = 4.17\\%$ (or 4.16% with decimal rounding)."
                }
            ],
            "highlight": "4.16 (Option c)"
        },
        "shortcut": {
            "intro": "Use fractional division to find the new share.",
            "steps": [
                {
                    "num": "Fraction",
                    "desc": "New food share = $25 / 1.2 = 20.83\\%$."
                },
                {
                    "num": "Difference",
                    "desc": "$25 - 20.833 = 4.167$ percentage points."
                }
            ],
            "highlight": "25 - 25/1.2 = 4.16 percentage points."
        }
    },
    {
        "id": "sum2_31",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q31",
        "title": "Cube surface Area Change",
        "question": "If the length, breadth and height of a cube are increased by 5%, 5% and 20% respectively, then what will be the impact on the surface area of the cube (in percentage terms)?",
        "hint": "Initial dimensions of cube are equal. Use the formula: Surface Area = 2(ab + bc + ca).",
        "traditional": {
            "intro": "Define initial side lengths as 1 and evaluate the new surface area using the formula.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial dimensions be $a = b = c = 1$. Surface Area = $2(1 \\times 1 + 1 \\times 1 + 1 \\times 1) = 6$."
                },
                {
                    "num": "Step 2",
                    "desc": "New dimensions: $a' = 1.05$, $b' = 1.05$, $c' = 1.20$."
                },
                {
                    "num": "Step 3",
                    "desc": "New Surface Area = $2(1.05 \\times 1.05 + 1.05 \\times 1.2 + 1.2 \\times 1.05)$."
                },
                {
                    "num": "Step 4",
                    "desc": "Calculate terms: $1.1025 + 1.26 + 1.26 = 3.6225$. New Area = $2 \\times 3.6225 = 7.245$."
                },
                {
                    "num": "Step 5",
                    "desc": "Percentage change = $[(7.245 - 6) / 6] \\times 100 = (1.245 / 6) \\times 100 = 20.75\\%$."
                }
            ],
            "highlight": "20.75% (Option d)"
        },
        "shortcut": {
            "intro": "Find the average percentage change of the products of two dimensions.",
            "steps": [
                {
                    "num": "Product changes",
                    "desc": "- ab changes by: $5 + 5 + 0.25 = 10.25\\%$<br>- bc changes by: $5 + 20 + 1 = 26\\%$<br>- ca changes by: $20 + 5 + 1 = 26\\%$"
                },
                {
                    "num": "Average",
                    "desc": "Net Surface Area change = Average of the three changes = $(10.25 + 26 + 26) / 3 = 62.25 / 3 = 20.75\\%$."
                }
            ],
            "highlight": "Average: (10.25 + 26 + 26) / 3 = 20.75%."
        }
    },
    {
        "id": "sum2_32",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q32",
        "title": "Comparative salary multipliers",
        "question": "A's salary is first increased by 25% and then decreased by 20%. The result is the same as B's salary increased by 20% and then reduced by 25%. Find the ratio of B's salary to that of A's.",
        "hint": "Represent the successive changes for both A and B as decimal factors and equate them.",
        "traditional": {
            "intro": "Set up equations representing the final salaries of both A and B and find their ratio.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Final salary of A = $A \\times 1.25 \\times 0.80 = 1.0A$."
                },
                {
                    "num": "Step 2",
                    "desc": "Final salary of B = $B \\times 1.20 \\times 0.75 = 0.90B$."
                },
                {
                    "num": "Step 3",
                    "desc": "Equate the results: $1.0A = 0.90B$."
                },
                {
                    "num": "Step 4",
                    "desc": "Find ratio B to A: $B / A = 1 / 0.9 = 10/9$."
                }
            ],
            "highlight": "10:9 (Option c)"
        },
        "shortcut": {
            "intro": "Analyze net percentage changes mentally.",
            "steps": [
                {
                    "num": "A change",
                    "desc": "+25% then -20% is a net change of $25 - 20 - (25 \\times 20)/100 = 0\\%$ (remains A)."
                },
                {
                    "num": "B change",
                    "desc": "+20% then -25% is a net change of $20 - 25 - (20 \\times 25)/100 = -10\\%$ (becomes 0.9B)."
                },
                {
                    "num": "Equate",
                    "desc": "$A = 0.9B \\Rightarrow B/A = 10/9$."
                }
            ],
            "highlight": "B:A = 10:9."
        }
    },
    {
        "id": "sum2_33",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q33",
        "title": "Milk Dilution Limit Check",
        "question": "The minimum quantity of milk in litres (in whole number) that should be mixed in a mixture of 60 litres in which the initial ratio of milk to water is 1:4 so that the resulting mixture has 15% milk is:",
        "hint": "Check the initial percentage of milk. Adding pure milk can only increase the concentration, not decrease it.",
        "traditional": {
            "intro": "Calculate initial milk quantity and analyze the concentration trend.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Initial mixture = 60 litres. Milk : Water = 1:4. Milk = 12 litres (20%)."
                },
                {
                    "num": "Step 2",
                    "desc": "Let the added milk quantity be $M$ litres."
                },
                {
                    "num": "Step 3",
                    "desc": "New milk concentration = $(12 + M) / (60 + M)$."
                },
                {
                    "num": "Step 4",
                    "desc": "We want concentration to equal 15% (0.15):<br>$(12 + M) / (60 + M) = 0.15 \\Rightarrow 12 + M = 9 + 0.15M$<br>$0.85M = -3$."
                },
                {
                    "num": "Step 5",
                    "desc": "Since $M$ is negative, it is impossible to reduce the milk concentration by adding milk."
                }
            ],
            "highlight": "This is not possible (Option d)"
        },
        "shortcut": {
            "intro": "Deduce concentration bounds conceptually.",
            "steps": [
                {
                    "num": "Initial %",
                    "desc": "Initial milk is $1/5 = 20\\%$."
                },
                {
                    "num": "Trend",
                    "desc": "Adding pure milk (100% concentration) will always pull the overall concentration upwards (between 20% and 100%)."
                },
                {
                    "num": "Conclusion",
                    "desc": "It can never decrease to 15%."
                }
            ],
            "highlight": "Initial is 20% -> Adding milk can never reduce it to 15%."
        }
    },
    {
        "id": "sum2_34",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q34",
        "title": "Income Rise with constant Savings",
        "question": "A person saves 6% of his income. Two years later, his income shoots up by 15% but his savings remain the same. Find the hike in his expenditure.",
        "hint": "Expenditure = Income - Savings. Use initial base of 100 to make the math easy.",
        "traditional": {
            "intro": "Determine initial and final incomes and expenditures, then calculate the percentage change.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial income = 100. Savings = 6, Expenditure = 94."
                },
                {
                    "num": "Step 2",
                    "desc": "New income = 115. Savings = 6 (unchanged)."
                },
                {
                    "num": "Step 3",
                    "desc": "New expenditure = $115 - 6 = 109$."
                },
                {
                    "num": "Step 4",
                    "desc": "Increase in expenditure = $109 - 94 = 15$."
                },
                {
                    "num": "Step 5",
                    "desc": "Percentage hike in expenditure = $(15 / 94) \\times 100 \\approx 15.957\\%$."
                }
            ],
            "highlight": "15.95% (Option a)"
        },
        "shortcut": {
            "intro": "Find the ratio of income increase to initial expenditure.",
            "steps": [
                {
                    "num": "Income rise",
                    "desc": "Income rises by 15 units. Since savings are constant, this entire 15 units goes into expenditure."
                },
                {
                    "num": "Solve",
                    "desc": "Hike in expenditure = $15 / 94 \\approx 15.95\\%$."
                }
            ],
            "highlight": "Direct: 15 / 94 = 15.95%."
        }
    },
    {
        "id": "sum2_35",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q35",
        "title": "Uniform scaling of Variables",
        "question": "A is 50% more than B, C is 2/3 of A and D is 60% more than C. Now, each of A, B, C and D is increased by 10%. Find what percent of B is D (after the increase).",
        "hint": "Since all variables scale by the same percentage (10%), their relative ratios do not change.",
        "traditional": {
            "intro": "Assume B = 100, calculate other values, apply the 10% increase, and check the ratio.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let B = 100."
                },
                {
                    "num": "Step 2",
                    "desc": "A = 150 (50% more than B)."
                },
                {
                    "num": "Step 3",
                    "desc": "C = 2/3 of A = $2/3 \\times 150 = 100$."
                },
                {
                    "num": "Step 4",
                    "desc": "D = 160 (60% more than C)."
                },
                {
                    "num": "Step 5",
                    "desc": "Even after all values increase by 10%, their relative ratio remains the same:<br>D as a percent of B = $(D / B) \\times 100 = (160 / 100) \\times 100 = 160\\%$."
                }
            ],
            "highlight": "160% (Option b)"
        },
        "shortcut": {
            "intro": "Observe the uniform growth factor.",
            "steps": [
                {
                    "num": "Observe ratio",
                    "desc": "$A = 1.5B$, $C = 2/3 A = B$, $D = 1.6C = 1.6B$."
                },
                {
                    "num": "Growth",
                    "desc": "All terms scale by 1.1, which cancels out when computing ratios.<br>So $D/B = 1.6 \\Rightarrow 160\\%$."
                }
            ],
            "highlight": "Uniform 10% increase cancels: D is 160% of B."
        }
    },
    {
        "id": "sum2_36",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q36",
        "title": "Joint budget expenditure allocation",
        "question": "A and B have, between them, ₹1200. A spends 12% of his money while B spends 20% of his money. They are then left with a sum that constitutes 85% of the whole sum. Find what amount is left with A.",
        "hint": "Check the initial amount of A using weighted average or substitution, and then calculate A's remaining amount.",
        "traditional": {
            "intro": "Set up equations for the initial and final sums and solve.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial amounts be $A$ and $B$. $A + B = 1200$."
                },
                {
                    "num": "Step 2",
                    "desc": "A spends 12% (leaves 88%), B spends 20% (leaves 80%).<br>Remaining = $0.88A + 0.80B = 85\\%$ of 1200 = 1020."
                },
                {
                    "num": "Step 3",
                    "desc": "Substitute $B = 1200 - A$:<br>$0.88A + 0.80(1200 - A) = 1020$."
                },
                {
                    "num": "Step 4",
                    "desc": "Simplify: $0.88A + 960 - 0.80A = 1020$<br>$0.08A = 60 \\Rightarrow A = 750$."
                },
                {
                    "num": "Step 5",
                    "desc": "Amount left with A = 88% of $750 = 0.88 \\times 750 = ₹660$."
                }
            ],
            "highlight": "₹660 (Option d)"
        },
        "shortcut": {
            "intro": "Use the allegation method to find the initial split.",
            "steps": [
                {
                    "num": "Spent rates",
                    "desc": "Overall spent = $100\\% - 85\\% = 15\\%$."
                },
                {
                    "num": "Allegation",
                    "desc": "- A spends 12% (difference from 15% is 5 parts)<br>- B spends 20% (difference from 15% is 3 parts)<br>Ratio of A to B = $(20-15) : (15-12) = 5 : 3$."
                },
                {
                    "num": "Initial A",
                    "desc": "Initial A = $1200 \\times 5 / 8 = 750$."
                },
                {
                    "num": "Amount left A",
                    "desc": "Remaining A = $750 \\times 0.88 = ₹660$."
                }
            ],
            "highlight": "Remaining A = 750 * 0.88 = ₹660."
        }
    },
    {
        "id": "sum2_37",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q37",
        "title": "Equal absolute spend percentage",
        "question": "Maya has ₹M with her and her friend Chanda has ₹C with her. Maya spends 12% of her money and Chanda also spends the same amount as Maya did. What percentage of her money did Chanda spend?",
        "hint": "Set up an equation equating Maya's absolute spend to Chanda's absolute spend.",
        "traditional": {
            "intro": "Express both spends in terms of variables and solve for Chanda's rate.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Maya spends = 12% of $M = 0.12M$."
                },
                {
                    "num": "Step 2",
                    "desc": "Chanda spends the same amount = $0.12M$."
                },
                {
                    "num": "Step 3",
                    "desc": "Chanda's percentage spent = $(\\text{Amount Spent} / C) \\times 100$."
                },
                {
                    "num": "Step 4",
                    "desc": "Substitute Chanda's spend: $(0.12M / C) \\times 100 = 12M / C$."
                }
            ],
            "highlight": "12M / C (Option c)"
        },
        "shortcut": {
            "intro": "Write the direct algebraic fraction directly.",
            "steps": [
                {
                    "num": "Direct form",
                    "desc": "Spend = $0.12M$. Percentage of C = $(0.12M / C) \\times 100 = 12M / C$."
                }
            ],
            "highlight": "12M/C"
        }
    },
    {
        "id": "sum2_38",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q38",
        "title": "Village Literate demographic split",
        "question": "In a village consisting of p persons, x% can read and write. Of the males alone y%, and of the females alone z% can read and write. Find the number of males in the village in terms of p, x, y and z if z < y.",
        "hint": "Use weighted average or set up simultaneous equations with M (males) and F (females).",
        "traditional": {
            "intro": "Define variables and form the literate equation.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let number of males = $M$, females = $F$. $M + F = p \\Rightarrow F = p - M$."
                },
                {
                    "num": "Step 2",
                    "desc": "Total literates = $p \\times x/100$."
                },
                {
                    "num": "Step 3",
                    "desc": "Literate equation: $M \\times y/100 + F \\times z/100 = p \\times x/100 \\Rightarrow My + Fz = px$."
                },
                {
                    "num": "Step 4",
                    "desc": "Substitute $F$: $My + (p - M)z = px$."
                },
                {
                    "num": "Step 5",
                    "desc": "Solve for $M$: $M(y - z) + pz = px \\Rightarrow M(y - z) = p(x - z)$."
                },
                {
                    "num": "Step 6",
                    "desc": "$M = p(x - z) / (y - z)$."
                }
            ],
            "highlight": "p(x - z) / (y - z) (Option d)"
        },
        "shortcut": {
            "intro": "Use allegation method ratio to find the split.",
            "steps": [
                {
                    "num": "Allegation",
                    "desc": "- Males literate = $y\\%$, Females = $z\\%$, overall = $x\\%$."
                },
                {
                    "num": "Ratio",
                    "desc": "Males : Females = $(x-z) : (y-x)$."
                },
                {
                    "num": "Solve",
                    "desc": "Males share = $(x-z) / [(x-z) + (y-x)] = (x-z) / (y-z)$.<br>Number of males = $p \\times (x-z) / (y-z)$."
                }
            ],
            "highlight": "Males = p * (x - z) / (y - z)."
        }
    },
    {
        "id": "sum2_39",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q39",
        "title": "Theatre ticket price discount",
        "question": "In order to maximise his gain, a theatre owner decides to reduce the price of tickets by 20% and as a result of this, the sales of tickets increased by 40%. If, as a result of these changes, he is able to increase his weekly collection by ₹1,68,000, find by what value did the gross collection increase per day.",
        "hint": "Check the weekly collection increase rate using successive percentages, then divide the weekly increase by 7.",
        "traditional": {
            "intro": "Formulate initial weekly collection, apply multipliers, and find daily increase.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial weekly collection = $C$."
                },
                {
                    "num": "Step 2",
                    "desc": "New collection = $C \\times 0.80 \\times 1.40 = 1.12C$."
                },
                {
                    "num": "Step 3",
                    "desc": "Increase = $0.12C = 1,68,000 \\Rightarrow C = 14,00,000$."
                },
                {
                    "num": "Step 4",
                    "desc": "Weekly increase is given as ₹1,68,000."
                },
                {
                    "num": "Step 5",
                    "desc": "Daily increase = Weekly increase / 7 = $1,68,000 / 7 = ₹24,000$."
                }
            ],
            "highlight": "₹24,000 (Option c)"
        },
        "shortcut": {
            "intro": "Do not solve for the total collection; divide the weekly increase directly.",
            "steps": [
                {
                    "num": "Concept",
                    "desc": "Weekly collection increase = ₹1,68,000."
                },
                {
                    "num": "Daily",
                    "desc": "Gross collection increase per day = Weekly increase / 7 = 1,68,000 / 7 = ₹24,000."
                }
            ],
            "highlight": "Gross daily increase = 1,68,000 / 7 = ₹24,000."
        }
    },
    {
        "id": "sum2_40",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q40",
        "title": "Three Localities literacy Rate",
        "question": "In a town consisting of three localities A, B and C, the population of the three localities A, B and C are in the ratio 9:8:3. In locality A, 80% of the people are literate, in locality B, 30% of the people are illiterate. If 90% people in locality C are literate, find the percentage literacy in that town.",
        "hint": "Check the literacy rate in locality B. Since 30% are illiterate, 70% are literate.",
        "traditional": {
            "intro": "Calculate literate numbers for each locality and find overall average.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let populations be A = 90, B = 80, C = 30. Total population = 200."
                },
                {
                    "num": "Step 2",
                    "desc": "Literates in A = 80% of 90 = 72."
                },
                {
                    "num": "Step 3",
                    "desc": "Literates in B = 70% of 80 = 56 (since 30% are illiterate)."
                },
                {
                    "num": "Step 4",
                    "desc": "Literates in C = 90% of 30 = 27."
                },
                {
                    "num": "Step 5",
                    "desc": "Total literates = $72 + 56 + 27 = 155$."
                },
                {
                    "num": "Step 6",
                    "desc": "Town literacy percentage = $(155 / 200) \\times 100 = 77.5\\%$."
                }
            ],
            "highlight": "None of these (Option d - correct value is 77.5%)"
        },
        "shortcut": {
            "intro": "Use weighted average formula.",
            "steps": [
                {
                    "num": "Weighted %",
                    "desc": "Avg = $[(9 \\times 80) + (8 \\times 70) + (3 \\times 90)] / 20$<br>Avg = $[720 + 560 + 270] / 20 = 1550 / 20 = 77.5\\%$."
                }
            ],
            "highlight": "Average: (720 + 560 + 270) / 20 = 77.5%."
        }
    },
    {
        "id": "sum2_41",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q41",
        "title": "Fraction change algebra",
        "question": "A fraction is such that if the double of the numerator and the triple of the denominator is changed by +10% and -30% respectively then we get 11% of 16/21. Find the fraction.",
        "hint": "Let the original fraction be N/D and write out the algebraic transformations.",
        "traditional": {
            "intro": "Construct an equation using fraction modifications and solve for N/D.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let original fraction be $N/D$."
                },
                {
                    "num": "Step 2",
                    "desc": "New numerator = $2N \\times 1.1 = 2.2N$."
                },
                {
                    "num": "Step 3",
                    "desc": "New denominator = $3D \\times 0.7 = 2.1D$."
                },
                {
                    "num": "Step 4",
                    "desc": "New fraction: $2.2N / 2.1D = 22N / 21D$."
                },
                {
                    "num": "Step 5",
                    "desc": "Given: $22N / 21D = (11/100) \\times (16/21)$."
                },
                {
                    "num": "Step 6",
                    "desc": "Simplify: $22N / D = 176 / 100 \\Rightarrow N/D = 176 / 2200 = 8 / 100 = 2/25$."
                }
            ],
            "highlight": "2/25 (Option b)"
        },
        "shortcut": {
            "intro": "Cancel coefficients directly.",
            "steps": [
                {
                    "num": "Simplify",
                    "desc": "$(2.2N) / (2.1D) = 0.11 \\times (16/21)$"
                },
                {
                    "num": "Solve",
                    "desc": "$(2.2/2.1) \\times (N/D) = (1.76 / 21) \\Rightarrow 2.2(N/D) = 0.176$<br>$N/D = 0.176 / 2.2 = 0.08 = 2/25$."
                }
            ],
            "highlight": "N/D = 2/25."
        }
    },
    {
        "id": "sum2_42",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q42",
        "title": "Passing threshold comparative grades",
        "question": "To pass an examination, 40% marks are essential. A obtains 10% marks less than the pass marks and B obtains 11.11% marks less than A. What percent less than the sum of A's and B's marks should C obtain to pass the exam?",
        "hint": "Set maximum marks as 100, calculate pass marks, then solve for A, B, and C.",
        "traditional": {
            "intro": "Convert word statements into marks and compute C's relative percentage.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let total marks = 100. Pass marks = 40."
                },
                {
                    "num": "Step 2",
                    "desc": "A's score = $40 - 10\\%$ of 40 = 36."
                },
                {
                    "num": "Step 3",
                    "desc": "B's score = $36 - 11.11\\%$ of 36. Note $11.11\\% = 1/9$, so B's score = $36 - 4 = 32$."
                },
                {
                    "num": "Step 4",
                    "desc": "Sum of A and B = $36 + 32 = 68$."
                },
                {
                    "num": "Step 5",
                    "desc": "C's required score to pass = 40."
                },
                {
                    "num": "Step 6",
                    "desc": "C's score compared to (A+B) = $[(68 - 40) / 68] \\times 100 = (28/68) \\times 100 = 41.176\\%$."
                },
                {
                    "num": "Step 7",
                    "desc": "Write as fraction: $41(3/17)\\%$."
                }
            ],
            "highlight": "41(3/17)% (Option b)"
        },
        "shortcut": {
            "intro": "Use simple fractional parts.",
            "steps": [
                {
                    "num": "Fractions",
                    "desc": "Pass = 40. A = 36. B = $36 \\times 8/9 = 32$. Sum = 68. C = 40."
                },
                {
                    "num": "Solve",
                    "desc": "Percentage difference = $28 / 68 = 7/17 = 41.17\\%$."
                }
            ],
            "highlight": "7/17 = 41 3/17%."
        }
    },
    {
        "id": "sum2_43",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q43",
        "title": "Hourly Wages & Work hours change",
        "question": "The hourly wages of a female labour are increased by 12.5%, whereas the weekly working hours are reduced by 8%. Find the percentage change in the weekly wages if she was getting ₹1200 per week for 50 hours previously.",
        "hint": "The initial amount (₹1200) and hours (50) are redundant. Use successive percentage changes directly.",
        "traditional": {
            "intro": "Write the product of the rate change factors.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial wage per hour be $W$, and working hours be $H$."
                },
                {
                    "num": "Step 2",
                    "desc": "Initial weekly wage = $W \\times H$."
                },
                {
                    "num": "Step 3",
                    "desc": "New hourly wage = $1.125 W$."
                },
                {
                    "num": "Step 4",
                    "desc": "New working hours = $0.92 H$."
                },
                {
                    "num": "Step 5",
                    "desc": "New weekly wage = $1.125 \\times 0.92 \\times (WH) = 1.035 WH$."
                },
                {
                    "num": "Step 6",
                    "desc": "Percentage increase = $3.5\\%$."
                }
            ],
            "highlight": "+3.5% (Option a)"
        },
        "shortcut": {
            "intro": "Convert percentages to fractions to multiply mentally.",
            "steps": [
                {
                    "num": "Fractions",
                    "desc": "12.5% increase = $9/8$. 8% decrease = $23/25$."
                },
                {
                    "num": "Product",
                    "desc": "$9/8 \\times 23/25 = 207 / 200 = 1.035$."
                },
                {
                    "num": "Change",
                    "desc": "1.035 multiplier represents a +3.5% increase."
                }
            ],
            "highlight": "Multiplier: 9/8 * 92/100 = 1.035 => +3.5%."
        }
    },
    {
        "id": "sum2_44",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q44",
        "title": "Three-way comparative variables",
        "question": "Two numbers X and Y are 20% and 28% less than a third number Z. Find by what percentage is the number Y less than the number X.",
        "hint": "Assume Z = 100 and evaluate X and Y.",
        "traditional": {
            "intro": "Assume a starting value for Z and solve.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let Z = 100."
                },
                {
                    "num": "Step 2",
                    "desc": "X = 80 (20% less than Z)."
                },
                {
                    "num": "Step 3",
                    "desc": "Y = 72 (28% less than Z)."
                },
                {
                    "num": "Step 4",
                    "desc": "Difference between X and Y = $80 - 72 = 8$."
                },
                {
                    "num": "Step 5",
                    "desc": "Percentage difference relative to X = $(8 / 80) \\times 100 = 10\\%$."
                }
            ],
            "highlight": "10% (Option c)"
        },
        "shortcut": {
            "intro": "Determine the fraction relative to X.",
            "steps": [
                {
                    "num": "Values",
                    "desc": "X = 0.8Z, Y = 0.72Z."
                },
                {
                    "num": "Solve",
                    "desc": "Y is less than X by: $(0.8 - 0.72) / 0.8 = 0.08 / 0.8 = 10\\%$."
                }
            ],
            "highlight": "Direct: 0.08 / 0.8 = 10%."
        }
    },
    {
        "id": "sum2_45",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q45",
        "title": "Successive x% price change",
        "question": "Price of a commodity is first increased by x% and then decreased by x%. If the new price is K/100, find the original price.",
        "hint": "Let original price be P. The successive multipliers will be (1 + x/100) and (1 - x/100).",
        "traditional": {
            "intro": "Write out the successive multiplier equation and solve for P.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let the original price be $P$."
                },
                {
                    "num": "Step 2",
                    "desc": "Successive multipliers: $(1 + x/100)(1 - x/100) = (1 - x^2 / 10000)$."
                },
                {
                    "num": "Step 3",
                    "desc": "We are given the final price is $K/100$:<br>$P \\times (1 - x^2 / 10000) = K / 100$."
                },
                {
                    "num": "Step 4",
                    "desc": "Simplify: $P \\times (10000 - x^2) / 10000 = K / 100$<br>$P \\times (10000 - x^2) / 100 = K$."
                },
                {
                    "num": "Step 5",
                    "desc": "Solve for $P$: $P = 100K / (10000 - x^2) = 100K / (100^2 - x^2)$."
                }
            ],
            "highlight": "100K / (100^2 - x^2) (Option d)"
        },
        "shortcut": {
            "intro": "Use difference of squares formula.",
            "steps": [
                {
                    "num": "Formula",
                    "desc": "New price = $P \\times (1 - x^2 / 10000) = K/100$."
                },
                {
                    "num": "Solve",
                    "desc": "$P = (K/100) / [ (10000 - x^2)/10000 ] = 100K / (10000 - x^2)$."
                }
            ],
            "highlight": "P = 100K / (10000 - x^2)"
        }
    },
    {
        "id": "sum2_46",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q46",
        "title": "Salary hike & Tax rate reduction",
        "question": "The salary of a person is increased by ₹4800 and the rate of tax is decreased by 2% from 12% to 10%. The effect is such that he is now paying the same tax as before. If in both the cases, the standard tax deduction is fixed at 20% of the total income, find the increased salary.",
        "hint": "Equate the absolute tax paid in both scenarios. Remember standard deduction is 20% in both.",
        "traditional": {
            "intro": "Formulate tax equations for both salaries and solve.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let initial salary be $S$. Taxable income is $80\\%$ of $S$ (deduction is 20%)."
                },
                {
                    "num": "Step 2",
                    "desc": "Initial tax paid = $12\\%$ of $0.8S = 0.096S$."
                },
                {
                    "num": "Step 3",
                    "desc": "New salary = $S + 4800$. Taxable income is $0.8(S + 4800)$."
                },
                {
                    "num": "Step 4",
                    "desc": "New tax paid = $10\\%$ of $0.8(S + 4800) = 0.08S + 384$."
                },
                {
                    "num": "Step 5",
                    "desc": "Equate tax paid: $0.096S = 0.08S + 384 \\Rightarrow 0.016S = 384$."
                },
                {
                    "num": "Step 6",
                    "desc": "Solve for $S$: $S = 384 / 0.016 = 24,000$."
                },
                {
                    "num": "Step 7",
                    "desc": "Increased salary = $S + 4800 = 24,000 + 4,800 = ₹28,800$."
                }
            ],
            "highlight": "₹28,800 (Option d - None of these/actual amount is 28,800)"
        },
        "shortcut": {
            "intro": "Use ratio of tax rates to find the salary ratio.",
            "steps": [
                {
                    "num": "Ratio of rates",
                    "desc": "Tax rate drops from 12% to 10% (Ratio 6 : 5)."
                },
                {
                    "num": "Salary ratio",
                    "desc": "Since tax is same, taxable salaries must be in inverse ratio 5 : 6."
                },
                {
                    "num": "Solve",
                    "desc": "Difference of 1 part = ₹4,800.<br>New salary = 6 parts = $6 \\times 4,800 = ₹28,800$."
                }
            ],
            "highlight": "Direct: 6 * 4800 = 28,800."
        }
    },
    {
        "id": "sum2_47",
        "blockId": "arithmetic",
        "blockName": "Arithmetic (Percentages)",
        "lod": "LOD 2 (Advanced)",
        "year": "Arun Sharma Q47",
        "title": "Reena's Radio VAT reduction",
        "question": "Reena goes to a shop to buy a radio costing ₹2568. The rate of sales tax is 7% and the final value is rounded off to the next higher integer. She tells the shopkeeper to reduce the price of the radio so that she has to pay ₹2568 inclusive of sales tax. Find the reduction needed in the price of the radio.",
        "hint": "Let the reduced price be P. P inclusive of 7% sales tax must equal ₹2568.",
        "traditional": {
            "intro": "Solve for the reduced base price and compute the difference from the original.",
            "steps": [
                {
                    "num": "Step 1",
                    "desc": "Let the reduced price before tax be $P$."
                },
                {
                    "num": "Step 2",
                    "desc": "Inclusive of 7% tax, price paid is $P \\times 1.07 = 2568$."
                },
                {
                    "num": "Step 3",
                    "desc": "Solve for $P$: $P = 2568 / 1.07 = ₹2400$."
                },
                {
                    "num": "Step 4",
                    "desc": "Reduction needed = Original price - Reduced price = $2568 - 2400 = ₹168$."
                }
            ],
            "highlight": "₹168 (Option a)"
        },
        "shortcut": {
            "intro": "Use the fraction form of the tax base.",
            "steps": [
                {
                    "num": "Formula",
                    "desc": "Reduction = $2568 - (2568 / 1.07)$."
                },
                {
                    "num": "Simplify",
                    "desc": "Reduction = $2568 \\times (0.07 / 1.07) = 2400 \\times 0.07 = ₹168$."
                }
            ],
            "highlight": "Reduction = 2568 * 7 / 107 = 168."
        }
    }
];
