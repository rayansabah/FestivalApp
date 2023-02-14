import data from '../jsonTemp/scene.json'

export default function Scene() {
    return <div>
        {data.Scenes.map((scene, index) => (
            <div key={index}>
                <h1>{scene.name}</h1>
                <ul>
                    {scene.performances.map((performance, index) => (
                        <li key={index}>
                            <p>{performance.artist}</p>
                            <p>{performance.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
}