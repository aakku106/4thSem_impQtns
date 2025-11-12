# TOC G5 – Worked Examples Cheat Sheet (Exam‑ready)

Use these two patterns to secure long‑question marks fast. Copy structure and adapt symbols if the exam graph/grammar differs.

## 1) ε‑NFA → DFA (Subset Construction) – Example: strings over {0,1} ending with 01

Goal: Build a DFA that accepts all strings ending with 01 via ε‑NFA → DFA conversion.

ε‑NFA (design idea):

- q0: start, loop on 0/1; ε‑move to q1 on seeing a 0 (progress towards 01)
- q1: on 1 → go to q2 (accepting state indicating "…01" seen)

Transition sketch

```text
States: q0 (start), q1, q2 (final)
Edges:
q0 --0--> q0, q1
q0 --1--> q0
q1 --1--> q2
q2 --0/1--> (optional self/track, not required for minimal example)
ε-closures:
ε-closure(q0) = {q0}
ε-closure(q1) = {q1}
ε-closure(q2) = {q2}
```

Subset construction table (DFA states are sets of NFA states):

| DFA State | NFA Set  | on 0 → NFA targets | ε‑closure | on 1 → NFA targets | ε‑closure |
| --------- | -------- | ------------------ | --------- | ------------------ | --------- |
| A (start) | {q0}     | {q0, q1}           | {q0, q1}  | {q0}               | {q0}      |
| B         | {q0, q1} | {q0, q1}           | {q0, q1}  | {q0, q2}           | {q0, q2}  |
| C (final) | {q0, q2} | {q0, q1}           | {q0, q1}  | {q0}               | {q0}      |

Accepting DFA states: any set containing q2 → here C is accepting.

DFA transitions:

- A --0--> B, A --1--> A
- B --0--> B, B --1--> C
- C --0--> B, C --1--> A

This DFA recognizes strings ending with 01.

What to write in exam:

1. Draw the ε‑NFA (3 nodes, labeled edges as above)
2. Show ε‑closures (trivial here)
3. Build the subset table (A,B,C) and mark accepting set(s)
4. Draw final DFA (A,B,C; C double‑circle)

Scoring tips:

- Always include the table; it earns method marks even if a transition slips.
- Mark accepting set(s) clearly.

---

## 2) Turing Machine – L = { 0ⁿ1ⁿ | n ≥ 1 } with ID trace

Idea: Cross off matching leading 0 and trailing 1 using markers X,Y.

Alphabet: Γ = {0,1,X,Y,B}

High‑level moves:

1. From left, find a 0 → mark X → move right to first unmarked 1 → mark Y → return left to next unmarked 0.
2. When no 0 remains, ensure no unmarked 1 remains → accept.

Partial transitions (sufficient for exam sketch):

```text
(q0, 0) → (q1, X, R)   ; mark a 0
(q1, 0) → (q1, 0, R)   ; skip 0s
(q1, X) → (q1, X, R)   ; skip X
(q1, Y) → (q1, Y, R)   ; skip Y
(q1, 1) → (q2, Y, L)   ; match with a 1
(q2, 0) → (q2, 0, L)   ; go back left
(q2, X) → (q0, X, R)   ; next cycle
(q0, X) → (q0, X, R)   ; skip marked 0s
(q0, Y) → (q3, Y, R)   ; no 0 left, verify only Y's remain
(q3, Y) → (q3, Y, R)
(q3, B) → (q_accept, B, R)
```

ID trace for input 0011 (accept):

```text
q0 0011              → X q1 011            → X0 q1 11
→ X0 1 q2 1          → X q2 0 1            → q2 X 0 1
→ q0 X 0 1           → X q1 0 1            → X0 q1 1
→ X0 Y q2 B          → X q2 0 Y            → q2 X 0 Y
→ q0 X 0 Y           → X q1 0 Y            → X0 q1 Y
→ X0 Y q3 B          → X0 Y B q_accept     (accept)
```

What to write in exam:

1. State set and tape alphabet (brief)
2. Transition table (or bullet list as above)
3. A few key IDs showing mark‑match‑return cycles and final accept

Tips:

- Use X for marked 0 and Y for marked 1; keep it consistent.
- If time is short, show 1–2 full cycles then jump to accept state with a note.
