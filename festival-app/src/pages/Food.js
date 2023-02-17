import food from '../jsonTemp/food.json'
import '../css/food.css'

export default function Food() {
    return <div>

        <div>
            {food.FoodInfo.map(food => (
                <div className='food-square'>
                    <h1 className='food-Header'>{food.name}</h1>
                    <p>
                        {food.info.map(item => (
                            <p>{item}</p>
                        ))}
                    </p>
                </div>
            ))}
        </div>
        {food.FoodMenu.map((Food, index) => (
            <div key={index}>
                <div className='food-square'>
                    <h1>{Food.name}</h1>
                    <ul>
                        {Food.menu.map((menu, index) => (
                            <li key={index}>
                                <p>{menu}</p>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </div>

}