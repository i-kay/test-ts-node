# STAGE 1
FROM node:16-alpine AS builder
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY package*.json ./
RUN chown -R node:node /home/node/app
RUN npm config set unsafe-perm true
USER node
RUN npm install
COPY --chown=node:node . .
RUN npm run build

# STAGE 2
FROM node:16-alpine
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY package*.json ./
RUN chown -R node:node /home/node/app
RUN npm config set unsafe-perm true
USER node
RUN npm install --production
COPY --from=builder /home/node/app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main.js"]
