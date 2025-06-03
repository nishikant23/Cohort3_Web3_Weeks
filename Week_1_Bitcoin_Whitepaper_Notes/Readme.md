# Week 1 - BITCOIN

### White Paper Summary (My Notes)

---

1. In traditional systems, we rely on **banks** (as trusted third parties) to validate transactions — mainly to **avoid double spending**.

2. But we can prevent double spending by using **electronic payments** that include **timestamps**. This helps verify the correct order of transactions.

3. Still, problems exist. For example, if there's a **dispute** between buyer and seller (say, 8/10 cases), an **intermediary (like a bank)** is required to resolve it.  
   > This increases transaction costs.

---

### Example of Reversible Transactions (Problem)


- Seller sold  `$20` worth of wafers, and Buyer brought at $20  (just as an example).  
- But, Buyer reports a problem and **claims refund**.  
- Gets `$20` back.  
> Result: Transaction is **reversible**, and it’s unfair to the seller.

---

### Solution — How to Make Transactions Trustless?

Can we make a system where:

- Buyer & seller are **verified**?
- Transaction is **final**?

Yes, by using **Bitcoin**. Here’s how:

---

### Transaction Flow

- Buyer owns 1 BTC.
- Stores it in a **P2P contract** (escrow-like) with:
  - Buyer's public key
  - Transaction date (e.g., 24-05-25)
  - Transaction hash

---

#### Ownership Chain

