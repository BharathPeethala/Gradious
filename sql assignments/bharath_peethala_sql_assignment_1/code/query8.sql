
USE `classicmodels`;

select `orderNumber`,SUM(`priceEach`*`quantityOrdered`) as 'total_amount'
 FROM orderdetails  
 GROUP BY `orderNumber` 
 HAVING SUM(`priceEach`*`quantityOrdered`) >50000;
