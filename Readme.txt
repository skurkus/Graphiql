https://github.com/graphql/graphiql

Avoir Node.js installé
npm install -g pkg
Installer en lancant: yarn-1.22.4.msi

Dans le répertoire grphiql-master avec la ligne de commande lancer : "C:\Program Files (x86)\Yarn\bin\yarn" install
puis lancer : npm run build
cd example
npm install
npm start

ouvrir http://localhost:2561/



Pour créer l'exe en se basant sur package.json, avec cmd, dans le folder principal : 
pkg . --targets node10-win-x64 --out-path ".\publish\graphiql-app"

Pour lancer : (npm start) ou
graphiql-app.exe http://localhost:2561/ http://localhost:2560/api/graphql
