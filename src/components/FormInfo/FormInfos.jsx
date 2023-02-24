import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  lastname: "",
  fathername: "",
  creditCard: "",
  expireDate: "",
  phoneNumber: "",
  file: null, // new field for the file data
  //   number: "",
};

function FormInfos() {
  const onSubmit = (values, { resetForm }) => {
    console.log(1111, values);
    values.name = "";
    resetForm({ values: "" });
  };

  const phoneRegExp = /^[0-9]{9}$/;

  const validationSchema = Yup.object({
    name: Yup.string().required(
      "Foydalanuvchi nomi talab qilinadi, kamida 3 ta belgi"
    ),
    lastname: Yup.string().required(
      "Foydalanuvchi familyasi talab qilinadi, kamida 3 ta belgi"
    ),
    fathername: Yup.string().required(
      "Foydalanuvchi sharifi talab qilinadi, kamida 3 ta belgi"
    ),
    creditCard: Yup.number("Faqat raqam bo'lishi kerak").required("Unvalid"),
    phoneNumber: Yup.number("Faqat raqam bo'lishi kerak").required("Unvalid"),
    expireDate: Yup.number("Faqat raqam bo'lishi kerak").required("Unvalid"),

    file: Yup.mixed()
      .required("Faylni yuklash kerak")
      .test(
        "fileSize",
        "Fayl juda katta",
        (value) => value && value.size <= 5000000
      ) // max 5MB
      .test(
        "fileType",
        "Fayl turi noto'g'ri",
        (value) =>
          value &&
          ["image/jpeg", "image/png", "application/pdf"].includes(value.type)
      ),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="w-full mt-4">
      <div className="w-full container mx-auto px-36">
        <h2 className="text-[40px] font-semibold text-green-main max-w-[727px]">
          Iltimos Xaridni amalga oshirish uchun shaxsiy ma’lumotlaringizni
          kiriting, Kiritilgan ma’lumotlar uchinchi shaxslarga berilmasligi
          kafotlatlanadi!
        </h2>

        <form
          onSubmit={(e) => {
            formik.handleSubmit(e);
            formik.values = initialValues;
          }}
          className="max-w-[1000px] mt-20 "
        >
          {/* ============================== Full name input field */}

          <p className="text-gray-400 text-lg">
            SHAXSIY MA’LUMOTLARNGIZNI SHU YERGA KIRITING
          </p>
          <div className="flex w-full items-center justify-between gap-6 mt-2">
            <div className="relative w-full">
              <input
                type="text"
                id="floating_outlined"
                name="name"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
                  formik.touched.name && formik.errors.name
                    ? " border-red-600 focus:border-red-600 "
                    : "border-green-main focus:border-blue-600"
                } text-black focus:outline-none focus:ring-0  peer`}
                placeholder=" "
                {...formik.getFieldProps("name")}
              />
              <label
                htmlFor="floating_outlined"
                className={`absolute text-sm ${
                  formik.touched.name && formik.errors.name
                    ? "text-red-600 peer-focus:dark:text-red-600"
                    : "text-green-main peer-focus:text-blue-600"
                } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                Ismingiz
              </label>

              {formik.touched.name && formik.errors.name ? (
                <span className="text-red-600 text-xs absolute  left-2">
                  {formik.errors.name}
                </span>
              ) : null}
            </div>

            <div className="relative w-full ">
              <input
                type="text"
                id="floating_outlined"
                name="lastname"
                className={` block px-2.5 pb-2.5 pt-4 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
                  formik.touched.lastname && formik.errors.lastname
                    ? " border-red-600 focus:border-red-600 "
                    : "border-green-main focus:border-blue-600"
                } text-black focus:outline-none focus:ring-0  peer`}
                placeholder=" "
                {...formik.getFieldProps("lastname")}
              />
              <label
                htmlFor="floating_outlined"
                className={`absolute text-sm ${
                  formik.touched.lastname && formik.errors.lastname
                    ? "text-red-600 peer-focus:dark:text-red-600"
                    : "text-green-main peer-focus:text-blue-600"
                } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                Familya
              </label>

              {formik.touched.lastname && formik.errors.lastname ? (
                <span className="text-red-600 text-xs absolute  left-2">
                  {formik.errors.lastname}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-6 mt-5">
            <div className="relative w-full">
              <input
                type="text"
                id="floating_outlined"
                name="fathername"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
                  formik.touched.fathername && formik.errors.fathername
                    ? " border-red-600 focus:border-red-600 "
                    : "border-green-main focus:border-blue-600"
                } text-black focus:outline-none focus:ring-0  peer`}
                placeholder=" "
                {...formik.getFieldProps("fathername")}
              />
              <label
                htmlFor="floating_outlined"
                className={`absolute text-sm ${
                  formik.touched.fathername && formik.errors.fathername
                    ? "text-red-600 peer-focus:dark:text-red-600"
                    : "text-green-main peer-focus:text-blue-600"
                } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                Sharif
              </label>

              {formik.touched.fathername && formik.errors.fathername ? (
                <span className="text-red-600 text-xs absolute  left-2">
                  {formik.errors.fathername}
                </span>
              ) : null}
            </div>

            <div className="relative w-full ">
              <input
                type="text"
                id="floating_outlined"
                name="phoneNumber"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? " border-red-600 focus:border-red-600 "
                    : "border-green-main focus:border-blue-600"
                } text-black focus:outline-none focus:ring-0  peer`}
                placeholder=" "
                {...formik.getFieldProps("phoneNumber")}
              />
              <label
                htmlFor="floating_outlined"
                className={`absolute text-sm ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "text-red-600 peer-focus:dark:text-red-600"
                    : "text-green-main peer-focus:text-blue-600"
                } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                Telefon raqam
              </label>

              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <span className="text-red-600 text-xs absolute  left-2">
                  {formik.errors.phoneNumber}
                </span>
              ) : null}
            </div>
          </div>

          {/* ============================== Credit Card input field */}

          <h4 className="text-gray-400 text-lg mt-12">
            KARTA MA’LUMOTLARINGIZNI SHU YERGA KIRITING
          </h4>
          <div className="flex max-w-[575px] justify-between gap-4">
            <div className="relative w-full mt-2">
              <input
                type="text"
                id="floating_outlined"
                name="creditCard"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
                  formik.touched.creditCard && formik.errors.creditCard
                    ? " border-red-600 focus:border-red-600 placeholder-red-600 "
                    : "border-green-main placeholder-green-main focus:placeholder-blue-600 focus:border-blue-600"
                } text-black focus:outline-none focus:ring-0  peer`}
                placeholder="0000-0000-0000-0000"
                maxLength="16"
                minLength="16"
                {...formik.getFieldProps("creditCard")}
              />

              {formik.touched.creditCard && formik.errors.creditCard ? (
                <span className="text-red-600 text-xs absolute  left-2">
                  {formik.errors.creditCard}
                </span>
              ) : null}
            </div>

            <div className="relative max-w-[70px] mt-2">
              <input
                type="text"
                id="floating_outlined"
                name="expireDate"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
                  formik.touched.expireDate && formik.errors.expireDate
                    ? " border-red-600 focus:border-red-600 placeholder-red-600 "
                    : "border-green-main placeholder-green-main focus:placeholder-blue-600 focus:border-blue-600"
                } text-black focus:outline-none focus:ring-0  peer`}
                placeholder="12/25"
                maxLength="4"
                minLength="4"
                {...formik.getFieldProps("expireDate")}
              />

              {formik.touched.expireDate && formik.errors.expireDate ? (
                <span className="text-red-600 text-xs absolute  left-2">
                  {formik.errors.expireDate}
                </span>
              ) : null}
            </div>
          </div>

          {/* ============================== Password input field */}
          <h4 className="text-gray-400 text-lg mt-12">
            PASSPORT MA’LUMOTLARINGIZNI KIRITING
          </h4>
          <p className="text-green-main font-semibold text-xl">
            Загрузите обе стороны паспорта
          </p>
          <p className="text-green-main mt-7">PDF, JPG</p>

          <div className="relative mt-2 ">
            <input
              type="file"
              id="file"
              name="file"
              accept=" image/jpeg, image/png, application/pdf"
              lang="ru"
              className="block text-sm "
              onChange={(event) => {
                formik.setFieldValue("file", event.currentTarget.files[0]);
              }}
            />

            {formik.touched.file && formik.errors.file && (
              <div className="text-red-600 text-sm pt-0.5">
                {formik.errors.file}
              </div>
            )}

            {formik.values.file ? (
              <div className="flex flex-col gap-2">
                {formik.values.file.type.includes("image") && (
                  <img
                    src={URL.createObjectURL(formik.values.file)}
                    alt="file-preview"
                    className="h-20 w-20 object-contain"
                  />
                )}
                {formik.values.file.type.includes("pdf") && (
                  <iframe
                    src={URL.createObjectURL(formik.values.file)}
                    title="file-preview"
                    className="h-20 w-20 object-contain"
                  ></iframe>
                )}
              </div>
            ) : (
              "Upload a photo"
            )}
          </div>

          <button type="submit" className=" mt-8 border">
            asd
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormInfos;
