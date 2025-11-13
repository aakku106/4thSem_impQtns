# Chomsky Hierarchy & Key Definitions Cheat Sheet

This is a quick reference for the fundamental definitions and the Chomsky Hierarchy, designed for easy memorization.

---

## 1. Key Definitions

- **Alphabet (Σ):** A finite, non-empty set of symbols.

  - _Example:_ `Σ = {0, 1}` or `Σ = {a, b, c}`

- **String:** A finite sequence of symbols chosen from an alphabet.

  - _Example:_ `"01101"` is a string over the alphabet `Σ = {0, 1}`.
  - **Empty String (ε):** A string with zero symbols.

- **Language (L):** A set of strings over a particular alphabet. A language can be finite or infinite.

  - _Example:_ The language of all strings with an even number of 0s over `Σ = {0, 1}`.

- **Kleene Closure (Σ\*):** The set of all possible strings of all lengths that can be formed from an alphabet **including the empty string (ε)**.

  - _Example:_ If `Σ = {a}`, then `Σ* = {ε, a, aa, aaa, ...}`.

- **Positive Closure (Σ+):** The set of all possible strings of all lengths that can be formed from an alphabet **excluding the empty string**. It is the same as Kleene Closure, but without ε.
  - _Example:_ If `Σ = {a}`, then `Σ+ = {a, aa, aaa, ...}`.

---

## 2. The Chomsky Hierarchy

This table organizes language types by their complexity. Each type is a proper subset of the one above it (e.g., all Regular languages are also Context-Free).

| Type       | Language Name          | Grammar Name       | Automaton / Machine that Recognizes It |
| :--------- | :--------------------- | :----------------- | :------------------------------------- |
| **Type-0** | Recursively Enumerable | Unrestricted       | **Turing Machine (TM)**                |
| **Type-1** | Context-Sensitive      | Context-Sensitive  | Linear-Bounded Automaton (LBA)         |
| **Type-2** | Context-Free           | Context-Free (CFG) | **Pushdown Automaton (PDA)**           |
| **Type-3** | **Regular**            | **Regular**        | **Finite Automaton (DFA/NFA)**         |

**How to remember it:**

- Think from bottom to top: **Regular** languages are the simplest (recognized by FAs).
- Add a stack to an FA, and you get a **PDA**, which can recognize **Context-Free** languages.
- A **Turing Machine** is the most powerful and recognizes all **Recursively Enumerable** languages.
- The order is **3, 2, 1, 0** in terms of increasing power and complexity.
