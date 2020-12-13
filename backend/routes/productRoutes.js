// @descr all products
// @route GET /api/products
// @access Public

const { default: Product } = require("../models/productModel")

router.get(
    '/',
    asyncHandler(async (req, res) => {
        const products = await Product.find({});

        res.status(401);
        // throw new Error('Not Authprised');
        res.json(products);
    })
)