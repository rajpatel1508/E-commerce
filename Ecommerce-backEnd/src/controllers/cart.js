const Cart = require('../models/cart');

exports.addItemToCart = (req, res) => {
    //check if cart already exist for user
    Cart.findOne({ user: req.user._id }).exec((error, cart) => {
        if (error) return res.status(400).json({ error });
        console.log(cart);
        if (cart) {
            //if it already exist just update the cart
            const product = req.body.cartItems.products;
            const item = cart.cartItems.find(c => c.products == product);
            if (item) {
                Cart.findOneAndUpdate({ "user": req.user._id, "cartItems.products": product }, {
                    "$set": {
                        "cartItems": {
                            ...req.body.cartItems,
                            quantity: item.quantity + req.body.cartItems.quantity
                        }
                    }
                })
                    .exec((error, _cart) => {
                        if (error) return res.status(400).json({ error });
                        if (_cart) {
                            return res.status(201).json({ cart: _cart });
                        }
                    })
            } else {
                Cart.findOneAndUpdate({ user: req.user._id }, {
                    "$push": {
                        "cartItems": req.body.cartItems
                    }
                })
                    .exec((error, _cart) => {
                        if (error) return res.status(400).json({ error });
                        if (_cart) {
                            return res.status(201).json({ cart: _cart });
                        }
                    })
            }

        } else {
            //else make new cart
            const cart = new Cart({
                user: req.user._id,
                cartItems: [req.body.cartItems]
            });

            cart.save((error, cart) => {
                if (error) return res.status(400).json({ error });
                if (cart) {
                    return res.status(201).json({ cart });
                }
            })
        }
    })


}