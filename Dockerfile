FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package files first
COPY package*.json ./

# Install deps as root
RUN npm install

# Copy rest of the app
COPY . .

# Fix ownership so node user can write
RUN chown -R node:node /usr/src/app

USER node

EXPOSE 3000
CMD ["npm", "run", "dev"]
