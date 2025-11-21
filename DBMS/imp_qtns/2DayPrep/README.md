# DBMS 2-Day Survival Guide (24-Hour Plan)

**Goal**: Secure pass marks (24+) by focusing on the absolute most repeated and easiest-to-score topics. You have little knowledge, so this plan prioritizes understanding core concepts over covering everything.

---

## The Core Strategy: "Guaranteed Marks"

All three analyses agree: a few topics are **guaranteed** to appear and can secure your pass marks alone. We will focus exclusively on these.

**Your Golden Topics (Total Potential: 35+ Marks):**

1. **Normalization & Functional Dependencies (FD)**: The #1 most important theoretical topic.
2. **SQL Queries**: The #1 most important practical topic.
3. **ACID Properties & 3-Schema Architecture**: The easiest and most frequent short questions.

---

## ️ The 24-Hour Breakdown

### Day 1: The Foundation (12 Hours)

#### Session 1: Normalization & Functional Dependencies (6 Hours)

- **Why**: This is the most repeated **long question** (appears in 5/7 papers) and a guaranteed short question (6/7 papers). Mastering it gives you a direct shot at 15 marks.
- **Past Papers (Long)**: 2076, 2079, 2080, 2080_new, Model.
- **Past Papers (Short - FD)**: 2076, 2078, 2079, 2080_new, 2081, Model.
- **What to Study**:
  1. **Anomalies (1 Hour)**: Understand _why_ we need normalization. Learn Insertion, Deletion, and Update anomalies with a simple example.
  2. **Functional Dependency (FD) (2 Hours)**: This is the key to normalization.
     - What is an FD? (e.g., `StudentID -> StudentName`).
     - Learn to find the **closure of attributes** (e.g., find `{A, B}+`). This is crucial.
     - Briefly review Armstrong's Axioms (Reflexivity, Augmentation, Transitivity).
  3. **The 3 Normal Forms (3 Hours)**:
     - **1NF (First Normal Form)**: "No repeating groups." (Easy).
     - **2NF (Second Normal Form)**: "No partial dependencies." (Requires finding candidate keys).
     - **3NF (Third Normal Form)**: "No transitive dependencies."
- **Goal**: Be able to take a simple table and convert it to 3NF, step-by-step, explaining each step.

#### Session 2: Core Short Questions (4 Hours)

- **Why**: These are easy marks. They are simple definitions that appear in 5/7 papers and can be memorized quickly.
- **What to Study**:
  1. **Transaction Properties (ACID) (2 Hours)**:
     - **Past Papers**: 2076, 2079, 2080, 2081, Model.
     - **A**tomicity: All or nothing.
     - **C**onsistency: Database stays valid.
     - **I**solation: Transactions don't interfere.
     - **D**urability: Committed data is saved permanently.
     - _Practice writing a one-sentence definition for each._
  2. **Three-Schema Architecture (2 Hours)**:
     - **Past Papers**: 2078, 2079, 2080_new, 2081, Model.
     - Draw the diagram: **External Schema -> Conceptual Schema -> Internal Schema**.
     - Define each level's purpose.
     - Define **Logical and Physical Data Independence**.
- **Goal**: Be able to define ACID properties and draw/explain the 3-schema architecture from memory.

#### Session 3: Review Day 1 (2 Hours)

- Quickly revise Normalization steps, FD closure, ACID, and the 3-Schema diagram. Try to explain them to yourself out loud.

---

### Day 2: The Practical & The Polish (12 Hours)

#### Session 4: SQL Queries (8 Hours)

- **Why**: This is the second guaranteed **long question**, appearing in 5/7 papers. Focus on the most common query types.
- **Past Papers**: 2076, 2078, 2080, 2080_new, 2081, Model.
- **What to Study**:
  1. **Basic `SELECT` (2 Hours)**:
     - `SELECT ... FROM ... WHERE ...`
     - `ORDER BY`
  2. **`JOIN` (3 Hours)**: This is the most important part.
     - Focus on `INNER JOIN`. Understand how it combines two tables based on a common column (like `CustomerID`).
     - Practice at least 3-4 examples of joining two tables from the past papers listed above.
  3. **Aggregate Functions (3 Hours)**:
     - `COUNT()`, `SUM()`, `AVG()`, `MAX()`, `MIN()`
     - Learn how to use them with `GROUP BY`. For example, "Find the number of students in each department."
- **Goal**: Be able to write a simple query that joins two tables and uses `GROUP BY` with an aggregate function. **Do not worry about Relational Algebra if you are short on time.** Focus on SQL.

#### Session 5: Final Review & Exam Strategy (4 Hours)

- **Review (3 Hours)**:
  - Go through your notes for Normalization, ACID, 3-Schema, and SQL.
  - Look at the `2081` and `modelQtn` papers in the `qtn_sets_ans_syllabus` folder. Try to identify the questions related to the topics you've studied. Don't solve them, just identify them.
- **Exam Strategy (1 Hour)**:
  - **Section A (Long Questions)**: Your first priority is to find the **Normalization** question or the **SQL** question. Attempt one of them. You should be able to score well.
  - **Section B (Short Questions)**: Immediately find and answer the questions on **Functional Dependencies**, **ACID Properties**, and **Three-Schema Architecture**. This gives you a quick and easy 15 marks.
  - This strategy alone targets **10 (Long) + 15 (Short) = 25 marks**, securing your pass.

---

## Final Advice

- **Don't Panic and Don't Deviate**: Stick to this plan. It's tempting to try and learn more, but you don't have the time. Master these few topics.
- **Practice over Theory**: For Normalization and SQL, practice is everything. Find examples online or in your textbook and solve them.
- **Good Sleep**: Get at least 6-7 hours of sleep before the exam. A tired brain can't recall information.

Good luck! You can do this.
