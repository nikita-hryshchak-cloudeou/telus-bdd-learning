export const initDB = () =>
  `
  create table if not exists titles (
    id serial primary key,
    name text not null,
    rating real not null,
    approved boolean,
    processing boolean default false,
    processed boolean default false,
    error text,
    created_at timestamp default now(),
    updated_at timestamp default now()
  )
  `;

export const fillTitles = () =>
  `
  insert into titles (name, rating) values ('naruto', 9);
  insert into titles (name, rating) values ('steins gate', 10);
  insert into titles (name, rating) values ('attack on titan', 9.6);
  insert into titles (name, rating) values ('death note', 9.5);
  insert into titles (name, rating) values ('dr stone', 9.3);
  insert into titles (name, rating) values ('jujutsu kaisen', 9.2);
  `;