import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const categories = ['Rice Noodles', 'Drinks']

function Home() {
  const [active, setActive] = useState(categories[0])
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 flex-col p-4">
      <div className="flex gap-4">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setActive(category)}
            className={
              'flex-1 rounded-lg py-6 text-center font-semibold ' +
              (category === active
                ? 'bg-primary text-primary-foreground'
                : 'bg-primary-foreground text-primary border border-primary')
            }
          >
            {category}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="mt-4 self-end rounded-lg border border-primary px-4 py-2 font-semibold text-primary"
        onClick={() => fetch(`${import.meta.env.VITE_API_BASE_URL}/print`)}
      >
        Print
      </button>

      {active === 'Rice Noodles' && (
        <div className="mt-4 grid w-3/4 grid-cols-1 gap-4 mx-auto">
            <button
              className="flex aspect-square items-center justify-center rounded-lg border border-primary font-semibold text-primary"
              onClick={() => navigate("/dried")}
            >
              Dried Rice Noodles
            </button>
            <button
              className="flex aspect-square items-center justify-center rounded-lg border border-primary font-semibold text-primary"
              onClick={() => navigate("/soup")}
            >
              Soup Rice Noodles
            </button>
        </div>
      )}
    </div>
  )
}

export default Home
