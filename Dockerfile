FROM nginx:1.23.2
COPY . /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD curl --fail http://localhost
