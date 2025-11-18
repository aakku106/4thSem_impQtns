# OS in 2 Days: The Emergency 23-Hour Pass Plan

**Goal:** Score 25-35 marks by mastering the absolute most critical, high-frequency topics.
**Your Situation:** 2 days, 23 hours total, starting with only basic OS knowledge.
**Strategy:** We will ignore most theory and focus entirely on the three most repeated numerical problems. These are mechanical, easy to score full marks on, and appear in almost every single exam paper according to all three analyses.

---

## 🎯 Your Must-Master Topics (The 25-30 Mark Core)

Do not study anything else until you have mastered these three. They are your ticket to passing.

| Rank | Topic (Focus on Numericals)     | Frequency (Avg.) | Why it's essential                                        |
| :--- | :------------------------------ | :--------------- | :-------------------------------------------------------- |
| 1    | **CPU Scheduling Algorithms**   | **7/7**          | **Guaranteed 10 marks.** Appears in every single paper.   |
| 2    | **Page Replacement Algorithms** | **6/7**          | **Guaranteed 10 marks.** The second most common question. |
| 3    | **Disk Scheduling Algorithms**  | **5/7**          | **Very likely 5-10 marks.** Your safest backup question.  |

---

## 🗓️ The 23-Hour Study Schedule

This schedule is intense but focuses your effort for maximum return.

### **Day 1: Core Numericals (12 Hours)**

Your goal today is to become a machine at solving CPU and Page Replacement problems.

- **Morning (6 hours): CPU Scheduling Mastery**

  - **Topics:** FCFS, SJF (Non-Preemptive), SRTN (Preemptive SJF), and Round Robin (RR).
  - **Past Papers:** 2076, 2078, 2079, 2080, 2080_new, 2081, Model (Appears in every paper).
  - **What to learn:**
    1. How to draw a **Gantt Chart** for each algorithm. This is the most critical step.
    2. How to calculate **Turnaround Time (TAT)** = `Completion Time - Arrival Time`.
    3. How to calculate **Waiting Time (WT)** = `Turnaround Time - Burst Time`.
    4. How to calculate the **Average TAT and WT**.
  - **Action Plan:**
    - **(2 hours):** Watch video tutorials on "CPU Scheduling algorithms numericals". Focus on understanding the _process_ for each type.
    - **(4 hours):** Practice, practice, practice. Solve at least 2-3 problems for each algorithm from past papers or online. Start by looking at the solution, then try to solve them on your own.

- **Afternoon (6 hours): Page Replacement Mastery**
  - **Topics:** FIFO, LRU (Least Recently Used), and OPR (Optimal).
  - **Past Papers:** 2076, 2078, 2079, 2080, 2080_new, Model (Appears in almost every paper).
  - **What to learn:**
    1. How to set up the frame table.
    2. How to process a reference string step-by-step.
    3. How to identify a **Page Hit** vs. a **Page Fault**.
    4. The specific rule for each algorithm (FIFO: oldest gets replaced; LRU: least recently used gets replaced; OPR: the one used furthest in the future gets replaced).
  - **Action Plan:**
    - **(2 hours):** Watch video tutorials on "Page Replacement algorithms numericals".
    - **(4 hours):** Practice with reference strings. This is a visual and mechanical process. Solve at least 5-6 problems covering all three types.

### **Day 2: Backup Numericals & Key Theory (11 Hours)**

Today you'll master the third numerical and learn just enough theory to answer high-frequency short questions.

- **Morning (5 hours): Disk Scheduling & Review**

  - **Topics:** FCFS, SSTF (Shortest Seek Time First), SCAN, and C-SCAN.
  - **Past Papers:** 2076, 2079, 2080_new, 2081, Model.
  - **What to learn:**
    1. How to calculate the **total head movement** for each algorithm.
    2. How to draw the diagram showing the disk head's path.
  - **Action Plan:**
    - **(2 hours):** Watch tutorials on "Disk Scheduling numericals". These are the easiest to learn.
    - **(2 hours):** Practice 1-2 problems for each of the four algorithms.
    - **(1 hour):** Quickly review yesterday's CPU and Page Replacement problems.

- **Afternoon (6 hours): High-Yield Theory Crash Course**
  - You will not become an expert. The goal is to memorize key definitions and differences to grab 5-10 easy marks from short questions.
  - **Action Plan (1.5 hours per topic):**
    1. **Mutual Exclusion & Race Condition:**
       - **Past Papers:** 2076, 2078, 2080, 2081, Model.
       - Learn the definition of a **Race Condition** and a **Critical Section**.
       - Learn what a **Semaphore** is (a counter to control access) and its `wait()`/`signal()` operations.
    2. **Deadlock Conditions:**
       - **Past Papers:** 2076, 2078, 2079, 2080_new, 2081.
       - Memorize the **four necessary conditions for deadlock**: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. Just be able to list and briefly explain them.
    3. **Process vs. Thread:**
       - **Past Papers:** 2076, 2080, 2081, Model.
       - Create a small table with 3-4 key differences (Memory, Creation Time, Context Switching).
    4. **Paging vs. Segmentation:**
       - **Past Papers:** 2080, 2080_new, 2081, Model.
       - Create another table with 3-4 key differences (Division of memory, Size, User view).

---

## 🎯 Exam Day Game Plan

1. **Section A (Long Questions):**

   - **Instantly find and solve the CPU Scheduling question.** (10 marks)
   - **Instantly find and solve the Page Replacement question.** (10 marks)
   - If one of them is missing, solve the **Disk Scheduling** question.

2. **Section B (Short Questions):**
   - Scan for questions on the theory topics you memorized: **Deadlock Conditions, Process vs. Thread, Paging vs. Segmentation, Mutual Exclusion**.
   - Answer the ones you know. Don't waste time on anything else.

By following this plan, you are aiming for **20 marks from two long questions** and **5-15 marks from short questions**. This puts you in the 25-35 mark range, giving you a strong chance to pass. Good luck!
