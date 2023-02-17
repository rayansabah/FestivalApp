import data from '../jsonTemp/scene.json'
import Img from '../comp/ImgPopup'
import '../css/scene.css'



export default function Scene() {
    const scen1 = data.Scenes.find((scene) => scene.name === "Scen 1");
    const scen2 = data.Scenes.find((scene) => scene.name === "Scen 2");
    const scen3 = data.Scenes.find((scene) => scene.name === "Scen 3");
    return <div >

        <div className="square">
            <div className='scene-flex'>
            <h2>{scen1.name}</h2>
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bFnopqoRjdsoRQpSzPixsS2lLVMSsMbxo044VUPQ&s"  /> 
            </div>
            <ul>
                {scen1.performances.map((performance) => (
                    <li key={performance.artist}>
                        {performance.artist} - {performance.time}
                    </li>
                ))}
            </ul>
        </div>

        <div className="square">
        <div className='scene-flex'>
            <h2>{scen2.name}</h2>
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPha0tgqovvWrctey5XsWasNB9qNh88cCMLCTBFEnG9w&s" />  
            </div>
            <ul>
                {scen2.performances.map((performance) => (
                    <li key={performance.artist}>
                        {performance.artist} - {performance.time}
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="square">
        <div className='scene-flex'>
            <h2>{scen3.name}</h2>
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPha0tgqovvWrctey5XsWasNB9qNh88cCMLCTBFEnG9w&s" />  
            </div>
            <ul>
                {scen3.performances.map((performance) => (
                    <li key={performance.artist}>
                        {performance.artist} - {performance.time}
                    </li>
                ))}
            </ul>
        </div>

        {/* {data.Scenes.map((scene, index) => (
            <div key={index} className="square">

                <h1>{scene.name}</h1>
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bFnopqoRjdsoRQpSzPixsS2lLVMSsMbxo044VUPQ&s" />     
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPha0tgqovvWrctey5XsWasNB9qNh88cCMLCTBFEnG9w&s" />     
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5SzzotC33hGaDCVUvjEg16PLQpD3d5G1gMszL2rN&s" />     
                <ul>
                    {scene.performances.map((performance, index) => (
                        <li key={index}>
                            <p>{performance.artist}</p>
                            <p>{performance.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
        ))} */}
    </div>
}