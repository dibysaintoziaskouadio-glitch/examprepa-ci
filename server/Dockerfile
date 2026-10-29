# API ExamPrepa CI : NestJS + Prisma
FROM node:20-bookworm-slim AS build
RUN apt-get update && apt-get install -y --no-install-recommends openssl && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate && npx nest build

FROM node:20-bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends openssl && rm -rf /var/lib/apt/lists/*
WORKDIR /app
ENV NODE_ENV=production
# node_modules complet : ts-node sert au seed initial (npm run db:seed) et au contrôle du contenu.
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/src ./src
COPY --from=build /app/scripts ./scripts
COPY package.json tsconfig.json ./
RUN mkdir -p uploads && chown -R node:node /app
USER node
EXPOSE 4300
# Les migrations sont appliquées à chaque démarrage (idempotent).
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
