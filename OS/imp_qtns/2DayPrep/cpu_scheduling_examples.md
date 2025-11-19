# CPU Scheduling Algorithms: Examples

This guide provides step-by-step examples for the most common CPU scheduling algorithms. The key to solving these is to **draw the Gantt chart first**, then calculate the Turnaround Time (TAT) and Waiting Time (WT).

**Key Formulas:**

- **Turnaround Time (TAT)** = Completion Time − Arrival Time
- **Waiting Time (WT)** = Turnaround Time − Burst Time

---

### Example Problem Data

We will use the following set of processes for all examples:

| Process | Arrival Time | Burst Time |
| :------ | :----------- | :--------- |
| P1      | 0            | 8          |
| P2      | 1            | 4          |
| P3      | 2            | 9          |
| P4      | 3            | 5          |

---

### 1. First-Come, First-Served (FCFS)

**Concept:** The process that arrives first gets the CPU first. It's non-preemptive, meaning once a process starts, it runs to completion.

**Gantt Chart:**

```
| P1 (8) | P2 (4) | P3 (9) | P4 (5) |
0        8        12       21       26
```

**Calculation:**

| Process   | Arrival Time | Burst Time | Completion Time | TAT (CT-AT) | WT (TAT-BT) |
| :-------- | :----------- | :--------- | :-------------- | :---------- | :---------- |
| P1        | 0            | 8          | 8               | 8 - 0 = 8   | 8 - 8 = 0   |
| P2        | 1            | 4          | 12              | 12 - 1 = 11 | 11 - 4 = 7  |
| P3        | 2            | 9          | 21              | 21 - 2 = 19 | 19 - 9 = 10 |
| P4        | 3            | 5          | 26              | 26 - 3 = 23 | 23 - 5 = 18 |
| **Total** |              |            |                 | **61**      | **35**      |

**Result:**

- **Average TAT:** 61 / 4 = **15.25**
- **Average WT:** 35 / 4 = **8.75**

---

### 2. Shortest Job First (SJF) - Non-Preemptive

**Concept:** The process with the smallest burst time gets the CPU next. Since it's non-preemptive, it only checks for the shortest job when the current process finishes.

**Gantt Chart:**

1. At time 0, only P1 is available. P1 runs.
2. P1 finishes at time 8. Processes P2, P3, P4 have arrived.
3. Compare their burst times: P2 (4), P3 (9), P4 (5). P2 is the shortest. P2 runs.
4. P2 finishes at time 12. P3 and P4 are available.
5. Compare their burst times: P3 (9), P4 (5). P4 is shorter. P4 runs.
6. P4 finishes at time 17. Only P3 is left. P3 runs.

```
| P1 (8) | P2 (4) | P4 (5) | P3 (9) |
0        8        12       17       26
```

**Calculation:**

| Process   | Arrival Time | Burst Time | Completion Time | TAT (CT-AT) | WT (TAT-BT) |
| :-------- | :----------- | :--------- | :-------------- | :---------- | :---------- |
| P1        | 0            | 8          | 8               | 8 - 0 = 8   | 8 - 8 = 0   |
| P2        | 1            | 4          | 12              | 12 - 1 = 11 | 11 - 4 = 7  |
| P3        | 2            | 9          | 26              | 26 - 2 = 24 | 24 - 9 = 15 |
| P4        | 3            | 5          | 17              | 17 - 3 = 14 | 14 - 5 = 9  |
| **Total** |              |            |                 | **57**      | **31**      |

**Result:**

- **Average TAT:** 57 / 4 = **14.25**
- **Average WT:** 31 / 4 = **7.75**

---

### 3. Shortest Remaining Time Next (SRTN) - Preemptive SJF

**Concept:** The process with the smallest _remaining_ burst time gets the CPU. It's preemptive, so if a new process arrives with a shorter burst time than the one currently running, the CPU switches.

**Gantt Chart:**

1. **t=0:** P1 arrives (BT=8). P1 starts.
2. **t=1:** P2 arrives (BT=4). P1's remaining time is 7. P2 is shorter. P1 is preempted. P2 starts.
3. **t=2:** P3 arrives (BT=9). P2's remaining time is 3. P2 is still the shortest. P2 continues.
4. **t=3:** P4 arrives (BT=5). P2's remaining time is 2. P2 is still the shortest. P2 continues.
5. **t=5:** P2 finishes. Compare remaining times of P1(7), P3(9), P4(5). P4 is the shortest. P4 starts.
6. **t=10:** P4 finishes. Compare remaining times of P1(7), P3(9). P1 is shorter. P1 starts.
7. **t=17:** P1 finishes. Only P3 is left. P3 starts.
8. **t=26:** P3 finishes.

```
| P1(1) | P2(4) | P4(5) | P1(7) | P3(9) |
0       1       5       10      17      26
```

**Calculation:**

| Process   | Arrival Time | Burst Time | Completion Time | TAT (CT-AT) | WT (TAT-BT) |
| :-------- | :----------- | :--------- | :-------------- | :---------- | :---------- |
| P1        | 0            | 8          | 17              | 17 - 0 = 17 | 17 - 8 = 9  |
| P2        | 1            | 4          | 5               | 5 - 1 = 4   | 4 - 4 = 0   |
| P3        | 2            | 9          | 26              | 26 - 2 = 24 | 24 - 9 = 15 |
| P4        | 3            | 5          | 10              | 10 - 3 = 7  | 7 - 5 = 2   |
| **Total** |              |            |                 | **52**      | **26**      |

**Result:**

- **Average TAT:** 52 / 4 = **13**
- **Average WT:** 26 / 4 = **6.5**

---

### 4. Round Robin (RR)

**Concept:** Each process gets a small unit of CPU time (a "time quantum"). If it doesn't finish, it goes to the back of the ready queue. It is preemptive.
**Let's use a Time Quantum of 4.**

**Gantt Chart:**

1. **t=0:** P1 starts.
2. **t=4:** P1 is preempted (4ms left). P2, P3, P4 have arrived. Queue: `P2, P3, P4, P1`. P2 starts.
3. **t=8:** P2 finishes (ran for 4ms). Queue: `P3, P4, P1`. P3 starts.
4. **t=12:** P3 is preempted (5ms left). Queue: `P4, P1, P3`. P4 starts.
5. **t=16:** P4 is preempted (1ms left). Queue: `P1, P3, P4`. P1 starts.
6. **t=20:** P1 finishes (ran for 4ms). Queue: `P3, P4`. P3 starts.
7. **t=24:** P3 is preempted (1ms left). Queue: `P4, P3`. P4 starts.
8. **t=25:** P4 finishes (ran for 1ms). Queue: `P3`. P3 starts.
9. **t=26:** P3 finishes (ran for 1ms).

```
| P1(4) | P2(4) | P3(4) | P4(4) | P1(4) | P3(4) | P4(1) | P3(1) |
0       4       8       12      16      20      24      25      26
```

**Calculation:**

| Process   | Arrival Time | Burst Time | Completion Time | TAT (CT-AT) | WT (TAT-BT) |
| :-------- | :----------- | :--------- | :-------------- | :---------- | :---------- |
| P1        | 0            | 8          | 20              | 20 - 0 = 20 | 20 - 8 = 12 |
| P2        | 1            | 4          | 8               | 8 - 1 = 7   | 7 - 4 = 3   |
| P3        | 2            | 9          | 26              | 26 - 2 = 24 | 24 - 9 = 15 |
| P4        | 3            | 5          | 25              | 25 - 3 = 22 | 22 - 5 = 17 |
| **Total** |              |            |                 | **73**      | **47**      |

**Result:**

- **Average TAT:** 73 / 4 = **18.25**
- **Average WT:** 47 / 4 = **11.75**
