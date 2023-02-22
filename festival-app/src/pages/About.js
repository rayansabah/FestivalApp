import '../css/about.css'
import Navbar from '../comp/NavBar'
import Sponsor from '../jsonTemp/sponsorsInfo.json'

export default function About() {

    return <div>
        <Navbar />
        <div className='about-square'>

            <h1 className='about-header'> Om oss</h1>
            <p>alfaskfasfmafmasmfakm</p>

        </div>
        <div className='about-square'>

            <h1 className='about-header'> Sponsorer</h1>
            {Sponsor.Sponsors.map((sponsor, index) => (
                <div key={index}>


                    <ul>
                        <p><a href={sponsor.homepage}>
                            <img src={sponsor.picture}  width="210" height="110" />
                        </a></p>
                    </ul>
                </div>
            ))}

        </div>
    </div>


}