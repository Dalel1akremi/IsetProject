-- Table structure for table `etudiants`
--


CREATE TABLE etudiants(
   id VARCHAR(50),
   name VARCHAR(50) unique,
   email VARCHAR(50) unique,
   password VARCHAR(255),
   refresh_token VARCHAR(255),
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   cin VARCHAR(50) NOT NULL,
   num_insc VARCHAR(50) NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(cin, num_insc) REFERENCES carte_etudiant(cin, num_insc)
);

--
-- AUTO_INCREMENT for table `etudiants`
--
ALTER TABLE `etudiants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;