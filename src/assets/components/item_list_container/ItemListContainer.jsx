import './ItemListContainer.css'

export default function ItemListContainer({children, greeting}) {

    return (
      <>
      <section>
        <p className="greeting">{greeting}</p>
        {children}
        </section>
      </>
    )
  }
