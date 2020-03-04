from ubuntu

ARG DEBIAN_FRONTEND=noninteractive

run apt-get -y  update && apt-get -y  upgrade
run apt-get -y install php7.2 nginx nodejs mysql-server redis vim
run apt-get install -y php7.2-fpm php-pear libmcrypt-dev php7.2-mbstring php7.2-dev php7.2-zip php7.2-curl php7.2-gd php7.2-mysql  php7.2-xml libapache2-mod-php7.2
run pecl install mcrypt-1.0.1
run curl -o /tmp/composer-setup.php https://getcomposer.org/installer \
    && curl -o /tmp/composer-setup.sig https://composer.github.io/installer.sig \
    && php /tmp/composer-setup.php --no-ansi --install-dir=/usr/local/bin --filename=composer --snapshot \
    && rm -f /tmp/composer-setup.*
COPY .docker/start-nginx.sh  /bin/start-nginx.sh
run chmod +x /bin/start-nginx.sh

RUN apt-get -y install npm
WORKDIR /usr/src/app

copy . /usr/src/app

run composer install
# run npm install
# run npm run load
# copy .env.example .env
# run php artisan key:generate
# run npm run prod


#expose 8080

cmd bash;
