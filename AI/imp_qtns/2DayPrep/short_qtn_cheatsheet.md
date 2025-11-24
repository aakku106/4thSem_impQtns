# PEAS, NLP Steps, and Min-Max Algorithm

This file covers three high-yield short questions you can master quickly for an easy 10-15 marks.

---

## 1. Agents and PEAS Framework

- **What it is:** A way to describe an AI agent's task environment.
- **What to learn:** For any given AI agent, describe its **P**erformance Measure, **E**nvironment, **A**ctuators, and **S**ensors.
- **Past Papers:** 2076, 2078, 2079, 2080, Model.

### Example: A Vacuum Cleaner Robot

- **Performance Measure:** Cleanliness of the floor, time taken, battery life.
- **Environment:** Room, furniture, carpets, dirt, pets.
- **Actuators:** Wheels (for movement), brushes, vacuum suction motor.
- **Sensors:** Camera (to see obstacles), infrared/bump sensors (to detect walls), dirt sensors.

---

## 2. Steps of Natural Language Processing (NLP)

- **What it is:** The process computers use to understand human language.
- **What to learn:** Memorize the 5 main steps in order.
- **Past Papers:** 2076, 2078, 2079, 2080, Model.

### The 5 Steps:

1.  **Lexical Analysis:** The process of breaking down a sentence into individual words, called tokens. Punctuation is also separated.

    - _Example:_ "The cat sat." → `[The, cat, sat, .]`

2.  **Syntactic Analysis (Parsing):** Checking if the sequence of words forms a grammatically correct sentence according to the rules of the language. This often involves creating a parse tree.

    - _Example:_ "The cat sat" is a valid structure (Noun Phrase + Verb Phrase). "Cat the sat" is not.

3.  **Semantic Analysis:** Determining the meaning of the sentence from the words and structure. It maps syntactic structures to their meaning.

    - _Example:_ Understanding that "The cat" refers to a specific feline animal and "sat" is the action it performed.

4.  **Discourse Integration:** Using the context from previous sentences to understand the current one. It handles things like pronouns.

    - _Example:_ In "The cat was tired. **It** sat down.", discourse integration helps understand that "**It**" refers to "The cat".

5.  **Pragmatic Analysis:** Understanding the intended effect or real-world goal of the sentence. It's about what the user _wants_ to achieve.
    - _Example:_ Understanding that "Can you open the door?" is not a question about ability, but a request to actually open the door.

---

## 3. Min-Max Algorithm for Game Playing

- **What it is:** A decision-making algorithm used in two-player games (like Tic-Tac-Toe or Chess) to find the optimal move for a player.
- **What to learn:** How to trace the algorithm on a game tree to find the best move for the `MAX` player.
- **Past Papers:** 2080, 2078, 2081, Model.

### How it Works:

The algorithm explores the game tree to determine the utility (score) of each possible move.

- **MAX player:** Tries to maximize the score.
- **MIN player:** Tries to minimize the score.

**Steps:**

1.  Start at the bottom of the tree (the leaf nodes), which have final utility values.
2.  Move up the tree one level at a time.
3.  At each **MIN node**, choose the **minimum** value from its children.
4.  At each **MAX node**, choose the **maximum** value from its children.
5.  Continue until you reach the root. The value at the root is the best possible score for MAX, and the path to get it represents the best move.
