Re,

Je viens de push une possible auth à Google sur Mobile.

Cela a changé un petit truc (concernant l’authentification Google) :

** Client website **

Il faut redigirer (en modifiant le fichier `hosts`) “my-area-server2.com vers 127.0.0.1

**Mobile**

Et special pour l’emulateur mobile il faut modif le fichier `hosts` de l’émulateur.
Je n’ai pas trouvé comment modif via Android Studio du coup j’ai fais à la main :
Pour cela il faut lancer l’emulateur en ligne de commande : j’ai push un script pour windows (linux est à-peu-près la même chose) pour lancer l’émulateur
Puis ensuite :
`adb root`
`adb remount`
`adb pull /etc/hosts`
`vim hosts`
`adb push hosts /etc/hosts`

Une fois le fichier modifié push, vous pouvez build & run via Android Studio l’app mais il dabord avoir l’emulateur de lancé (via le script).
 

** Autres ** 

Si vous avez aucune idée de quoi je parle, pas de souci c’est juste quelque chose qui concerne l’authenfication à Google
