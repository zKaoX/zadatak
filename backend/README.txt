####################################
#   Software used in develpment.   #
####################################
Project is devoleped and tested on Ubuntu 18.04,
Laravel Framework 8.25.0 and mysql Ver 14.14 Distrib 5.7.33



###########################
#   How to run project.   #
###########################
1) Change current directory to directory which contains this readme file.

2) Install dependencies by running:
    composer install

3) Copy .env.example and rename it to .env
   Then in .env change values of DB_USERNAME and DB_PASSWORD
   to your mysql username and password.

4) Create empty mysql database shoes_store.

5) To create tables in database run:
    php artisan migrate

6) To populate database with 'dummy/test' data run:
    php artisan db:seed

7) To launch server run:
    php artisan serve



######################
#   API endpoints.   #
######################
GET /api/shoes
 Produce shoes.

 Input: Nothing.
 Output: Json array where each element has keys id, name, price and image.


POST /api/orders
 Make orders.

 Input: Json with key orders, its value is json array where each 
        element has keys shoe_id, buyer_name, delivery_adress and buyer_email.
 Output: Nothing.