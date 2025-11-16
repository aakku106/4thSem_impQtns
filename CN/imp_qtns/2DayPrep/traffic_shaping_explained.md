### Traffic Shaping Explained: Leaky Bucket vs. Token Bucket

Traffic shaping algorithms are used to control the rate at which data is sent. The two most famous are Leaky Bucket and Token Bucket. Let's break them down.

---

### 1. Leaky Bucket: The "Strict Policeman"

Imagine a bucket with a small hole at the bottom.

- **Packets** are water being poured into the bucket from the top.
- The **network** is the water leaking out of the hole at the bottom.

![Leaky Bucket Diagram](https://i.imgur.com/5aQ3bJ7.png)

**How it Works:**

1. **Constant Flow Out:** No matter how quickly you pour water in (a burst of packets), it only leaks out at a **constant, steady rate**.
2. **Overflow:** If you pour water in faster than it can leak out, the bucket fills up. If it gets full, any new water (packets) just spills over and is **lost (discarded)**.

**Super Simple Logic:** It forces a bursty, unpredictable flow of packets into a smooth, constant, and predictable flow.

- **Advantage:** Very simple and predictable.
- **Disadvantage:** It's too strict. If the network is free and could handle a burst, the leaky bucket doesn't care. It still sends packets out slowly, wasting available bandwidth.

---

### 2. Token Bucket: The "Flexible Manager"

This is the cleverer algorithm that **allows controlled bursts**.

Imagine a bucket that holds **tokens**, not packets.

- A **faucet** drips tokens into the bucket at a steady rate (e.g., 1 token per second).
- The bucket has a **maximum capacity** (e.g., it can only hold 10 tokens). If the bucket is full, new tokens from the faucet are lost.
- To send one packet, you must **take one token out** of the bucket and "spend" it.

![Token Bucket Diagram](https://i.imgur.com/s5O1VlD.png)

**How it Works:**

1. **No Tokens? No Send:** If a packet arrives and the bucket has no tokens, the packet must **wait** until a new token drips in from the faucet.
2. **Got Tokens? Send Immediately!** If packets arrive and there are tokens in the bucket, you can immediately take the required number of tokens and send the packets.

**This is the key to allowing bursts!** If the network has been idle, the bucket will have saved up tokens. When a sudden burst of packets arrives, it can use these saved-up tokens to send them all out at once, up to the bucket's capacity.

---

### Example: Token Bucket in Action

Let's set the rules:

- **Token Rate:** The faucet adds 1 token every 1 second.
- **Bucket Size:** The bucket can hold a maximum of 5 tokens.
- **Packet Cost:** 1 packet costs 1 token to send.

**Scenario:**

1. **0-5 seconds (Idle Time):** No packets are being sent. The faucet drips 1 token per second. After 5 seconds, the bucket is **full with 5 tokens**.

2. **At 5 seconds (A Burst Arrives!):** A sudden burst of **4 packets** arrives.

    - Are there enough tokens? **Yes**, the bucket has 5.
    - We take 4 tokens out to send the 4 packets instantly.
    - The bucket now has **1 token left**.

3. **At 6 seconds:** Another packet arrives.

    - The faucet drips 1 new token in. The bucket now has 1 (leftover) + 1 (new) = **2 tokens**.
    - We take 1 token to send the packet.
    - The bucket now has **1 token left**.

4. **At 7 seconds:** Two more packets arrive.

    - The faucet drips 1 new token in. The bucket now has 1 (leftover) + 1 (new) = **2 tokens**.
    - We can send both packets instantly.
    - The bucket is now **empty**.

5. **At 8 seconds:** One more packet arrives.
    - The faucet drips 1 new token in. The bucket has **1 token**.
    - We can send the packet. The bucket is empty again.

**Conclusion:** The Token Bucket algorithm smooths traffic on average but uses saved-up tokens to allow short-lived bursts, making it much more efficient than the Leaky Bucket.
