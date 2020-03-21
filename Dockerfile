FROM node:12.16.1-slim

# Set work directory
WORKDIR /app

# Copy package files
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the source files
COPY . .

# Start the server
CMD [ "npm", "start" ]