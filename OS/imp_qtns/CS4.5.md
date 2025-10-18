# Strategic Exam Guide for Operating System (CS4.5)

This guide is engineered from 7 past papers to provide a high-probability path to scoring 35+ marks with focused effort.

---

## 🎯 **The 35+ Marks Strategy: A Three-Tiered Approach**

Focus on mastering Tier 1 completely, then move to Tier 2. This alone will secure your target. Tier 3 is for pushing your score higher if you have extra time.

### **Tier 1: The "Guaranteed Marks" Core (Secure 20-25 Marks)**

These topics are your highest priority. They appear consistently and form the backbone of the exam. Master these first.

| Topic                             | Unit | Type | Frequency | What to Master                                                                                                                                                                                       | Expected Marks |
| :-------------------------------- | :--- | :--- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- |
| **CPU Scheduling Algorithms**     | 2    | Long | **6/7**   | **Algorithms**: FCFS, SJF, SRTN, RR, Priority. Calculate Average Waiting Time (AWT) and Average Turnaround Time (ATT) for given processes. Draw Gantt charts. Know advantages/disadvantages of each. | **10**         |
| **Page Replacement Algorithms**   | 4    | Long | **6/7**   | **Algorithms**: FIFO, LRU, Optimal (OPR), Second Chance, Clock. Given a reference string, calculate page faults for each algorithm. Understand Belady's Anomaly.                                     | **10**         |
| **Disk Scheduling Algorithms**    | 6    | Long | **5/7**   | **Algorithms**: FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK. Calculate total seek time for given disk requests. Draw diagrams showing head movement.                                                      | **10**         |
| **Deadlock (Banker's Algorithm)** | 3    | Long | **3/7**   | **Concepts**: Safe vs Unsafe states. Given allocation/max/available matrices, determine if system is in safe state. Check if resource requests can be granted.                                       | **5-10**       |

**Outcome of Tier 1**: By mastering just these four computational topics, you are positioned to answer **two guaranteed long questions**, securing **20 marks**. These are the most frequent and formulaic questions—easy marks if you practice the algorithms.

---

### **Tier 2: The "High-Probability" Booster (Add 15-20 Marks)**

These topics appear frequently as short questions. They are quick to learn and offer a great return on time invested.

| Topic                            | Unit | Type  | Frequency | What to Master                                                                                                                          | Expected Marks |
| :------------------------------- | :--- | :---- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :------------- |
| **System Calls & Modes**         | 1    | Short | **4/7**   | **Concepts**: User mode vs Kernel mode. How system calls work. Examples of system calls (fork, exec, open, read).                       | **5**          |
| **Process vs Thread**            | 2    | Short | **4/7**   | **Differences**: Resource sharing, creation overhead, context switching cost. When to use threads. User-level vs Kernel-level threads.  | **5**          |
| **Mutual Exclusion Techniques**  | 2    | Short | **5/7**   | **Methods**: Disabling interrupts, Lock variables, Peterson's solution, Semaphores, Monitors. Understand busy waiting and its problems. | **5**          |
| **Memory Allocation Strategies** | 4    | Short | **4/7**   | **Strategies**: First Fit, Best Fit, Worst Fit, Next Fit. Given memory holes and process sizes, show where processes are allocated.     | **5**          |
| **File Allocation Methods**      | 5    | Short | **4/7**   | **Methods**: Contiguous, Linked List, FAT, I-nodes. Advantages and disadvantages of each. Calculate disk space overhead for FAT.        | **5**          |
| **Fragmentation**                | 4    | Short | **3/7**   | **Types**: Internal vs External fragmentation. Examples of when each occurs. Solutions (compaction, paging).                            | **5**          |

**Outcome of Tier 2**: Mastering this tier prepares you for **5-6 additional short questions**, adding another **25-30 marks** to your score. These are conceptual and easier to prepare quickly.

**Combined Tier 1 + Tier 2 Score Projection: 45-50 Marks**

---

### **Tier 3: The "Safety Net" Topics (Secure 5-10 Extra Marks)**

If you have more time, learn these. They appear often enough to be valuable backups.

| Topic                                  | Unit | Type       | Frequency | What to Master                                                                                                                                         |
| :------------------------------------- | :--- | :--------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Race Condition & Critical Section**  | 2    | Short/Long | 3/7       | What causes race conditions. Critical section problem. Solutions and their requirements (mutual exclusion, progress, bounded waiting).                 |
| **Deadlock Detection & Prevention**    | 3    | Short      | 3/7       | Resource Allocation Graph. Cycle detection for single instance. Conditions for deadlock (mutual exclusion, hold & wait, no preemption, circular wait). |
| **Paging vs Segmentation**             | 4    | Short      | 3/7       | Differences in approach, advantages, disadvantages. Segmentation with paging (MULTICS). Address translation.                                           |
| **DMA Operation**                      | 6    | Short      | 3/7       | How DMA works. Benefits over programmed I/O. Role of DMA controller.                                                                                   |
| **Directory Systems**                  | 5    | Short      | 3/7       | Single-level, Two-level, Hierarchical. Advantages and disadvantages of each.                                                                           |
| **TLB (Translation Lookaside Buffer)** | 4    | Short      | 3/7       | Purpose of TLB. How it speeds up paging. Structure and operation.                                                                                      |

---

## 🗺️ **Your Study Roadmap**

Follow this plan for efficient preparation.

| **Priority**     | **Chapter Focus**              | **Topics to Master**                                                                                                                      | **Goal**                                                            |
| :--------------- | :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ |
| **1. MUST DO**   | **Unit 2: Process Management** | CPU Scheduling (FCFS, SJF, SRTN, RR, Priority), Process vs Thread, Mutual Exclusion, Critical Section.                                    | Secure **15-20 marks**. Most important unit—appears in every paper. |
| **2. MUST DO**   | **Unit 4: Memory Management**  | Page Replacement (FIFO, LRU, Optimal, Second Chance), Memory Allocation (First Fit, Best Fit, Worst Fit), Paging concepts, Fragmentation. | Secure **15-20 marks**. Second most important computational unit.   |
| **3. MUST DO**   | **Unit 6: Device Management**  | Disk Scheduling (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK), DMA Operation.                                                                  | Secure **10-15 marks**. Guaranteed computational long question.     |
| **4. SHOULD DO** | **Unit 3: Deadlock**           | Banker's Algorithm (safe state), Deadlock conditions, Resource Allocation Graph, Detection and Prevention.                                | Secure **10 marks**. Often appears as long question.                |
| **5. SHOULD DO** | **Unit 5: File Management**    | File Allocation (Contiguous, Linked, FAT, I-nodes), Directory Systems, Free Space Management.                                             | Secure **5-10 marks**. Frequent short questions.                    |
| **6. CAN DO**    | **Unit 1: OS Overview**        | System Calls, User vs Kernel mode, OS Structures.                                                                                         | Secure **5 marks**. Basic concepts.                                 |

By following this roadmap, you prioritize the units that give you the most marks and ensure you pass comfortably.

---

## 📊 **Detailed Frequency Analysis**

### **Long Questions (Attempt 2 out of 3) - 20 Marks Total**

| Topic                         | Frequency | Years Appeared                          | Calculation Type                                          | Expected Marks |
| :---------------------------- | :-------: | :-------------------------------------- | :-------------------------------------------------------- | :------------: |
| CPU Scheduling Algorithms     |  **6/7**  | 2076, 2078, 2079, 2080, 2080_new, Model | Calculate AWT, ATT for FCFS/SJF/SRTN/RR/Priority          |     **10**     |
| Page Replacement Algorithms   |  **6/7**  | 2076, 2078, 2079, 2080, 2080_new, Model | Count page faults for FIFO/LRU/OPR/Clock                  |     **10**     |
| Disk Scheduling Algorithms    |  **5/7**  | 2076, 2079, 2080, 2080_new, 2081, Model | Calculate seek time for FCFS/SSTF/SCAN/C-SCAN/LOOK/C-LOOK |     **10**     |
| Banker's Algorithm (Deadlock) |  **3/7**  | 2078, 2079, Model                       | Safe state check, resource request validation             |    **8-10**    |
| Sleep & Wakeup Problem        |  **2/7**  | 2078, Model                             | Code snippet, explain lost wakeup problem                 |    **7-9**     |
| Sleeping Barber Problem       |  **1/7**  | 2081                                    | Classical IPC problem with semaphores                     |    **7-9**     |
| File Allocation & I-nodes     |  **1/7**  | Model                                   | Compare methods, calculate space overhead                 |    **8-10**    |
| Segmentation                  |  **1/7**  | 2081                                    | Logical to physical address translation                   |    **8-10**    |

**Strategy**: Always pick **CPU Scheduling** and **Page Replacement** as your first two long questions if available. They appear in 6 out of 7 papers and are purely computational (easy to score full marks with practice).

---

### **Short Questions (Attempt 8 out of 12) - 40 Marks Total**

| Topic                           | Frequency | What to Remember                                             | Expected Marks |
| :------------------------------ | :-------: | :----------------------------------------------------------- | :------------: |
| Mutual Exclusion Techniques     |  **5/7**  | Lock variables, Semaphores, Monitors, Busy waiting issues    |     **5**      |
| Memory Allocation Strategies    |  **4/7**  | First Fit, Best Fit, Worst Fit, Next Fit—with examples       |     **5**      |
| System Calls & User/Kernel Mode |  **4/7**  | Definition, examples, mode switching process                 |     **5**      |
| Process vs Thread               |  **4/7**  | Key differences, when to use threads, user vs kernel threads |     **5**      |
| File Allocation Methods         |  **4/7**  | Contiguous, Linked, FAT, I-nodes—pros and cons               |     **5**      |
| Deadlock Conditions/Detection   |  **3/7**  | 4 conditions, Resource Allocation Graph, prevention methods  |     **5**      |
| Fragmentation                   |  **3/7**  | Internal vs External, examples, solutions                    |     **5**      |
| Paging vs Segmentation          |  **3/7**  | Comparison table, address translation                        |     **5**      |
| DMA Operation                   |  **3/7**  | How it works, benefits over programmed I/O                   |     **5**      |
| Directory Systems               |  **3/7**  | Single-level, Two-level, Hierarchical                        |     **5**      |
| TLB Structure & Operation       |  **3/7**  | Purpose, how it speeds up address translation                |     **5**      |
| Race Condition                  |  **3/7**  | What it is, why it occurs, example scenario                  |     **5**      |
| Belady's Anomaly                |  **2/7**  | Definition, example with FIFO                                |     **5**      |
| Multiprogramming Benefits       |  **2/7**  | CPU utilization formula                                      |     **5**      |
| Free Space Management           |  **2/7**  | Bitmap, Linked list methods                                  |     **5**      |

**Strategy**: Always attempt questions on **Mutual Exclusion**, **Memory Allocation**, **System Calls**, **Process vs Thread**, and **File Allocation** if they appear—these are your highest probability short questions.

---

## 📝 **Quick Formulas & Key Concepts**

### **CPU Scheduling**

- **Turnaround Time (TAT)** = Completion Time - Arrival Time
- **Waiting Time (WT)** = Turnaround Time - Burst Time
- **Average WT** = Sum of all WT / Number of processes
- **Average TAT** = Sum of all TAT / Number of processes

### **Memory Management**

- **Degree of Multiprogramming** = Number of processes in memory
- **CPU Utilization** = 1 - p^n (where p = I/O wait probability, n = number of processes)
- **Page Fault**: Occurs when referenced page is not in memory

### **Disk Scheduling**

- **Seek Time** = Number of cylinders traversed × time per cylinder
- **Total Seek Time** = Sum of all seeks
- **SCAN**: Move in one direction to the end, then reverse
- **C-SCAN**: Move in one direction to the end, jump to start, continue
- **LOOK**: Move in one direction until last request, then reverse

### **Deadlock (Banker's Algorithm)**

- **Need[i,j]** = Max[i,j] - Allocation[i,j]
- **Safe State**: Exists a sequence where all processes can finish
- **Grant Request**: Only if resulting state is safe

---

## 💡 **Answer Writing Tips**

### **For Long Questions (10 marks):**

**CPU Scheduling / Page Replacement / Disk Scheduling:**

1. Write the given data clearly (1 mark)
2. Show step-by-step calculation with proper formatting (6 marks)
3. Draw Gantt chart / Page frame diagram / Disk head movement diagram (2 marks)
4. Calculate final answer (AWT/ATT or Page Faults or Seek Time) (1 mark)

**Banker's Algorithm:**

1. Calculate Need matrix (2 marks)
2. Check if system is in safe state (show sequence) (4 marks)
3. For resource request, check if it can be granted (3 marks)
4. Conclusion (1 mark)

### **For Short Questions (5 marks):**

- Definition/Introduction (1 mark)
- Main explanation with 3-4 points or steps (2-3 marks)
- Diagram/Example/Table (1-2 marks)
- Be precise, use bullet points, keep it structured

---

## ✅ **Final Checklist Before Exam**

**Must Practice (Guarantee 35+ marks):**

- [ ] Can solve 5+ CPU Scheduling problems (FCFS, SJF, SRTN, RR, Priority)
- [ ] Can solve 5+ Page Replacement problems (FIFO, LRU, OPR, Second Chance)
- [ ] Can solve 5+ Disk Scheduling problems (FCFS, SSTF, SCAN, C-SCAN, LOOK)
- [ ] Know how to check safe state using Banker's Algorithm
- [ ] Can explain 4-5 mutual exclusion techniques
- [ ] Know differences between Process vs Thread
- [ ] Can solve memory allocation problems (First Fit, Best Fit, Worst Fit)
- [ ] Understand file allocation methods (Contiguous, Linked, FAT, I-nodes)

**Backup Knowledge:**

- [ ] Know 4 deadlock conditions and prevention methods
- [ ] Understand Race Condition and Critical Section
- [ ] Can explain Paging vs Segmentation
- [ ] Know DMA operation and benefits
- [ ] Understand TLB structure and operation

---

## 🚀 **Confidence Booster**

**You need only 35 marks, but this plan can get you 50+ marks!**

**Guaranteed Topics** (appear in 5-6/7 papers):

- CPU Scheduling → 10 marks
- Page Replacement → 10 marks
- Disk Scheduling → 10 marks
- Mutual Exclusion → 5 marks
- Memory Allocation → 5 marks
- System Calls → 5 marks

**Total from just these 6 topics: 45 marks** ✅

**Plus Easy Backups:**

- Process vs Thread → 5 marks
- File Allocation → 5 marks
- Deadlock concepts → 5 marks

**Grand Total: 50+ marks easily achievable!**

---

### 📞 Remember:

> "OS exam rewards practice over theory. Do the calculations daily, and you'll ace the exam!"

**The most important advice**: Practice at least 10 problems each for CPU Scheduling, Page Replacement, and Disk Scheduling. These three alone can get you 30 marks (3 long questions worth).

---

_Analysis based on: 2076, 2078, 2079, 2080, 2080_new, 2081, and Model Question Sets_  
_Subject: Operating System_  
_Target Audience: BSc.CSIT 4th Semester Students_  
_Last Updated: October 18, 2025_
