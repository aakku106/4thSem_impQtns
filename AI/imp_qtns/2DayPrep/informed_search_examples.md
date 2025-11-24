# AI Long Question Example: Informed Search (A\* vs. Greedy)

This file provides a worked example for the most common long question on Informed Search. The goal is to trace the steps of A\* and Greedy Best-First Search on a given graph.

**Reference:** This structure is based on the problem in `AI/Example_soln/g5_soln.md`.

---

## Problem Statement

**Goal:** Find a path from node **S** to node **G**.
**Graph (Edges with Costs):**

- S–A: 2
- S–B: 2
- A–C: 2
- B–C: 5
- C–G: 2
- A–G: 9

**Heuristics `h(n)`:**

- h(S) = 6
- h(A) = 5
- h(B) = 2
- h(C) = 2
- h(G) = 0

---

## 1. A\* Search Trace (Uses `f(n) = g(n) + h(n)`)

A\* balances the cost to get to a node (`g(n)`) and the estimated cost to the goal (`h(n)`). It always expands the node with the **lowest `f(n)` value**.

**Step-by-Step Trace Table:**

| Step | Node to Expand | Path so Far   | g(n) | h(n) | f(n) | OPEN List (Node, f(n))                               | CLOSED List  |
| :--- | :------------- | :------------ | :--- | :--- | :--- | :--------------------------------------------------- | :----------- |
| 1    | **S**          | S             | 0    | 6    | 6    | { (A, 7), (B, 4) }                                   | {S}          |
| 2    | **B** (f=4)    | S → B         | 2    | 2    | 4    | { (A, 7), (C, 9) }                                   | {S, B}       |
| 3    | **A** (f=7)    | S → A         | 2    | 5    | 7    | { (C, 6), (G, 11) } _Note: C's f(n) is updated to 6_ | {S, B, A}    |
| 4    | **C** (f=6)    | S → A → C     | 4    | 2    | 6    | { (G, 6) }                                           | {S, B, A, C} |
| 5    | **G** (f=6)    | S → A → C → G | 6    | 0    | 6    | { }                                                  | **Goal!**    |

**Explanation of Key Steps:**

- **Step 2:** We chose **B** (f=4) over A (f=7) because its `f(n)` was lower.
- **Step 3:** We chose **A** (f=7) over C (f=9). When we expanded A, we found a new path to C (S→A→C) with a cost `g(C) = 2+2=4`. This is better than the old path (S→B→C, g=7). So, we **update C's cost** in the OPEN list. Its new `f(n)` becomes `4+2=6`.
- **Step 4:** Now, C has the lowest `f(n)` of 6, so we expand it.

**Result (A\*):**

- **Path:** S → A → C → G
- **Total Cost:** 6 (Optimal)

---

## 2. Greedy Best-First Search Trace (Uses `h(n)` only)

Greedy search is simpler and "short-sighted." It always expands the node with the **lowest heuristic `h(n)` value**, ignoring the cost to get there.

**Step-by-Step Trace:**

1. **Initialize:** OPEN = {S}
2. **Expand S:** Neighbors are A (h=5) and B (h=2).
3. **Choose B:** Pick B because `h(B) = 2` is lower than `h(A) = 5`. OPEN = {A, B} -> {A, C}.
4. **Expand B:** Neighbor is C (h=2).
5. **Choose C:** Pick C. OPEN = {A, C} -> {A, G}.
6. **Expand C:** Neighbor is G (h=0).
7. **Choose G:** Goal found.

**Result (Greedy):**

- **Path:** S → B → C → G
- **Total Cost:** 2 + 5 + 2 = 9 (Sub-optimal)

---

### Key Takeaway for Exam

- **A\*** is smart and finds the best path because it uses both `g(n)` and `h(n)`.
- **Greedy** is fast but dumb. It can be tricked into taking a path that looks good locally but is expensive overall.
- When asked to trace, a **table for A\*** and a **step-by-step list for Greedy** is a great way to present your answer clearly.
