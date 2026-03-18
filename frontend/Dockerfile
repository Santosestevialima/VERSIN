# ============================================================
# VERSIN · Frontend · Next.js + Tailwind CSS
# ============================================================

FROM node:20-alpine

WORKDIR /app

# Instala dependências primeiro (cache de camadas)
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
