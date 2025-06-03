# 📚 Week 1 - BITCOIN

### 📄 White Paper Summary (My Notes)

---

1️⃣ In traditional systems, we rely on **banks** 🏦 (as trusted third parties) to validate transactions — mainly to **avoid double spending** 🔁.

2️⃣ But we can prevent double spending by using **electronic payments** that include **timestamps** ⏱️. This helps verify the correct order of transactions ✅.

3️⃣ Still, problems exist. For example, if there's a **dispute** between buyer and seller (say, 8/10 cases), an **intermediary (like a bank)** is required to resolve it.  
   > 💸 This increases transaction costs.

---

### 🚫 Example of Reversible Transactions (Problem)

- Seller sold **$10** worth of wafers 🍪, and Buyer brought it. (just as an example).  
- Buyer reports a problem and **claims refund** 💬.  
- Gets **$10** back.  
> ❌ Result: Transaction is **reversible**, and it’s unfair to the seller.

---

### 💡 Solution — How to Make Transactions Trustless?

Can we make a system where:

- Buyer & seller are **verified**? 👥  
- Transaction is **final**? ✅  

Yes, by using **Bitcoin** ₿. Here’s how:

---

### 🔄 Transaction Flow

- Buyer owns **1 BTC** 💰.  
- Stores it in a **P2P contract** 🤝 (escrow-like) with:
  - Buyer's **public key** 🔑  
  - **Transaction date** (e.g., 24-05-25) 📅  
  - **Transaction hash** 🔗  

---

#### 🔗 Ownership Chain

```text
Owner 1 → Owner 2 → Owner 3
````

* Each owner signs the transaction ✍️
* Ownership is passed with a **digital signature** 🧾
* Example:

  * Buyer 1 signs with private key → sends to Owner 2.
  * Owner 2 becomes the new holder → can now send to Owner 3.

---

### 💱 Units

* \$1 = 100 cents 🪙
* **1 BTC = 100,000,000 satoshis** 🧠 (smallest unit)

---

### 🕵️‍♂️ Verification

* Seller checks the **blockchain** 📘 to verify:

  * Buyer actually owns 1 BTC 💼
* Nodes (miners) ⛏️ confirm if the transaction is valid.
* Once a block is confirmed ✅, it becomes **irreversible** 🔒.

---

### 🛡️ Example — Preventing Double Spend

* Owner 3 wants **0.001 BTC** from Owner 2.
* Owner 3 verifies the source of that BTC:

  * Owner 2 got it from Owner 1 → who got it from Owner 0.
* To prevent double spending:

  * **Every transaction must be broadcasted to all nodes** 📡.
  * Nodes verify whether the BTC was already spent or not. ✅

---

### 🏛️ Central Authority vs ₿ Bitcoin

#### 🔐 In Centralized Systems:

* Authority can:

  * **Revoke sender’s BTC** ❌
  * Mint new coins 🪙
  * Give to receiver manually
* But this requires **trust** 🤝

#### 🌐 In Bitcoin:

* All transactions are **publicly visible** to nodes 🔍
* A **distributed consensus** decides validity 📊
* Once verified, the **same coins cannot be spent again** 🚫

---

### 🧾 Summary

* Every node keeps a **single history of transactions** 🧠
* This is the **distributed public ledger** → the **Blockchain** 🔗
* If sender tries to double-spend BTC (e.g. A → B and A → C):

  * It won’t work ⛔
  * Because majority nodes will **reject the double spend** ❌
* The **majority of nodes** agree on the correct history 🧠
* This makes Bitcoin:

  * ✅ Trustless
  * ✅ Secure
  * ✅ Final

---

## ⏱️ Timestamp Server

---

### 🎯 Solution to Double Spending

- Timestamp Server helps maintain the **correct sequential order** of transactions.
- It avoids double spending by **locking each transaction in a timeline** using hashes.

---

### 🔁 Sequential Order of Transactions

- Each transaction (Txn) is recorded as an **Item** inside a **Block**.
- Each Block contains:
  - A set of Items (Txns)
  - A hash of the **previous Block**
  - A **new hash** is generated from these

```

New Block = Hash(New Items + Previous Block Hash)

```

- This creates a **chain** of blocks — each new block depends on the hash of the previous one.

---

### 🧱 Block Structure Flow

```

Block N:
Item 1
Item 2
...
Hash of Block N-1
↓
Generates new hash for Block N

```

- Hashes start with something like `0000...` (due to difficulty in Proof-of-Work).
- So, a chain is formed where:
  - Block N is based on Block N-1
  - Block N+1 is based on Block N
  - And so on...

---

### 🔐 Why This Matters?

- If any **single transaction is changed**, the hash of that Block changes.
- This breaks the hash link for the **next Block**, and every block after it.
- A hacker trying to change one Txn will need to:
  - Recalculate that block’s hash
  - Recalculate **every following block’s hash**
  - Do this **faster than the entire honest network (nodes)**
  - 🔥 Which is nearly impossible without extreme CPU usage

---

### 🧠 Hacker Attack Example

- Suppose a hacker tries to change history in Block 5:
  - Block 5's hash changes → Breaks Block 6
  - Block 6’s hash breaks Block 7
  - This continues for the full chain 😵
- Now the hacker must **rebuild the entire chain** faster than miners building legit chain → not feasible.

---

### 🔗 Chain Proof Logic

> Each block is proof that all the previous blocks before it existed at that time.

- The timestamp server does:
```

Timestamp = Hash(Items in block + Prev Block Hash)

```
- All blocks stored and merged as a **chain via hashes**.
- This makes a single, secure, append-only ledger — where order is always maintained.

---

### ✅ Summary

- The Timestamp Server ensures:
- 🔄 Every transaction is **chronologically locked**
- 🔗 All blocks are **linked by hashes**
- 🛡️ Any tampering breaks the entire chain
- 🧱 Building an alternative chain is **computationally impossible** (unless you outpower all nodes)

> So, Timestamp Server is the **foundation of blockchain immutability**.
---


## ⚙️ Proof of Work + 🌐 Network Consensus

---

### 🧠 What is Proof of Work (PoW)?

Bitcoin uses a system called **Proof of Work** to maintain a **trustless** and **decentralized network**.

- Inspired by **Adam Back’s Hashcash** 💡
- Goal: Find a **SHA-256 hash** that starts with a certain number of **leading zeros** (e.g., `0000...`)
- Formula:
```

Hash = SHA256(Block Data + Nonce)

```
- **Nonce** = Number adjusted repeatedly until the resulting hash matches difficulty criteria
- The process is **computationally expensive**, but **easy to verify**

---

### 🧱 How Bitcoin Builds Blocks

Each block includes:

- 🔗 Hash of the **previous block**
- 📜 List of **valid new transactions**
- 🕒 **Timestamp**
- 🔢 **Block number**
- 🔁 **Nonce** (used to solve PoW)

Miners repeatedly **change the nonce** and hash the block until they find a hash that meets the difficulty target.

Once found:

> 🎉 The block is **broadcast to all nodes**  
> 📦 If valid, it's **added to the blockchain**

---

### ⛏️ Mining and Double Spend Protection

- **Miners** work to solve the PoW puzzle.
- They include **only valid, unspent transactions** in the block.
- This ensures:
- No duplicate spending (⛔ double spend)
- Accurate ownership history (✅ chain of signatures)

---

### 👨‍⚖️ Network Consensus Mechanism

Once a valid block is found:

- It is **broadcast to the network**
- Each node **validates the block** and its transactions
- If valid, the block is **appended to the longest valid chain**

### 🧮 🧑‍💻 One CPU = One Vote

> 💡 Unlike IP-based voting systems (which can be manipulated with fake identities or multiple IPs),  
> **Bitcoin treats 1 CPU = 1 vote** 🗳️

- This prevents **Sybil attacks**
- Someone can’t just buy many IPs and control the network
- Instead, they would need enormous **computational power**, which becomes **cost-prohibitive**

---

### 🛠️ Difficulty Adjustment

- Bitcoin targets **1 block every 10 minutes**
- As more miners join or leave the network:
→ The system adjusts the difficulty to maintain consistent timing ⏲️

---

### 🔐 Why It Works

- 🧠 Proof of Work = real computational cost → makes attacking the chain expensive
- 🔁 Longest valid chain (with most PoW) is accepted by nodes
- 💪 Any attacker must **re-do all PoW** from the block they try to modify + catch up with honest nodes
→ Nearly impossible as long as honest nodes **control majority CPU power**

---

### ✅ Summary

- 🔗 Each block is cryptographically linked to the previous one
- 🔁 Nodes only trust the **longest chain with most work**
- 🧾 Transactions are:
- Publicly visible
- Immutable once added
- 🛡️ PoW secures the network against fraud, manipulation, and double spending

---


## 💰 Incentive Mechanism in Bitcoin

---

### 🎯 Why do miners spend energy solving puzzles?

Because they get **rewards** in the form of **Bitcoin**! 💸

There are **two types of incentives** for miners:

1. **Block Reward** (newly minted Bitcoin)
2. **Transaction Fees** (paid by users for processing their transactions)

---

### 🧱 First Transaction — Coinbase

- The **first transaction in every block** is called the **coinbase transaction**.
- This is **not sent by any user** — it's auto-generated by the system.
- It includes the **block reward** (new BTC) + **transaction fees**.
- ✅ **This amount is paid to the miner who successfully solved the hash puzzle (PoW).**

Example:
```

"Give 3.125 BTC to the miner who mined this block."

```

---

### 📦 Plus Transaction Fees

- On top of the block reward, the miner also gets **fees from each transaction** included in that block.
- Example:
  - Block reward = ` 3.125 BTC`
  - Txn fees = `0.4 BTC`
  - ➡️ Total reward = `3.525 BTC`

---

### 🔋 Mining = Work

Miners spend:

- ⚙️ CPU power
- 🔌 Electricity
- 💵 Infrastructure costs

So incentives are necessary to keep the system **secure and decentralized**.

---

### 📉 Block Reward Halving

- The total Bitcoin supply is **capped at 21 million BTC**
- To control inflation, the **block reward halves every ~4 years (210,000 blocks)**

| Year  | Block Reward |
|-------|---------------|
| 2009  | 50 BTC        |
| 2012  | 25 BTC        |
| 2016  | 12.5 BTC      |
| 2020  | 6.25 BTC      |
| 2024  | 3.125 BTC     |
| 2028  | 1.5625 BTC (est.) |

🕒 This continues until **all 21 million BTC** are mined (around year ~2140).

---

### 🧾 What Happens After All BTC is Mined?

Once the block reward hits **0 BTC**:

> Miners will be incentivized **only through transaction fees** 🔄

This means Bitcoin will run on a **fee-based model** — still secure, but powered by network usage.

---

### ✅ Summary

- Miners are rewarded through a **special first transaction** (coinbase) in each block.
- Reward = **new BTC + transaction fees**
- Incentives cover their **computational & electricity costs**
- Reward halves every 4 years → keeps Bitcoin **scarce** and **valuable**
- Final state = miners earn only **fees** once 21M BTC are mined

---


## 🧹 Reclaiming Disk Space in Bitcoin (Updated)

---

### 📦 Block Structure and Linking

Each block contains its own **set of transactions**, summarized in the **Merkle Root Hash** stored in the block header.

The block header consists of these 6 components:

| Field               | Size       | Description                                  |
|--------------------|------------|----------------------------------------------|
| Previous Block Hash | 32 bytes   | ID of the previous block                      |
| Merkle Root Hash    | 32 bytes   | Root hash generated by hashing all txn data  |
| Version             | 4 bytes    | Protocol rules version                        |
| Timestamp           | 4 bytes    | Time when block was mined                     |
| Difficulty Target   | 4 bytes    | Mining difficulty                            |
| Nonce               | 4 bytes    | Value used by miners to find a valid hash    |

These 6 components are concatenated and **hashed** (using SHA-256 twice) to produce the **current block’s hash** — this serves as the **block ID**.

---

### 🔗 Chain Linking

- The current block’s header hash is stored in the **next block’s "Previous Block Hash"** field.
- This creates a **chain of blocks**, where each block depends on the previous one.
- Any modification of even a single transaction in any block will change that block’s hash.
- This would cascade and invalidate all subsequent blocks, making tampering **computationally infeasible**.

---

### 🧑‍💻 Mining and Pruning

- Miners only need to keep the **block header** (80 bytes) to verify the chain integrity.
- The full transaction data can be **pruned** (removed) to save disk space while maintaining security.
- This is because the **Merkle Root Hash** in the header summarizes all transaction data securely.

---

### 📊 Storage Calculation

- Bitcoin generates about **6 blocks per hour**.
- Number of blocks per year:  
  `6 blocks/hour × 24 hours/day × 365 days/year = 52,560 blocks/year`
- Size of one block header: **80 bytes**.
- Annual storage for block headers only:  
  `80 bytes × 52,560 blocks = 4,204,800 bytes ≈ 4.2 MB per year`

> This is **very small** and affordable even on modest hardware since 2008.

---

### 🔑 Summary

- Each block header links to the previous block via its hash, forming a **secure chain**.
- The **Merkle Root Hash** in the header compresses all transaction data.
- By storing only headers, nodes **save disk space** yet retain full blockchain security.
- This mechanism underpins Bitcoin’s scalability and integrity.


### ✅ Sections Covered

* 🧠 Introduction
* 💸 Transactions

