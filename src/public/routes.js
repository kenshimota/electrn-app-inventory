'use strict';

let routes = [
    {path: "/", component: () => import("./components/home.js") },
];

// exportando rutas designadas
export default routes;