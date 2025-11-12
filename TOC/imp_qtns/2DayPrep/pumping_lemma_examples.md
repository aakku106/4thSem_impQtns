# Pumping Lemma Proofs for Exam Practice

This file contains the detailed, step-by-step proofs for the most common Pumping Lemma questions. You should memorize the structure of these proofs.

---

## Proof 1: `L = {0^n 1^n | n >= 1}` is not regular

**Question:** Use the Pumping Lemma to prove that the language `L = {0^n 1^n | n >= 1}` is not a regular language.

**Proof by Contradiction:**

**Step 1: Assume L is Regular**
Assume that `L` is a regular language.

**Step 2: Apply the Pumping Lemma**
If `L` is regular, then the Pumping Lemma must hold. This means there exists a pumping length `p` (where `p > 0`) for `L` such that any string `w` in `L` with `|w| >= p` can be divided into three parts, `w = xyz`, satisfying the following conditions:

1. `|xy| <= p`
2. `|y| > 0` (the string `y` is not empty)
3. For all `i >= 0`, the string `xy^i z` is also in `L`.

**Step 3: Choose a Specific String `w`**
We need to choose a string `w` in `L` such that `|w| >= p`. A strategic choice is:
`w = 0^p 1^p`
This string is in `L` (since `n=p`) and its length is `2p`, which is greater than or equal to `p`.

**Step 4: Analyze All Possible Divisions of `w` into `xyz`**
Now we analyze how `w = 0^p 1^p` can be split into `xyz` while respecting the condition `|xy| <= p`.

Since `w = 00...0` (`p` times) followed by `11...1` (`p` times), and the length of the `xy` part must be at most `p`, the `xy` part can **only contain 0s**.

This means:

- `x` is a sequence of 0s.
- `y` is a sequence of 0s.
- `z` contains the remaining 0s and all the 1s.

So, `x = 0^a`, `y = 0^b`, and `z = 0^(p-a-b) 1^p`, where `a >= 0`, `b > 0` (from condition `|y|>0`), and `a+b <= p`.

**Step 5: Pump the String and Show a Contradiction**
According to condition 3 of the lemma, the string `xy^i z` must be in `L` for any `i >= 0`. Let's choose `i = 2` (we could also choose `i=0` or `i=3`, etc.).

The new string is `w' = xy^2 z = xyyz`.
`w' = (0^a) (0^b) (0^b) (0^(p-a-b) 1^p)`
`w' = 0^(a+2b+p-a-b) 1^p`
`w' = 0^(p+b) 1^p`

Since we know `b > 0`, the number of 0s (`p+b`) is **not equal** to the number of 1s (`p`).
Therefore, the pumped string `w'` is **not** in `L`.

**Step 6: Conclude**
This is a contradiction. Our initial assumption that `L` is regular must be false, because we found a string `w` that violates the Pumping Lemma.

**Therefore, `L = {0^n 1^n | n >= 1}` is not a regular language.**

---

## Proof 2: `L = {a^n b^n | n >= 0}` is not regular

**Question:** Use the Pumping Lemma to prove that the language `L = {a^n b^n | n >= 0}` is not a regular language.

_Note: The proof is almost identical to the one above. The main difference is that this language includes the empty string (when n=0), but this doesn't affect our choice of `w`._

**Proof by Contradiction:**

**Step 1: Assume L is Regular**
Assume that `L` is a regular language.

**Step 2: Apply the Pumping Lemma**
If `L` is regular, there must be a pumping length `p > 0` such that any string `w` in `L` with `|w| >= p` can be split into `w = xyz` satisfying:

1. `|xy| <= p`
2. `|y| > 0`
3. For all `i >= 0`, `xy^i z` is in `L`.

**Step 3: Choose a Specific String `w`**
We choose a string `w` in `L` where `|w| >= p`. A good choice is:
`w = a^p b^p`
This string is in `L` and its length `2p` is `>= p`.

**Step 4: Analyze All Possible Divisions of `w` into `xyz`**
Given `w = a...a` (`p` times) followed by `b...b` (`p` times), the condition `|xy| <= p` means that the `xy` part must consist entirely of `a`'s.

So, `x = a^k`, `y = a^j`, and `z = a^(p-k-j) b^p`, where `k >= 0`, `j > 0` (from `|y|>0`), and `k+j <= p`.

**Step 5: Pump the String and Show a Contradiction**
Let's pump `y` by choosing `i = 2`. The new string is `w' = xy^2 z`.
`w' = (a^k) (a^j) (a^j) (a^(p-k-j) b^p)`
`w' = a^(k+2j+p-k-j) b^p`
`w' = a^(p+j) b^p`

Since we know `j > 0`, the number of `a`'s (`p+j`) is **not equal** to the number of `b`'s (`p`).
Thus, the string `w'` is **not** in `L`.

**Step 6: Conclude**
We have found a contradiction, as the Pumping Lemma is violated. Our initial assumption was incorrect.

**Therefore, `L = {a^n b^n | n >= 0}` is not a regular language.**
