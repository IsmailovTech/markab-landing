import React, { useState } from 'react'

// Fake JSON data
const phoneModelsData = [
  {
    id: 1,
    name: 'Samsung',
    categories: ['Samsung S8', 'Samsung S20', 'Samsung S21'],
  },
  {
    id: 2,
    name: 'iPhone',
    categories: ['iPhone 11', 'iPhone 12', 'iPhone SE'],
  },
]

const phoneData = [
  {
    id: 1,
    name: 'Samsung S8',
    description: 'This is the first great phone',
    colors: ['red', 'white', 'blue', 'black'],
  },
  {
    id: 2,
    name: 'Samsung S20',
    description: 'This is the second great phone',
    colors: ['yellow', 'green', 'pink', 'gray'],
  },
  {
    id: 3,
    name: 'Samsung S21',
    description: 'This is the third great phone',
    colors: ['orange', 'purple', 'brown', 'teal'],
  },
  {
    id: 4,
    name: 'iPhone 11',
    description: 'This is the fourth great phone',
    colors: ['red', 'green', 'blue', 'black'],
  },
  {
    id: 5,
    name: 'iPhone 12',
    description: 'This is the fifth great phone',
    colors: ['yellow', 'purple', 'brown', 'teal'],
  },
  {
    id: 6,
    name: 'iPhone SE',
    description: 'This is the sixth great phone',
    colors: ['orange', 'white', 'pink', 'gray'],
  },
]

function TestFilter() {
  const [selectedModel, setSelectedModel] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)

  const models = phoneModelsData
  const categories = selectedModel ? selectedModel.categories : []

  const handleModelClick = (model) => {
    setSelectedModel(model)
    setSelectedCategory(null)
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  const handleColorSelect = (color) => {
    setSelectedColor(color)
  }

  const filteredPhones = phoneData.filter((phone) => {
    return (
      phone.name === selectedCategory &&
      (selectedColor === null || phone.colors.includes(selectedColor))
    )
  })

  return (
    <div className="App">
      <div className="models">
        {models.map((model) => (
          <button key={model.name} onClick={() => handleModelClick(model)}>
            {model.name}
          </button>
        ))}
      </div>
      <div className="categories">
        <h2>{selectedModel ? selectedModel.name : 'Select a Model'}</h2>
        <select
          value={selectedCategory ? selectedCategory : ''}
          onChange={(e) => handleCategorySelect(e.target.value)}
          disabled={!selectedModel}
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="phones">
        {selectedCategory && (
          <div className="phone-details">
            <h2>{selectedCategory}</h2>
            {filteredPhones.length === 0 ? (
              <p>No phones available with the selected filters.</p>
            ) : (
              <div className="phone-list">
                {filteredPhones.map((phone) => (
                  <div key={phone.id}>
                    <h3>{phone.name}</h3>
                    <ul>
                      <li>
                        <strong>Available colors:</strong>
                        <ul>
                          {phone.colors.map((color) => (
                            <li
                              key={color}
                              className={
                                selectedColor === color ? 'selected' : ''
                              }
                              onClick={() => handleColorSelect(color)}
                            >
                              {color}
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {selectedColor && (
        <div className="alert">
          You have selected the color {selectedColor}.
        </div>
      )}
    </div>
  )
}

export default TestFilter
