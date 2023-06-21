import { Application } from "./deps.ts";
import { router } from "./routes.ts"

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8080
app.listen({ port:PORT});

console.log(`app running and listening on port ${PORT}`)
