### *Send mail:*

POST request to the server at route /send-email (**localhost:8080/send-email**)

Additional data can be attached to the request to configure the mail :

- messageToSend
- subject_of_the_mail
- receiver_mail

Example :

KEY : messageToSend
VALUE : "La méteo de Paris est 5°C"

KEY : subject_of_the_mail
VALUE : "[AREA] Widget Méteo"

KEY : receiver_mail
VALUE : "nicolaskeita2@gmail.com"

NOTE : sur Postman il faut remplir le Body de la requete avec `x-www-form-urlencoded` plutot que `form-data`.
Si vous souhaitez vraiment utiliser`form-data`, vous pouvez améliorer le fichier send-mail.js dans serveur_HTTP/routes/
lien à suivre : https://stackoverflow.com/questions/37630419/how-to-handle-formdata-from-express-4


### *Weather:*

POST request to the server at route /weather (**localhost:8080/weather**)

Additional data can be attached to the request :

- city
- send_mail
- receiver_mail

Example :

KEY : city
VALUE : "Paris"

KEY : send_mail
VALUE : "true"

KEY : receiver_mail
VALUE : nicolaskeita2@gmail.com

NOTE : sur Postman il faut remplir le Body de la requete avec `x-www-form-urlencoded` plutot que `form-data`.
Si vous souhaitez vraiment utiliser`form-data`, vous pouvez améliorer le fichier send-mail.js dans serveur_HTTP/routes/
lien à suivre : https://stackoverflow.com/questions/37630419/how-to-handle-formdata-from-express-4

### *getURL_toConnectToGoogle:*

GET request to the server at route /getURL_toConnectToGoogle (**localhost:8080/getURL_toConnectToGoogle**)

EXPECTED RESPONSE : an url to authenticate to Google.

You can open it manually to see what it's like but you probably want to **automatically** open it right after sending the request.
**WARNING: This URL only works if a request to the route `/connectThroughGoogle` is pending. See documentation about `/connectThroughGoogle` for more infos**

### *connectThroughGoogle:*

** WARNING Before sending this request, you SHOULD send a request to `/getURL_toConnectToGoogle`. See documentation about `/getURL_toConnectToGoogle`**

GET request to the server at route /connectThroughGoogle (**localhost:8080/connectThroughGoogle**)

EXPECTED RESPONSE : json filled with credentials (an access token) to access to Google APIs.


