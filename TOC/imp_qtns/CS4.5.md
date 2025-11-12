# Theory of Computation - Strategic Study Plan (Target: 35+ Marks)

## 📊 Overall Strategy

- **Full Marks**: 60 (2 Long × 10 + 8 Short × 5)
- **Pass Marks**: 24
- **Your Target**: 35+ marks
- **Strategy**: Focus on high-frequency topics with guaranteed scoring potential

---

## 🎯 Question Pattern Analysis (7 Sets Analyzed)

### Section A - Long Questions (Attempt 2 out of 3) - 20 Marks Total

| Topic/Chapter                           | Frequency | Years Appeared                          | Priority       | Expected Marks |
| --------------------------------------- | --------- | --------------------------------------- | -------------- | -------------- |
| **NFA/DFA Conversion & Construction**   | 6/7       | 2076, 2078, 2079, 2080, 2080_new, Model | ⭐⭐⭐ HIGHEST | 10 marks       |
| **Turing Machine Construction**         | 6/7       | 2076, 2078, 2080, 2080_new, 2081, Model | ⭐⭐⭐ HIGHEST | 10 marks       |
| **CFG to CNF Conversion**               | 4/7       | 2078, 2079, 2080, 2080_new              | ⭐⭐⭐ HIGH    | 10 marks       |
| **PDA Construction & Conversion**       | 4/7       | 2076, 2080_new, 2081, Model             | ⭐⭐⭐ HIGH    | 10 marks       |
| **Regular Expression to FA**            | 2/7       | 2076, 2079                              | ⭐⭐ MEDIUM    | 10 marks       |
| **Pumping Lemma for Regular Languages** | 1/7       | 2079                                    | ⭐⭐ MEDIUM    | 10 marks       |
| **DFA Minimization**                    | 1/7       | 2078, 2081                              | ⭐⭐ MEDIUM    | 10 marks       |

### Section B - Short Questions (Attempt 8 out of 12) - 40 Marks Total

| Topic/Chapter                                     | Frequency | Priority       | Expected Marks |
| ------------------------------------------------- | --------- | -------------- | -------------- |
| **Regular Expression Construction**               | 7/7       | ⭐⭐⭐ MUST DO | 5 marks        |
| **DFA/NFA Construction**                          | 6/7       | ⭐⭐⭐ MUST DO | 5 marks        |
| **PDA Construction**                              | 5/7       | ⭐⭐⭐ HIGH    | 5 marks        |
| **Pumping Lemma Applications**                    | 5/7       | ⭐⭐⭐ HIGH    | 5 marks        |
| **CNF/GNF Definitions & Examples**                | 4/7       | ⭐⭐⭐ HIGH    | 5 marks        |
| **Basic Definitions** (String, Alphabet, Closure) | 4/7       | ⭐⭐⭐ HIGH    | 5 marks        |
| **CFG Construction & Derivations**                | 4/7       | ⭐⭐⭐ HIGH    | 5 marks        |
| **Complexity & Intractability**                   | 4/7       | ⭐⭐⭐ HIGH    | 5 marks        |
| **TM Variations**                                 | 4/7       | ⭐⭐ MEDIUM    | 5 marks        |
| **PDA to CFG / CFG to PDA**                       | 3/7       | ⭐⭐ MEDIUM    | 5 marks        |
| **Undecidable Problems**                          | 3/7       | ⭐⭐ MEDIUM    | 5 marks        |
| **Moore/Mealy Machines**                          | 2/7       | ⭐⭐ MEDIUM    | 5 marks        |
| **Chomsky Hierarchy**                             | 2/7       | ⭐ LOW         | 5 marks        |
| **Regular Grammar to FA**                         | 2/7       | ⭐ LOW         | 5 marks        |

---

## 🎓 Unit-Wise Importance & Expected Marks

| Unit                             | Topics                                     | Importance | Expected Questions   | Target Marks |
| -------------------------------- | ------------------------------------------ | ---------- | -------------------- | ------------ |
| **Unit 2: Finite Automata**      | DFA, NFA, ε-NFA, Conversions, Moore/Mealy  | ⭐⭐⭐⭐⭐ | 1 Long + 2-3 Short   | 20-25 marks  |
| **Unit 6: Turing Machine**       | TM Construction, Variations, Encoding, UTM | ⭐⭐⭐⭐⭐ | 1 Long + 1-2 Short   | 15-20 marks  |
| **Unit 4: Context Free Grammar** | CFG, CNF, GNF, Parse Trees, Derivations    | ⭐⭐⭐⭐   | 1 Long + 2-3 Short   | 15-20 marks  |
| **Unit 3: Regular Expressions**  | RE Construction, RE to FA, Pumping Lemma   | ⭐⭐⭐⭐   | 0-1 Long + 2-3 Short | 10-15 marks  |
| **Unit 5: Push Down Automata**   | PDA Construction, PDA-CFG Conversions      | ⭐⭐⭐⭐   | 0-1 Long + 2 Short   | 10-15 marks  |
| **Unit 7: Undecidability**       | Complexity Classes, PCP, Halting Problem   | ⭐⭐⭐     | 0 Long + 1-2 Short   | 5-10 marks   |
| **Unit 1: Basic Foundations**    | Definitions, Closures, String Operations   | ⭐⭐⭐     | 0 Long + 1 Short     | 5 marks      |

---

## 📚 Detailed Topic Breakdown & Study Roadmap

### 🔥 PRIORITY 1: Must-Study Topics (Target: 25-30 Marks)

#### 1. DFA/NFA Construction & Conversion (Unit 2) - **6/7 papers, Long Question**

**Why This Topic?**

- Appears in almost every exam as a **10-mark problem**
- Algorithmic, step-by-step process = **full marks if practiced**
- Most fundamental topic in TOC

**What to Master:**

**A. Formal Definitions**

**DFA (Deterministic Finite Automaton):**

```
DFA = (Q, Σ, δ, q0, F)

where:
- Q = Finite set of states
- Σ = Finite input alphabet
- δ: Q × Σ → Q (Transition function)
- q0 ∈ Q (Initial state)
- F ⊆ Q (Set of final/accepting states)
```

**NFA (Non-deterministic Finite Automaton):**

```
NFA = (Q, Σ, δ, q0, F)

where:
- δ: Q × Σ → 2^Q (Power set - can go to multiple states)
```

**ε-NFA (NFA with Epsilon Transitions):**

```
ε-NFA = (Q, Σ, δ, q0, F)

where:
- δ: Q × (Σ ∪ {ε}) → 2^Q (Can transition on ε without input)
```

**B. Key Concepts**

1. **Extended Transition Function (δ\*)**

   - Processes entire strings instead of single symbols
   - For DFA: δ\*(q, wa) = δ(δ\*(q, w), a)
   - Base: δ\*(q, ε) = q

2. **ε-Closure**
   - ε-closure(q) = Set of all states reachable from q using only ε-transitions
   - Example: If ε-closure(q0) = {q0, q1, q2}, then from q0 we can reach q1 and q2 without consuming input

**C. NFA to DFA Conversion (Subset Construction)**

**Algorithm:**

```
1. Start with ε-closure of initial state as new start state
2. For each new state (which is a set of NFA states):
   For each input symbol a:
     - Find all states reachable on 'a'
     - Take ε-closure of those states
     - Create new DFA state (if not exists)
3. Mark states as final if they contain any NFA final state
4. Repeat until no new states are created
```

**Example Problem (Common Pattern):**
"Construct NFA for strings ending with '01', then convert to DFA"

**NFA Solution:**

```
States: {q0, q1, q2}
Initial: q0
Final: {q2}

Transitions:
q0 --0--> q0, q1
q0 --1--> q0
q1 --1--> q2
```

**DFA After Conversion:**
Use subset construction to get deterministic states.

**D. Common Construction Patterns**

1. **Even/Odd Number of Symbols**

   - Example: Even 0's and Even 1's
   - Use 4 states representing (even-0, even-1), (even-0, odd-1), (odd-0, even-1), (odd-0, odd-1)

2. **Substring Detection**

   - Example: Contains substring "01"
   - Track progress: no match → saw 0 → saw 01 (final)

3. **Ending Pattern**
   - Example: Ends with "00"
   - Last 2 symbols: track with 4 states (ε, 0, 1, 00)

**Past Question Examples:**

- 2076: NFA to DFA conversion, strings ending with 01
- 2078: NFA to DFA with given transition table
- 2079: Prove NFA = DFA equivalence
- 2080: NFA to DFA with given diagram
- 2080_new: NFA for substring 01 ending with 1
- Model: DFA for even 0's and even 1's

**Expected Score:** 9-10/10 with clear diagrams and tables

---

#### 2. Turing Machine Construction (Unit 6) - **6/7 papers, Long Question**

**Why This Topic?**

- Appears as **10-mark long question** almost every year
- Design-based, shows understanding of computation
- Instantaneous Description (ID) sequence is easy scoring

**What to Master:**

**A. Formal Definition**

```
TM = (Q, Σ, Γ, δ, q0, B, F)

where:
- Q = Finite set of states
- Σ = Input alphabet
- Γ = Tape alphabet (Σ ⊆ Γ)
- δ: Q × Γ → Q × Γ × {L, R} (Transition function)
- q0 = Initial state
- B ∈ Γ = Blank symbol
- F ⊆ Q = Final/accepting states
```

**B. Instantaneous Description (ID)**

```
Format: α q β

where:
- α = symbols to left of head
- q = current state
- β = symbol at head + symbols to right

Example: 001 q2 1011
- Tape has 0011011
- Head is at 4th position (reading 1)
- Machine is in state q2
```

**C. Common TM Construction Patterns**

**1. Language: L = {0ⁿ1ⁿ | n ≥ 1}**

```
Strategy:
1. Mark first 0 as X, move right
2. Find first 1, mark as Y, move left
3. Find next unmarked 0, mark as X
4. Repeat until all matched
5. Check only Y's remain

Transition Example:
δ(q0, 0) = (q1, X, R)  // Mark 0 as X
δ(q1, 0) = (q1, 0, R)  // Skip 0's
δ(q1, 1) = (q2, Y, L)  // Mark 1 as Y
δ(q2, 0) = (q2, 0, L)  // Go back
δ(q2, X) = (q0, X, R)  // Next iteration
```

**2. Language: L = {wcwᴿ | w ∈ (0,1)\*}**

```
Strategy:
1. Mark first symbol, remember it
2. Find 'c', move right
3. Go to end, match with remembered symbol
4. Repeat until all matched before 'c'

States needed:
- Remember 0 or 1
- Different states for left and right of 'c'
```

**3. Computing Function: f(x) = 2x**

```
Input: n 1's
Output: 2n 1's

Strategy:
1. For each 1, write two 1's on right
2. Mark processed 1's
3. Clean up markers
```

**D. TM Variations**

1. **Multi-tape TM**

   - Multiple tapes, each with own head
   - Can simulate single-tape TM (but faster)
   - δ: Q × Γᵏ → Q × Γᵏ × {L,R,S}ᵏ

2. **Multi-track TM**

   - Single tape divided into tracks
   - Read/write entire column at once
   - Useful for marking/remembering

3. **Non-deterministic TM**

   - Multiple possible moves
   - Accepts if ANY path accepts
   - δ: Q × Γ → 2^(Q × Γ × {L,R})

4. **Semi-infinite Tape TM**
   - Tape only on right (no left movement from start)
   - Can simulate regular TM

**E. Universal Turing Machine (UTM)**

**Encoding:**

```
Encode states: q0→1, q1→11, q2→111, ...
Encode symbols: 0→1, 1→11, a→111, ...
Encode direction: L→1, R→11

Encode transition δ(qi, aj) = (qk, al, Dm):
111...1 0 11...1 0 111...1 0 11...1 0 1...1
  (i)      (j)      (k)      (l)     (m)

Separate transitions with 00
Entire TM code separated with 000
```

**F. Showing Acceptance with ID Sequence**

**Example: Accept "0110" by palindrome checker**

```
ID Sequence:
q0 0110  →  X q1 110  →  X1 q1 10  →  X11 q1 0  →
X1 q2 10  →  X q2 110  →  q2 X110  →  X q3 110  →
XX q1 10  →  XXY q4 0  →  XX q5 Y0  →  XXY q5 0  →
XXYY q6 ε  →  Accept (all symbols matched)
```

**Past Question Examples:**

- 2076: TM for {wcwᴿ}, show acceptance of "0110"
- 2078: TM for odd length strings, with encoding
- 2080: TM for {a01a, a10a, a0101a}, show acceptance
- 2080_new: TM for f(n) = 0
- 2081: TM for f(x) = 2x, input 11 → output 1111
- Model: TM for L = {(n)n}, balanced parentheses

**Expected Score:** 8-10/10 with transition table/diagram + ID sequence

---

#### 3. Regular Expression Construction (Unit 3) - **7/7 papers, Short Question**

**Why This Topic?**

- Appears in **EVERY exam** as short question
- Easy 5 marks if patterns are memorized
- Quick to solve (5-7 minutes)

**What to Master:**

**Common Patterns Over {0, 1}:**

| Pattern Description              | Regular Expression                                  | Explanation                           |
| -------------------------------- | --------------------------------------------------- | ------------------------------------- |
| Strings ending with 0            | (0+1)\*0                                            | Any symbols, then must end with 0     |
| Strings starting with 1          | 1(0+1)\*                                            | Must start with 1, then anything      |
| Even number of 0's               | 1\*(01\*01\*)\*                                     | Pair up 0's with 1's in between       |
| Odd number of 1's                | 0\*10\*(10\*10\*)\*                                 | One 1, then pairs of 1's              |
| Contains substring "01"          | (0+1)\*01(0+1)\*                                    | Anything, then 01, then anything      |
| No consecutive 1's               | (0+10)\*(ε+1)                                       | Always insert 0 between 1's           |
| Length is multiple of 3          | ((0+1)(0+1)(0+1))\*                                 | Groups of 3 symbols                   |
| 2nd symbol from right is 1       | (0+1)\*1(0+1)                                       | ...1X pattern                         |
| Starts with 00 or 11             | (00+11)(0+1)\*                                      | Either 00 or 11, then anything        |
| Ends with 10 or 01               | (0+1)\*(10+01)                                      | Anything, then 10 or 01               |
| At least 3 symbols               | (0+1)(0+1)(0+1)(0+1)\*                              | 3 mandatory, rest optional            |
| Exactly 2 a's and at least 2 b's | b\*ab\*abb\* + b\*abb\*ab\* + abb\*ab\* + ab\*abb\* | All arrangements of 2 a's with ≥2 b's |
| 3rd symbol is a, 5th is b        | (0+1)(0+1)a(0+1)b(0+1)\*                            | Fix positions 3 and 5                 |

**Advanced Patterns:**

1. **Even a's, each a followed by at least one b**

   - Strategy: Every 'a' must have 'b+' after it, repeat even times
   - Answer: (b\*ab+b\*ab+)\*

2. **Not ending with 0**

   - Strategy: Must end with 1 or be empty
   - Answer: (0+1)\*1 + ε

3. **Substring bab or abb**
   - Strategy: Anything, then either pattern, then anything
   - Answer: (a+b)\*(bab+abb)(a+b)\*

**Conversion Examples:**

**Regular Expression to ε-NFA (Thompson's Construction):**

- Base: ε → single ε-transition
- Base: a → single transition labeled 'a'
- Union: r1+r2 → parallel paths with ε
- Concatenation: r1r2 → series connection with ε
- Kleene: r\* → loop back with ε

**Past Question Examples:**

- 2076: 2nd from right is 1; starts 00/11, ends 10/01
- 2078: Substring bab or abb; 3rd is a, 5th is b
- 2079: (0+1)\*10(1+0); 1\*0(0+1)\*1
- 2080: Exactly 2 a's, ≥2 b's; Even a's each followed by ≥1 b
- 2080_new: Even numbers length 4, start 2, end 8; Odd start, even end
- 2081: Not ending with 0; Length ≥3 ends with 00
- Model: Even numbers starting with 2 ending with 8

**Expected Score:** 4-5/5 marks (easiest topic!)

---

### 🔥 PRIORITY 2: High-Probability Topics (Target: 15-20 Marks)

#### 4. CFG to CNF Conversion (Unit 4) - **4/7 papers, Long Question**

**Why This Topic?**

- Frequent **10-mark long question**
- Mechanical algorithm = guaranteed marks
- Shows up in 4 out of 7 papers

**What to Master:**

**A. Definitions**

**Context Free Grammar:**

```
CFG = (V, T, P, S)

where:
- V = Variables (non-terminals)
- T = Terminals
- P = Production rules
- S = Start symbol
```

**Chomsky Normal Form (CNF):**

- All productions are either:
  - A → BC (two non-terminals)
  - A → a (single terminal)
  - S → ε (only if ε ∈ L)

**Greibach Normal Form (GNF):**

- All productions are:
  - A → aα (terminal followed by zero or more non-terminals)

**B. Conversion Algorithm to CNF**

**Step 1: Remove ε-productions**

```
Find nullable variables (those that can derive ε)
For each production with nullable variable, create version with/without it
Remove A → ε productions
```

**Step 2: Remove Unit Productions (A → B)**

```
Find all unit pairs (A, B) where A ⇒* B via unit productions only
Replace A → B with A → α for all B → α
```

**Step 3: Remove Useless Symbols**

```
Remove symbols that don't derive any terminal string (non-generating)
Remove symbols not reachable from start symbol (unreachable)
```

**Step 4: Convert to CNF**

```
For productions like A → B1B2...Bn (n > 2):
  Create new variables: A → B1C1, C1 → B2C2, ... Cn-2 → Bn-1Bn

For terminals in mixed productions (A → aB or A → Ba):
  Create new variable: D → a, then replace 'a' with D
```

**C. Worked Example**

**Given Grammar:**

```
S → ASB | ε
A → aA | a
B → bB | b
```

**Step 1: Remove ε (S is nullable)**

```
S → ASB | AB | AS | SB | A | B
A → aA | a
B → bB | b
```

**Step 2: Remove Unit Productions**

```
S derives A: S → aA | a
S derives B: S → bB | b

Final:
S → ASB | AB | AS | SB | aA | a | bB | b
A → aA | a
B → bB | b
```

**Step 3: No useless symbols**

**Step 4: Convert to CNF**

```
For S → ASB: Create C1, so S → AC1, C1 → SB
For terminals: Create T_a → a, T_b → b

Final CNF:
S → AC1 | AB | AS | SB | T_aA | T_a | T_bB | T_b
C1 → SB
A → T_aA | T_a
B → T_bB | T_b
T_a → a
T_b → b
```

**D. Left Recursion Removal** (Often asked)

**Direct Left Recursion:**

```
A → Aα | β

Convert to:
A → βA'
A' → αA' | ε
```

**Example:**

```
E → E+T | T

Becomes:
E → TE'
E' → +TE' | ε
```

**Past Question Examples:**

- 2078: S → abSb | a | aAb; A → bS | aAAb | ε
- 2079: Remove left recursion from expression grammar, then CNF
- 2080: CFG to CNF conversion with example
- 2080_new: Grammar to CNF (given in question)

**Expected Score:** 8-10/10 with clear steps

---

#### 5. PDA Construction (Unit 5) - **5/7 papers, Short Question**

**Why This Topic?**

- Frequent **5-mark short question**
- Standard patterns are easy to memorize
- Shows understanding of stack-based computation

**What to Master:**

**A. Formal Definition**

```
PDA = (Q, Σ, Γ, δ, q0, Z0, F)

where:
- Q = States
- Σ = Input alphabet
- Γ = Stack alphabet
- δ: Q × (Σ ∪ {ε}) × Γ → 2^(Q × Γ*)
- q0 = Initial state
- Z0 = Initial stack symbol
- F = Final states
```

**B. Transition Notation**

```
δ(q, a, X) = {(p, α)}

Meaning:
- In state q
- Reading input 'a' (or ε)
- Top of stack is X
- Go to state p
- Replace X with α (α can be ε for pop, or XY for push Y)
```

**C. Common PDA Patterns**

**1. L = {0ⁿ1ⁿ | n ≥ 0}** (Equal 0's and 1's)

```
States: {q0, q1, q2}
Stack: {Z0, X}

Transitions:
δ(q0, ε, Z0) = {(q1, Z0)}       // Start
δ(q1, 0, Z0) = {(q1, XZ0)}      // First 0, push X
δ(q1, 0, X) = {(q1, XX)}        // More 0's, push X
δ(q1, 1, X) = {(q2, ε)}         // See 1, pop X
δ(q2, 1, X) = {(q2, ε)}         // More 1's, pop X
δ(q2, ε, Z0) = {(accept)}       // All matched
```

**2. L = {wwᴿ | w ∈ Σ\*}** (Palindromes)

```
Strategy:
- Push first half onto stack
- Guess middle (use ε-transition)
- Pop and match second half

Example for {0,1}:
δ(q0, 0, Z) = {(q0, 0Z)}        // Push 0
δ(q0, 1, Z) = {(q0, 1Z)}        // Push 1
δ(q0, ε, Z) = {(q1, Z)}         // Guess middle
δ(q1, 0, 0) = {(q1, ε)}         // Match 0
δ(q1, 1, 1) = {(q1, ε)}         // Match 1
```

**3. L = {wcwᴿ | w ∈ {0,1}\*}** (Marked palindrome)

```
δ(q0, 0, Z) = {(q0, 0Z)}        // Push 0's and 1's
δ(q0, 1, Z) = {(q0, 1Z)}
δ(q0, c, Z) = {(q1, Z)}         // See 'c', switch to matching
δ(q1, 0, 0) = {(q1, ε)}         // Pop and match
δ(q1, 1, 1) = {(q1, ε)}
δ(q1, ε, Z0) = {(accept)}
```

**D. Showing Acceptance with IDs**

**Format: (state, remaining_input, stack)**

**Example: Accept "0101" by L = {0ⁿ1ⁿ | n=2}**

```
(q0, 0101, Z0)
⊢ (q1, 0101, Z0)
⊢ (q1, 101, XZ0)       // Read 0, push X
⊢ (q1, 01, XXZ0)       // Read 0, push X
⊢ (q2, 1, XZ0)         // Read 1, pop X
⊢ (q2, ε, Z0)          // Read 1, pop X
⊢ Accept               // Empty input, only Z0
```

**E. Acceptance Methods**

1. **Acceptance by Final State**

   - PDA halts in state q ∈ F
   - Stack can have anything

2. **Acceptance by Empty Stack**
   - Stack becomes empty
   - State doesn't matter

**Conversion:**

- Final State → Empty Stack: Add transitions to pop all symbols
- Empty Stack → Final State: Add new bottom marker and final state

**Past Question Examples:**

- 2076: PDA for equal 0's and 1's, show ID for "0101"
- 2078: PDA for L = {aⁿbⁿ | n > 0}
- 2080: PDA for L = {xⁿyⁿxy | n≥0}, show acceptance "xyxy"
- 2080_new: PDA for equal a's and b's (aⁿbⁿ), show "aabb" and "aab"
- Model: PDA for {wcwᴿ}, show "011C110" and "10C10"

**Expected Score:** 4-5/5 marks

---

#### 6. Pumping Lemma Applications (Unit 3) - **5/7 papers, Short Question**

**Why This Topic?**

- Appears as **5-mark proof question**
- Standard proof structure = easy marks
- Only 3-4 common patterns

**What to Master:**

**A. Pumping Lemma for Regular Languages**

**Statement:**

```
If L is regular, then ∃ pumping length p such that:
∀ string s ∈ L where |s| ≥ p, we can write s = xyz with:

1. |xy| ≤ p
2. |y| > 0
3. ∀ i ≥ 0, xyⁱz ∈ L
```

**How to Use (Proof by Contradiction):**

```
1. Assume L is regular
2. Let p be the pumping length
3. Choose a string s ∈ L where |s| ≥ p
4. By PL, s = xyz with conditions 1-3
5. Find a value of i such that xyⁱz ∉ L
6. Contradiction! L is not regular
```

**B. Common Non-Regular Language Proofs**

**1. L = {0ⁿ1ⁿ | n ≥ 0}**

```
Proof:
- Assume L is regular with pumping length p
- Choose s = 0^p 1^p (clearly in L, |s| = 2p ≥ p)
- By PL, s = xyz where |xy| ≤ p and |y| > 0
- Since |xy| ≤ p, both x and y consist only of 0's
- So y = 0^k for some k > 0
- Consider xy²z = 0^(p+k) 1^p
- This has more 0's than 1's, so NOT in L
- Contradiction! L is not regular
```

**2. L = {aⁿ | n is prime}**

```
Proof:
- Assume L is regular with pumping length p
- Choose s = a^q where q is prime and q ≥ p
- By PL, s = xyz where |xy| ≤ p, |y| > 0
- Let |y| = k > 0
- Consider xy^(q+1)z = a^(q + kq) = a^(q(k+1))
- This is NOT prime (composite: multiple of q and k+1)
- Contradiction! L is not regular
```

**3. L = {aⁱbʲcᵏ | j = i+k}**

```
Proof:
- Choose s = a^p b^(2p) c^p
- By PL, |xy| ≤ p means y is all a's
- Pumping changes a's but not b's or c's
- Violates j = i+k constraint
- Contradiction! Not regular
```

**C. Pumping Lemma for CFLs**

**Statement:**

```
If L is context-free, then ∃ pumping length p such that:
∀ string s ∈ L where |s| ≥ p, we can write s = uvxyz with:

1. |vxy| ≤ p
2. |vy| > 0
3. ∀ i ≥ 0, uvⁱxyⁱz ∈ L
```

**Common Non-CFL Proof:**

**L = {aⁿbⁿcⁿ | n ≥ 0}**

```
Proof:
- Assume L is CFL with pumping length p
- Choose s = a^p b^p c^p
- By PL for CFL, s = uvxyz where |vxy| ≤ p, |vy| > 0
- Case 1: vxy contains only one type of symbol
  - Pumping changes count of only that symbol
  - Violates equal count requirement
- Case 2: vxy spans two types (e.g., a's and b's)
  - Pumping can create order like abab...
  - Not in L (must be a*b*c*)
- Both cases lead to contradiction!
- L is not CFL
```

**Past Question Examples:**

- 2076: L = {0ᵐ1ᵐ | m≥1}
- 2078: L = {aⁿ | n is prime}
- 2079: State and prove Pumping Lemma
- 2080: L = {aⁱbʲcᵏ | j=i+k}
- 2080_new: L = {aⁿbⁿcⁿ | n≥0} (for CFL)
- Model: L = {0ⁿ1ⁿ | n>0}

**Expected Score:** 4-5/5 marks with clear proof

---

### 🔥 PRIORITY 3: Backup Topics (Target: 10-15 Marks)

#### 7. CNF/GNF Definitions (Unit 4) - **4/7 papers, Short Question**

**Quick Answer Format:**

**Chomsky Normal Form (CNF):**

- Definition: All productions are A → BC or A → a
- Example:
  ```
  S → AB
  A → a
  B → b
  ```

**Greibach Normal Form (GNF):**

- Definition: All productions are A → aα (terminal + non-terminals)
- Example:
  ```
  S → aAB
  A → a
  B → bB | b
  ```

**Expected Score:** 3-5/5

---

#### 8. Basic Definitions (Unit 1) - **4/7 papers, Short Question**

**Quick Definitions:**

1. **Alphabet (Σ):** Finite set of symbols

   - Example: Σ = {0, 1}

2. **String:** Finite sequence of symbols from alphabet

   - Example: 0110 is a string over {0, 1}

3. **Empty String (ε):** String with no symbols, length = 0

4. **Substring:** Contiguous part of a string

   - "01" is substring of "0110"

5. **Prefix:** Beginning portion of a string

   - "011" is prefix of "0110"

6. **Suffix:** Ending portion of a string

   - "10" is suffix of "0110"

7. **Concatenation:** Joining two strings

   - "01" + "10" = "0110"

8. **Kleene Closure (Σ\*):** Set of all possible strings (including ε)

   - {0,1}\* = {ε, 0, 1, 00, 01, 10, 11, 000, ...}

9. **Positive Closure (Σ⁺):** Set of all strings except ε

   - {0,1}⁺ = {0, 1, 00, 01, 10, 11, 000, ...}

10. **Language:** Set of strings over alphabet

    - L = {0ⁿ1ⁿ | n≥0} is a language

11. **Empty Language (∅):** Language with no strings
    - Different from {ε} which contains empty string

**Example Computations:**

- Σ = {ab}, Σ\* = {ε, ab, abab, ababab, ...}
- Σ² = {abab} (strings of length 2)

**Expected Score:** 4-5/5

---

#### 9. CFG Construction & Derivations (Unit 4) - **4/7 papers, Short Question**

**Common Patterns:**

**1. Palindromes over {a, b}**

```
S → aSa | bSb | a | b | ε
```

**2. Equal number of a's and b's**

```
S → aSbS | bSaS | ε
```

**3. Strings starting and ending with same symbol**

```
S → aSa | bSb | a | b | aXa | bXb
X → aX | bX | ε
```

**4. Balanced Parentheses**

```
S → SS | (S) | ε
```

**Derivation Types:**

**Leftmost Derivation:** Always expand leftmost non-terminal first

```
Example: S → AB, A → a, B → b
S ⇒ AB ⇒ aB ⇒ ab  (leftmost)
```

**Rightmost Derivation:** Always expand rightmost non-terminal first

```
S ⇒ AB ⇒ Ab ⇒ ab  (rightmost)
```

**Parse Tree:** Graphical representation of derivation

- Root = Start symbol
- Leaves = Terminal symbols
- Internal nodes = Non-terminals

**Expected Score:** 4-5/5

---

#### 10. Complexity & Intractability (Unit 7) - **4/7 papers, Short Question**

**Key Concepts:**

**A. Time Complexity of TM**

- T(n) = Maximum number of steps on input of size n

**B. Space Complexity of TM**

- S(n) = Maximum tape cells used on input of size n

**C. Big-O, Omega, Theta Notation**

1. **Big-O (Upper Bound):** f(n) = O(g(n))

   - f(n) grows no faster than g(n)
   - Example: 3n² + 5n = O(n²)

2. **Big-Ω (Lower Bound):** f(n) = Ω(g(n))

   - f(n) grows at least as fast as g(n)
   - Example: 3n² + 5n = Ω(n²)

3. **Big-Θ (Tight Bound):** f(n) = Θ(g(n))
   - f(n) grows exactly like g(n)
   - Example: 3n² + 5n = Θ(n²)

**D. Complexity Classes**

1. **Class P (Polynomial Time)**

   - Problems solvable in O(nᵏ) time by deterministic TM
   - Example: Sorting, searching, shortest path

2. **Class NP (Non-deterministic Polynomial)**

   - Problems verifiable in polynomial time
   - Solution can be checked quickly
   - Example: SAT, Hamiltonian path, graph coloring

3. **NP-Complete**

   - Hardest problems in NP
   - If any NP-complete problem is in P, then P = NP
   - Example: SAT, 3-SAT, vertex cover

4. **NP-Hard**
   - At least as hard as NP-complete
   - May not be in NP
   - Example: Halting problem

**E. Tractable vs Intractable**

- **Tractable:** Solvable in polynomial time (P problems)
- **Intractable:** Requires super-polynomial time (exponential, etc.)

**SAT Problem:**

- Boolean Satisfiability Problem
- Given: Boolean formula
- Question: Is there assignment making it TRUE?
- Status: NP-complete (Cook's Theorem)

**Expected Score:** 4-5/5

---

#### 11. Undecidable Problems (Unit 7) - **3/7 papers, Short Question**

**A. Halting Problem**

**Definition:**

- Given: TM M and input w
- Question: Does M halt on input w?

**Proof of Undecidability (Contradiction):**

```
1. Assume H(M, w) decides halting problem
   - H(M, w) = accept if M halts on w
   - H(M, w) = reject if M loops on w

2. Construct D(M):
   - If H(M, M) = accept, then loop forever
   - If H(M, M) = reject, then halt

3. What does D do on input D?
   - If D(D) halts, then H(D, D) = accept
     → D should loop (by definition)
     → Contradiction!
   - If D(D) loops, then H(D, D) = reject
     → D should halt
     → Contradiction!

4. Both cases are contradictions
   → H cannot exist
   → Halting problem is undecidable
```

**B. Post's Correspondence Problem (PCP)**

**Definition:**
Given two lists of strings: A = {w1, w2, ..., wn} and B = {v1, v2, ..., vn}

Find sequence i1, i2, ..., ik such that:
wi1 wi2 ... wik = vi1 vi2 ... vik

**Example:**

```
A = {ab, a, ba}
B = {aba, ab, a}

Solution: i1=1, i2=2, i3=3
A: ab + a + ba = ababa
B: aba + ab + a = ababa
Match! ✓
```

**Status:** PCP is undecidable (cannot determine if solution exists in general)

**C. Other Undecidable Problems**

1. Does TM M accept any input?
2. Does TM M accept all inputs?
3. Are two TMs equivalent?
4. Is language of TM regular/context-free?

**Expected Score:** 3-5/5

---

#### 12. Moore vs Mealy Machines (Unit 2) - **2/7 papers, Short Question**

**Comparison:**

| Aspect            | Moore Machine               | Mealy Machine                         |
| ----------------- | --------------------------- | ------------------------------------- |
| Output depends on | Current state only          | Current state + Input                 |
| Output produced   | On entering state           | During transition                     |
| Transition format | (state, input) → next state | (state, input) → (next state, output) |
| Output function   | λ: Q → O                    | λ: Q × Σ → O                          |
| Diagram           | Output inside state circles | Output on transition arrows           |

**Example: Moore Machine (Output A if ends with aa, B if ends with bb)**

```
States with outputs:
q0 [Output: -]
q1 (saw a) [Output: -]
q2 (saw aa) [Output: A]
q3 (saw b) [Output: -]
q4 (saw bb) [Output: B]
```

**Example: Mealy Machine (Same problem)**

```
Transitions with outputs:
q0 --a/-- → q1
q1 --a/A → q1  (output A)
q1 --b/-- → q2
q0 --b/-- → q2
q2 --b/B → q2  (output B)
q2 --a/-- → q1
```

**Expected Score:** 3-5/5

---

## 📝 Exam Strategy: Picking Questions for 35+ Marks

### **Section A: Pick 2 Long Questions (20 Marks)**

**Recommended Picks:**

1. **DFA/NFA Construction or Conversion** → 9-10 marks

   - Always appears, mechanical, full marks guaranteed

2. **Turing Machine Construction** → 8-10 marks
   - Design + ID sequence, high scoring

**Backup:** 3. **CFG to CNF** → 8-10 marks

- Algorithmic, step-by-step

**Avoid if possible:** Pumping Lemma (as long question), DFA Minimization (complex)

### **Section B: Pick 8 Short Questions (40 Marks)**

**First Priority (Pick if they appear):**

1. Regular Expression Construction → 5 marks
2. DFA/NFA Construction (simple) → 5 marks
3. PDA Construction → 4-5 marks
4. Pumping Lemma Proof → 4-5 marks

**Second Priority (Pick 4 more):** 5. CNF/GNF Definitions → 4-5 marks 6. Basic Definitions (Alphabet, Closure) → 5 marks 7. CFG & Derivations → 4-5 marks 8. Complexity & Big-O → 4-5 marks

**Backups:** 9. TM Variations → 3-5 marks 10. Undecidable Problems → 3-5 marks

**Total Expected:** 2×10 (long) + 8×5 (short) = **20 + 36-40 = 56-60 marks potential**
**Realistic Score:** 18 (long) + 32-35 (short) = **50-53 marks** (well above 35+ target)

---

## 🗓️ Study Roadmap (10-Day Plan)

### **Day 1-2: Master DFA/NFA**

- Practice 5-6 DFA constructions (even/odd, substring, ending pattern)
- Practice 3-4 NFA to DFA conversions
- Learn subset construction algorithm cold

### **Day 3-4: Master Turing Machines**

- Practice 4-5 TM constructions (0ⁿ1ⁿ, palindrome, functions)
- Practice writing ID sequences
- Understand encoding for UTM

### **Day 5: Master Regular Expressions**

- Memorize 10-12 common patterns
- Practice RE to ε-NFA conversion (Thompson's)
- Quick 30-minute session (highest ROI!)

### **Day 6-7: CFG & CNF**

- Practice CNF conversion algorithm (4-5 problems)
- Practice CFG constructions (palindromes, equal counts)
- Learn left recursion removal

### **Day 8: PDA & Pumping Lemma**

- Practice 3-4 PDA constructions
- Memorize 3 standard Pumping Lemma proofs
- Practice ID sequences for PDA

### **Day 9: Short Question Topics**

- Definitions (1 hour)
- Complexity & Intractability (1 hour)
- Undecidable problems (1 hour)
- Moore/Mealy machines (1 hour)

### **Day 10: Revision & Mock Test**

- Solve 1 full question paper in 3 hours
- Time yourself: 30 min per long, 10-12 min per short
- Review mistakes

---

## 📐 Key Formulas & Notations

### Automata Definitions

```
DFA: (Q, Σ, δ, q0, F)
- δ: Q × Σ → Q

NFA: (Q, Σ, δ, q0, F)
- δ: Q × Σ → 2^Q

ε-NFA: (Q, Σ, δ, q0, F)
- δ: Q × (Σ ∪ {ε}) → 2^Q

PDA: (Q, Σ, Γ, δ, q0, Z0, F)
- δ: Q × (Σ ∪ {ε}) × Γ → 2^(Q × Γ*)

TM: (Q, Σ, Γ, δ, q0, B, F)
- δ: Q × Γ → Q × Γ × {L, R}
```

### Regular Expression Operators

```
Union: r1 + r2
Concatenation: r1 · r2 or r1r2
Kleene Star: r*
Positive Closure: r+ = rr*
```

### Complexity Notation

```
O(f(n)): Upper bound
Ω(f(n)): Lower bound
Θ(f(n)): Tight bound
```

### Pumping Lemma (Regular)

```
s = xyz where:
1. |xy| ≤ p
2. |y| > 0
3. ∀i ≥ 0, xy^i z ∈ L
```

### Pumping Lemma (CFL)

```
s = uvxyz where:
1. |vxy| ≤ p
2. |vy| > 0
3. ∀i ≥ 0, uv^i xy^i z ∈ L
```

---

## ✅ Final Checklist (Before Exam)

### Long Questions (Must Know)

- [ ] DFA construction (3 patterns: even/odd, substring, ending)
- [ ] NFA to DFA conversion (subset construction)
- [ ] TM construction (0ⁿ1ⁿ, palindrome, function)
- [ ] TM ID sequence (can show 5-6 steps)
- [ ] CFG to CNF (all 4 steps)
- [ ] Left recursion removal

### Short Questions (Must Know)

- [ ] Regular expressions (12 common patterns memorized)
- [ ] PDA construction (equal count, palindrome)
- [ ] Pumping Lemma proof (3 standard proofs)
- [ ] CNF/GNF definitions + examples
- [ ] Basic definitions (alphabet, closure, string)
- [ ] CFG construction (palindrome, balanced)
- [ ] Complexity classes (P, NP, NP-Complete)
- [ ] Big-O/Omega/Theta definitions

### Design Skills

- [ ] Can draw state diagrams clearly
- [ ] Can write transition tables accurately
- [ ] Can show ID sequences step-by-step
- [ ] Can construct parse trees

### Writing Speed

- [ ] Can solve DFA/NFA in 20 minutes (long)
- [ ] Can solve TM in 25 minutes (long)
- [ ] Can write RE in 5 minutes (short)
- [ ] Can do Pumping Lemma proof in 10 minutes

---

## 🎯 Final Score Projection

**Conservative Estimate:**

- Long Q1 (DFA/NFA): 8/10
- Long Q2 (TM): 8/10
- Short Q1-4 (RE, DFA, PDA, Pumping): 4×4 = 16/20
- Short Q5-8 (CNF, Definitions, CFG, Complexity): 4×4 = 16/20

**Total: 8+8+16+16 = 48 marks** ✅ (Well above 35 target)

**Optimistic Estimate:**

- Long: 9+9 = 18/20
- Short: 8×4.5 = 36/40

**Total: 18+36 = 54 marks** ✅ (Excellent score)

---

## 💡 Pro Tips

1. **DFA/NFA Construction:** Always draw state diagram FIRST, then write transition table. Diagram helps visualize.

2. **Turing Machines:** Use descriptive state names (q_match0, q_match1) instead of q0, q1. Makes design clearer.

3. **Regular Expressions:** Break complex patterns into parts. Example: "even 0's" = (1\*01\*01\*)\*

4. **CNF Conversion:** Do step-by-step, don't skip. Examiners give marks for each step.

5. **Pumping Lemma:** Always state "Assume L is regular" and "Contradiction" explicitly. These words matter.

6. **ID Sequences:** Write minimum 5-6 steps. Show the transition clearly with ⊢ symbol.

7. **Time management:**

   - Long questions: 25-30 minutes each (total 50-60 min)
   - Short questions: 8-12 minutes each (total 64-96 min)
   - Revision: 20 minutes

8. **Diagrams score big:** For automata, always draw transition diagrams. They're worth 2-3 marks even if transitions are wrong.

9. **Practice with timer:** TOC has many constructions. Speed comes only with timed practice.

10. **Memorize patterns:** Don't try to derive everything in exam. Memorize standard patterns (RE, PDA, TM).

---

**Good luck! Focus on DFA/NFA and Turing Machines for long questions, and Regular Expressions for guaranteed short marks! 🚀**
