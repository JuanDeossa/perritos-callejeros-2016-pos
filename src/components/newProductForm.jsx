import { RefreshProducts, addNewProduct, getAllCategories, getAllProducts } from "@/firebase/services";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "./loader2";
import { useDispatch } from "react-redux";
import { setProducts } from "@/redux/productsSlice";

export const NewProductForm = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch=useDispatch()
  const successNotify = () =>
    toast.success("Producto creado con éxito!", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const errorNotify = () =>
    toast.error("No fue posible crear el producto", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const updateCategoriesFAPI = async () => {
    const cats = await getAllCategories();
    setCategories(cats);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Aquí puedes enviar los datos del formulario a tu API o hacer lo que necesites con ellos
    // console.log(data);
    // data.price = parseFloat(data.price).toLocaleString('es-ES');
    setLoading(true);
    const productCreated = await addNewProduct({
      name: data.name,
      price: data.price,
      description: data.description,
      category_id: data.categoryID,
    });
    if (productCreated) {
      successNotify();
      dispatch(setProducts(await getAllProducts()))
      sessionStorage.removeItem("products")
      reset()
    }else{
      errorNotify()
    }
    setLoading(false);
  };

  useEffect(() => {
    updateCategoriesFAPI();
  }, []);

  return (
    <form
      id="NewProductForm"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-600 text-black p-6 rounded-lg shadow-lg flex flex-col gap-4 max-w-sm h-fit"
    >
      <h4 className="font-bold text-2xl text-gray-100 border-b-2 mx-auto w-4/5 text-center pb-2">
        Agrega un nuevo producto
      </h4>
      <div className="flex flex-col">
        <label htmlFor="name">Nombre del Producto</label>
        <Controller
          name="name"
          defaultValue={""}
          control={control}
          rules={{ required: true, minLength: 5, maxLength: 20 }}
          render={({ field }) => <input type="text" id="name" {...field} />}
        />
        {errors.name && errors.name.type === "required" && (
          <p className="form-alert">El nombre del producto es requerido</p>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <p className="form-alert">
            El nombre debe tener al menos 5 caracteres
          </p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p className="form-alert">
            El nombre debe tener como máximo 20 caracteres
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="price">Precio</label>
        <Controller
          name="price"
          defaultValue={""}
          control={control}
          rules={{ required: true, min: 100, max: 500000 }}
          render={({ field }) => <input type="number" id="price" {...field} />}
        />
        {errors.price && errors.price.type === "required" && (
          <p className="form-alert">El precio es requerido</p>
        )}
        {errors.price && errors.price.type === "min" && (
          <p className="form-alert">El precio debe ser al menos 100</p>
        )}
        {errors.price && errors.price.type === "max" && (
          <p className="form-alert">El precio debe ser como máximo 500,000</p>
        )}
      </div>

      <div className="flex flex-col min-h-fit">
        <label htmlFor="description">Descripción del Producto</label>
        <Controller
          name="description"
          defaultValue={""}
          control={control}
          render={({ field }) => (
            <textarea id="description" {...field} />
          )}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="categoryID">Categoría</label>
        <Controller
          name="categoryID"
          defaultValue={""}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <select id="categoryID" placeholder="selecciona..." {...field}>
              <option value={""} style={{ display: "none" }} />
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          )}
        />
        {errors.categoryID && errors.categoryID.type === "required" && (
          <p className="form-alert">especifica una categoría</p>
        )}
      </div>
      {loading ? (
        <Loader2 />
      ) : (
        <button
          className="py-1 bg-gray-500 rounded-full mx-4 text-lg text-gray-100 font-bold border border-white hover:opacity-80"
          type="submit"
        >
          Agregar
        </button>
      )}
      <ToastContainer />
    </form>
  );
};
