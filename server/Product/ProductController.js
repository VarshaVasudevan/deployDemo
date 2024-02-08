const Product=require("./productmodel")

const fetchProduct = async (req, res,next) => {
    try {
      if (req.params.id) {
        // // If ID is provided, fetch specific item details
        // const item = await TextDesc.findById(req.params.id, 'title description');
        // if (!item) {
        //   return res.status(404).json({ success: false, message: 'Item not found' });
        // }
        // res.json({ success: true, data: [item] }); // Wrap the item in an array to maintain consistency
      } else {
        // If no ID is provided, fetch all items
        const items = await Product.find({}, 'name rating price warranty color memory image');
        res.json({ success: true, data: items });
      }
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ success: false, message: 'Error fetching items' });
    }
  };

  module.exports={fetchProduct}