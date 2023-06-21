import { Router, send } from "./deps.ts";

const router = new Router();

router
  .get("/", async (ctx) => {
    console.log('called /')
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/view`,
      index: "index.html",
    });
  })

export { router };
