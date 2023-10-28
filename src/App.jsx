import { useState } from 'react'
import data from './data'
import Card from './components/Card'
import FiltersItems from './components/FiltersItems'
import Title from './components/Title'
const App = () => {
  const [menus, setMenus] = useState(data)
  const category = data.map((data) => data.category)
  let categorySet = new Set(category)
  let categoryList = ['all', ...categorySet]

  const filterCategory = (category) => {
    const result =
      category === 'all'
        ? data
        : data.filter((menu) => menu.category === category)
    setMenus(result)
  }

  return (
    <main className="menu">
      <section className="menu">
        <Title title="Our Menus" />
      </section>
      <div className="btn-container">
        {categoryList.map((category) => {
          return (
            <FiltersItems
              key={category}
              category={category}
              filterCategory={filterCategory}
            />
          )
        })}
      </div>

      <div className="title-underline"></div>
      <div className="section-center menu">
        {menus.map((menu) => {
          return <Card key={menu.id} {...menu} />
        })}
      </div>
    </main>
  )
}
export default App
