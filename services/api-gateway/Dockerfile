FROM node:18

WORKDIR /app

# 1️⃣ Copiamos sólo los ficheros de definición de dependencias
COPY package*.json ./

# 2️⃣ Instalamos las dependencias (incluye http-proxy-middleware)
RUN npm install

# 3️⃣ Ahora copiamos el resto de tu código
COPY . .

# 4️⃣ Expón el puerto y arranca
EXPOSE 3000
CMD ["npm", "start"]

