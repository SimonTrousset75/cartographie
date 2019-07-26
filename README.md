This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Exemple to add a new use case (Real estate map exemple in FRANCE)

Process de réalisation de cartes :

Tout d'abord, il faut récupérer les différentes data qui seront utiles à la création de la carte. (même pas une demi journée)

Ensuite, récupérer soit sous forme de geojson ou de shapefile une carte de la France sous forme de polygone des IRIS, pour le traitement de données, les geojson est préférable car c'est vraiment plus simple à prendre en main, si la source est un shapefile le fichier peut toujours être converti via QGIS ou autre en geojson. (même pas une demi journée)

Une fois tout cela fait, il faut pouvoir faire corréler les data obtenues avec la carte. Pour ça le mieux c'est le python, en fonction de comment est fait le fichier geojson ça prendrais plus ou moins de temps à faire la corrélation. L’algorithme peu s'avérer plus ou moins complexe à créer et plus ou moins loin à lancer. Donc pour ce cas-ci pour chaque IRIS il faut lui attribuer le coût des transactions effectuées ainsi que le prix au m2. (un jour ou deux, trois au grand max )

Maintenant que le geojson est prêt, il faut le rendre "mapbox complient", pour ça il faut juste passer le fichier dans Tippecanoe https://github.com/mapbox/tippecanoe .Cet outils va créer un fichier .mbtiles ce qui évitera les problèmes de zoom sur Mapbox. (2 min)

Il suffit maintenant juste d'uploader le fichier sur mapbox en tant que nouveau tileset et le tour est joué. Dans le js il suffira d'ajouter une nouvelle layer, en fonction des critères de coloration choisis le rendu se fera tout seul
    
Enfin pour l'ajout de layer / filtre tels que les écoles, hôpitaux, gare ou autre il suffit juste de trouver la data et d'en faire le rendu.

Pour le temps global, je pense que 4 jours grand maximum c'est suffisant. Comme je disais tout dépend des infos à traiter et de la qualité du geojson.

Pour l'ajout dans Mapbox, il faut se rendre dans la section "Studio" puis "tilsets" et cliquer sur le bouton "add tilset"

Pour la coloration, tout se situ dans la partie 'paint' de la fonction 'addLayer':

avec le ['get', 'closestDistShop'] je recupère la propriété 'ClosestDistShop' située dans mon geojson. Puis en fonction de sa valeur j'attribue une couleur.

Pour les boutons je les ai moi-même fait mais il existe des boutons préfait accessible à cette url : https://www.npmjs.com/. Pour l'affichage ou non des layers, il faut récupérer leur id (donnée sur mapbox lorsqu'on clique dessus) et dans changer son statu. (il existe une focnction 'setLayoutProperty').

Après pour le cas de l'optimisation de data lourde je sais pas encore trop comment faire pour gérer ce cas.


Pour les différents outils utilisés:

React -> Framework javascript compatible avec mapbox https://fr.reactjs.org/
Python
tippecanoe -> sert à la conversion de fichier en fichier 'Mapbox complient' https://github.com/mapbox/tippecanoe
Mapbox -> https://docs.mapbox.com/mapbox-gl-js/api/

