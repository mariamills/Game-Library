CREATE TABLE games(
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    game_desc VARCHAR(100),
    release_date DATE DEFAULT '1996-05-15',
    developer VARCHAR(50),
    publisher VARCHAR(50),
    genre VARCHAR(50),
    metadata JSON,
    PRIMARY KEY (id)
);