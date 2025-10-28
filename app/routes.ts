import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    route(
        "/.well-known/appspecific/com.chrome.devtools.json",
        "routes/debug-null.tsx",
    ),
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("/about", "routes/about.tsx")
    ]),
] satisfies RouteConfig;
