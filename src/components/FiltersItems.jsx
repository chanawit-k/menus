import React from 'react'

const FiltersItems = ({ category, filterCategory }) => {
  return (
    <button
      type="button"
      className="btn"
      onClick={() => {
        filterCategory(category)
      }}
    >
      {category}
    </button>
  )
}

export default FiltersItems
