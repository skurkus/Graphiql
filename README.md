Example GraphiQL Install
========================
Site: https://github.com/graphql/graphiql
Attention ce projet � �t� modifi� et ne correspond plus � la source du site de base !


A) Installation pr�requis :
 1. Avoir Node.js install�
 2. `npm install -g pkg`
 3. Installer en lancant: yarn-1.22.4.msi

B) Installation projet :
 Avec la ligne de commande :
 Dans le r�pertoire "grphiql-master\node_modules\graphiql\" lancer : 
 1. `"C:\Program Files (x86)\Yarn\bin\yarn" install`
 2. `npm run build`

 Dans le r�pertoire "grphiql-master" lancer :
 3. `"C:\Program Files (x86)\Yarn\bin\yarn" install`
 4. `npm start`
 5. Open your browser to http://localhost:2561/

C) Cr�ation du package de deploiement :
   Pour cr�er l'exe en se basant sur package.json, avec cmd, dans le folder principal : 
   `pkg . --targets node10-win-x64 --out-path ".\publish\graphiql-app"`

Pour lancer le serveur: `npm start` ou directement via le package g�n�r� :
`.\publish\graphiql-app\graphiql-app.exe http://localhost:2561/ http://localhost:2560/api/graphql`
