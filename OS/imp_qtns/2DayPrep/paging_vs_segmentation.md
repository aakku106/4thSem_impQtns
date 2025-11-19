# Paging vs. Segmentation

Paging and segmentation are two different memory management techniques used by an operating system to manage the memory allocated to a process. Both allow a process's memory to be non-contiguous, but they do so in fundamentally different ways.

**Simple Analogy:**

- **Paging** is like dividing a large book into **fixed-size pages** (e.g., every page is 4KB). The OS doesn't care what's on the page (code, data, etc.); it just sees a collection of same-sized pages.
- **Segmentation** is like dividing the same book into **logical chapters** (e.g., Chapter 1: Introduction, Chapter 2: Main Story, Chapter 3: Appendix). These chapters have different lengths and correspond to logical parts of the program.

---

### Key Differences Explained

| Feature                 | Paging                                                                                                                                                                                  | Segmentation                                                                                                                                                                   |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Division**            | Memory is divided into fixed-size blocks called **pages** (for the process) and **frames** (for physical memory).                                                                       | Memory is divided into variable-size blocks called **segments**, based on logical parts of the program (e.g., code, data, stack).                                              |
| **Size**                | All pages of a process are of the same, fixed size.                                                                                                                                     | Segments have variable sizes, depending on what they contain.                                                                                                                  |
| **OS Awareness**        | The OS is aware of pages and frames but has no idea what is inside them (code, data, etc.).                                                                                             | The OS is aware of the logical segments. This allows for finer-grained protection (e.g., making the code segment read-only).                                                   |
| **Fragmentation**       | Suffers from **internal fragmentation**. If a process needs 5KB and a page is 4KB, it gets two pages (8KB). The last 3KB of the second page is wasted space inside the allocated block. | Suffers from **external fragmentation**. As segments are loaded and removed from memory, gaps of various sizes are left, which may be too small to be useful for new segments. |
| **Address Translation** | The CPU generates a logical address split into a **page number** and an **offset**. The OS uses a **page table** to find the corresponding frame in physical memory.                    | The CPU generates a logical address split into a **segment number** and an **offset**. The OS uses a **segment table** to find the base address of the segment and its limit.  |
| **User View**           | The user does not see the paging. It is an abstraction managed entirely by the OS.                                                                                                      | The user (or programmer) can be aware of and work with segments, as they correspond to logical program units.                                                                  |

---

### Summary Table

| Aspect             | Paging                                               | Segmentation                                      |
| ------------------ | ---------------------------------------------------- | ------------------------------------------------- |
| **Block Size**     | Fixed                                                | Variable                                          |
| **Division Basis** | Physical (just blocks of memory)                     | Logical (code, data, stack, etc.)                 |
| **Fragmentation**  | Internal                                             | External                                          |
| **Table**          | Page Table (stores frame numbers)                    | Segment Table (stores base address & limit)       |
| **Speed**          | Generally faster due to fixed-size hardware support. | Generally slower due to variable-size complexity. |
| **OS Involvement** | OS manages everything transparently.                 | OS and user are aware of the segments.            |
