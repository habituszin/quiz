FROM node:18-alpine as production-stage
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "dev"]

# Expose the port where your Next.js app will run (default is 3001)
EXPOSE 3001