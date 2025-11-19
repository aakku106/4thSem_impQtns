# Process vs. Thread

Processes and threads are both fundamental concepts in operating systems for executing tasks, but they differ significantly in how they are managed and how they share resources.

**Simple Analogy:**

- A **Process** is like a **Restaurant**. It has its own building, kitchen, staff, and ingredients. It's a self-contained entity.
- A **Thread** is like a **Chef** working inside that restaurant. Multiple chefs can work in the same kitchen, sharing the same ingredients and equipment, to serve different customers faster.

---

### Key Differences Explained

| Feature               | Process                                                                                                                | Thread                                                                                                                                                      |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Definition**        | A program in execution. It is a heavyweight operation.                                                                 | A lightweight process; a single path of execution within a process.                                                                                         |
| **Memory Space**      | Each process has its own separate memory space (address space).                                                        | Threads of the same process share the same memory space.                                                                                                    |
| **Resource Sharing**  | Processes do not share memory by default. They communicate via IPC (Inter-Process Communication), which is slow.       | Threads share code, data, and files. They can communicate directly, which is fast.                                                                          |
| **Creation**          | Creating a process is slow and resource-intensive.                                                                     | Creating a thread is fast and less resource-intensive.                                                                                                      |
| **Context Switching** | Context switching between processes is slow because the OS has to save and load the entire memory map, registers, etc. | Context switching between threads of the same process is fast because they share memory. The OS only needs to switch the registers.                         |
| **Isolation**         | Processes are isolated from each other. If one process crashes, it does not affect other processes.                    | Threads are not isolated. If one thread crashes, it can take down the entire process (and all other threads within it).                                     |
| **Example**           | Running Chrome and VS Code at the same time. Each is a separate process.                                               | In Chrome, one thread handles the user interface, another thread fetches data from the internet, and another renders the page. All are in the same process. |

---

### Summary Table

| Aspect              | Process                                  | Thread                             |
| ------------------- | ---------------------------------------- | ---------------------------------- |
| **Weight**          | Heavyweight                              | Lightweight                        |
| **Memory**          | Isolated                                 | Shared                             |
| **Creation Time**   | Slow                                     | Fast                               |
| **Switching Time**  | Slow                                     | Fast                               |
| **Communication**   | Slow (via IPC)                           | Fast (direct memory access)        |
| **Fault Isolation** | Robust (one crash doesn't affect others) | Not robust (one crash affects all) |
