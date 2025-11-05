# Artificial Intelligence - Strategic Study Plan (Target: 35+ Marks)

## 📊 Overall Strategy

- **Full Marks**: 60 (2 Long × 10 + 8 Short × 5)
- **Pass Marks**: 24
- **Your Target**: 35+ marks
- **Strategy**: Focus on high-frequency topics with guaranteed scoring potential

---

## 🎯 Question Pattern Analysis (7 Sets Analyzed)

### Section A - Long Questions (Attempt 2 out of 3) - 20 Marks Total

| Topic/Chapter                                                  | Frequency | Years Appeared                          | Priority       | Expected Marks |
| -------------------------------------------------------------- | --------- | --------------------------------------- | -------------- | -------------- |
| **Resolution in Predicate Logic (FOPL)**                       | 6/7       | 2076, 2078, 2080, 2080_new, 2081, Model | ⭐⭐⭐ HIGHEST | 10 marks       |
| **Informed/Heuristic Search** (A\*, Greedy, Hill Climbing)     | 6/7       | 2076, 2078, 2080, 2080_new, 2081, Model | ⭐⭐⭐ HIGHEST | 10 marks       |
| **Artificial Neural Networks** (Perceptron, Backprop, Hebbian) | 5/7       | 2076, 2078, 2080, 2081, Model           | ⭐⭐⭐ HIGH    | 10 marks       |
| **Uninformed Search** (DFS, BFS, DLS, IDS, UCS)                | 2/7       | 2078, 2080                              | ⭐⭐ MEDIUM    | 10 marks       |
| **Machine Learning** (Naive Bayes)                             | 1/7       | 2080_new                                | ⭐⭐ MEDIUM    | 10 marks       |
| **Expert System Development**                                  | 1/7       | 2079                                    | ⭐ LOW         | 10 marks       |
| **Constraint Satisfaction Problem**                            | 1/7       | 2079                                    | ⭐ LOW         | 10 marks       |

### Section B - Short Questions (Attempt 8 out of 12) - 40 Marks Total

| Topic/Chapter                                       | Frequency | Priority       | Expected Marks |
| --------------------------------------------------- | --------- | -------------- | -------------- |
| **Agents & PEAS Framework**                         | 6/7       | ⭐⭐⭐ MUST DO | 5 marks        |
| **Natural Language Processing** (Steps/Analysis)    | 6/7       | ⭐⭐⭐ MUST DO | 5 marks        |
| **Knowledge Representation** (Semantic Net, Frames) | 5/7       | ⭐⭐⭐ HIGH    | 5 marks        |
| **Game Search** (Min-Max, Alpha-Beta)               | 4/7       | ⭐⭐⭐ HIGH    | 5 marks        |
| **Expert Systems** (Components)                     | 4/7       | ⭐⭐⭐ HIGH    | 5 marks        |
| **Genetic Algorithms** (Operators)                  | 4/7       | ⭐⭐⭐ HIGH    | 5 marks        |
| **Turing Test / AI Perspectives**                   | 4/7       | ⭐⭐ MEDIUM    | 5 marks        |
| **Search Strategies** (UCS, DLS, State Space)       | 3/7       | ⭐⭐ MEDIUM    | 5 marks        |
| **Machine Learning Basics** (Types, Examples)       | 3/7       | ⭐⭐ MEDIUM    | 5 marks        |
| **Fuzzy Logic**                                     | 2/7       | ⭐⭐ MEDIUM    | 5 marks        |
| **Probability & Bayesian Networks**                 | 2/7       | ⭐⭐ MEDIUM    | 5 marks        |
| **Forward Chaining**                                | 2/7       | ⭐⭐ MEDIUM    | 5 marks        |
| **Machine Vision & Robotics**                       | 2/7       | ⭐ LOW         | 5 marks        |
| **Constraint Satisfaction Problem**                 | 1/7       | ⭐ LOW         | 5 marks        |
| **Unification & Lifting**                           | 1/7       | ⭐ LOW         | 5 marks        |

---

## 🎓 Unit-Wise Importance & Expected Marks

| Unit                                     | Topics                                                        | Importance | Expected Questions   | Target Marks |
| ---------------------------------------- | ------------------------------------------------------------- | ---------- | -------------------- | ------------ |
| **Unit 4: Knowledge Representation**     | FOPL Resolution, Semantic Nets, Frames, Scripts, Fuzzy Logic  | ⭐⭐⭐⭐⭐ | 1 Long + 2-3 Short   | 20-25 marks  |
| **Unit 3: Problem Solving by Searching** | A\*, Greedy, Hill Climbing, Min-Max, DLS, IDS                 | ⭐⭐⭐⭐⭐ | 1 Long + 2-3 Short   | 20-25 marks  |
| **Unit 5: Machine Learning**             | ANN, Naive Bayes, Genetic Algorithms, Supervised/Unsupervised | ⭐⭐⭐⭐   | 1 Long + 2-3 Short   | 15-20 marks  |
| **Unit 6: Applications**                 | Expert Systems, NLP, Machine Vision, Robotics                 | ⭐⭐⭐     | 0-1 Long + 2-3 Short | 10-15 marks  |
| **Unit 2: Intelligent Agents**           | PEAS, Agent Types, Environment Types                          | ⭐⭐⭐     | 0 Long + 1-2 Short   | 5-10 marks   |
| **Unit 1: Introduction**                 | AI Perspectives, Turing Test, Foundations                     | ⭐⭐       | 0 Long + 1 Short     | 5 marks      |

---

## 📚 Detailed Topic Breakdown & Study Roadmap

### 🔥 PRIORITY 1: Must-Study Topics (Target: 25-30 Marks)

#### 1. Resolution in FOPL (Unit 4) - **6/7 papers, Long Question**

**Why This Topic?**

- Appears in almost every exam as a **10-mark numerical problem**
- Mechanical, step-by-step process = **full marks if practiced**
- Conversion steps are always the same

**What to Master:**

1. **Convert English → FOPL**

   - Universal quantifiers (∀): "All X are Y" → ∀x (X(x) → Y(x))
   - Existential quantifiers (∃): "Some X is Y" → ∃x (X(x) ∧ Y(x))
   - Negations: "No X is Y" → ∀x (X(x) → ¬Y(x))

2. **Convert FOPL → CNF (Clausal Form)**

   - Eliminate implications: (P → Q) becomes (¬P ∨ Q)
   - Move negations inward (De Morgan's laws)
   - Standardize variables (rename to avoid conflicts)
   - Skolemization (remove existential quantifiers)
   - Drop universal quantifiers
   - Distribute ∧ over ∨ to get clauses

3. **Apply Resolution Algorithm**
   - Negate the conclusion
   - Find complementary literals
   - Resolve pairs to get new clauses
   - Repeat until you get empty clause (⊥) = proof complete

**Past Question Examples:**

- 2076: Pugu-Anmol-Star problem
- 2078: Traffic-Driver-Smart problem
- 2080: Students-Friends-Smart problem
- 2080_new: Sushma-Courses-Likes problem
- 2081: Movies-Script-Hit problem
- Model: Over-smart-Stupid-Naughty problem

**Expected Score:** 9-10/10 if practiced

---

#### 2. Informed/Heuristic Search (Unit 3) - **6/7 papers, Long Question**

**Why This Topic?**

- Appears as **10-mark numerical problem** with state space graph
- Easy scoring: just trace the algorithm step-by-step
- Diagrams + tables = full marks

**What to Master:**

1. **A\* Search**

   - f(n) = g(n) + h(n)
   - g(n) = actual cost from start to n
   - h(n) = heuristic estimate from n to goal
   - Always picks node with lowest f(n)
   - **Complete and optimal** if h(n) is admissible

2. **Greedy Best-First Search**

   - Only uses h(n) (ignores g(n))
   - Picks node closest to goal by heuristic
   - Fast but **not optimal, not complete**

3. **Hill Climbing**
   - Local search: only considers immediate neighbors
   - Moves to neighbor with best heuristic
   - **Problems:** Local maxima, plateaus, ridges

**How to Solve:**

- Draw/label the given state space graph
- Create a table: Node | g(n) | h(n) | f(n) | Path
- For each step, expand the best node
- Mark visited nodes
- Show final path and cost

**Past Question Examples:**

- 2076: Compare Greedy vs A\* (completeness proof)
- 2078: DLS & IDS (but know A\*/Greedy as backup)
- 2079: Hill climbing with limitations
- 2080: Greedy on puzzle problem
- 2080_new: A\* vs Greedy comparison
- 2081: Hill climbing with incompleteness demo
- Model: Greedy & A\* with heuristics

**Expected Score:** 8-10/10 with clear tables/diagrams

---

#### 3. Artificial Neural Networks (Unit 5) - **5/7 papers, Long Question**

**Why This Topic?**

- Appears as **10-mark long question** frequently
- Three sub-topics: Mathematical Model, Perceptron, Backpropagation
- Algorithmic answers = guaranteed marks

**What to Master:**

**A. Mathematical Model of ANN**

```
Output = f(Σ(wi × xi) + bias)

where:
- xi = inputs
- wi = weights
- f = activation function (sigmoid, step, linear)
- Σ(wi × xi) = weighted sum
```

- Draw a neuron diagram: inputs → weights → sum → activation → output
- Explain: synapse = weight, dendrite = input, axon = output

**B. Activation Functions**

1. **Step Function:** 0 if x < threshold, 1 otherwise
2. **Sigmoid:** f(x) = 1/(1 + e^(-x)) → smooth, differentiable
3. **Linear:** f(x) = x

**C. Perceptron Learning Algorithm**

```
1. Initialize weights randomly
2. For each training example (x, target):
   a. Calculate output = f(Σ(wi × xi))
   b. Error = target - output
   c. Update weights: wi(new) = wi(old) + η × error × xi
   d. η = learning rate (e.g., 0.1)
3. Repeat until error is small
```

- Can solve linearly separable problems (AND, OR)
- Cannot solve XOR (non-linearly separable)

**D. Backpropagation Algorithm (for Multi-layer ANN)**

```
1. Forward Pass:
   - Calculate outputs layer by layer
   - Use sigmoid: f(x) = 1/(1 + e^(-x))

2. Calculate Error at Output Layer:
   - Error = Target - Actual Output
   - Delta = Error × f'(output) where f'(x) = f(x)(1 - f(x))

3. Backpropagate Error:
   - For hidden layers: delta_hidden = delta_output × weight × f'(hidden)

4. Update Weights:
   - w_new = w_old + η × delta × input

5. Repeat for all training examples
```

**E. Hebbian Learning**

- "Neurons that fire together, wire together"
- Weight update: Δwi = η × xi × y
- Simpler than backprop, used for unsupervised learning

**Past Question Examples:**

- 2076: Mathematical model + Hebbian learning
- 2078: Mathematical model + Perceptron
- 2080: Activation functions + Perceptron
- 2081: Biological vs ANN + Backpropagation
- Model: Mathematical model + Backpropagation

**Expected Score:** 8-10/10 with algorithm steps + example

---

### 🔥 PRIORITY 2: High-Probability Short Questions (Target: 15-20 Marks)

#### 4. Agents & PEAS Framework (Unit 2) - **6/7 papers, Short Question**

**What to Master:**

- **PEAS = Performance, Environment, Actuators, Sensors**

**Agent Types:**

1. **Simple Reflex Agent:** Condition-action rules, no memory
2. **Model-Based Agent:** Internal state, memory of world
3. **Goal-Based Agent:** Considers future, plans actions
4. **Utility-Based Agent:** Maximizes utility/happiness
5. **Learning Agent:** Improves from experience

**Environment Types:**

- **Observable** vs Semi-observable vs Unobservable
- **Deterministic** vs Stochastic
- **Static** vs Dynamic
- **Discrete** vs Continuous
- **Single-agent** vs Multi-agent

**How to Answer PEAS:**
Example: Internet Shopping Assistant

- **P:** Maximize user satisfaction, minimize cost
- **E:** Web pages, product databases, user preferences
- **A:** Display products, place orders, recommend items
- **S:** User clicks, search queries, product ratings

**Expected Score:** 4-5/5

---

#### 5. Natural Language Processing (Unit 6) - **6/7 papers, Short Question**

**What to Master:**

**NLP Pipeline (4 Stages):**

1. **Lexical Analysis (Morphological Analysis)**

   - Segmentation: Break text into sentences, words
   - Morphology: Break words into morphemes (root + suffix/prefix)
   - Example: "running" → "run" + "ing"

2. **Syntactic Analysis (Parsing)**

   - Check grammar, build parse tree
   - Parts of speech tagging (noun, verb, etc.)
   - Example: "Ram eats apple" → Subject-Verb-Object structure

3. **Semantic Analysis**

   - Extract meaning from syntax
   - Word sense disambiguation
   - Example: "bank" in "river bank" vs "bank account"

4. **Pragmatic Analysis**
   - Context-dependent meaning
   - Understand intent, sarcasm, references
   - Example: "Can you open the door?" → Request, not yes/no question

**NLU vs NLG:**

- **Natural Language Understanding (NLU):** Text → Meaning (input processing)
- **Natural Language Generation (NLG):** Meaning → Text (output generation)

**Expected Score:** 4-5/5

---

#### 6. Knowledge Representation (Unit 4) - **5/7 papers, Short Question**

**A. Semantic Networks**

- Graph structure: Nodes = concepts, Edges = relationships
- Relationships: IS-A (inheritance), HAS-A (composition), etc.

**Example:**

```
Ram IS-A Person
Person IS-A Human
Human HAS-A Nose
Ram WEIGHT 60kg
```

Draw nodes (circles) and labeled arrows.

**B. Frames**

- Structured representation: Slots + Fillers
- Inheritance: Frames can inherit from parent frames

**Example:**

```
Frame: Employee
  Name: Ram
  Age: 27
  Gender: Male
  Department: [HR Frame]

Frame: HR (Department)
  Employees: 110
  Avg_Salary: 45000
  Belongs_to: [Tribhuvan University]
```

**C. Scripts**

- Sequence of events (stereotypical situations)
- Example: Restaurant script (Enter → Order → Eat → Pay → Leave)

**Expected Score:** 4-5/5

---

#### 7. Game Search: Min-Max Algorithm (Unit 3) - **4/7 papers, Short Question**

**What to Master:**

**Min-Max Algorithm:**

1. Build game tree (MAX plays first, then MIN alternates)
2. Assign utility values to leaf nodes
3. **Backup values:**
   - MAX nodes: pick maximum child value
   - MIN nodes: pick minimum child value
4. Root value = best move for MAX player

**Example Tree:**

```
        MAX (root)
       /    \
     MIN    MIN
     / \    / \
    3   5  2   9   ← Leaf utilities

MIN picks: min(3,5)=3  and  min(2,9)=2
MAX picks: max(3, 2) = 3
Best move: Go left
```

**Alpha-Beta Pruning (Bonus):**

- α = best MAX can guarantee
- β = best MIN can guarantee
- Prune branches where β ≤ α

**Expected Score:** 4-5/5 with tree diagram

---

#### 8. Expert Systems (Unit 6) - **4/7 papers, Short Question**

**What to Master:**

**Definition:**

- Computer system that emulates decision-making of human expert
- Uses knowledge base + inference engine

**Components:**

1. **Knowledge Base (KB):** Facts + Rules (IF-THEN)
2. **Inference Engine:** Applies rules to facts (Forward/Backward chaining)
3. **Working Memory:** Current state, facts
4. **User Interface:** Input/output with user
5. **Explanation Facility:** Explains reasoning

**Development Stages:**

1. Identification: Define problem, feasibility
2. Conceptualization: Key concepts, relationships
3. Formalization: Design KB structure, rules
4. Implementation: Code the system
5. Testing: Validate with experts
6. Maintenance: Update rules, KB

**Examples:**

- MYCIN (medical diagnosis)
- DENDRAL (chemistry)
- XCON (computer configuration)

**Expected Score:** 4-5/5

---

#### 9. Genetic Algorithms (Unit 5) - **4/7 papers, Short Question**

**What to Master:**

**Operators:**

1. **Selection:** Choose parents based on fitness

   - Roulette Wheel: Probability ∝ fitness
   - Tournament: Pick best from random subset

2. **Crossover:** Combine two parents to create offspring

   - **One-point crossover:**
     ```
     Parent1: 01100010   Parent2: 10101100
     Cut at position 3:
     Child1: 011|01100   Child2: 101|00010
     ```
   - **Two-point crossover:** Cut at two positions, swap middle

3. **Mutation:** Randomly flip bits

   ```
   Before: 01100010
   After:  01110010  (bit 3 flipped)
   ```

4. **Fitness Function:** Evaluate how good a solution is
   - Higher fitness → higher chance of selection

**Algorithm:**

```
1. Initialize population randomly
2. Evaluate fitness of each individual
3. Repeat until termination:
   a. Select parents based on fitness
   b. Crossover to create offspring
   c. Mutate offspring randomly
   d. Evaluate fitness of offspring
   e. Replace old population (or select best)
```

**Expected Score:** 4-5/5

---

### 🔥 PRIORITY 3: Backup Topics (Target: 5-10 Marks)

#### 10. Turing Test (Unit 1) - **4/7 papers, Short Question**

**Definition:**

- Test proposed by Alan Turing to measure machine intelligence
- **Setup:** Human interrogator, human responder, computer
- Interrogator asks questions (via text) to both
- If interrogator cannot tell which is computer → computer passes test

**AI Perspectives:**

1. **Acting Humanly:** Imitate human behavior (Turing test approach)
2. **Thinking Humanly:** Cognitive modeling, human-like reasoning
3. **Acting Rationally:** Rational agent, maximize expected utility
4. **Thinking Rationally:** Laws of thought, logical reasoning

**Requirements to Pass:**

- Natural Language Processing (understand/generate text)
- Knowledge Representation (store facts)
- Reasoning (infer conclusions)
- Machine Learning (adapt, improve)

**Expected Score:** 3-5/5

---

#### 11. Search Strategies (Unit 3) - **3/7 papers, Short Question**

**Uninformed Search (Blind Search):**

1. **Uniform Cost Search (UCS)**

   - Expand node with lowest path cost
   - Uses priority queue (sorted by cost)
   - Complete and optimal

2. **Depth-Limited Search (DLS)**

   - DFS with depth limit L
   - Not complete (goal may be deeper than L)

3. **Iterative Deepening Search (IDS)**
   - Run DLS with L=0, 1, 2, ... until goal found
   - Combines DFS space efficiency with BFS completeness
   - Complete and optimal (for unit costs)

**State Space Representation:**

- States = nodes
- Actions = edges
- Path cost = edge weights
- Goal test = check if state is goal

**Expected Score:** 4-5/5

---

#### 12. Machine Learning Basics (Unit 5) - **3/7 papers, Short Question**

**Types of Learning:**

1. **Supervised Learning**

   - Training data has input + correct output (labels)
   - Learn mapping: input → output
   - Examples: Classification (spam/not spam), Regression (predict price)

2. **Unsupervised Learning**

   - Training data has only input (no labels)
   - Find patterns, structure in data
   - Examples: Clustering (group similar items), Dimensionality reduction

3. **Reinforcement Learning**
   - Agent learns by trial-and-error
   - Receives rewards/penalties for actions
   - Goal: Maximize cumulative reward
   - Example: Game playing (AlphaGo), robot navigation

**Naive Bayes Model:**

- Probabilistic classifier based on Bayes' theorem
- **Bayes' Theorem:**

  ```
  P(C|X) = P(X|C) × P(C) / P(X)

  where:
  - P(C|X) = Probability of class C given features X (posterior)
  - P(X|C) = Probability of features X given class C (likelihood)
  - P(C) = Prior probability of class C
  - P(X) = Evidence (normalizing constant)
  ```

- **Naive Assumption:** Features are conditionally independent
- **Classification:** Pick class with highest P(C|X)

**Example Problem:**
Given: P(Disease) = 0.15, P(Alcoholic) = 0.05, P(Alcoholic | Disease) = 0.07
Find: P(Disease | Alcoholic)

Using Bayes:

```
P(Disease | Alcoholic) = P(Alcoholic | Disease) × P(Disease) / P(Alcoholic)
                       = 0.07 × 0.15 / 0.05
                       = 0.21 = 21%
```

**Expected Score:** 4-5/5

---

#### 13. Fuzzy Logic (Unit 4) - **2/7 papers, Short Question**

**Key Concepts:**

1. **Fuzzy Sets:** Elements have degrees of membership [0, 1]

   - Classical set: membership is 0 or 1
   - Fuzzy set: membership can be 0.3, 0.7, etc.

2. **Membership Function:** Maps element to membership degree

   - Example: "Tall" for height
     - 5'0" → 0.1 (slightly tall)
     - 6'0" → 0.7 (fairly tall)
     - 7'0" → 1.0 (very tall)

3. **Fuzzy Operators:**

   - **AND (Intersection):** μ_A∩B(x) = min(μ_A(x), μ_B(x))
   - **OR (Union):** μ_A∪B(x) = max(μ_A(x), μ_B(x))
   - **NOT (Complement):** μ_A'(x) = 1 - μ_A(x)

4. **Fuzzy Rule-Based System:**
   - Rules: IF condition THEN action
   - Example: IF temperature is hot THEN fan speed is high
   - Aggregation: Combine rules
   - Defuzzification: Convert fuzzy output to crisp value

**Expected Score:** 3-5/5

---

#### 14. Probability & Bayesian Networks (Unit 4) - **2/7 papers, Short Question**

**Key Concepts:**

1. **Prior Probability:** P(X) = probability before evidence
2. **Posterior Probability:** P(X|E) = probability after observing evidence
3. **Joint Probability:** P(X, Y) = probability of X and Y together
4. **Conditional Probability:** P(X|Y) = P(X, Y) / P(Y)

**Bayesian Networks (Belief Networks):**

- Directed Acyclic Graph (DAG)
- Nodes = random variables
- Edges = causal/probabilistic dependencies
- Each node has conditional probability table (CPT)

**Example:**

```
Network: Cloudy → Rain → Wet Grass
         Winter → Rain

Given:
- P(Cloudy) = 0.5
- P(Winter) = 0.5
- P(Rain | Cloudy, Winter) = 0.3
- P(Wet | Rain) = 0.9

Can compute: P(Wet, Rain, Cloudy, Winter) = product of CPTs
```

**Reasoning:**

- **Causal:** Given causes, infer effects
- **Diagnostic:** Given effects, infer causes
- **Intercausal:** Given effect, reason about causes

**Expected Score:** 3-5/5

---

#### 15. Forward Chaining (Unit 4) - **2/7 papers, Short Question**

**Definition:**

- Data-driven inference: Start from facts, apply rules, derive conclusions
- Used in production systems (rule-based systems)

**Algorithm:**

```
1. Start with known facts in working memory
2. Find rules whose conditions match facts
3. Apply rule: Add conclusion to working memory
4. Repeat until goal is reached or no more rules apply
```

**Example:**

```
Facts: Ram is a student, All students are smart
Rules:
  R1: IF X is student THEN X is person
  R2: IF X is smart THEN X studies

Apply R1: Ram is person (add to facts)
Apply R2: Ram studies (add to facts)
```

**Forward vs Backward Chaining:**

- **Forward:** Data-driven, facts → conclusions
- **Backward:** Goal-driven, goal → sub-goals → facts

**Expected Score:** 3-5/5

---

## 📝 Exam Strategy: Picking Questions for 35+ Marks

### **Section A: Pick 2 Long Questions (20 Marks)**

**Recommended Picks:**

1. **Resolution in FOPL** (if it appears) → 9-10 marks

   - Always appears, mechanical process, full marks guaranteed

2. **Informed Search (A\* or Greedy or Hill Climbing)** → 8-10 marks
   - Numerical, step-by-step trace, easy scoring

**Backup:** 3. **ANN (Perceptron or Backpropagation)** → 8-10 marks

- Algorithmic, clear steps

**Avoid if possible:** Expert System Development, CSP (less practice, more writing)

### **Section B: Pick 8 Short Questions (40 Marks)**

**First Priority (Pick if they appear):**

1. PEAS Framework → 4-5 marks
2. NLP Pipeline → 4-5 marks
3. Semantic Network or Frames → 4-5 marks
4. Min-Max Algorithm → 4-5 marks

**Second Priority (Pick 4 more):** 5. Expert System Components → 4-5 marks 6. Genetic Algorithm Operators → 4-5 marks 7. Turing Test → 3-5 marks 8. Search Strategies (UCS, DLS, IDS) → 4-5 marks

**Backups:** 9. Machine Learning Types / Naive Bayes → 4-5 marks 10. Fuzzy Logic → 3-5 marks

**Total Expected:** 2×10 (long) + 8×5 (short) = **20 + 35-40 = 55-60 marks potential**
**Realistic Score:** 18 (long) + 30-35 (short) = **48-53 marks** (well above 35+ target)

---

## 🗓️ Study Roadmap (10-Day Plan)

### **Day 1-2: Master Resolution**

- Convert English → FOPL (all question types)
- Practice CNF conversion (5-6 problems)
- Solve all 6 past resolution questions

### **Day 3-4: Master Informed Search**

- Practice A\* on 3-4 graphs (with tables)
- Practice Greedy on 3-4 graphs
- Hill Climbing: Learn local maxima problems

### **Day 5-6: Master ANN**

- Memorize Perceptron algorithm
- Practice Backpropagation (1-2 examples with numbers)
- Draw neuron diagram, write activation functions

### **Day 7-8: High-Frequency Shorts**

- Day 7: PEAS (2 examples), NLP (pipeline), Semantic Net (2 examples)
- Day 8: Min-Max (3 examples), Expert Systems, Genetic Algorithms

### **Day 9: Backup Topics**

- Turing Test, Search Strategies, ML Types, Naive Bayes

### **Day 10: Revision & Mock Test**

- Solve 1 full question paper in 3 hours
- Time yourself: 30 min per long, 10-12 min per short
- Check answers, identify weak areas

---

## 📐 Key Formulas & Notations

### Search Algorithms

```
A*: f(n) = g(n) + h(n)
Greedy: f(n) = h(n)

where:
- g(n) = actual cost from start to n
- h(n) = heuristic estimate from n to goal
- f(n) = total estimated cost
```

### ANN

```
Output = f(Σ(wi × xi) + b)

Perceptron Update:
w_new = w_old + η × (target - output) × input

Backprop Update:
w_new = w_old + η × delta × input
delta_output = error × f'(output)
delta_hidden = Σ(delta_output × weight) × f'(hidden)

Sigmoid: f(x) = 1/(1 + e^(-x))
Sigmoid derivative: f'(x) = f(x) × (1 - f(x))
```

### Probability

```
Bayes' Theorem:
P(A|B) = P(B|A) × P(A) / P(B)

Joint Probability:
P(A, B) = P(A|B) × P(B)

Conditional Independence:
P(A, B | C) = P(A|C) × P(B|C)
```

### FOPL Conversions

```
All X are Y: ∀x (X(x) → Y(x))
Some X is Y: ∃x (X(x) ∧ Y(x))
No X is Y: ∀x (X(x) → ¬Y(x))
X is Y: X(x) ∧ Y(x)

Implication Elimination:
(P → Q) ≡ (¬P ∨ Q)

De Morgan's Laws:
¬(P ∧ Q) ≡ (¬P ∨ ¬Q)
¬(P ∨ Q) ≡ (¬P ∧ ¬Q)
```

---

## ✅ Final Checklist (Before Exam)

### Long Questions (Must Know)

- [ ] FOPL → CNF → Resolution (all 6 types practiced)
- [ ] A\* search trace (with f=g+h table)
- [ ] Greedy search trace (with h table)
- [ ] Hill climbing (with local maxima example)
- [ ] Perceptron learning algorithm
- [ ] Backpropagation algorithm (forward + backward pass)

### Short Questions (Must Know)

- [ ] PEAS framework (2 examples ready)
- [ ] Agent types (simple reflex, model-based, goal-based, utility-based)
- [ ] NLP pipeline (4 stages with examples)
- [ ] Semantic network (can draw for given facts)
- [ ] Frames (can write slots/fillers)
- [ ] Min-Max algorithm (can trace game tree)
- [ ] Expert system components (5 components, 1-line each)
- [ ] Genetic algorithm operators (selection, crossover, mutation with example)
- [ ] Turing test definition + AI perspectives

### Numerical Skills

- [ ] Can solve FOPL resolution in 15-20 minutes
- [ ] Can trace A\*/Greedy on graph in 15-20 minutes
- [ ] Can demonstrate 1 iteration of Perceptron in 10 minutes
- [ ] Can show crossover on 8-bit chromosomes in 5 minutes
- [ ] Can compute Bayesian probability in 5 minutes

### Writing Speed

- [ ] Can write 1 page in 10 minutes (for long questions)
- [ ] Can draw diagram + explain in 10 minutes (for shorts)

---

## 🎯 Final Score Projection

**Conservative Estimate:**

- Long Q1 (Resolution): 8/10
- Long Q2 (A\* or ANN): 8/10
- Short Q1-4 (PEAS, NLP, Semantic, Min-Max): 4×4 = 16/20
- Short Q5-8 (Expert, GA, Turing, Search): 4×3.5 = 14/20

**Total: 8+8+16+14 = 46 marks** ✅ (Well above 35 target)

**Optimistic Estimate:**

- Long: 9+9 = 18/20
- Short: 8×4.5 = 36/40

**Total: 18+36 = 54 marks** ✅ (Excellent score)

---

## 💡 Pro Tips

1. **Resolution questions:** Always show ALL steps (English → FOPL → CNF → Resolution). Don't skip any conversion step.

2. **Search algorithms:** Use tables for clarity. Examiners love organized tables showing node expansion order.

3. **ANN questions:** Write algorithm steps FIRST, then work through a numerical example.

4. **Short questions:** Start with a 1-line definition, then explain with example. Don't write essays.

5. **Time management:**

   - Long questions: 30 minutes each (total 60 min for 2)
   - Short questions: 10-12 minutes each (total 80-96 min for 8)
   - Revision: 20 minutes
   - Total: 160 minutes (2h 40min, leaving 20 min buffer)

6. **Diagrams score points:** Always draw for semantic nets, frames, ANN neurons, game trees, state spaces.

7. **Practice numericals:** Resolution and Search are 100% scoring if you practice 5-6 problems each.

8. **Backup answers:** If you don't know exact answer to a short question, write something related. Partial marks are better than zero.

---

**Good luck! Focus on the Priority 1 & 2 topics, and you'll comfortably cross 35 marks! 🚀**
