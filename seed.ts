import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Lista de endereços fictícios
  const addressesData = [
    {
      cep: '60000123',
      state: 'Ceará',
      city: 'Fortaleza',
      neighborhood: 'Centro',
      street: 'Rua das Flores',
      number: '123',
    },
    {
      cep: '60100234',
      state: 'Ceará',
      city: 'Fortaleza',
      neighborhood: 'Aldeota',
      street: 'Av. Santos Dumont',
      number: '456',
    },
    {
      cep: '60200345',
      state: 'Ceará',
      city: 'Fortaleza',
      neighborhood: 'Meireles',
      street: 'Rua Carlos Vasconcelos',
      number: '789',
    },
    {
      cep: '60300456',
      state: 'Ceará',
      city: 'Fortaleza',
      neighborhood: 'Mucuripe',
      street: 'Rua dos Navegantes',
      number: '101',
    },
    {
      cep: '60400567',
      state: 'Ceará',
      city: 'Fortaleza',
      neighborhood: 'Varjota',
      street: 'Rua da Paz',
      number: '202',
    },
  ];

  // Cria todos os endereços e armazena o resultado
  const createdAddresses = await Promise.all(
    addressesData.map((address) => prisma.address.create({ data: address }))
  );

  console.log('Endereços criados:', createdAddresses);

  // Cursos fictícios para cada endereço
  const coursesData = createdAddresses.flatMap((address, index) => [
    {
      name: `Curso de Programação Web ${index + 1}`,
      registration_fee: 150.0 + index * 10, // variação na taxa
      number_vacancies: 30 + index * 5, // variação nas vagas
      address_id: address.id,
    },
    {
      name: `Curso de Design Gráfico ${index + 1}`,
      registration_fee: 120.0 + index * 5,
      number_vacancies: 25 + index * 3,
      address_id: address.id,
    },
  ]);

  // Cria todos os cursos
  const createdCourses = await Promise.all(
    coursesData.map((course) => prisma.courses.create({ data: course }))
  );

  console.log('Cursos criados:', createdCourses);
}

main()
  .then(() => {
    console.log('Seed finalizado com sucesso');
    return prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Erro ao rodar seed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
