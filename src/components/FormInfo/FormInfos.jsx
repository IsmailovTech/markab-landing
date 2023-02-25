import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import cloud from "../../Assets/images/idi.png";
import idimg from "../../Assets/images/IDimg.png";
import { FormattedMessage } from "react-intl";

const initialValues = {
  creditCard: "",
  expireDate: "",
  firstname: "",
  lastname: "",
  fathername: "",
  phoneNumber: "",
  file: null,
  file2: null,
  agreeToTerms: false, // added new field for checkbox
};

function FormInfos() {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);

    toast.success("Ma'lumotlaringiz muvaffaqiyatli jo'natildi!");

    resetForm({ values: "" });
    document.getElementById("file").value = "";
    document.getElementById("file2").value = "";
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required(
      "Foydalanuvchi nomi talab qilinadi, kamida 3 ta belgi"
    ),
    lastname: Yup.string().required(
      "Foydalanuvchi familyasi talab qilinadi, kamida 3 ta belgi"
    ),
    fathername: Yup.string().required(
      "Foydalanuvchi sharifi talab qilinadi, kamida 3 ta belgi"
    ),
    creditCard: Yup.mixed().required("Unvalid"),
    phoneNumber: Yup.number("Faqat raqam bo'lishi kerak").required("Unvalid"),
    expireDate: Yup.mixed().required("Unvalid"),
    agreeToTerms: Yup.bool().oneOf([true], "Tasdiqlang"), // added validation for checkbox
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
    file2: Yup.mixed()
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

  const handleCreditCardChange = (event) => {
    const { value } = event.target;
    const cardNumber = value.replace(/[^\d]/g, "").substr(0, 16);
    const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1-");
    formik.setFieldValue("creditCard", formattedCardNumber);
  };

  const handleExpireDateChange = (event) => {
    const { value } = event.target;
    const expireDate = value.replace(/[^\d]/g, "").substr(0, 4);
    const formattedExpireDate = expireDate.replace(/(\d{2})/, "$1/");
    formik.setFieldValue("expireDate", formattedExpireDate);
  };

  return (
    <div className="w-full mt-4">
      <div className="w-full container mx-auto px-36">
        <h2 className="text-[40px] font-semibold text-green-main max-w-[727px]">
          <FormattedMessage id="please" />
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
            <FormattedMessage id="personal_info" />
          </p>
          <div className="flex w-full items-center justify-between gap-6 mt-2">
            <div className="relative w-full">
              <input
                type="firstname"
                id="floating_outlined"
                name="firstname"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
                  formik.touched.firstname && formik.errors.firstname
                    ? " border-red-600 focus:border-red-600 "
                    : "border-green-main focus:border-blue-600"
                } text-black focus:outline-none focus:ring-0  peer`}
                placeholder=" "
                {...formik.getFieldProps("firstname")}
              />
              <label
                htmlFor="floating_outlined"
                className={`absolute text-sm ${
                  formik.touched.firstname && formik.errors.firstname
                    ? "text-red-600 peer-focus:dark:text-red-600"
                    : "text-green-main peer-focus:text-blue-600"
                } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                <FormattedMessage id="name" />
              </label>

              {formik.touched.firstname && formik.errors.firstname ? (
                <span className="text-red-600 text-xs absolute  left-2">
                  {formik.errors.firstname}
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
                <FormattedMessage id="surname" />
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
                <FormattedMessage id="familyname" />
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
                <FormattedMessage id="number" />
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
            <FormattedMessage id="card_info" />
          </h4>
          <div className="flex max-w-[575px] justify-between gap-4">
            <div className="relative w-full mt-2">
              <input
                type="text"
                id="floating_outlined"
                name="creditCard"
                className={`block px-2.5 py-3.5 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
                  formik.touched.creditCard && formik.errors.creditCard
                    ? " border-red-600 focus:border-red-600 placeholder-red-600 "
                    : "border-green-main placeholder-green-main focus:placeholder-blue-600 focus:border-blue-600"
                } text-black focus:outline-none focus:ring-0  peer`}
                placeholder="0000-0000-0000-0000"
                maxLength="19"
                minLength="19"
                onChange={handleCreditCardChange}
                value={formik.values.creditCard}
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
                className={`block px-2.5 px-2.5 py-3.5 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
                  formik.touched.expireDate && formik.errors.expireDate
                    ? " border-red-600 focus:border-red-600 placeholder-red-600 "
                    : "border-green-main placeholder-green-main focus:placeholder-blue-600 focus:border-blue-600"
                } text-black focus:outline-none focus:ring-0  peer`}
                placeholder="12/25"
                maxLength="5"
                minLength="5"
                onChange={handleExpireDateChange}
                value={formik.values.expireDate}
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
            <FormattedMessage id="ID" />
          </h4>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-green-main font-semibold text-xl">
                <FormattedMessage id="ID_front" />
              </p>
              <p className="text-green-main mt-7">PDF, JPG</p>

              <div className="relative mt-2 ">
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=" image/jpeg, image/png, application/pdf"
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
                  <div className="flex flex-col gap-2 mt-8">
                    {formik.values.file.type.includes("image") && (
                      <img
                        src={URL.createObjectURL(formik.values.file)}
                        alt="file-preview"
                        className="h-48 w-80 object-contain"
                      />
                    )}
                    {formik.values.file.type.includes("pdf") && (
                      <iframe
                        src={URL.createObjectURL(formik.values.file)}
                        title="file-preview"
                        className="h-48 w-80 object-contain"
                      ></iframe>
                    )}
                  </div>
                ) : (
                  <img
                    className="h-48 w-80 border-2 rounded-xl mt-8"
                    src={cloud}
                    alt="cloud_svg "
                  />
                )}
              </div>
            </div>

            <div>
              <p className="text-green-main font-semibold text-xl">
                <FormattedMessage id="ID_back" />
              </p>
              <p className="text-green-main mt-7">PDF, JPG</p>

              <div className="relative mt-2 ">
                <input
                  type="file"
                  id="file2"
                  name="file2"
                  accept=" image/jpeg, image/png, application/pdf"
                  lang="ru"
                  className="block text-sm "
                  onChange={(event) => {
                    formik.setFieldValue("file2", event.currentTarget.files[0]);
                  }}
                />

                {formik.touched.file2 && formik.errors.file2 && (
                  <div className="text-red-600 text-sm pt-0.5">
                    {formik.errors.file2}
                  </div>
                )}

                {formik.values.file2 ? (
                  <div className="flex flex-col gap-2 mt-8">
                    {formik.values.file2.type.includes("image") && (
                      <img
                        src={URL.createObjectURL(formik.values.file2)}
                        alt="file-preview"
                        className="h-48 w-80 object-contain"
                      />
                    )}
                    {formik.values.file2.type.includes("pdf") && (
                      <iframe
                        src={URL.createObjectURL(formik.values.file2)}
                        title="file-preview"
                        className="h-48 w-80 object-contain"
                      ></iframe>
                    )}
                  </div>
                ) : (
                  <img src={idimg} alt="cloud_svg" className="h-48 mt-8 " />
                )}
              </div>
            </div>
          </div>

          {/* ========================= AGREETOTERMS */}

          <div className="flex items-center gap-4 justify-center ml-28 font-semibold mt-16">
            <div>
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                className="h-9 w-9 rounded  text-primary focus:outline-none border border-primary focus:border-primary transition duration-300 ease-in-out"
                checked={formik.values.agreeToTerms}
                onChange={formik.handleChange}
              />

              {formik.touched.file && formik.errors.file && (
                <div className="absolute text-red-600 text-sm pt-0.5">
                  {formik.errors.agreeToTerms}
                </div>
              )}
            </div>
            <a
              href="https://docs.google.com/document/d/1S7CNykliwhXK-qlHmtHsQOe8Xtxzcqam/edit?usp=sharing&ouid=109094856157650499566&rtpof=true&sd=true"
              target="_blank"
              className="text-3xl text-green-main underline"
            >
              <FormattedMessage id="confirm" />
            </a>
          </div>

          <button
            type="submit"
            className=" border-2 border-green-main bg-transparent text-green-main px-2 py-4 font-semibold text-xl rounded-lg mt-8 hover:text-white hover:bg-green-main transition-all ease-in-out duration-300"
          >
            <FormattedMessage id="send" />
          </button>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
}

export default FormInfos;
