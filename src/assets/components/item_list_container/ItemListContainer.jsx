import TestCounter from "../count/TestCounter"

export default function ItemListContainer({greeting}) {

  const styleGreeting = {
    fontSize: '20px',
    color: '#FFAB11',
    fontWeight: 'bold',
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
  }

    return (
      <>
      <section>
        <p style={styleGreeting}>{greeting}</p>
        </section>
      </>
    )
  }
