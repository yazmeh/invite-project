from yazmeh/invite-dock

WORKDIR /usr/src/app

copy . .

run npm install
run npm run load
run composer install
copy .env.example .env
run php artisan key:generate
run npm run prod


expose 8080

entrypoint ['start-nginx'];
