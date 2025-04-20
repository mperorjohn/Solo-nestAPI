# Dockerfile

# from
FROM node:18-alpine

# to
FROM node:20-alpine

# 2. Create app directory
WORKDIR /usr/src/app

# 3. Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 4. Copy source code
COPY . .

# 5. Build the TypeScript
RUN yarn build

# 6. Expose the port your Nest app listens on
EXPOSE 3333

# 7. Run the compiled app
CMD ["node", "dist/main.js"]
