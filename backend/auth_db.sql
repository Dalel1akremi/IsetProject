SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
-- Table structure for table `etudiants`
--


CREATE TABLE etudiants(
   id VARCHAR(50),
   firstname VARCHAR(50) ,
   lastname VARCHAR(50) ,
   email VARCHAR(50) unique,
   password VARCHAR(255),
   refresh_token VARCHAR(255),
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   cin VARCHAR(50) NOT NULL,
   num_insc VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)
);

--
-- AUTO_INCREMENT for table `etudiants`
--
ALTER TABLE `etudiants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
<<<<<<< HEAD
COMMIT;

-----table de chef departement ----
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE chef_departement(
   id VARCHAR(50),
   firstname VARCHAR(50) ,
    lastname VARCHAR(50) ,
   email VARCHAR(50) unique,
   password VARCHAR(255),
   refresh_token VARCHAR(255),
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   cin VARCHAR(50) NOT NULL,
   code_dautorisation VARCHAR(50) NOT NULL,
   nom_dep VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)
);
ALTER TABLE `chef_departement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
=======
>>>>>>> a01a598183f4b8a764ce43691938dbbb0e50fd90
COMMIT;
CREATE TABLE admin(
   id VARCHAR(50),
   name VARCHAR(50) unique,
   email VARCHAR(50),
   password VARCHAR(255),
   refresh_token VARCHAR(255),
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   cin VARCHAR(50) NOT NULL,
   code_previlege VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)
);


--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
