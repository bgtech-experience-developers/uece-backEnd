--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Ubuntu 14.18-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.18 (Ubuntu 14.18-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
f07d08ee-7b80-4d28-8f04-7184cb3ac3ad	53276fea0ee124bcc4cfb894691e11ed9549476d80190c6fb9706252f5af3751	2025-07-30 09:42:06.243659-03	20250725210656_init_tables	\N	\N	2025-07-30 09:42:06.199955-03	1
f83a47ee-285b-42b9-bc0c-2814e8ce65c1	413226a1d405defd5d702bc0c7abe5fe155ec500d09b99918b99903cf8220626	2025-07-30 09:42:06.25494-03	20250726131726_add_constraint_unique_cep	\N	\N	2025-07-30 09:42:06.245548-03	1
1efb744d-805d-415e-abab-7cf33e02a811	b27aff529a4bf26d09496707ccc85a07e7b129d409c27dd3d39c339015b7ae8e	2025-07-30 09:42:06.299564-03	20250726135527_adjust_generate_uuid	\N	\N	2025-07-30 09:42:06.256892-03	1
8041894e-6338-4894-90e4-7ada7f30b457	9e8b3861614278d8ddea094094d197731afd992870bc2527bf36a7ee2ce52c9d	2025-07-30 09:42:06.307584-03	20250726180412_add_foreign_key_address_to_users	\N	\N	2025-07-30 09:42:06.30142-03	1
736b60af-fcb6-44ca-9d0a-802f7ae00ca2	866f25ff0d7a77817a54dda39d028e0f5f22ffb5225cfafda95511519fa134a4	2025-07-30 09:42:06.315242-03	20250726182034_adjust_colunm_name_address	\N	\N	2025-07-30 09:42:06.309402-03	1
872f82d4-403a-4d11-936a-e2c2f4b6ed11	875ee9476db4da494c53adffb7c29fa9d45e20d257f28ad544ebb952cbbe70f3	2025-07-30 09:42:06.323048-03	20250726192936_remove_contraint_unique_of_cep	\N	\N	2025-07-30 09:42:06.317139-03	1
3edb9d59-9616-4b33-96b6-49b71a6dde7b	18c99fe788e1e88ddb69b2964fe75349274c898271a65e7a45c5d8b4e2490c5c	2025-07-30 09:42:06.334517-03	20250727171843_add_column_password_and_add_constraint	\N	\N	2025-07-30 09:42:06.324876-03	1
748ad844-6279-47fa-be5f-3e20af4b2b44	53276fea0ee124bcc4cfb894691e11ed9549476d80190c6fb9706252f5af3751	2025-07-26 18:02:43.451096-03	20250725210656_init_tables	\N	\N	2025-07-26 18:02:43.409764-03	1
e4785a71-ccdb-4734-89e6-a69a23347858	413226a1d405defd5d702bc0c7abe5fe155ec500d09b99918b99903cf8220626	2025-07-26 18:02:43.462179-03	20250726131726_add_constraint_unique_cep	\N	\N	2025-07-26 18:02:43.452968-03	1
37fb373e-b9e7-4c10-bbf9-2cf7f5b2eda0	b27aff529a4bf26d09496707ccc85a07e7b129d409c27dd3d39c339015b7ae8e	2025-07-26 18:02:43.508015-03	20250726135527_adjust_generate_uuid	\N	\N	2025-07-26 18:02:43.464063-03	1
376fd9bb-36df-4bf7-8161-0b4b5793acf3	9e8b3861614278d8ddea094094d197731afd992870bc2527bf36a7ee2ce52c9d	2025-07-26 18:02:43.515973-03	20250726180412_add_foreign_key_address_to_users	\N	\N	2025-07-26 18:02:43.509872-03	1
75b32dba-8f1c-4691-a2a7-a8782a977dca	866f25ff0d7a77817a54dda39d028e0f5f22ffb5225cfafda95511519fa134a4	2025-07-26 18:02:43.523443-03	20250726182034_adjust_colunm_name_address	\N	\N	2025-07-26 18:02:43.517925-03	1
573582d9-bb43-42da-a61d-13c9cedd0288	875ee9476db4da494c53adffb7c29fa9d45e20d257f28ad544ebb952cbbe70f3	2025-07-26 18:02:43.531141-03	20250726192936_remove_contraint_unique_of_cep	\N	\N	2025-07-26 18:02:43.525347-03	1
\.


--
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.address (id, cep, state, city, neighborhood, number, "createdAt", "updatedAt", street) FROM stdin;
3fc3a399-1ba6-4d6e-9d0c-66a306577b48	60000123	Ceará	Fortaleza	Centro	123	2025-07-26 21:05:09.512	2025-07-26 21:05:09.512	Rua das Flores
417eb632-0bf8-4d86-a9c9-a3f640b28076	12345678	Ceará	Fortaleza	Jose Walter	102	2025-07-26 21:05:34.147	2025-07-26 21:05:34.147	rua 15
fc4211ea-1839-4ba0-9669-73278f7b0c41	12345678	Ceará	Fortaleza	Jose Walter	102	2025-07-26 21:12:51.406	2025-07-26 21:12:51.406	rua 15
7d1fe217-2105-441b-bc97-2625d5e7f9e6	60000123	Ceará	Fortaleza	Centro	123	2025-07-30 12:45:13.292	2025-07-30 12:45:13.292	Rua das Flores
91434402-18db-475a-9645-a887ebc9639f	60100234	Ceará	Fortaleza	Aldeota	456	2025-07-30 12:45:13.292	2025-07-30 12:45:13.292	Av. Santos Dumont
7f94dd2d-9d21-41e4-8e88-28c0a86aaea7	60300456	Ceará	Fortaleza	Mucuripe	101	2025-07-30 12:45:13.292	2025-07-30 12:45:13.292	Rua dos Navegantes
6abad7c8-c8e4-4ae5-801f-e3b448885abe	60200345	Ceará	Fortaleza	Meireles	789	2025-07-30 12:45:13.292	2025-07-30 12:45:13.292	Rua Carlos Vasconcelos
b488273d-b984-409c-8ff4-7549052f3505	60400567	Ceará	Fortaleza	Varjota	202	2025-07-30 12:45:13.292	2025-07-30 12:45:13.292	Rua da Paz
2a36408a-5d14-4c5f-a9d1-938ab187d19c	12345678	Ceará	Fortaleza	Jose Walter	102	2025-07-30 12:49:49.698	2025-07-30 12:49:49.698	rua 15
\.


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses (id, name, registration_fee, number_vacancies, address_id, created_at, update_at) FROM stdin;
0eaf51cb-5326-49b1-b920-1f215accd52f	Curso de Programação Web	150.000000000000000000000000000000	30	3fc3a399-1ba6-4d6e-9d0c-66a306577b48	2025-07-26 21:05:09.538	2025-07-26 21:05:09.538
4a62aa04-ec49-4084-8b35-3091a0cd0395	Curso de Design Gráfico 2	125.000000000000000000000000000000	28	91434402-18db-475a-9645-a887ebc9639f	2025-07-30 12:45:13.311	2025-07-30 12:45:13.311
fefaddd8-eaef-4114-83a8-d54ba3dcacab	Curso de Programação Web 1	150.000000000000000000000000000000	30	7d1fe217-2105-441b-bc97-2625d5e7f9e6	2025-07-30 12:45:13.311	2025-07-30 12:45:13.311
f6d96985-971b-476d-a8ae-48dfa8de9999	Curso de Programação Web 2	160.000000000000000000000000000000	35	91434402-18db-475a-9645-a887ebc9639f	2025-07-30 12:45:13.311	2025-07-30 12:45:13.311
fccca651-6c36-4e96-b405-acad0ba65f57	Curso de Programação Web 3	170.000000000000000000000000000000	40	6abad7c8-c8e4-4ae5-801f-e3b448885abe	2025-07-30 12:45:13.311	2025-07-30 12:45:13.311
435e1acc-45a1-41e6-9832-97118fc04ba8	Curso de Design Gráfico 1	120.000000000000000000000000000000	25	7d1fe217-2105-441b-bc97-2625d5e7f9e6	2025-07-30 12:45:13.311	2025-07-30 12:45:13.311
35437212-223f-4cf0-a5fa-bac0ac9f18a1	Curso de Design Gráfico 3	130.000000000000000000000000000000	31	6abad7c8-c8e4-4ae5-801f-e3b448885abe	2025-07-30 12:45:13.311	2025-07-30 12:45:13.311
a19b23ca-1f49-419a-ad8d-4f7064e736a7	Curso de Design Gráfico 4	135.000000000000000000000000000000	34	7f94dd2d-9d21-41e4-8e88-28c0a86aaea7	2025-07-30 12:45:13.311	2025-07-30 12:45:13.311
b2ddaa95-e09c-49a3-badd-4550fca8936f	Curso de Programação Web 5	190.000000000000000000000000000000	50	b488273d-b984-409c-8ff4-7549052f3505	2025-07-30 12:45:13.311	2025-07-30 12:45:13.311
b7887ee3-b138-4973-8d3b-004a6a48fbaf	Curso de Programação Web 4	180.000000000000000000000000000000	45	7f94dd2d-9d21-41e4-8e88-28c0a86aaea7	2025-07-30 12:45:13.311	2025-07-30 12:45:13.311
4d55e4f4-09a4-4072-bed0-79ce791ce616	Curso de Design Gráfico 5	140.000000000000000000000000000000	37	b488273d-b984-409c-8ff4-7549052f3505	2025-07-30 12:45:13.311	2025-07-30 12:45:13.311
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, mother_name, cpf, email, data_birth, created_at, update_at, address_id, password) FROM stdin;
7c4eb724-9932-4a96-b8c8-3f09ba9b314a	Lula	Dilma Rousseff	12345678911	lula9@gmail.com	2005-02-10 10:30:00	2025-07-30 12:49:49.701	2025-07-30 12:49:49.701	2a36408a-5d14-4c5f-a9d1-938ab187d19c	$2b$11$rG1HbkpPgZa4PPWP06EnfOVuA9TCOkgffUDJ4R5P7Xuf6MsTJg6Xe
\.


--
-- Data for Name: courses_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses_users (user_id, course_id) FROM stdin;
7c4eb724-9932-4a96-b8c8-3f09ba9b314a	0eaf51cb-5326-49b1-b920-1f215accd52f
\.


--
-- PostgreSQL database dump complete
--

