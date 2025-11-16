# CN in 23 Hours: The Emergency Pass-Mark Plan

**Goal:** Score 25+ marks with 23 hours of focused study.
**Strategy:** Don't try to learn everything. Master a few high-frequency, high-value topics. We will target **one guaranteed long question (10 marks)** and **3-4 easy short questions (15-20 marks)**.

---

## 🗓️ Day 1: Secure the Pass Mark (12 Hours)

### **Session 1: The Guaranteed Long Question (5 Hours)**

- **Topic: Routing Algorithms (Distance Vector)**
  - **Why:** This is the **most repeated long question** on the exam. It's a mechanical process that is easy to master and guarantees 10 marks.
  - **What to Learn:**
    1. The concept of Distance Vector (sharing routing tables with neighbors).
    2. The Bellman-Ford algorithm steps.
    3. How to create and update routing tables from a given network diagram.
    4. The "count-to-infinity" problem and a simple solution (e.g., split horizon).
  - **Action:** Watch a tutorial on "Distance Vector Routing example". Practice with at least 3 past paper diagrams until you can create and update the tables correctly.
  - **Past Questions:** 2076, 2078, 2079, 2080, 2080_new, Model.

### **Session 2: The Must-Do Short Questions (7 Hours)**

- **Topic 1: Subnetting (4 hours)**

  - **Why:** This is a **guaranteed 5-mark short question** that appears in every single exam. It's pure calculation.
  - **What to Learn:** Given an IP and a CIDR (e.g., `/27`) or a number of required subnets, you must be able to find:
    1. The new Subnet Mask.
    2. The total number of subnets and valid hosts per subnet.
    3. The Network Address and Broadcast Address for a given subnet.
    4. The range of valid host IPs in that subnet.
  - **Action:** Practice at least 5-10 different subnetting problems from past papers or online. Focus on speed and accuracy.
  - **Past Questions:** 2076, 2078, 2079, 2080, 2080_new, 2081, Model.

- **Topic 2: Switching & Topologies (3 hours)**
  - **Why:** These are very common, easy-to-memorize short questions.
  - **What to Learn:**
    - **Switching:** The key differences between Circuit Switching and Packet Switching (connection setup, resource allocation, cost, example use cases).
    - **Topologies:** Be able to draw, define, and list one advantage and one disadvantage for Star, Bus, and Ring topologies.
  - **Action:** Create a comparison table for the switching types. Draw the topologies and write down their pros/cons until you can do it from memory.
  - **Past Questions (Switching):** 2076, 2079, 2080, 2080_new, Model.
  - **Past Questions (Topologies):** 2076, 2079, 2080, 2080_new.

---

## 🗓️ Day 2: Build the Safety Net (11 Hours)

### **Session 3: The Backup & High-Yield Topics (8 Hours)**

- **Topic 3: Flow Control (Stop-and-Wait ARQ) (4 hours)**

  - **Why:** This is the second most common long question. It's your backup if the routing question is difficult. It's also a frequent short question.
  - **What to Learn:**
    1. The basic mechanism of Stop-and-Wait (send one frame, wait for ACK).
    2. How to draw the timeline diagrams for handling a **lost data frame** and a **lost ACK**. This is the most important part.
    3. Its main disadvantage (inefficiency).
  - **Action:** Practice drawing the two error-handling diagrams. This is what examiners look for.
  - **Past Questions:** 2076, 2078, 2080, 2080_new.

- **Topic 4: More High-Yield Short Questions (4 hours)**
  - **Why:** These topics appear frequently and are quick to learn.
  - **What to Learn:**
    - **IPv4 vs. IPv6:** Create a comparison table covering Address Size, Header Format, Security (IPSec), and Configuration (Manual vs. Auto).
    - **Traffic Shaping:** Understand the basic logic and draw the diagrams for Leaky Bucket (fixed output rate) and Token Bucket (allows bursts).
  - **Action:** Memorize the IPv4 vs. IPv6 table. Practice drawing the bucket diagrams and writing a one-sentence explanation for each.
  - **Past Questions (IPv4/v6):** 2078, 2080, 2081, Model.
  - **Past Questions (Traffic Shaping):** 2080, 2080_new, 2081.

### **Session 4: Final Review (3 Hours)**

- **Topic 5: Final Review & Key Definitions**
  - **Why:** Solidify your knowledge and pick up easy definition marks.
  - **What to Learn:**
    - **TCP vs. UDP:** Key differences (connection-oriented vs. connectionless, reliability, header size).
    - **MAC vs. LLC:** The two sublayers of the Data Link Layer and their primary function.
  - **Action:** Quickly review all the topics from Day 1. Write down the key differences for TCP/UDP and MAC/LLC on a cheat sheet.
  - **Past Questions (TCP/UDP):** 2080, 2080_new.
  - **Past Questions (MAC/LLC):** 2076, 2078, 2080, 2080_new, 2081, Model.

---

## 🎯 Exam Day Game Plan

1. **Section A (Long Questions):**

    - **Priority 1:** Find the **Routing Algorithm** question. Solve it. This is your main target.
    - **Priority 2 (Backup):** If routing isn't there or is confusing, solve the **Flow Control (ARQ)** question.

2. **Section B (Short Questions):**
    - **Priority 1:** Find and solve the **Subnetting** question first. It's guaranteed marks.
    - **Priority 2:** Answer **Switching**, **Topologies**, and **IPv4 vs. IPv6**.
    - **Priority 3:** Answer **Traffic Shaping**, **TCP vs. UDP**, and **MAC/LLC**.

By following this plan, you are targeting a very safe **35-40 marks**. Good luck!
