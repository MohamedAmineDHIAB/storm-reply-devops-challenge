FROM node:latest
WORKDIR /app
# copy everything else except node_modules (see .dockerignore)
COPY . .
RUN npm install
CMD ["node","app.js"]

