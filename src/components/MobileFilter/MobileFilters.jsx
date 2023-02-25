import React, { useState } from "react";
import filter from "../../Assets/images/Filtericon.svg";
import samsung from "../../Assets/images/samsung.png";
import correct from "../../Assets/images/correct.svg";

// Fake JSON data
const phoneModelsData = [
  {
    id: 1,
    name: "Samsung",
    categories: ["Samsung S8", "Samsung S20", "Samsung S21"],
  },
  {
    id: 2,
    name: "iPhone",
    categories: ["iPhone 11", "iPhone 12", "iPhone SE"],
  },
];

const phoneData = [
  {
    id: 1,
    name: "Samsung S8",
    description:
      "Смартфон Samsung Galaxy S22 Ultra оснащен дисплеем Dynamic AMOLED 2X с диагональю 6,8 дюйма и разрешением 1440×3088, прикрытым стеклом с загнутыми краями Corning Gorilla Victus+. Плотность точек — около 500 ppi. Рамка вокруг экрана максимально узкая. Для экрана поддерживается HDR10+ и частота обновления 120 Гц.",
    colors: ["red", "white", "blue", "black"],
    three: " 3,702,930 so'm dan",
    four: "2,852,939 so'm dan",
    six: " 2,019,780 so'm dan",
    eight: "1,603,200 so'm dan",
    twelve: "1,178,205 so'm dan",
    startPay: "4,328,100 so'm dan",
  },
  {
    id: 2,
    name: "Samsung S20",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, reprehenderit hic est deserunt labore odit minus, atque iusto facilis quae dolore eius beatae delectus? Recusandae rem consectetur distinctio in voluptas!",
    colors: ["yellow", "green", "pink", "gray"],
    info: "Samsung S 233 oylik to'lov: 3,702,930 so'm dan 4 oylik to'lov: 2,852,939 so'm dan 6 oylik to'lov: 2,019,780 so'm dan 8 oylik to'lov 1,603,200 so'm dan 12 oylik to'lov: 1,178,205 so'm dan Boshlang'ich to'lov: 4,328,100 so'm dan Agar bundan ko'proq to'lov qilsangiz oylik to'lovlarga ta'sir qiladi!",
    three: " 3,702,930 so'm dan",
    four: "2,852,939 so'm dan",
    six: " 2,019,780 so'm dan",
    eight: "1,603,200 so'm dan",
    twelve: "1,178,205 so'm dan",
    startPay: "4,328,100 so'm dan",
  },
  {
    id: 3,
    name: "Samsung S21",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minus ex repellendus maiores distinctio perferendis perspiciatis pariatur tenetur blanditiis? Modi nulla totam dignissimos aspernatur necessitatibus earum animi voluptatem, officia reprehenderit?",
    colors: ["orange", "purple", "brown", "teal"],
    info: "Samsung S 233 oylik to'lov: 3,702,930 so'm dan 4 oylik to'lov: 2,852,939 so'm dan 6 oylik to'lov: 2,019,780 so'm dan 8 oylik to'lov 1,603,200 so'm dan 12 oylik to'lov: 1,178,205 so'm dan Boshlang'ich to'lov: 4,328,100 so'm dan Agar bundan ko'proq to'lov qilsangiz oylik to'lovlarga ta'sir qiladi!",
    three: " 3,702,930 so'm dan",
    four: "2,852,939 so'm dan",
    six: " 2,019,780 so'm dan",
    eight: "1,603,200 so'm dan",
    twelve: "1,178,205 so'm dan",
    startPay: "4,328,100 so'm dan",
  },
  {
    id: 4,
    name: "iPhone 11",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, consequatur voluptatibus magni odit maiores repudiandae quibusdam veniam nemo voluptate quam porro obcaecati nostrum aliquam distinctio consectetur autem quia dignissimos. Repudiandae!",
    colors: ["red", "green", "blue", "black"],
    info: "Samsung S 233 oylik to'lov: 3,702,930 so'm dan 4 oylik to'lov: 2,852,939 so'm dan 6 oylik to'lov: 2,019,780 so'm dan 8 oylik to'lov 1,603,200 so'm dan 12 oylik to'lov: 1,178,205 so'm dan Boshlang'ich to'lov: 4,328,100 so'm dan Agar bundan ko'proq to'lov qilsangiz oylik to'lovlarga ta'sir qiladi!",
    three: " 3,702,930 so'm dan",
    four: "2,852,939 so'm dan",
    six: " 2,019,780 so'm dan",
    eight: "1,603,200 so'm dan",
    twelve: "1,178,205 so'm dan",
    startPay: "4,328,100 so'm dan",
  },
  {
    id: 5,
    name: "iPhone 12",
    description:
      "Смартфон Samsung Galaxy S22 Ultra оснащен дисплеем Dynamic AMOLED 2X с диагональю 6,8 дюйма и разрешением 1440×3088, прикрытым стеклом с загнутыми краями Corning Gorilla Victus+. Плотность точек — около 500 ppi. Рамка вокруг экрана максимально узкая. Для экрана поддерживается HDR10+ и частота обновления 120 Гц.",
    colors: ["yellow", "purple", "brown", "teal"],
    info: "Samsung S 233 oylik to'lov: 3,702,930 so'm dan 4 oylik to'lov: 2,852,939 so'm dan 6 oylik to'lov: 2,019,780 so'm dan 8 oylik to'lov 1,603,200 so'm dan 12 oylik to'lov: 1,178,205 so'm dan Boshlang'ich to'lov: 4,328,100 so'm dan Agar bundan ko'proq to'lov qilsangiz oylik to'lovlarga ta'sir qiladi!",
    three: " 3,702,930 so'm dan",
    four: "2,852,939 so'm dan",
    six: " 2,019,780 so'm dan",
    eight: "1,603,200 so'm dan",
    twelve: "1,178,205 so'm dan",
    startPay: "4,328,100 so'm dan",
  },
  {
    id: 6,
    name: "iPhone SE",
    description:
      "Смартфон Samsung Galaxy S22 Ultra оснащен дисплеем Dynamic AMOLED 2X с диагональю 6,8 дюйма и разрешением 1440×3088, прикрытым стеклом с загнутыми краями Corning Gorilla Victus+. Плотность точек — около 500 ppi. Рамка вокруг экрана максимально узкая. Для экрана поддерживается HDR10+ и частота обновления 120 Гц.",
    colors: ["orange", "white", "pink", "gray"],
    info: "Samsung S 233 oylik to'lov: 3,702,930 so'm dan 4 oylik to'lov: 2,852,939 so'm dan 6 oylik to'lov: 2,019,780 so'm dan 8 oylik to'lov 1,603,200 so'm dan 12 oylik to'lov: 1,178,205 so'm dan Boshlang'ich to'lov: 4,328,100 so'm dan Agar bundan ko'proq to'lov qilsangiz oylik to'lovlarga ta'sir qiladi!",
    three: " 3,702,930 so'm dan",
    four: "2,852,939 so'm dan",
    six: " 2,019,780 so'm dan",
    eight: "1,603,200 so'm dan",
    twelve: "1,178,205 so'm dan",
    startPay: "4,328,100 so'm dan",
  },
];

const colors = [
  { name: "yellow" },
  { name: "blue" },
  { name: "green" },
  { name: "gray" },
];

function MobileFilters() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const models = phoneModelsData;
  const categories = selectedModel ? selectedModel.categories : [];

  const handleModelClick = (model) => {
    setSelectedModel(model);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const filteredPhones = phoneData.filter((phone) => {
    return (
      phone.name === selectedCategory &&
      (selectedColor === null || phone.colors.includes(selectedColor))
    );
  });

  return (
    <div>
      <div className="bg-gray-line w-full py-10"></div>
      <div className="w-full container mx-auto px-36">
        <div className=" flex flex-col max-w-[727px]">
          <h1 className="text-[40px] font-semibold text-green-main">
            Markab orqali mobil qurilmalarni bo’lib to’lashga arzon narxlarda
            xarid qiling!
          </h1>
          <p className="text-2xl mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type{" "}
          </p>
        </div>

        <div className="border-y border-black mt-16 flex ">
          <div className=" border-r border-black w-[400px]  pr-4 min-h-[700px]">
            <button className="text-white bg-gradient-to-br mt-2 from-green-main to-emerald-400 hover:bg-gradient-to-bl   text-[40px]  w-[361px] text-center flex items-center justify-start px-6 gap-14 rounded-lg ">
              <img src={filter} alt="filter icon" />
              Modellar
            </button>
            <div className="flex flex-col max-w-[280px] mt-4 gap-2">
              {models.map((model) => (
                <button
                  key={model.name}
                  onClick={() => handleModelClick(model)}
                  className={`border-2  ${
                    selectedModel === model
                      ? "border-emerald-700 flex items-center pl-5 gap-2 text-emerald-700 bg-emerald-50"
                      : "border-green-main pl-10 text-green-main"
                  }  hover:border-emerald-700 py-2 rounded-lg text-xl hover:bg-emerald-50 hover:text-emerald-700 transition-all text-left pr-2`}
                >
                  {selectedModel === model ? (
                    <img src={correct} alt="icon" />
                  ) : (
                    ""
                  )}
                  {model.name}
                </button>
              ))}
            </div>
            {filteredPhones.map((phone) => (
              <>
                <ul key={phone.id} className="flex flex-col  mt-8">
                  <li className="text-black font-semibold text-2xl">
                    {phone.name}
                  </li>
                  <li className="text-black  text-xl">
                    <span className="font-semibold  text-xl">
                      {" "}
                      3oylik to'lov:
                    </span>
                    {phone.three}
                  </li>
                  <li className="text-black  text-xl">
                    <span className="font-semibold  text-xl">
                      {" "}
                      4oylik to'lov:
                    </span>
                    {phone.four}
                  </li>
                  <li className="text-black  text-xl">
                    <span className="font-semibold  text-xl">
                      {" "}
                      6oylik to'lov:
                    </span>
                    {phone.six}
                  </li>
                  <li className="text-black  text-xl">
                    <span className="font-semibold  text-xl">
                      {" "}
                      8oylik to'lov:
                    </span>
                    {phone.eight}
                  </li>
                  <li className="text-black  text-xl">
                    <span className="font-semibold  text-xl">
                      {" "}
                      12oylik to'lov:
                    </span>
                    {phone.twelve}
                  </li>
                  <li className="text-black  text-xl">
                    <span className="font-semibold  text-xl">
                      {" "}
                      Boshlang'ich to'lov:
                    </span>
                    {phone.startPay}
                  </li>
                </ul>
                <p className="text-xl mt-3">
                  Agar bundan ko'proq to'lov qilsangiz oylik to'lovlarga ta'sir
                  qiladi!
                </p>
              </>
            ))}
          </div>

          <div className=" w-full flex flex-col items-center">
            <h2 className="text-4xl font-semibold mt-2 text-center text-green-main">
              Modelning tanlang
            </h2>
            {/* ==================== Selecting options */}
            <div className="categories w-[285px] mt-8 ">
              <h2 className=" h-[47px] bg-green-main text-white flex items-center justify-center rounded-md text-xl ">
                {selectedModel ? selectedModel.name : "Select a Model"}
              </h2>
              <select
                value={selectedCategory ? selectedCategory : ""}
                onChange={(e) => handleCategorySelect(e.target.value)}
                disabled={!selectedModel}
                className=" w-full h-[47px] bg-transparent  text-green-main border-2 border-green-main outline-emerald-700 mt-3 flex items-center justify-center rounded-md text-xl"
              >
                <option value="">Select a Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* ================   Full Description */}

            {selectedCategory && (
              <div className="phone-details">
                {filteredPhones.length === 0 ? (
                  <p>No phones available with the selected filters.</p>
                ) : (
                  <div className="phone-list">
                    {filteredPhones.map((phone) => (
                      <div key={phone.id} className="flex gap-10 mt-8">
                        <div className=" relative  flex flex-col items-end pb-20">
                          <img
                            src={samsung}
                            alt="photo"
                            className="flex w-[428px] h-[567px]"
                          />

                          <div className=" absolute bottom-4 left-24 flex items-center ">
                            <div className="flex items-center gap-2">
                              <div className="bg-green-500 w-[30px] h-[30px] rounded-full"></div>
                              <div className="bg-red-500 w-[30px] h-[30px] rounded-full"></div>
                              <div className="bg-gray-500 w-[30px] h-[30px] rounded-full"></div>
                              <div className="bg-slate-300 w-[30px] h-[30px] rounded-full"></div>
                            </div>

                            <select
                              value={selectedColor ? selectedColor : ""}
                              onChange={(e) =>
                                handleColorSelect(e.target.value)
                              }
                              disabled={!selectedModel}
                              className=" w-[350px] h-[47px] bg-green-main border-green-main text-white ml-8 flex items-center  justify-center rounded-md text-xl"
                            >
                              <option value="">Select a Color</option>
                              {phone.colors.map((colors) => (
                                <option key={colors} value={colors}>
                                  {colors}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-4xl font-semibold text-green-main">
                            {phone.name}
                          </h3>
                          <p className="text-xl text-green-main mt-8 max-w-[300px] ">
                            {phone.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFilters;
