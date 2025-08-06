--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5 (Debian 17.5-1.pgdg120+1)
-- Dumped by pg_dump version 17.5 (Debian 17.5-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.courses (id, name, number_vacancies, created_at, update_at) FROM stdin;
4d5cdeee-32ff-4b0c-8583-f198838f0492	Assistente Administrativo	100	2025-08-06 14:54:08.727	2025-08-06 14:54:08.727
ecb1bbe0-1343-4370-ae8d-4d49176d5cb6	Assistente de Projetos e Processos	120	2025-08-06 14:54:08.727	2025-08-06 14:54:08.727
\.


--
-- PostgreSQL database dump complete
--

