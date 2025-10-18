# Database Management System - Strategic Study Plan (Target: 35+ Marks)

## 📊 Overall Strategy

- **Full Marks**: 60 (2 Long × 10 + 8 Short × 5)
- **Pass Marks**: 24
- **Your Target**: 35+ marks
- **Strategy**: Focus on high-frequency topics with maximum return on investment

---

## 🎯 Question Pattern Analysis (7 Sets Analyzed: 2076-2081 + Model)

### Section A - Long Questions (Attempt 2 out of 3) - 20 Marks Total

| Topic/Chapter                                | Frequency | Years Appeared                    | Priority           | Expected Marks |
| -------------------------------------------- | --------: | --------------------------------- | ------------------ | -------------: |
| **SQL Queries + Relational Algebra**         |       5/7 | 2076, 2080, 2080_new, 2081, Model | ⭐⭐⭐⭐⭐ MUST DO |       10 marks |
| **Normalization** (1NF, 2NF, 3NF, BCNF)      |       5/7 | 2076, 2079, 2080, 2080_new, Model | ⭐⭐⭐⭐⭐ MUST DO |       10 marks |
| **ER Diagram Construction**                  |       4/7 | 2078, 2079, 2081, Model           | ⭐⭐⭐⭐ HIGH      |       10 marks |
| **Concurrency Control** (2PL, Timestamp)     |       4/7 | 2076, 2078, 2080, 2080_new        | ⭐⭐⭐⭐ HIGH      |       10 marks |
| **Transaction Properties + Serializability** |       3/7 | 2081, Model, 2080_new             | ⭐⭐⭐ MEDIUM      |       10 marks |
| **DBMS Architecture** (3-Schema)             |       2/7 | 2079, 2081                        | ⭐⭐ MEDIUM        |       10 marks |
| **Data Models**                              |       1/7 | 2076                              | ⭐ LOW             |       10 marks |

**Critical Insight**: SQL+RA and Normalization appear in 5 out of 7 papers each. Master these two and you're guaranteed one long question!

---

### Section B - Short Questions (Attempt 8 out of 12) - 40 Marks Total

| Topic/Chapter                            | Frequency | Priority        | Expected Marks |
| ---------------------------------------- | --------: | --------------- | -------------: |
| **Functional Dependency & Normal Forms** |       6/7 | ⭐⭐⭐⭐⭐ MUST |        5 marks |
| **Transaction Properties (ACID)**        |       5/7 | ⭐⭐⭐⭐⭐ MUST |        5 marks |
| **Three-Schema Architecture**            |       5/7 | ⭐⭐⭐⭐⭐ MUST |        5 marks |
| **Relational Model Concepts**            |       5/7 | ⭐⭐⭐⭐ HIGH   |        5 marks |
| **Serializability & Schedules**          |       5/7 | ⭐⭐⭐⭐ HIGH   |        5 marks |
| **Database Recovery Techniques**         |       4/7 | ⭐⭐⭐⭐ HIGH   |        5 marks |
| **ER Diagram Components**                |       4/7 | ⭐⭐⭐ MEDIUM   |        5 marks |
| **Referential Integrity**                |       3/7 | ⭐⭐⭐ MEDIUM   |        5 marks |
| **Natural Join Operations**              |       3/7 | ⭐⭐⭐ MEDIUM   |        5 marks |
| **DBMS vs File System**                  |       2/7 | ⭐⭐ MEDIUM     |        5 marks |
| **Specialization/Generalization**        |       3/7 | ⭐⭐ MEDIUM     |        5 marks |
| **Deadlock**                             |       2/7 | ⭐⭐ MEDIUM     |        5 marks |
| **Tuple Relational Calculus**            |       2/7 | ⭐ LOW          |        5 marks |

---

## 🎓 Unit-Wise Importance & Expected Marks

| Unit        | Chapter Name                    | Importance | Typical Questions          | Target Marks |
| ----------- | ------------------------------- | ---------- | -------------------------- | -----------: |
| **Unit 6**  | SQL                             | ⭐⭐⭐⭐⭐ | 1 Long + 1-2 Short         |        15-20 |
| **Unit 7**  | Database Design & Normalization | ⭐⭐⭐⭐⭐ | 1 Long + 2-3 Short         |        20-25 |
| **Unit 3**  | ER Modeling                     | ⭐⭐⭐⭐   | 1 Long + 1-2 Short         |        15-20 |
| **Unit 8**  | Transaction Processing          | ⭐⭐⭐⭐   | 0-1 Long + 2-3 Short       |        15-20 |
| **Unit 9**  | Concurrency Control             | ⭐⭐⭐⭐   | 1 Long + 1-2 Short         |        15-20 |
| **Unit 10** | Database Recovery               | ⭐⭐⭐     | 0 Long + 2 Short           |           10 |
| **Unit 2**  | DBMS Architecture               | ⭐⭐⭐     | 0-1 Long + 2 Short         |        10-15 |
| **Unit 4**  | Relational Model                | ⭐⭐⭐     | 0 Long + 2 Short           |           10 |
| **Unit 5**  | Relational Algebra/Calculus     | ⭐⭐⭐     | Part of SQL Long + 1 Short |        10-15 |
| **Unit 1**  | Introduction                    | ⭐⭐       | 0 Long + 1 Short           |            5 |

---

## 📚 MUST STUDY Topics (To Secure 35+ Marks)

### 🔴 Priority 1: ABSOLUTE MUST (Will give you 25-30 marks)

#### Long Questions (Pick 2)

**1. SQL + Relational Algebra Queries (5/7 papers)**

- **What to Master**:
  - Basic SELECT, WHERE, ORDER BY
  - Aggregate functions (COUNT, SUM, AVG, MAX, MIN)
  - GROUP BY and HAVING
  - Joins (INNER, NATURAL, OUTER)
  - Subqueries
  - INSERT, UPDATE, DELETE
  - Relational Algebra: σ (SELECT), π (PROJECT), ⋈ (JOIN), ∪, ∩, −, ÷
- **Practice**: Do ALL SQL questions from 2080, 2080_new, 2081, Model
- **Study Time**: 5-6 hours
- **Expected Marks**: 10

**2. Normalization (1NF, 2NF, 3NF) (5/7 papers)**

- **What to Master**:
  - Why normalization is needed (anomalies: insertion, deletion, update)
  - **1NF**: Atomic values, no repeating groups
  - **2NF**: 1NF + no partial dependencies
  - **3NF**: 2NF + no transitive dependencies
  - **BCNF**: Every determinant is a candidate key
  - Step-by-step normalization with examples
  - Functional dependencies
- **Practice**: Normalize at least 3 different schemas
- **Study Time**: 4-5 hours
- **Expected Marks**: 10

**3. ER Diagram Construction (4/7 papers)**

- **What to Master**:
  - Entity, Attributes (Simple, Composite, Multivalued, Derived)
  - Primary Key
  - Relationships (1:1, 1:N, M:N)
  - Weak Entity
  - Generalization/Specialization
  - Aggregation
- **Practice**: Draw ER diagrams for: Library, Hospital, University, E-commerce
- **Study Time**: 3-4 hours
- **Expected Marks**: 8-10

#### Short Questions (Pick 8)

**4. Functional Dependencies & Inference Rules**

- Armstrong's Axioms (Reflexivity, Augmentation, Transitivity)
- Closure of attributes
- Minimal cover
- **Study Time**: 2 hours
- **Expected Marks**: 5

**5. Transaction Properties (ACID)**

- **Atomicity**: All or nothing
- **Consistency**: Database remains in valid state
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed changes are permanent
- **Study Time**: 1 hour
- **Expected Marks**: 5

**6. Three-Schema Architecture**

- **External Schema** (View level)
- **Conceptual Schema** (Logical level)
- **Internal Schema** (Physical level)
- Data independence (Logical & Physical)
- **Study Time**: 1-2 hours
- **Expected Marks**: 5

**7. Relational Model Basics**

- Domain, Attribute, Tuple, Relation
- Degree and Cardinality
- Properties of relations
- **Study Time**: 1 hour
- **Expected Marks**: 5

---

### 🟡 Priority 2: HIGHLY RECOMMENDED (Will give you 10-15 marks)

**8. Serializability & Schedules**

- Serial vs Non-serial schedules
- Conflict Serializability (precedence graph)
- View Serializability
- Recoverable schedules
- **Study Time**: 2-3 hours
- **Expected Marks**: 5

**9. Two-Phase Locking (2PL)**

- Basic 2PL
- Conservative 2PL
- Strict 2PL
- Rigorous 2PL
- Lock conversion
- **Study Time**: 2-3 hours
- **Expected Marks**: 5-10

**10. Database Recovery**

- Deferred Update (NO-UNDO/REDO)
- Immediate Update (UNDO/REDO)
- Shadow Paging
- Checkpoints
- **Study Time**: 2 hours
- **Expected Marks**: 5

**11. Referential Integrity**

- Foreign key constraints
- ON DELETE (CASCADE, SET NULL, NO ACTION)
- ON UPDATE actions
- **Study Time**: 1 hour
- **Expected Marks**: 5

**12. Natural Join & Other Operations**

- Natural Join (⋈)
- Outer Joins (Left, Right, Full)
- Division operation
- **Study Time**: 1-2 hours
- **Expected Marks**: 5

---

### 🟢 Priority 3: GOOD TO KNOW (For extra safety)

**13. Specialization & Generalization**

- Disjoint vs Overlapping
- Total vs Partial
- **Study Time**: 1 hour

**14. Deadlock**

- Deadlock prevention
- Deadlock detection
- Wait-die and Wound-wait
- **Study Time**: 1-2 hours

**15. Tuple Relational Calculus**

- Basic syntax: {t | P(t)}
- Writing simple queries
- **Study Time**: 1 hour

---

## 📋 Week-by-Week Study Plan

### Week 1: Core Foundations (Priority 1 - Part A)

| Day   | Topic                                           | Hours | Type |
| ----- | ----------------------------------------------- | ----- | ---- |
| Day 1 | SQL Basics (SELECT, WHERE, JOIN)                | 3h    | Long |
| Day 2 | SQL Advanced (Aggregates, Subqueries, GROUP BY) | 3h    | Long |
| Day 3 | Relational Algebra (6 operations + examples)    | 3h    | Long |
| Day 4 | Normalization Theory (1NF, 2NF, 3NF)            | 3h    | Long |
| Day 5 | Normalization Practice (3-4 problems)           | 2h    | Long |
| Day 6 | ER Diagram Components & Symbols                 | 2h    | Long |
| Day 7 | ER Diagram Practice (3 scenarios)               | 2h    | Long |

**Week 1 Target**: 25-30 marks preparation

---

### Week 2: Essential Topics (Priority 1 Part B + Priority 2)

| Day    | Topic                                         | Hours | Type       |
| ------ | --------------------------------------------- | ----- | ---------- |
| Day 8  | Functional Dependencies + Armstrong's Axioms  | 2h    | Short      |
| Day 9  | Transaction Properties (ACID) + States        | 2h    | Short      |
| Day 10 | Three-Schema Architecture + Data Independence | 2h    | Short      |
| Day 11 | Relational Model Concepts                     | 1h    | Short      |
| Day 12 | Serializability & Schedules                   | 3h    | Short/Long |
| Day 13 | Concurrency Control (2PL)                     | 3h    | Long       |
| Day 14 | Database Recovery Techniques                  | 2h    | Short      |

**Week 2 Target**: Additional 15-20 marks preparation

**Total Preparation After 2 Weeks**: 40-50 marks capability

---

## 🎯 Exam Day Strategy

### Section A - Long Questions (Choose 2 out of 3)

**Priority Order**:

1. ✅ **SQL + Relational Algebra** (if appears) → **MUST DO** → 10 marks
2. ✅ **Normalization** (if appears) → **MUST DO** → 10 marks
3. ✅ **ER Diagram** (if above two not available) → DO IT → 8-10 marks
4. ✅ **Concurrency Control** (backup option) → 7-9 marks

**Time Management**: 35-40 minutes per question

---

### Section B - Short Questions (Choose 8 out of 12)

**Must Attempt (if you see these)**:

1. ✅ Functional Dependencies → 5 marks
2. ✅ Transaction Properties (ACID) → 5 marks
3. ✅ Three-Schema Architecture → 5 marks
4. ✅ Relational Model concepts → 5 marks
5. ✅ Serializability → 4-5 marks
6. ✅ Referential Integrity → 4-5 marks
7. ✅ Natural Join / RA operations → 4-5 marks
8. ✅ Database Recovery OR Specialization → 4-5 marks

**Time Management**: 10-12 minutes per question

---

## 📊 Expected Marks Distribution

| Section       | Questions             | Strategy        |     Expected Marks |
| ------------- | --------------------- | --------------- | -----------------: |
| **Long Q1**   | SQL + RA              | Well practiced  |               9-10 |
| **Long Q2**   | Normalization         | Well practiced  |               9-10 |
| **Short × 8** | High-frequency topics | Focused study   |              32-36 |
| **TOTAL**     | 10 questions          | Smart selection | **50-56 marks** ✅ |

**With this strategy, you should easily score 50+ marks (well above your 35+ target)!**

---

## 💡 Answer Writing Tips

### For Long Questions (10 marks)

**SQL Queries**:

- ✅ Write schema first (1 mark)
- ✅ Each query: SQL + Relational Algebra both (8 marks)
- ✅ Use proper syntax, aliases, formatting

**Normalization**:

- ✅ Define normalization & why needed (1 mark)
- ✅ Show original relation with sample data (1 mark)
- ✅ 1NF transformation with explanation (2-3 marks)
- ✅ 2NF transformation with explanation (2-3 marks)
- ✅ 3NF transformation with explanation (2-3 marks)
- ✅ Final conclusion (1 mark)

**ER Diagram**:

- ✅ Read requirements carefully (underline entities, attributes, relationships)
- ✅ Draw clean diagram with proper symbols (6-7 marks)
- ✅ Label cardinalities (1:1, 1:N, M:N) (2 marks)
- ✅ Underline primary keys (1 mark)

---

### For Short Questions (5 marks)

- ✅ Definition/Introduction (1 mark)
- ✅ Main explanation with points (2-3 marks)
- ✅ Diagram/Example if asked (1-2 marks)
- ✅ Be precise, use bullet points, draw diagrams

---

## 🎁 Quick Reference - Most Common Short Note Topics

Practice 2-3 line answers for these:

- **DBMS vs File System** (advantages of DBMS)
- **Data Independence** (Logical vs Physical)
- **Weak Entity** (definition + example)
- **Aggregation** (ER concept)
- **Domain Constraint** (valid values)
- **Integrity Types** (Entity, Referential, Domain)
- **Lock Conversion** (upgrade/downgrade)
- **Checkpoints** (in recovery)
- **Starvation** (in transactions)
- **BCNF** (stricter than 3NF)

---

## ✅ Final Checklist Before Exam

- [ ] Can write 5+ SQL queries (JOIN, GROUP BY, Subquery)
- [ ] Can convert SQL to Relational Algebra
- [ ] Can normalize any schema to 3NF step-by-step
- [ ] Can draw ER diagram for any scenario
- [ ] Know ACID properties by heart
- [ ] Can draw 3-Schema Architecture diagram
- [ ] Understand Functional Dependencies + Closure
- [ ] Can test Conflict Serializability (precedence graph)
- [ ] Know 4 types of 2PL
- [ ] Understand Deferred vs Immediate Update recovery

---

## 🚀 Confidence Booster

**You need only 35 marks, but this plan targets 50+ marks!**

**Guaranteed Topics** (appear in 5/7 papers):

- SQL + Relational Algebra → 10 marks
- Normalization → 10 marks
- Functional Dependencies → 5 marks
- Transaction Properties → 5 marks
- Three-Schema → 5 marks

**Total from just these 5 topics: 35 marks** ✅

**Plus Easy Topics** (high frequency):

- ER Diagram components → 5 marks
- Serializability → 5 marks
- Relational Model → 5 marks

**Grand Total: 50 marks easily achievable!**

---

### 📞 Remember

> "Practice SQL queries daily. Normalization will come with repetition. ER diagrams need visual thinking."

**The DBMS exam rewards practice more than theory. Do more problems, less reading!**

---

_Analysis based on: 2076, 2078, 2079, 2080, 2080_new, 2081, and Model Question Sets_  
_Subject: Database Management System (DBMS)_  
_Target Audience: BSc.CSIT 4th Semester Students_  
_Last Updated: October 18, 2025_
