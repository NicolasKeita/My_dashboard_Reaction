### *Send mail:*

POST request to the server at route /send-email (**localhost:8080/send-email**)

Additional data can be attached to the request to configure the mail :

- messageToSend
- subject_of_the_mail
- receiver_mail

Example :

REQUEST POST to localhost:8080:

KEY : messageToSend
VALUE : "La méteo de Paris est 5°C

KEY : subject_of_the_mail
VALUE : "[AREA] Widget Méteo"

KEY : receiver_mail
VALUE : "nicolaskeita2@gmail.com"

NOTE : sur Postman il faut remplir le Body de la requete avec `x-www-form-urlencoded` plutot que `form-data`.
Si vous souhaitez vraiment utiliser`form-data`, vous pouvez améliorer le fichier send-mail.js dans serveur_HTTP/routes/
lien à suivre : https://stackoverflow.com/questions/37630419/how-to-handle-formdata-from-express-4
