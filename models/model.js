const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      // array of objects  each object represents a size-price combination.
      type: [{
        // size of the product
        size:{
          type: String,
          enum: {
            values: ["S", "M", "L", "Half", "Full", "Single", "Double", "Triple"],
            message: "{VALUE} is not a valid size"
          }
        },
        // amount of the product
        amount:{
          type: Number,
          required: true,
          min: 0
        }
      }],
      required: [true, "Price is required"],
       validate: {
        validator: function(arr) {
          if (!arr || arr.length === 0) return false;
          const sizes = arr.map(p => p.size);
          return sizes.length === new Set(sizes).size;
        },
        message: "Price must contain at least one unique size and amount combination."
      }
    },
    featured: {
      type: Boolean,
      default: false
    },
    special_menu: {
      type: Boolean,
      default: false
    },
    ratings: {
      type: Number,
      default: 4.8
    },
    reviews: {
      type: Number,
      default: 15
    },
    category: {
      type: String,
      enum: {
        values: ["appetizer", "main course", "dessert", "beverages", "snacks", "street food"],
        message: "{VALUE} is not a valid category"
      }
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true
    },
    img: {
      type: String
    },
    images: {
      type: [String],
      required: [true, "Images are required"],
      validate: {
        validator: function (arr) {
          return Array.isArray(arr) && arr.length >= 4; // ✅ at least 3 images
        },
        message: "At least 3 images must be provided"
      }
    },
    createdAt: {
      type: Date,
      default: Date.now
    },  
    availability: {
      type: Boolean,
      default: true
    },
  },
  {
    timestamps: true,   // adds createdAt & updatedAt automatically
    versionKey: false
  }
);

module.exports = mongoose.model("Product", productSchema);