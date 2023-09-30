import React from "react";
import { useForm, Controller } from "react-hook-form";

export const NewProductForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Aquí puedes enviar los datos del formulario a tu API o hacer lo que necesites con ellos
    console.log(data);
  };
  return (
    <form
      id="NewProductForm"
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-600 text-black p-6 rounded-lg shadow-lg flex flex-col gap-4"
    >
      <h4 className="font-bold text-2xl text-gray-100 border-b-2 mx-auto w-4/5 text-center pb-2">
        Agrega un nuevo producto
      </h4>
      <div className="flex flex-col">
        <label htmlFor="name">Nombre del Producto</label>
        <Controller
          name="name"
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
          control={control}
          render={({ field }) => <textarea id="description" className="h-20" {...field} />}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="categoryID">ID de Categoría</label>
        <Controller
          name="categoryID"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input type="number" id="categoryID" {...field} />
          )}
        />
        {errors.categoryID && errors.categoryID.type === "required" && (
          <p className="form-alert">El ID de categoría es requerido</p>
        )}
      </div>

      <button
        className="py-1 bg-gray-500 rounded-e-full mx-4 text-lg text-gray-100 font-bold border border-white"
        type="submit"
      >
        Agregar Producto
      </button>
    </form>
  );
};
