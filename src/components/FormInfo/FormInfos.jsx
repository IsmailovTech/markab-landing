import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import cloud from "../../Assets/images/idi.png";
import idimg from "../../Assets/images/IDimg.png";
import { FormattedMessage } from "react-intl";

const initialValues = {
  card: "",
  expireDate: "",
  name: "",
  lastname: "",
  fathername: "",
  number: "",
  passport: null,
  selfie: null,
  agreeToTerms: false, // added new field for checkbox
};

function FormInfos({ chosedColor, chosedModel }) {
  const onSubmit = (values, { resetForm }) => {
    const username = "ibrokhim";
    const password = "Bu8$G9VLY7^5";
    const fullname = `${values.name} ${values.lastname} ${values.fathername}`;
    const url = "https://malika.itlink.uz/api/v1/order/create";

    // Convert passport and selfie File objects to string URLs
    const passportUrl = values.passport
      ? URL.createObjectURL(values.passport)
      : null;
    const selfieUrl = values.selfie ? URL.createObjectURL(values.selfie) : null;

    const data = {
      name: fullname,
      number: values.number,
      passport: passportUrl,
      selfie: selfieUrl,
      card: values.card,
      time: values.expireDate,
      model: chosedModel,
      phone: chosedModel,
      color: chosedColor,
      type: "3",
    };

    console.log(data);

    const auth = btoa(`${username}:${password}`);
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in request");
        }
      })
      .then((json) => {
        console.log(json);
        toast.success("Ma'lumotlaringiz muvaffaqiyatli jo'natildi!");
        resetForm({ values: "" });
        document.getElementById("file").value = "";
        document.getElementById("selfie").value = "";
      })
      .catch((error) => {
        console.error(error);
        toast.error("Ma'lumotlarni yuborishda xatolik yuz berdi.");
      });
  };

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
    card: Yup.mixed().required("Unvalid"),
    number: Yup.number("Faqat raqam bo'lishi kerak").required("Unvalid"),
    expireDate: Yup.mixed().required("Unvalid"),
    agreeToTerms: Yup.bool().oneOf([true], "Tasdiqlang"), // added validation for checkbox
    passport: Yup.mixed()
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
    selfie: Yup.mixed()
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

  const handlecardChange = (event) => {
    const { value } = event.target;
    const cardNumber = value.replace(/[^\d]/g, "").substr(0, 16);
    const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1-");
    formik.setFieldValue("card", formattedCardNumber);
  };

  const handleExpireDateChange = (event) => {
    const { value } = event.target;
    const expireDate = value.replace(/[^\d]/g, "").substr(0, 4);
    const formattedExpireDate = expireDate.replace(/(\d{2})/, "$1/");
    formik.setFieldValue("expireDate", formattedExpireDate);
  };

  return (
    <div className="w-full mt-4">
      <div className="w-full container mx-auto  px-2 sm:px-8 md:px-10 lg:px-24 xl:px-36">
        <h2 className=" text-[24px] sm:text-[30px] md:text-[40px] font-semibold text-green-main max-w-[727px]">
          <FormattedMessage id="please" />
        </h2>

        <form
          onSubmit={(e) => {
            formik.handleSubmit(e);
            formik.values = initialValues;
          }}
          className="max-w-[1000px] mt-4 sm:mt-20 "
        >
          {/* ============================== Full name input field */}

          <p className="text-gray-400 text-sm md:text-lg">
            <FormattedMessage id="personal_info" />
          </p>
          <div className="flex flex-col  sm:flex-row  w-full items-center justify-between gap-4 sm:gap-6 mt-2">
            <div className="relative w-full">
              <input
                type="name"
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
                <FormattedMessage id="name" />
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
                <FormattedMessage id="surname" />
              </label>

              {formik.touched.lastname && formik.errors.lastname ? (
                <span className="text-red-600 text-xs absolute  left-2">
                  {formik.errors.lastname}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col  sm:flex-row w-full items-center justify-between gap-4 sm:gap-6 mt-4 sm:mt-5">
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
                name="number"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
                  formik.touched.number && formik.errors.number
                    ? " border-red-600 focus:border-red-600 "
                    : "border-green-main focus:border-blue-600"
                } text-black focus:outline-none focus:ring-0  peer`}
                placeholder=" "
                {...formik.getFieldProps("number")}
              />
              <label
                htmlFor="floating_outlined"
                className={`absolute text-sm ${
                  formik.touched.number && formik.errors.number
                    ? "text-red-600 peer-focus:dark:text-red-600"
                    : "text-green-main peer-focus:text-blue-600"
                } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
              >
                <FormattedMessage id="number" />
              </label>

              {formik.touched.number && formik.errors.number ? (
                <span className="text-red-600 text-xs absolute  left-2">
                  {formik.errors.number}
                </span>
              ) : null}
            </div>
          </div>

          {/* ============================== Credit Card input field */}

          <h4 className="text-gray-400 text-sm md:text-lg mt-5 sm:mt-8 md:mt-12">
            <FormattedMessage id="card_info" />
          </h4>
          <div className="flex flex-col  sm:flex-row max-w-[575px] justify-between gap-2 sm:gap-4">
            <div className="relative w-full mt-2">
              <input
                type="text"
                id="floating_outlined"
                name="card"
                className={`block px-2.5 py-3.5 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
                  formik.touched.card && formik.errors.card
                    ? " border-red-600 focus:border-red-600 placeholder-red-600 "
                    : "border-green-main placeholder-green-main focus:placeholder-blue-600 focus:border-blue-600"
                } text-black focus:outline-none focus:ring-0  peer`}
                placeholder="0000-0000-0000-0000"
                maxLength="19"
                minLength="19"
                onChange={handlecardChange}
                value={formik.values.card}
              />

              {formik.touched.card && formik.errors.card ? (
                <span className="text-red-600 text-xs absolute  left-2">
                  {formik.errors.card}
                </span>
              ) : null}
            </div>

            <div className="relative max-w-[70px] mt-2">
              <input
                type="text"
                id="floating_outlined"
                name="expireDate"
                className={`block  px-2.5 py-3.5 w-full text-sm border-2 bg-transparent rounded-lg border-1  appearance-none text-black  ${
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
          <h4 className="text-gray-400 text-sm md:text-lg mt-5 sm:mt-8 md:mt-12">
            <FormattedMessage id="ID" />
          </h4>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-2 sm:mt-4">
            <div>
              <p className="text-green-main font-semibold text-lg md:text-xl">
                <FormattedMessage id="ID_front" />
              </p>
              <p className="text-green-main md:mt-7">PDF, JPG</p>

              <div className="relative mt-2 ">
                <input
                  type="file"
                  id="file"
                  name="passport"
                  accept=" image/jpeg, image/png, application/pdf"
                  className="block text-sm "
                  onChange={(event) => {
                    formik.setFieldValue(
                      "passport",
                      event.currentTarget.files[0]
                    );
                  }}
                />

                {formik.touched.passport && formik.errors.passport && (
                  <div className="text-red-600 text-sm pt-0.5">
                    {formik.errors.passport}
                  </div>
                )}

                {formik.values.passport ? (
                  <div className="flex flex-col gap-2 mt-8">
                    {formik.values.passport.type.includes("image") && (
                      <img
                        src={URL.createObjectURL(formik.values.passport)}
                        alt="file-preview"
                        className="h-32 w-44 sm:h-48 sm:w-80 object-contain"
                      />
                    )}
                    {formik.values.passport.type.includes("pdf") && (
                      <iframe
                        src={URL.createObjectURL(formik.values.passport)}
                        title="file-preview"
                        className="h-32 w-44 sm:h-48 sm:w-80 object-contain"
                      ></iframe>
                    )}
                  </div>
                ) : (
                  <img
                    className="h-28 w-44 sm:h-48 sm:w-80 border-2 rounded-xl mt-4 sm:mt-8"
                    src={cloud}
                    alt="cloud_svg "
                  />
                )}
              </div>
            </div>

            <div>
              <p className="text-green-main font-semibold text-sm md:text-lg mt-7 sm:mt-0">
                <FormattedMessage id="ID_back" />
              </p>
              <p className="text-green-main md:mt-7">PDF, JPG</p>

              <div className="relative mt-2 ">
                <input
                  type="file"
                  id="selfie"
                  name="selfie"
                  accept=" image/jpeg, image/png, application/pdf"
                  lang="ru"
                  className="block text-sm "
                  onChange={(event) => {
                    formik.setFieldValue(
                      "selfie",
                      event.currentTarget.files[0]
                    );
                  }}
                />

                {formik.touched.selfie && formik.errors.selfie && (
                  <div className="text-red-600 text-sm pt-0.5">
                    {formik.errors.selfie}
                  </div>
                )}

                {formik.values.selfie ? (
                  <div className="flex flex-col gap-2 mt-8">
                    {formik.values.selfie.type.includes("image") && (
                      <img
                        src={URL.createObjectURL(formik.values.selfie)}
                        alt="file-preview"
                        className="h-28 w-44 sm:h-48 sm:w-80  object-contain"
                      />
                    )}
                    {formik.values.selfie.type.includes("pdf") && (
                      <iframe
                        src={URL.createObjectURL(formik.values.selfie)}
                        title="file-preview"
                        className="h-28 w-44 sm:h-48 sm:w-80  object-contain"
                      ></iframe>
                    )}
                  </div>
                ) : (
                  <img
                    src={idimg}
                    alt="cloud_svg"
                    className="h-28 sm:h-48   mt-8 "
                  />
                )}
              </div>
            </div>
          </div>

          {/* ========================= AGREETOTERMS */}

          <div className="flex items-center gap-2 sm:gap-4 justify-center ml-8 sm:ml-28 font-semibold mt-8 sm:mt-14 md:mt-16">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                className=" h-5  w-5 sm:h-9 sm:w-9 rounded  text-primary focus:outline-none border border-primary focus:border-primary transition duration-300 ease-in-out"
                checked={formik.values.agreeToTerms}
                onChange={formik.handleChange}
              />

              {formik.touched.file && formik.errors.file && (
                <div className="absolute text-red-600 text-sm pt-10 sm:pt-14">
                  {formik.errors.agreeToTerms}
                </div>
              )}
            </div>
            <a
              href="https://docs.google.com/document/d/1S7CNykliwhXK-qlHmtHsQOe8Xtxzcqam/edit?usp=sharing&ouid=109094856157650499566&rtpof=true&sd=true"
              target="_blank"
              className=" text-sm sm:text-2xl md:text-3xl text-green-main underline"
            >
              <FormattedMessage id="confirm" />
            </a>
          </div>

          <button
            type="submit"
            className=" border-2 border-green-main bg-transparent text-green-main px-2 py-3 sm:py-4 font-semibold text-sm sm:text-xl rounded-lg mt-8 hover:text-white hover:bg-green-main transition-all ease-in-out duration-300 mb-8 sm:mb-0"
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
