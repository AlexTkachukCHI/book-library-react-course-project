create table users
(
    id        integer not null
        primary key,
    email     varchar(255),
    firstname varchar(255),
    lastname  varchar(255),
    password  varchar(255),
    role      varchar(255)
        constraint users_role_check
            check ((role)::text = ANY
                   ((ARRAY ['USER'::character varying, 'ADMIN'::character varying])::text[]))
);

create table tokens
(
    expired    boolean not null,
    id         integer not null
        primary key,
    revoked    boolean not null,
    user_id    integer
        constraint fkj8rfw4x0wjjyibfqq566j4qng
            references users,
    token      varchar(255)
        unique,
    token_type varchar(255)
        constraint token_token_type_check
            check ((token_type)::text = 'BEARER'::text)
);

create table books
(
    rating      double precision,
    id          bigserial
        primary key,
    author      varchar(255),
    description varchar(500),
    genre       varchar(255),
    name        varchar(255)
);