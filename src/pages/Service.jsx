import Footer from "../components/Footer";
import Nav from "../components/Nav";


export default function Service() {

    
    return (
        <div>
            <div class="card ">
            </div>
            <div class="card">
                <img src="banner.jpg" class="card-img" alt="fuseau bleu"></img>
            </div>
            <div class="card-body text-center">
                <h1 class="card-title">Mon offre de services</h1>
                <p class="card-text border-primary-2" >Voici les prestations sur lesquelles je peux intervenir :</p>
            </div>
            <div class="card-group">
                <div class="card">
                    <img src="brush.svg" class="card-img-top" alt="pinceau d'art"></img>
                    <div class="card-body">
                        <h5 class="card-title">Ux Design</h5>
                        <p class="card-text">L' Ux Design est une discipline qui consiste à concevoir l'expérience utilisateur d'une application ou d'un site web en placant l'utilisateur au centre des préoccupations.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="code-slash.svg" class="card-img-top" alt="guillement de code">
                    </img>
                    <div class="card-body">
                        <h5 class="card-title">Développement Web</h5>
                        <p class="card-text">Le développement web consiste à créer des sites web et des applications web qui fonctionnent sur Internet en utilisant des langages de programmation comme HTML, CSS et JavaScript.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="search.svg" class="card-img-top" alt="loupe de recherche">
                    </img>
                    <div class="card-body">
                        <h5 class="card-title">Référencement</h5>
                        <p class="card-text">Le référencement consiste à améliorer la visibilité d’un site web dans les résultats des moteurs de recherche en utilisant des techniques de SEO (Search Engine Optimization).</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}