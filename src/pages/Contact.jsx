
export default function Contact() {
    return (
        <div className="container-fluid">
            <div className="container text-center">
                <h1>Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
                <div className="d-flex justify-content-around">
                    <div className="col">
                        <p className="h2">
                            Formulaire de contact
                        </p>
                        <div className="">
                            <label for="ControlInput1" className="form-label"></label>
                            <input type="nom" class="form-control" id="ControlInput1" placeholder="Votre nom" />
                        </div>
                        <div className="">
                            <label for="ControlInput1" className="form-label"></label>
                            <input type="email" className="form-control" id="ControlInput1" placeholder="votre adresse mail" />
                        </div>
                        <div className="">
                            <label for="ControlInput1" className="form-label"></label>
                            <input type="tel" class="form-control" id="ControlInput1" placeholder="Votre numéro de téléphone" />
                        </div>

                        <div className="">
                            <label for="ControlInput1" className="form-label"></label>
                            <input type="text" className="form-control" id="ControlInput1" placeholder="Sujet" />
                        </div>
                        <div className="">
                            <label for="exampleFormControlTextarea1" className="form-label"></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Votre message"></textarea>
                        </div>
                        <div className="col-center">
                            <button type="submit" class="btn btn-primary mb-3">ENVOYEZ</button>
                        </div>
                    </div>
                    <div className="col">
                        <div >
                            <h2>Mes coordonnées</h2>
                        </div>
                        <div>
                            <ul className="listeContact">
                                <li>40 rue Laure Diebold</li>
                                <li>69009 Lyon, France</li>
                                <li>01 20 30 40 50</li>
                                <li>john.doe@gmail.com</li>
                            </ul>
                        </div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621757!2d4.796403976789853!3d45.77866197108087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1767108023028!5m2!1sfr!2sfr" width="600" height="450" style={{ "border": "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )



}