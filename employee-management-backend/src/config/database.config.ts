import { DataSource, DataSourceOptions } from 'typeorm';

export const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'employee_management',
  entities: [__dirname + '/../entities/*.entity.{ts,js}'],
  synchronize: false,
  migrations: [__dirname + '/../migrations/*.ts'],
};

export const AppDataSource = new DataSource(databaseConfig);