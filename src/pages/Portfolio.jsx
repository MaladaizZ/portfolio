

export default function Portfolio() {
    return (
        <div>
            <div class="card">
                <img src="banner.jpg" class="card-img" alt="fuseau bleu"></img>
            </div>
            <h1 class="text-center">Portfolio</h1>
            <p class="text-center">Voici quelques-unes de mes réalisations</p>
            <div class="card-group">

                <div class="card text-center">
                    <img src="fresh-food.jpg" class="card-img" alt="legume"></img>
                    <div class="card-body">
                        <h5 class="card-title">Fresh Food</h5>
                        <p class="card-text">Site de ventes de produits frais en ligne</p>
                        <button class="btn btn-primary" type="submit">Voir le site</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Site réalisé avec PHP et MySQL</small>
                    </div>
                </div>

                <div class="card text-center">
                    <img src="restaurant-japonais.jpg" class="card-img" alt="sushi"></img>
                    <div class="card-body">
                        <h5 class="card-title">Restaurant AKIRA</h5>
                        <p class="card-text">Site de ventes de produits frais en ligne.</p>
                        <button class="btn btn-primary" type="submit">Voir le site</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Site réalisé avec Wordpress</small>
                    </div>
                </div>

                <div class="card text-center">
                    <img src="espace-bien-etre.jpg" class="card-img" alt="boudha"></img>
                    <div class="card-body">
                        <h5 class="card-title">Espace bien-être </h5>
                        <p class="card-text">Site de ventes des produits frais en ligne.</p>
                        <button class="btn btn-primary" type="submit">Voir le site</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Site réalisé avec LARAVEL</small>
                    </div>
                </div>
            </div>

            <div class="card-group">

                <div class="card text-center">
                    <img src="seo.jpg" class="card-img" alt="seo"></img>
                    <div class="card-body">
                        <h5 class="card-title">SEO</h5>
                        <p class="card-text">Amélioration du référencement d'un site e-commerce.</p>
                        <button class="btn btn-primary" type="submit">Voir le site</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Utilisation des outils SEO</small>
                    </div>
                </div>

                <div class="card text-center">
                    <img src="coder.jpg" class="card-img" alt="code"></img>
                    <div class="card-body">
                        <h5 class="card-title">Création d'une API</h5>
                        <p class="card-text">Création d'une API RESTFULL publique.</p>
                        <button class="btn btn-primary" type="submit">Voir le site</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">PHP - SYMFONY</small>
                    </div>
                </div>

                <div class="card text-center">
                    <img src="screens.jpg" class="card-img" alt="ordi"></img>
                    <div class="card-body">
                        <h5 class="card-title">Maquette d'une Site Web</h5>
                        <p class="card-text">Création d'un prototype d'un site .</p>
                        <button class="btn btn-primary" type="submit">Voir le site</button>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Réalisé avec FIGMA</small>
                    </div>
                </div>

            </div>
        </div>
    )
}