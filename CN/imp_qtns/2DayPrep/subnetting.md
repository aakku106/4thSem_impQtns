# Subnetting Explained

Subnetting is the process of dividing a single, large network into smaller, more manageable sub-networks, or "subnets." It's a fundamental concept in IP networking used for organization, security, and performance.

**Why Subnet?**

- **Organization:** Different departments (e.g., Sales, IT) can have their own subnets.
- **Security:** You can isolate subnets from each other with firewalls.
- **Performance:** Reduces overall network traffic. Instead of all devices broadcasting to each other, they only broadcast within their own subnet.

---

## The Key Components

To understand subnetting, you need to know these terms:

- **IP Address:** A unique address for a device on a network (e.g., `192.168.1.100`).
- **Subnet Mask:** A 32-bit number that separates the IP address into its Network and Host portions.
- **CIDR Notation:** A shorthand for the subnet mask. It's a slash followed by the number of "1" bits in the mask (e.g., `/24` is the same as `255.255.255.0`).
- **Network Address:** The very first IP in a subnet. It represents the subnet itself and cannot be assigned to a device.
- **Broadcast Address:** The very last IP in a subnet. Data sent to this address is delivered to all devices on the subnet. It cannot be assigned to a device.
- **Host Range:** The range of usable IP addresses between the Network and Broadcast addresses.

---

## Example: A Classic Subnetting Problem

Let's solve a typical exam question.

**Question:** You are given the IP address `192.168.10.0` and need to create at least 5 subnets. For the 3rd subnet, find:

1.  The new Subnet Mask.
2.  The total number of subnets and valid hosts per subnet.
3.  The Network Address.
4.  The Broadcast Address.
5.  The range of valid host IPs.

### Step 1: Find the Number of Bits to Borrow

- The base network is `192.168.10.0`. Since it's a Class C address, the default subnet mask is `/24` (`255.255.255.0`).
- We need 5 subnets. We use the formula `2^n >= (number of subnets)`, where `n` is the number of bits we need to borrow from the host portion of the address.
- `2^1 = 2` (not enough)
- `2^2 = 4` (not enough)
- `2^3 = 8` (this is enough to create 5 subnets).
- So, we need to **borrow 3 bits**.

### Step 2: Calculate the New Subnet Mask

- The default mask is `/24`. We borrow 3 bits, so the new mask is `/24 + 3 = /27`.
- To find the mask in decimal format:
  - Default mask: `11111111.11111111.11111111.00000000`
  - Borrow 3 bits: `11111111.11111111.11111111.11100000`
  - The last octet is `128 + 64 + 32 = 224`.
- **Answer 1: The new Subnet Mask is `255.255.255.224` or `/27`.**

### Step 3: Calculate Subnets and Hosts

- **Total Subnets:** We borrowed 3 bits, so `2^3 = 8` subnets.
- **Hosts per Subnet:** The `/27` mask leaves `32 - 27 = 5` bits for hosts.
  - Total IPs per subnet = `2^5 = 32`.
  - Valid Hosts = `Total IPs - 2` (for the Network and Broadcast addresses). So, `32 - 2 = 30`.
- **Answer 2: 8 total subnets, 30 valid hosts per subnet.**

### Step 4: Find the Network Address of the 3rd Subnet

- The "block size" or "increment" for our subnets is `256 - 224` (the last non-zero octet of the mask) = `32`.
- This means our subnets will start at `.0`, `.32`, `.64`, etc.
- Subnet 1: `192.168.10.0`
- Subnet 2: `192.168.10.32`
- Subnet 3: `192.168.10.64`
- **Answer 3: The Network Address for the 3rd subnet is `192.168.10.64`.**

### Step 5: Find the Broadcast Address and Host Range

- The 3rd subnet starts at `.64`. The next subnet starts at `.96`.
- The Broadcast Address for the 3rd subnet is the IP right before the next subnet's Network Address.
- **Answer 4: The Broadcast Address is `192.168.10.95`.**
- The valid hosts are the IPs between the Network and Broadcast addresses.
- **Answer 5: The valid host range is `192.168.10.65` to `192.168.10.94`.**

---

## Summary Table for the First 4 Subnets

| Subnet # | Network Address     | Host Range        | Broadcast Address   |
| :------- | :------------------ | :---------------- | :------------------ |
| 1        | `192.168.10.0`      | `.1` - `.30`      | `192.168.10.31`     |
| 2        | `192.168.10.32`     | `.33` - `.62`     | `192.168.10.63`     |
| **3**    | **`192.168.10.64`** | **`.65` - `.94`** | **`192.168.10.95`** |
| 4        | `192.168.10.96`     | `.97` - `.126`    | `192.168.10.127`    |
| ...      | ...                 | ...               | ...                 |
