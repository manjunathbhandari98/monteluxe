"use client";

import { useState } from "react";
import { addProduct } from "@/services/productService";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    gender: "",
    price: 0,
    image: null as File | null,
    images: [] as (File | null)[],
    description: "",
    caseSize: "",
    caseMaterial: "",
    crystalType: "",
    waterResistance: "",
    movement: "",
    strapMaterial: "",
    features: [""],
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]:
        name === "price"
          ? parseFloat(value)
          : value,
    }));
  };

  const handleDynamicChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: "features"
  ) => {
    const updated = [
      ...(product[field] as string[]),
    ];
    updated[index] = e.target.value;
    setProduct({ ...product, [field]: updated });
  };

  const addDynamicField = (
    field: "features" | "images"
  ) => {
    if (field === "features") {
      setProduct({
        ...product,
        features: [...product.features, ""],
      });
    } else {
      setProduct({
        ...product,
        images: [...product.images, null],
      });
    }
  };

  const removeDynamicField = (
    index: number,
    field: "features" | "images"
  ) => {
    const updated = [
      ...(product[field] as never[]),
    ];
    updated.splice(index, 1);
    setProduct({ ...product, [field]: updated });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Prepare payload to be sent as JSON (excluding image files)
      const productPayload = {
        name: product.name,
        gender: product.gender,
        price: product.price,
        description: product.description,
        caseSize: product.caseSize,
        caseMaterial: product.caseMaterial,
        crystalType: product.crystalType,
        waterResistance: product.waterResistance,
        movement: product.movement,
        strapMaterial: product.strapMaterial,
        features: product.features,
        categoryId: "ML-COL-B7044FB0",
        currency: "INR",
      };

      // Append JSON blob as "product"
      const productBlob = new Blob(
        [JSON.stringify(productPayload)],
        {
          type: "application/json",
        }
      );
      formData.append("product", productBlob);

      // Append main image
      if (product.image) {
        formData.append("image", product.image);
      }

      // Append additional images
      product.images.forEach((img) => {
        if (img) {
          formData.append("images", img);
        }
      });

      // OPTIONAL: Log formData to debug what's being sent
      // for (let [key, value] of formData.entries()) {
      //   console.log(`${key}:`, value);
      // }

      await addProduct(formData);

      setMessage("Product added successfully!");
      // Optionally reset the form here
    } catch (error) {
      console.error(
        "Error adding product",
        error
      );
      setMessage("Failed to add product.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 shadow-md p-6 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">
        Add New Product
      </h1>
      {message && (
        <p className="mb-4 text-green-600">
          {message}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Text Fields */}
        {[
          {
            name: "name",
            type: "text",
            label: "Name",
          },
          {
            name: "gender",
            type: "text",
            label: "Gender",
          },
          {
            name: "price",
            type: "number",
            label: "Price",
          },
          {
            name: "description",
            type: "textarea",
            label: "Description",
          },
          {
            name: "caseSize",
            type: "text",
            label: "Case Size",
          },
          {
            name: "caseMaterial",
            type: "text",
            label: "Case Material",
          },
          {
            name: "crystalType",
            type: "text",
            label: "Crystal Type",
          },
          {
            name: "waterResistance",
            type: "text",
            label: "Water Resistance",
          },
          {
            name: "movement",
            type: "text",
            label: "Movement",
          },
          {
            name: "strapMaterial",
            type: "text",
            label: "Strap Material",
          },
        ].map(({ name, type, label }) => (
          <div key={name}>
            <label className="block text-sm font-medium">
              {label}
            </label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={(product as never)[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <input
                type={type}
                name={name}
                value={(product as never)[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            )}
          </div>
        ))}

        {/* Main Image */}
        <div>
          <label className="block text-sm font-medium">
            Main Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setProduct({
                ...product,
                image:
                  e.target.files?.[0] || null,
              })
            }
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Features
          </label>
          {product.features.map(
            (feature, index) => (
              <div
                key={index}
                className="flex gap-2 mb-2"
              >
                <input
                  type="text"
                  value={feature}
                  onChange={(e) =>
                    handleDynamicChange(
                      e,
                      index,
                      "features"
                    )
                  }
                  className="flex-1 border border-gray-300 p-2 rounded-lg"
                  placeholder={`Feature ${
                    index + 1
                  }`}
                />
                <button
                  type="button"
                  onClick={() =>
                    removeDynamicField(
                      index,
                      "features"
                    )
                  }
                  className="text-red-600 font-bold"
                >
                  ×
                </button>
              </div>
            )
          )}
          <button
            type="button"
            onClick={() =>
              addDynamicField("features")
            }
            className="text-blue-600 text-sm"
          >
            + Add Feature
          </button>
        </div>

        {/* Additional Images */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Additional Images
          </label>
          {product.images.map((img, index) => (
            <div
              key={index}
              className="flex gap-2 mb-2"
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const files = e.target.files;
                  if (files?.[0]) {
                    const updated = [
                      ...product.images,
                    ];
                    updated[index] = files[0];
                    setProduct({
                      ...product,
                      images: updated,
                    });
                  }
                }}
                className="flex-1 border border-gray-300 p-2 rounded-lg"
              />
              <button
                type="button"
                onClick={() =>
                  removeDynamicField(
                    index,
                    "images"
                  )
                }
                className="text-red-600 font-bold"
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              addDynamicField("images")
            }
            className="text-blue-600 text-sm"
          >
            + Add Image
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
