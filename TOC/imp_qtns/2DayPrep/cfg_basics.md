# CFG Basics: Derivations, Parse Trees, and Ambiguity

This guide provides a quick introduction to three fundamental concepts of Context-Free Grammars (CFGs).

---

### The Example Grammar

Let's use a simple grammar for our first two concepts. This grammar generates strings with some number of 'a's followed by the same number of 'b's.

**Grammar G:**

- `S → aSb`
- `S → ε` (where ε is the empty string)

---

## 1. Derivation

A **derivation** is the process of applying the rules of a grammar to transform the start symbol (`S`) into a final string of terminals (like 'a' and 'b'). It's a step-by-step sequence of replacements.

There are two main types:

- **Leftmost Derivation:** At each step, you replace the leftmost non-terminal symbol.
- **Rightmost Derivation:** At each step, you replace the rightmost non-terminal symbol.

#### Example: Deriving the string "aabb"

Let's derive "aabb" using our grammar G.

**Leftmost Derivation:**

1. `S`
2. `→ aSb` (Applied rule `S → aSb`. The leftmost non-terminal is `S`.)
3. `→ a(aSb)b` (Applied `S → aSb` to the inner `S`. The result is `aaSbb`.)
4. `→ aa(ε)bb` (Applied `S → ε` to the remaining `S`.)
5. `→ aabb` (The final string.)

The sequence of transformations `S ⇒ aSb ⇒ aaSbb ⇒ aabb` is the derivation.

---

## 2. Parse Tree

A **Parse Tree** (or Derivation Tree) is a graphical representation of a derivation. It shows how the start symbol is broken down into the final string of terminals.

- The **root** of the tree is the start symbol (`S`).
- The **leaves** of the tree are the terminal symbols (or ε).
- The **internal nodes** are non-terminal symbols.

#### Example: Parse Tree for "aabb"

The parse tree for the derivation we just performed looks like this:

```
      S
     /|\
    / | \
   a  S  b
     /|\
    / | \
   a  S  b
      |
      ε
```

**How to read it:** Reading the leaves from left to right gives you the final string: `a` `a` `ε` `b` `b`, which simplifies to `aabb`.

---

## 3. Ambiguity

A grammar is considered **ambiguous** if there is at least one string that can be generated in more than one way. This means the string has:

- Two or more different Leftmost Derivations, OR
- Two or more different Rightmost Derivations, OR
- Two or more different Parse Trees.

Ambiguity is often a problem because it means the structure (and therefore the meaning) of a string is not unique.

#### Example: An Ambiguous Grammar for Arithmetic

Consider this classic ambiguous grammar for simple math expressions:
`E → E + E | E * E | id`
(where `E` is the expression and `id` is a number/identifier).

Let's look at the string **`id + id * id`**. We can create two different parse trees for it.

**Parse Tree 1: (Treats `+` as having higher precedence)**
This tree groups `id + id` first.

```
      E
     /|\
    / | \
   E  *  E
  /|\    |
 / | \   id
E  +  E
|     |
id    id
```

This corresponds to the calculation `(id + id) * id`.

**Parse Tree 2: (Treats `*` as having higher precedence)**
This tree groups `id * id` first.

```
      E
     /|\
    / | \
   E  +  E
   |     /|\
   id   / | \
       E  *  E
       |     |
       id    id
```

This corresponds to the calculation `id + (id * id)`, which is the standard mathematical interpretation.

Since we can create two different parse trees for the same string, the grammar `E → E + E | E * E | id` is **ambiguous**.
