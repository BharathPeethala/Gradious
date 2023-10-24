
USE `classicmodels`;

select  pro.`productCode`,pro.`productName`,pl.`textDescription` 
from products as pro, productlines as pl 
where pro.`productLine` = pl.`productLine`;
