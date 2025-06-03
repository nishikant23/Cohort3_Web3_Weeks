## ✅ *Web3 & Blockchain Basics (Parsed Notes)*

### 🔍 Why Blockchain?

* *Problem with traditional systems*: Public money is often controlled by centralized entities (governments, banks), which can lead to misuse or loss of trust.
* *Need for decentralization*:

  * People want control over their own money and data.
  * Blockchain solves this by removing centralized control.
  * Everyone has equal access and control → *Public + Transparent + Immutable* system.

---

## 🧮 Hashing in Blockchain

### What is a Hash?

* A *hash* is a fixed-length string generated from any input data.
* Uses algorithms like *SHA-256* (Secure Hash Algorithm).
* SHA-256 produces a *256-bit binary* → commonly represented as a *64-character hexadecimal string* (using characters: 0-9, a-f).

### Key Hashing Features:

* *Deterministic*: Same input always gives the same hash.
* *Irreversible*: Cannot get original data from hash.
* *Avalanche effect*: Small change in input drastically changes the hash.
* *Used for verifying data integrity*.

### Example:

* Input string → SHA-256 → Binary → Hexadecimal

  * Binary (4 bits = 1 Hex char) → 256 bits = 64 characters

---

## 🧱 How Blockchain Works (Structure of a Block)

### Basic Block Components:

1. *Block Number*
2. *Previous Block Hash*
3. *Nonce* (random number found by miner)
4. *Current Block Hash* (based on data + nonce + previous hash)
5. *Data* (list of transactions)

### Role of Hash in a Block:

* Each block contains a hash that is based on:

  * Previous block’s hash
  * Data (transactions)
  * Nonce
* Changing even one bit of data will change the block’s hash → ensures immutability.

---

## ⛏ Mining Process (Proof-of-Work)

### What Miners Do:

1. Gather transactions and form a block.
2. Try different *nonce values* to find a hash that satisfies a *difficulty condition*:

   * For example, hash must begin with certain number of zeros: 000000xxxxx...
3. When found:

   * Miner broadcasts the block + nonce to the network.
   * Others *verify* easily (by computing and checking the hash).
4. If verified by majority → block is added to the blockchain.

### Forking:

* Sometimes, two miners find valid blocks at the same time → temporary fork.
* Eventually, the chain with the *most work / longest chain* wins.

---

## 🔗 Key Blockchain Properties

| Term                    | Meaning                                                       |
| ----------------------- | ------------------------------------------------------------- |
| *Decentralization*    | No single entity controls the system                          |
| *Immutable Ledger*    | Once data is recorded in a block, it cannot be changed        |
| *Consensus Mechanism* | Rules to agree on the single valid chain (e.g. Proof-of-Work) |
| *Proof-of-Work (PoW)* | Miners must perform computational work to add a block         |

---

## 🧠 Extra Concepts

* *Bytes and Bits*:

  * 1 Byte = 8 bits
  * Used in storage and hashing
* *Hexadecimal*:

  * Used to represent binary hash values in a readable format (0–9 and a–f)

---

### Summary Flow:


User sends transaction → Miners gather and verify → Build block with transactions + nonce → Find valid hash → Broadcast block → Verified → Added to blockchain


---

## Page 2: 

## ✅ *Proof of Work (PoW) - Blockchain Security & Mining Logic*

---

### ⛏ What is Proof of Work?

* *Proof of Work (PoW)* is a consensus algorithm used in Bitcoin and many blockchains.
* It requires miners to solve a *mathematical puzzle (hash puzzle)* to add a new block to the blockchain.
* This puzzle involves finding a value called *Nonce* that produces a hash starting with a required number of *leading zeros*.

---

### 🧠 Why is PoW Important?

* Each block added is *proof* that computational work was done.
* A hash puzzle is *resource-intensive* and time-consuming → prevents spamming and fraud.
* The *effort done* to solve a block acts as a guarantee of authenticity.

---

### 🔐 Security through PoW

* *Tampering with blockchain data is impractical*:

  * If a *hacker* tries to alter a previous block, they must redo PoW *for that block and all subsequent blocks* faster than the entire network of miners.
  * Due to the *massive computational power* required, it's practically *impossible*.

---

### ❓ Why Miners Don’t Hack?

* After successfully mining a block, a miner:

  * Broadcasts the block to the network
  * Gets rewarded with *Bitcoins (BTC)* as an *incentive*
* Because they receive real value (BTC), there's no incentive to hack.
* Trying to cheat means losing the reward and facing near-impossible competition from honest miners.

---

### 🔁 How Mining Works: Step-by-Step

1. *Miner gathers transactions* and prepares the block data:

   * Includes: Block Number, Transaction Data, Timestamp, Previous Hash.
2. *Tries different Nonce values* until a hash with a required pattern is found (e.g., starts with 0000...).
3. *Block Hash = SHA-256(Block No + Data + Prev Hash + Nonce)*
4. Once found, the miner:

   * *Broadcasts* the block to the network
   * Gets BTC reward
   * Block is *added to the chain*

---

### 🧮 Understanding the Hash & Nonce

* *SHA-256*:

  * Generates a 64-character hexadecimal hash
  * Uses characters: 0–9 and A–F (total 16 characters → hexadecimal)
* *1 Byte = 8 Bits*
* *256 Bits = 64 Hex Characters*
* *Nonce*:

  * A random number that miners vary to generate a valid hash.
  * Starts from a low number (e.g., 10) and keeps incrementing until a valid hash is found.

---

### 🧱 Example Block Structure:

| Field        | Value                                  |
| ------------ | -------------------------------------- |
| Block Number | 1 (Genesis Block)                      |
| Data         | A → B: 5 BTC, B → D: 1 BTC             |
| Prev Hash    | 000000... (for genesis block)        |
| Current Hash | Starts with 0000 (as per difficulty) |
| Nonce        | Found by miner through trials          |
| Timestamp    | When block was created                 |

---

### ✅ Summary Points

* Hash must start with a certain number of *leading zeros* to be considered valid.
* *Mining = Finding the right Nonce* that generates such a hash.
* Once found → block is *shared, **verified, and **added* to blockchain.
* Proof of Work makes hacking extremely difficult due to *cumulative computational effort*.

---
