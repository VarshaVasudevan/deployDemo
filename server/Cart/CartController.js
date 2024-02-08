const Cart = require('./cartModel');

// Add item to cart
const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  const price = parseFloat(req.body.price);
  console.log(price)

  try {
    // Find cart by userid
    let cart = await Cart.findOne({ userId });
    console.log(cart)
    if (cart===null) {
      // If cart doesn't exist, create a new one
      cart = new Cart({ userId, items: [] });
    }

    // Check if the item is already in the cart
    const existingItem = cart.items.find((item) => item.productId.toString() === productId);

    if (existingItem) {
      // If the item exists, update the quantity
      existingItem.quantity += quantity;
    } else {
      // If the item doesn't exist, add it to the cart
      cart.items.push({ productId, quantity,price });
    }

    // Save the cart
    await cart.save();

    res.status(201).json({ success: true, data: cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

const fetchCart = async (req, res) => {
  const { userId } = req.body; 
  console.log(userId)// Assuming userId is sent in the request body

        try {
          const cart=await Cart.find({userId:userId}).populate('items.productId');
          console.log(cart)
          res.json({
            status:200,
            data:cart,
            msg:"cart fetched"
            })
        } catch (error) {
          console.error("Error fetching object:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      }

module.exports = { addToCart,fetchCart};