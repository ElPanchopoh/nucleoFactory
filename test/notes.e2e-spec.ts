import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest'; // ← IMPORTACIÓN CORRECTA
import { AppModule } from '../src/app.module';

describe('Notes API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('POST /api/notes → debe crear una nota', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/notes')
      .send({ title: 'Test note', content: 'Contenido de prueba' })
      .expect(201);

    expect(res.body.id).toBeDefined();
    expect(res.body.title).toBe('Test note');
  });

  it('GET /api/notes → debe listar notas', async () => {
    const res = await request(app.getHttpServer())
      .get('/api/notes')
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });

  afterAll(async () => {
    await app.close();
  });
});
