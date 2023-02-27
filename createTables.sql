CREATE DATABASE kenzie_movies;

CREATE TABLE kenzie_movies_list(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description text,
    duration INTEGER NOT NULL,
    price INTEGER NOT NULL
);

ALTER DATABASE kenzie_movies RENAME TO movies;

ALTER TABLE kenzie_movies_list RENAME TO movies;

ALTER TABLE movies
ADD CONSTRAINT name UNIQUE (name);
