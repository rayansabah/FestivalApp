import food from '../jsonTemp/food.json'

export default function Food(){
    return   <div>
    {food.FoodMenu.map((Food, index) => (
        <div key={index}>
            <h1>{Food.name}</h1>
            <ul>
                {Food.menu.map((menu, index) => (
                    <li key={index}>
                        <p>{menu}</p>
                        
                    </li>
                ))}
            </ul>
        </div>
    ))}
</div>

}