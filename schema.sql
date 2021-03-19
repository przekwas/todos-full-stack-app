CREATE SCHEMA todos_app;
USE todos_app;

CREATE TABLE users (
	id INT AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE todos (
	id INT AUTO_INCREMENT,
    userid INT NOT NULL,
    content VARCHAR(255) NOT NULL,
    completed CHAR(1) DEFAULT 'n',
    completed_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES users (id)
);

CREATE TABLE tags (
	id INT AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE todos_tags (
	todoid INT NOT NULL,
    tagid INT NOT NULL,
    PRIMARY KEY (todoid, tagid),
    FOREIGN KEY (todoid) REFERENCES todos (id) ON DELETE CASCADE,
    FOREIGN KEY (tagid) REFERENCES tags (id) ON DELETE CASCADE
);