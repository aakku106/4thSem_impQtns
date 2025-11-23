# Past Paper SQL Solutions (2076 - 2081 + Model)

Here is a compilation of all SQL-related questions from the last 7 exam papers, solved with simple, easy-to-understand queries.

---

## 2081 (Question 2)

**Schema:**

- `USER` (UserID, User_name, Address)
- `USES` (UserID, BookID, Issued_date, Returned_date)
- `BOOK` (BookID, Book_name, Author, PublisherID)
- `PUBLISHER` (PublisherID, Publisher_name, Address)

**a. Retrieve names of all books issued to the user “Hari”.**

```sql
SELECT B.Book_name
FROM BOOK B
JOIN USES U ON B.BookID = U.BookID
JOIN USER US ON U.UserID = US.UserID
WHERE US.User_name = 'Hari';
```

**b. Retrieve the names of all books published by “ABC publication”.**

```sql
SELECT B.Book_name
FROM BOOK B
JOIN PUBLISHER P ON B.PublisherID = P.PublisherID
WHERE P.Publisher_name = 'ABC publication';
```

**c. Count the number of books published by the author “Ram”.**

```sql
SELECT COUNT(*)
FROM BOOK
WHERE Author = 'Ram';
```

---

## 2080 New (Question 1)

**Schema:**

- `Customer` (CustomerID, CustomerName, Address, Phone, Email)
- `Borrows` (CustomerID, LoanNumber)
- `Loan` (LoanNumber, LoanType, Amount)

**a. To display name of all customers who live in “Lalitpur” in ascending order of name.**

```sql
SELECT CustomerName
FROM Customer
WHERE Address = 'Lalitpur'
ORDER BY CustomerName ASC;
```

**b. To count total number of customers having loan at the bank.**

```sql
SELECT COUNT(DISTINCT CustomerID)
FROM Borrows;
```

**c. To find name of those customers who have loan amount greater than or equal to 500000.**

```sql
SELECT C.CustomerName
FROM Customer C
JOIN Borrows B ON C.CustomerID = B.CustomerID
JOIN Loan L ON B.LoanNumber = L.LoanNumber
WHERE L.Amount >= 500000;
```

**d. To find average loan amount of each account type.**

```sql
SELECT LoanType, AVG(Amount)
FROM Loan
GROUP BY LoanType;
```

---

## 2080 (Question 1)

**Schema:**

- `Customer` (CustomerID, CustomerName, Address, Phone, Email)
- `Owns` (CustomerID, AccountNumber)
- `Account` (AccountNumber, AccountType, Balance)

**a. To display name of all customers who live in “Kathmandu”.**

```sql
SELECT CustomerName
FROM Customer
WHERE Address = 'Kathmandu';
```

**b. To count total number of customers.**

```sql
SELECT COUNT(*)
FROM Customer;
```

**c. To find name of those customers who have balance greater than or equal to 100000.**

```sql
SELECT C.CustomerName
FROM Customer C
JOIN Owns O ON C.CustomerID = O.CustomerID
JOIN Account A ON O.AccountNumber = A.AccountNumber
WHERE A.Balance >= 100000;
```

**d. To find average balance of each account type.**

```sql
SELECT AccountType, AVG(Balance)
FROM Account
GROUP BY AccountType;
```

---

## Model Question (Question 1)

**Schema:**

- `Customer` (Cno, Cname, Caddress, Ccontact)
- `Purchase` (Cno, Pid)
- `Product` (Pid, Pname, price, quantity)

**a. Find the names of all products having price 1000.**

```sql
SELECT Pname
FROM Product
WHERE price = 1000;
```

**b. Find the name of those customers who purchased Dell Laptop.**

```sql
SELECT C.Cname
FROM Customer C
JOIN Purchase Pu ON C.Cno = Pu.Cno
JOIN Product Pr ON Pu.Pid = Pr.Pid
WHERE Pr.Pname = 'Dell Laptop';
```

**c. Find the total number of products purchased by customer ‘Ram’.**

```sql
SELECT COUNT(Pu.Pid)
FROM Purchase Pu
JOIN Customer C ON Pu.Cno = C.Cno
WHERE C.Cname = 'Ram';
```

**d. Increase price of all products by 5%.**

```sql
UPDATE Product
SET price = price * 1.05;
```

**e. Find total price of Apple Mobiles.**

```sql
SELECT SUM(price)
FROM Product
WHERE Pname = 'Apple Mobile';
```

---

## 2078 (Question 6)

**Schema:**

- `TEACHER` (TID, TName, TAddress, TQualification)
- `SCHOOL` (SID, SName, SAddress, SPhone)
- `SCHOOL_TEACHER` (SID, TID, No_of_Period)

**Query: Retrieve the TName, SName, SPhone for “ABC” school.**

```sql
SELECT T.TName, S.SName, S.SPhone
FROM TEACHER T
JOIN SCHOOL_TEACHER ST ON T.TID = ST.TID
JOIN SCHOOL S ON ST.SID = S.SID
WHERE S.SName = 'ABC';
```

---

## 2076 (Question 6)

**Question:** Create two table `Courses` (CID, Course, Dept) and `HoD` (Dept, Head) using SQL language with all constraints [Primary key, Foreign key and Referential Integrity].

**Solution:**

```sql
-- First, create the HoD table because Courses depends on it (Foreign Key)
CREATE TABLE HoD (
    Dept VARCHAR(50) PRIMARY KEY,
    Head VARCHAR(50)
);

-- Then, create the Courses table
CREATE TABLE Courses (
    CID INT PRIMARY KEY,
    Course VARCHAR(50),
    Dept VARCHAR(50),
    FOREIGN KEY (Dept) REFERENCES HoD(Dept)
);
```
