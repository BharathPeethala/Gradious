USE `classicmodels`;

select orderNumber,`orderDate`,status,comments from orders where comments IS NOT NULL;