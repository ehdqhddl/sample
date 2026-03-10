FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
RUN npm run build

FROM node:20-alpine
RUN npm install -g serve
COPY --from=build /app/dist /app/dist
EXPOSE 8080
ENV PORT=8080
CMD ["sh", "-c", "serve -s /app/dist -l $PORT"]
