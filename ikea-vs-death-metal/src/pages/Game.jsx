import data from "../data/data"

export default function Game() {

    const names = data.map(item => item.name)
    // console.log(names)

    const guess = names[Math.floor(Math.random() * names.length)]
    // console.log(guess)

    return (
        <div>
          <h1>{guess}</h1>
          <button>
            <img src="/images/71cQiE5yR2L._AC_SL1239_.jpg" alt="" width ="200"/>
          </button>
          <button>
            <img src="/images/b7f4b4b8-06f9-4ee9-bebf-15ed222e19e9.jpg" alt="" width ="200"/>
          </button>

        </div>
      );
}

