FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock* ./

RUN yarn install --frozen-lockfile

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app ./

EXPOSE 3333

CMD ["node", "src/server.js"]