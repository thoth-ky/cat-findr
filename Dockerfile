FROM node:10.13-alpine AS builder
ENV NODE_ENV production
WORKDIR /app
COPY . .

RUN yarn global add react-scripts
RUN yarn install
RUN yarn run build

FROM nginx:1.17.9-alpine
WORKDIR /app
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
