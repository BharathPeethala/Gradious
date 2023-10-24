
USE `classicmodels`;

select distinct cust.customerNumber,cust.`customerName`,ord.status, ord.`orderNumber`
from customers as cust
LEFT JOIN orders as ord on cust.customerNumber = ord.customerNumber
LEFT JOIN payments as pay on cust.customerNumber = pay.customerNumber
WHERE ord.`orderNumber` is NULL
ORDER BY cust.`customerNumber`;