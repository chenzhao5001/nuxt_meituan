const router = require("koa-router")()

const Shop = require("../dbs/models/shop")
router.prefix('/shop')

router.post('/add', async (ctx, next) => {

  const person = new Shop({
    url: ctx.request.body.url,
    name: ctx.request.body.name,
    area: ctx.request.body.area,
    price_now: ctx.request.body.price_now,
    price_old: ctx.request.body.price_old,
    sale_count: ctx.request.body.sale_count,
  });
  let code;
  try {
    await person.save();
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = code;
})

router.get('/test', async (ctx, next) => {
  ctx.body = "hello cz"
})

module.exports = router;
