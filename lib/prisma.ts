import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';

// Next.js特有のエラーを防ぐためのおまじない
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const isProduction = process.env.NODE_ENV === 'production';

let prisma: PrismaClient;

if (isProduction) {
  // 本番環境（Vercelなど）では Turso に接続する
  const adapter = new PrismaLibSQL({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  });
  prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
} else {
  // 開発環境（手元のパソコン）では dev.db に接続する
  prisma = globalForPrisma.prisma || new PrismaClient();
}

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;