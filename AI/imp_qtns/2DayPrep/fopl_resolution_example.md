# AI Long Question Example: FOPL to CNF to Resolution

This file provides a worked example for the second most common long question: proving a conclusion from premises using logical resolution.

**Reference:** This structure is based on the problem in `AI/Example_soln/g5_soln.md`.

---

## Problem Statement

**Task:** From the given premises, prove that "Ram studies."

**Premises (in English):**

1. All students are smart.
2. All smart people study.
3. Ram is a student.

**Conclusion to Prove:** Ram studies.

---

## The 6-Step Resolution Process

This is a mechanical process. Follow these steps exactly to get full marks.

### Step 1: Convert Premises and Negated Conclusion to FOPL

First, translate the English sentences into First-Order Predicate Logic. **Crucially, you must negate the conclusion.**

1. `∀x (Student(x) → Smart(x))`
2. `∀x (Smart(x) → Studies(x))`
3. `Student(Ram)`
4. `¬Studies(Ram)` _(Negated Conclusion)_

### Step 2: Eliminate Implications (→)

Convert every `A → B` into `¬A ∨ B`.

1. `∀x (¬Student(x) ∨ Smart(x))`
2. `∀x (¬Smart(x) ∨ Studies(x))`
3. `Student(Ram)`
4. `¬Studies(Ram)`

### Step 3: Standardize Variables

Ensure each quantifier (`∀`) has a unique variable name to avoid clashes.

1. `∀x (¬Student(x) ∨ Smart(x))`
2. `∀y (¬Smart(y) ∨ Studies(y))` _(Renamed x to y)_
3. `Student(Ram)`
4. `¬Studies(Ram)`

### Step 4: Skolemize and Drop Universal Quantifiers (∀)

- **Skolemization:** Replace existential quantifiers (`∃`) with a constant or function. (There are none in this common exam problem, so you can often skip this).
- **Drop ∀:** Simply remove all the `∀x` and `∀y` symbols.

1. `¬Student(x) ∨ Smart(x)`
2. `¬Smart(y) ∨ Studies(y)`
3. `Student(Ram)`
4. `¬Studies(Ram)`

### Step 5: List Clauses in CNF

The sentences from Step 4 are now in Conjunctive Normal Form (CNF). List them out and label them for clarity.

- **C1:** `¬Student(x) ∨ Smart(x)`
- **C2:** `¬Smart(y) ∨ Studies(y)`
- **C3:** `Student(Ram)`
- **C4:** `¬Studies(Ram)`

### Step 6: Resolution Steps (Unification)

Resolve pairs of clauses that contain complementary literals (e.g., `A` and `¬A`) until you derive an empty clause (`⊥`). This indicates a contradiction.

- **R1: Resolve C2 and C4**

  - We can match `Studies(y)` in C2 with `¬Studies(Ram)` in C4 if we **unify** `y` with `Ram`.
  - `(¬Smart(y) ∨ Studies(y))` and `¬Studies(Ram)`
  - Result: `¬Smart(Ram)`

- **R2: Resolve C1 and C3**

  - We can match `¬Student(x)` in C1 with `Student(Ram)` in C3 if we **unify** `x` with `Ram`.
  - `(¬Student(x) ∨ Smart(x))` and `Student(Ram)`
  - Result: `Smart(Ram)`

- **R3: Resolve R1 and R2**
  - We have `¬Smart(Ram)` from R1 and `Smart(Ram)` from R2.
  - These are direct complements and resolve to the **empty clause (⊥)**.

---

### Conclusion

Since we derived an empty clause, we have found a contradiction. This proves that the negated conclusion (`¬Studies(Ram)`) is false.

Therefore, the original conclusion, **"Ram studies," is logically entailed by the premises.**
