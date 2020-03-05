FROM ubuntu

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -y  update && apt-get -y  upgrade
RUN apt-get -y install php7.2 nginx nodejs mysql-server redis vim
RUN apt-get install -y php7.2-fpm php-pear libmcrypt-dev php7.2-mbstring php7.2-dev php7.2-zip php7.2-curl php7.2-gd php7.2-mysql  php7.2-xml libapache2-mod-php7.2
RUN pecl install mcrypt-1.0.1
RUN curl -o /tmp/composer-setup.php https://getcomposer.org/installer \
    && curl -o /tmp/composer-setup.sig https://composer.github.io/installer.sig \
    && php /tmp/composer-setup.php --no-ansi --install-dir=/usr/local/bin --filename=composer --snapshot \
    && rm -f /tmp/composer-setup.*
COPY .docker/start-nginx.sh  /bin/start-nginx.sh
COPY .docker/nginx.conf  /etc/nginx/nginx.conf
COPY .docker/defaultServer  /etc/nginx/sites-available/default
COPY .docker/www.conf /etc/php/7.2/fpm/pool.d/www.conf

RUN chmod +x /bin/start-nginx.sh
 
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN chown -R www-data:www-data .

RUN composer install
# RUN npm install
# RUN npm RUN load
# copy .env.example .env
RUN php artisan key:generate
# RUN npm RUN prod


#expose 8080

CMD start-nginx.sh;
