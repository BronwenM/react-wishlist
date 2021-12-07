import "./styles.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AddItemPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const addItem = async (formVals) => {
    const formattedData = {
      fields: {
        price: {
          stringValue: formVals.price,
        },
        isOwned: {
          booleanValue: false,
        },
        name: {
          stringValue: formVals.name,
        },
        id: {
          stringValue: formVals.id,
        },
        link: {
          stringValue: formVals.link,
        },
        shortDesc: {
          stringValue: formVals.shortDesc,
        },
        image: {
          stringValue: formVals.image,
        },
      },
    };

    try {
      const res = await fetch(
        "https://firestore.googleapis.com/v1/projects/react-wishlist-7f868/databases/(default)/documents/wishlist",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(formattedData),
        }
      );
      navigate("/");
    } catch (error) {
      console.log(
        "There was an error adding your item to the database" + error
      );
    }
  };

  return (
    <div className="add-item-page">
      <form className="new-item-form" onSubmit={handleSubmit(addItem)}>
        <h2>Add a new item to your wishlist</h2>
        <br />

        <label htmlFor="name">Name</label>
        <input {...register("name")} name="name" required type="text" />

        <label htmlFor="shortDesc">Short Description</label>
        <input {...register("shortDesc")} name="shortDesc" required />

        <label htmlFor="image">Image</label>
        <input {...register("image")} name="image" required />

        <label htmlFor="link">Link To Item</label>
        <input {...register("link")} name="link" required />

        <label htmlFor="id">Unique ID</label>
        <input {...register("id")} name="id" requried />

        <label htmlFor="price">Price</label>
        <input {...register("price")} name="price" requried />

        <input type="submit" value="Add Item to Wishlist" />
        <br />
      </form>
    </div>
  );
};
