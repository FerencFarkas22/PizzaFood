import Szalamis from '../assets/pepperoni.jpg'
import Margareta from '../assets/margherita.jpg'
import Hawaaii from '../assets/pineapple.jpg'
import Vegan from '../assets/vegan.jpg'
import fourCheese from '../assets/fourCheese.jpg'
import Magyaros from '../assets/hungarianPizza.jpg'
import Siracusa from '../assets/Siracusa.jpg'
import Messina from '../assets/Mesina.jpg'




export const PizzaUnit = "cm";
export const PizzaList = [
  {
    name: "Szalámis Pizza",
    image: Szalamis,
    description: "par.szósz, sajt, szalámi",
    sizes: [
      {size: 26, price:2690},
      {size: 32, price:3290},
      {size: 45, price:3590}

    ]

  },
  {
    name: "Margaréta Pizza",
    image: Margareta,
    description: "paradicsomos alap, mozzarella, oregánó",
    sizes: [
      {size: 26, price:2390},
      {size: 32, price:2590},
      {size: 38, price:2790},
      {size: 45, price:3690},

    ]
  },
  {
    name: "Hawaaii Pizza",
    image: Hawaaii,
    description: "paradicsomos alap, mozzarella, oregánó, ananász",
    sizes: [
      {size: 26, price:2590},
      {size: 32, price:2790},
      {size: 45, price:2990}
    ]
  },
  {
    name: "Vegán Pizza",
    image: Vegan,
    description: "par.szósz, sonka, ananász, mozz.sajt",
    sizes: [
      {size: 26, price:2590},
      {size: 32, price:2790},
      {size: 45, price:2990}
    ]
  },
  {
    name: "Négyféle sajtos Pizza",
    image: fourCheese,
    description: "par. szósz, mozzarella, roquefort, parmezán, füstölt sajt",
    sizes: [
      {size: 26, price:2590},
      {size: 32, price:2790},
      {size: 45, price:2990}
    ]
  },
  {
    name: "Magyaros Pizza",
    image: Magyaros,
    description: "par.szósz, sonka, szalámi, bacon, hagyma, sajt",
    sizes: [
      {size: 26, price:3790},
      {size: 32, price:3990},
      {size: 45, price:4590}
    ]
  },
  {
    name: "Siracusa Pizza",
    image: Siracusa,
    description: "par.szósz, sonka, paradicsom, kukorica, gomba, oregano, sajt",
    sizes: [
      {size: 26, price:3790},
      {size: 32, price:3990},
      {size: 45, price:4590}
    ]
  },
  {
    name: "Messina Pizza",
    image: Messina,
    description: "par. szósz, kukorica, csirkemellfilé, oregano, sajt",
    sizes: [
      {size: 26, price:3790},
      {size: 32, price:3990},
      {size: 45, price:4590}
    ]
  },
]