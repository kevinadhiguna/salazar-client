# Pull a base image that will be used
FROM node:14-alpine

# Specify a working directry
WORKDIR /app

COPY package.json .
COPY yarn.lock .

# Install dependencies without generating a 'yarn.lock' file
RUN yarn --frozen-lockfile

# Copy all files and directories
COPY . .

# Copy only necessary files and directories instead of copying them all
# COPY src/index.js src/
# COPY src/index.css src/
# COPY public/* public/
# COPY src/**/* src/

# Port Binding
EXPOSE 3000

# Run the app
CMD ["yarn", "start"]
