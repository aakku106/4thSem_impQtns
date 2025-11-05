# AI – Worked Examples (G5 solutions)

This file gives two fully worked, exam‑ready examples you can copy the structure from: (1) A\* vs Greedy Best‑First on a small graph, and (2) a complete FOPL → CNF → Resolution proof.

---

## A\* vs Greedy Best‑First on a small graph

Goal: Find a path from S to G. Edge costs are positive. Heuristics h(n) are admissible (never over‑estimate).

Graph (edges with costs):

- S–A: 2
- S–B: 2
- A–C: 2
- B–C: 5
- C–G: 2
- A–G: 9

Heuristics h(n): h(S)=6, h(A)=5, h(B)=2, h(C)=2, h(G)=0

Observation: Greedy (which uses only h) will be tempted to go via B because h(B) < h(A), but that yields a longer path.

### Greedy Best‑First (use only h)

- Initialize: OPEN = {S}, CLOSED = {}
- Expand S → neighbors A, B; choose lowest h
  - h(A)=5, h(B)=2 → pick B
- Expand B → neighbor C; choose C (h=2)
- Expand C → neighbor G; choose G (h=0)
- Path found (Greedy): S → B → C → G; Total cost = 2 + 5 + 2 = 9

Greedy result: Cost 9 (sub‑optimal)

### A\* Search (use f = g + h)

- Initialize: g(S)=0, f(S)=0+6=6; OPEN={S}, CLOSED={}
- Expand S → A (g=2,f=2+5=7), B (g=2,f=2+2=4); pick node with lowest f → pick B (f=4)
- Expand B → C via B: g(C)=2+5=7, f=7+2=9; OPEN now has {A(f=7), C(f=9)} → pick A (f=7)
- Expand A → C via A: g(C)=min(7, 2+2=4) = 4, f=4+2=6; decrease‑key for C to f=6
- Pick C (f=6) → expand to G: g(G)=4+2=6, f=6+0=6 → goal
- Path found (A\*): S → A → C → G; Total cost = 2 + 2 + 2 = 6

A\* result: Cost 6 (optimal)

Key takeaway:

- Greedy chooses by smallest h only, so it may take a locally attractive but globally costlier path.
- A\* uses g+h, so it balances cost‑so‑far with estimated cost‑to‑go and returns the optimal path (with admissible h).

---

## FOPL → CNF → Resolution proof (complete)

Task: From the premises, prove that Ram studies.

Premises (in English):

1. All students are smart.
2. All smart people study.
3. Ram is a student.

Conclusion to prove: Ram studies.

### Step 1: Convert premises to FOPL

1. ∀x (Student(x) → Smart(x))
2. ∀x (Smart(x) → Studies(x))
3. Student(Ram)

We want to prove Studies(Ram).

### Step 2: Negate the conclusion and add to the set

¬Studies(Ram)

If this leads to a contradiction, the original conclusion is proved.

### Step 3: Eliminate implications

1. ∀x (¬Student(x) ∨ Smart(x))
2. ∀x (¬Smart(x) ∨ Studies(x))
3. Student(Ram)
4. ¬Studies(Ram)

### Step 4: Standardize variables (rename bound variables to avoid clashes)

1. ∀x (¬Student(x) ∨ Smart(x))
2. ∀y (¬Smart(y) ∨ Studies(y))
3. Student(Ram)
4. ¬Studies(Ram)

### Step 5: Skolemization and drop universal quantifiers

No existential quantifiers appear. Drop ∀.

Clauses (CNF as sets of literals):

- C1: ¬Student(x) ∨ Smart(x)
- C2: ¬Smart(y) ∨ Studies(y)
- C3: Student(Ram)
- C4: ¬Studies(Ram)

### Step 6: Resolution steps (with unification)

- R1: Resolve C2 and C4 with y := Ram
  - (¬Smart(Ram) ∨ Studies(Ram)) with ¬Studies(Ram) ⇒ ¬Smart(Ram)
- R2: Resolve C1 and C3 with x := Ram
  - (¬Student(Ram) ∨ Smart(Ram)) with Student(Ram) ⇒ Smart(Ram)
- R3: Resolve R1 (¬Smart(Ram)) and R2 (Smart(Ram)) ⇒ ⊥ (empty clause)

Empty clause derived ⇒ contradiction ⇒ the negated conclusion is false.

Therefore, Studies(Ram) is logically entailed by the premises.

### Structure to copy in exam

- Write premises in English and FOPL.
- Add negated conclusion.
- Implication elimination; move to CNF.
- Standardize variables; Skolemize if needed; drop ∀.
- List clauses; resolve step‑by‑step until empty clause.
- Conclude the original statement is proved.
