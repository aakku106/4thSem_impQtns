# Page Replacement Algorithms: Examples

This guide provides step-by-step examples for the most common page replacement algorithms. The goal is to count the number of **page faults**. A page fault occurs when a requested page is not in the memory frames.

---

### Example Problem Data

We will use the following reference string and assume we have **3 memory frames**.

**Reference String:** `7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1`

---

### 1. First-In, First-Out (FIFO)

**Concept:** The page that has been in memory the longest is the one to be replaced. It's like a queue.

**Step-by-step:**

| Ref | Frame 1 | Frame 2 | Frame 3 | Hit/Fault | Notes                                 |
| :-- | :------ | :------ | :------ | :-------- | :------------------------------------ |
| 7   | **7**   |         |         | Fault (1) | 7 is loaded.                          |
| 0   | 7       | **0**   |         | Fault (2) | 0 is loaded.                          |
| 1   | 7       | 0       | **1**   | Fault (3) | 1 is loaded. Frames are full.         |
| 2   | **2**   | 0       | 1       | Fault (4) | 7 was the first in, so it's replaced. |
| 0   | 2       | 0       | 1       | Hit       | 0 is already in memory.               |
| 3   | 2       | **3**   | 1       | Fault (5) | 0 was the next in, so it's replaced.  |
| 0   | 2       | 3       | **0**   | Fault (6) | 1 was the next in, so it's replaced.  |
| 4   | **4**   | 3       | 0       | Fault (7) | 2 was the next in, so it's replaced.  |
| 2   | 4       | **2**   | 0       | Fault (8) | 3 was the next in, so it's replaced.  |
| 3   | 4       | 2       | **3**   | Fault (9) | 0 was the next in, so it's replaced.  |
| 0   | **0**   | 2       | 3       | Fault(10) | 4 was the next in, so it's replaced.  |
| 3   | 0       | 2       | 3       | Hit       | 3 is already in memory.               |
| 2   | 0       | 2       | 3       | Hit       | 2 is already in memory.               |
| 1   | 0       | **1**   | 3       | Fault(11) | 2 was the next in, so it's replaced.  |
| 2   | 0       | 1       | **2**   | Fault(12) | 3 was the next in, so it's replaced.  |
| 0   | 0       | 1       | 2       | Hit       | 0 is already in memory.               |
| 1   | 0       | 1       | 2       | Hit       | 1 is already in memory.               |
| 7   | **7**   | 1       | 2       | Fault(13) | 0 was the next in, so it's replaced.  |
| 0   | 7       | **0**   | 2       | Fault(14) | 1 was the next in, so it's replaced.  |
| 1   | 7       | 0       | **1**   | Fault(15) | 2 was the next in, so it's replaced.  |

**Result:**

- **Total Page Faults:** **15**

---

### 2. Least Recently Used (LRU)

**Concept:** The page that has not been used for the longest period of time is the one to be replaced. To find it, you look backwards in the reference string from the current position.

**Step-by-step:**

| Ref | Frame 1 | Frame 2 | Frame 3 | Hit/Fault | Notes                                              |
| :-- | :------ | :------ | :------ | :-------- | :------------------------------------------------- |
| 7   | **7**   |         |         | Fault (1) |                                                    |
| 0   | 7       | **0**   |         | Fault (2) |                                                    |
| 1   | 7       | 0       | **1**   | Fault (3) |                                                    |
| 2   | **2**   | 0       | 1       | Fault (4) | To replace: look back from 2. `1, 0, 7`. 7 is LRU. |
| 0   | 2       | 0       | 1       | Hit       |                                                    |
| 3   | 2       | **3**   | 1       | Fault (5) | To replace: look back from 3. `0, 2, 1`. 1 is LRU. |
| 0   | 2       | 3       | **0**   | Fault (6) | To replace: look back from 0. `3, 0, 2`. 2 is LRU. |
| 4   | **4**   | 3       | 0       | Fault (7) | To replace: look back from 4. `0, 3, 2`. 3 is LRU. |
| 2   | 4       | **2**   | 0       | Fault (8) | To replace: look back from 2. `4, 0, 3`. 3 is LRU. |
| 3   | 4       | 2       | **3**   | Fault (9) | To replace: look back from 3. `2, 4, 0`. 0 is LRU. |
| 0   | **0**   | 2       | 3       | Fault(10) | To replace: look back from 0. `3, 2, 4`. 4 is LRU. |
| 3   | 0       | 2       | 3       | Hit       |                                                    |
| 2   | 0       | 2       | 3       | Hit       |                                                    |
| 1   | **1**   | 2       | 3       | Fault(11) | To replace: look back from 1. `2, 3, 0`. 0 is LRU. |
| 2   | 1       | 2       | 3       | Hit       |                                                    |
| 0   | **0**   | 2       | 3       | Fault(12) | To replace: look back from 0. `2, 1, 3`. 3 is LRU. |
| 1   | 0       | **1**   | 3       | Fault(13) | To replace: look back from 1. `0, 2, 3`. 3 is LRU. |
| 7   | 0       | 1       | **7**   | Fault(14) | To replace: look back from 7. `1, 0, 2`. 2 is LRU. |
| 0   | 0       | 1       | 7       | Hit       |                                                    |
| 1   | 0       | 1       | 7       | Hit       |                                                    |

**Result:**

- **Total Page Faults:** **14** (Note: There can be slight variations based on tie-breaking, but the method is key).

---

### 3. Optimal (OPT / OPR)

**Concept:** The page that will not be used for the longest period of time in the _future_ is the one to be replaced. This is the most efficient algorithm but impossible to implement in a real OS because you can't predict the future.

**Step-by-step:**

| Ref | Frame 1 | Frame 2 | Frame 3 | Hit/Fault | Notes                                                                        |
| :-- | :------ | :------ | :------ | :-------- | :--------------------------------------------------------------------------- |
| 7   | **7**   |         |         | Fault (1) |                                                                              |
| 0   | 7       | **0**   |         | Fault (2) |                                                                              |
| 1   | 7       | 0       | **1**   | Fault (3) |                                                                              |
| 2   | **2**   | 0       | 1       | Fault (4) | To replace: look forward. 0 is next, 1 is later, 7 is furthest. Replace 7.   |
| 0   | 2       | 0       | 1       | Hit       |                                                                              |
| 3   | 2       | **3**   | 1       | Fault (5) | To replace: look forward. 0 is next, 2 is later, 1 is furthest. Replace 1.   |
| 0   | 2       | 3       | 0       | Hit       |                                                                              |
| 4   | 2       | **4**   | 0       | Fault (6) | To replace: look forward. 2 is next, 3 is later, 0 is also later. Replace 3. |
| 2   | 2       | 4       | 0       | Hit       |                                                                              |
| 3   | **3**   | 4       | 0       | Fault (7) | To replace: look forward. 0 is next, 2 is later. 4 is furthest. Replace 4.   |
| 0   | 3       | 4       | 0       | Hit       |                                                                              |
| 3   | 3       | 4       | 0       | Hit       |                                                                              |
| 2   | **2**   | 4       | 0       | Fault (8) | To replace: look forward. 1 is next, 0 is later. 4 is furthest. Replace 4.   |
| 1   | 2       | **1**   | 0       | Fault (9) | To replace: look forward. 2 is next, 0 is later. No 3. Replace 3.            |
| 2   | 2       | 1       | 0       | Hit       |                                                                              |
| 0   | 2       | 1       | 0       | Hit       |                                                                              |
| 1   | 2       | 1       | 0       | Hit       |                                                                              |
| 7   | **7**   | 1       | 0       | Fault(10) | To replace: look forward. 0 is next, 1 is later. 2 is not used. Replace 2.   |
| 0   | 7       | 1       | 0       | Hit       |                                                                              |
| 1   | 7       | 1       | 0       | Hit       |                                                                              |

**Result:**

- **Total Page Faults:** **10**
