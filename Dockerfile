FROM nginx
COPY . /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD curl --fail http://localhost
