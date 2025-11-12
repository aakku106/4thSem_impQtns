# Thompson's Construction Examples

This file shows the step-by-step process of converting Regular Expressions into NFA with ε-moves using Thompson's Construction. This is the formal, mechanical method you should use in your exam.

---

## Example 1: `aa*`

This expression is a **concatenation** of two parts: `a` and `a*`.

**Step 1: Construct the NFA for the first `a`.**
This is the most basic building block.

**Step 2: Construct the NFA for `a*`.**
This uses the "star" or "Kleene closure" rule on a basic `a` automaton.

**Step 3: Concatenate the two NFAs.**
To concatenate, the final state of the first NFA becomes the start state of the second NFA.

**Final Diagram for `aa*` (Mermaid Syntax):**

```mermaid
graph LR
    q0(Start) --a--> q1
    q1 --ε--> q2
    q2 --a--> q3
    q3 --ε--> q2
    q1 --ε--> q4((Final))
    q3 --ε--> q4
```

---

## Example 2: `(a+b)*`

This expression is the **star operation** applied to a **union** of `a` and `b`.

**Step 1: Construct the NFA for `a+b`.**
This uses the "union" rule on the basic `a` and `b` automatons.

**Step 2: Apply the "star" rule to the entire `a+b` NFA.**
We add a new start state, a new final state, and ε-loops for repetition and for the empty string.

**Final Diagram for `(a+b)*` (Mermaid Syntax):**

```mermaid
graph LR
    q_start(Start) --ε--> q0
    q_start --ε--> q_final((Final))

    subgraph "a+b"
        q0 --ε--> q1
        q1 --a--> q2
        q2 --ε--> q_f

        q0 --ε--> q3
        q3 --b--> q4
        q4 --ε--> q_f
    end

    q_f --ε--> q0
    q_f --ε--> q_final
```

---

## Example 3: `10+(1+0)0*1`

This is a complex one. It's a **union** of two concatenated expressions: `10` and `(1+0)0*1`. We build each part separately and then combine them with a final union.

**Final Diagram for `10+(1+0)0*1` (Mermaid Syntax):**

_This diagram shows all the components connected. The subgraphs help organize the complex structure._

```mermaid
graph TD
    subgraph "Part C: Final Union"
        FINAL_START(Start) --ε--> A_start
        FINAL_START --ε--> B_start
        A_final --ε--> FINAL_END((Final))
        B_final --ε--> FINAL_END
    end

    subgraph "Part A: 10"
        A_start --1--> A_mid
        A_mid --0--> A_final(A_final)
    end

    subgraph "Part B: (1+0)0*1"
        B_start --"ε (to 1+0)"--> B1_start
        subgraph "B.1: (1+0)"
            B1_start --ε--> B1a
            B1a --1--> B1b
            B1b --ε--> B1_final

            B1_start --ε--> B1c
            B1c --0--> B1d
            B1d --ε--> B1_final
        end

        B1_final --"ε (to 0*)"--> B2_start
        subgraph "B.2: 0*"
            B2_start --ε--> B2a
            B2a --0--> B2b
            B2b --ε--> B2a
            B2_start --ε--> B2_final
            B2b --ε--> B2_final
        end

        B2_final --"ε (to 1)"--> B3_start
        subgraph "B.3: 1"
            B3_start --1--> B_final(B_final)
        end
    end
```
