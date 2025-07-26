import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Cria um endereço válido
  const address = await prisma.address.create({
    data: {
      cep: '60000123',
      state: 'Ceará',
      city: 'Fortaleza',
      neighborhood: 'Centro',
      street: 'Rua das Flores',
      number: '123',
    },
  });

  console.log('Endereço criado:', address);

  // 2. Cria um curso vinculado ao endereço
  const course = await prisma.courses.create({
    data: {
      name: 'Curso de Programação Web',
      registration_fee: 150.0,
      number_vacancies: 30,
      address_id: address.id,
    },
  });

  console.log('Curso criado:', course);
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