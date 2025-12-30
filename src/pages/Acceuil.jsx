
import Footer from "../components/Footer"




export default function Acceuil() {
    return (
        <div>
            <div class="card text-bg-dark">
                <img src="hero-bg.jpg" class="card-img" alt="hero image"></img>
                <div class="card-img-overlay">
                    <h1 class="card-title text-center">Bonjour, je suis Borys MARESTER</h1>
                    <p class="card-text text-center">Développeur full stack.</p>

                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 m-4">
                <div class="card text-center" >
                     <h5 class="card-title">A propos</h5>
                    <div class="card-body">
                        <img src="john-doe-about.jpg" class="card-img" alt="john doe profil"></img>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum augue nisl,
                             In vel metus et lectus egestas laoreet. Pellentesque convallis massa lectus, nec ornare risus euismod non.</p>
                    </div>
                </div>
                <div class="col">
                    <div class="container text-center">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">Mes compétences</h5>
                                    <p>HTML5 90% </p>
                                    <div class="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" aria-label="Success example" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>CSS3 80% </p>
                                    <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" aria-label="Info example" style={{width: "80%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>JavaScript 70% </p>
                                    <div class="progress">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width: "70%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>PHP 60% </p>
                                    <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" aria-label="Danger example" style={{width: "60%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p>React 50% </p>
                                    <div class="progress">
                                    <div class="progress-bar bg-primary" role="progressbar" aria-label="Danger example" style={{width: "50%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>                         
                                     </div>
                        </div>
                    </div>
                </div>
     </div>
        </div>
    )
}