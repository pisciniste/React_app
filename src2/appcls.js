import React, { Component } from 'react';
import Livre from './fct/Livre';
import ListeLivres from './fct/ListeLivres';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabLivres: [
                { titre: "titre1", auteur: "auteur1", annee_publication: 2000 },
                { titre: "titre2", auteur: "auteur2", annee_publication: 1990 },
                { titre: "titre3", auteur: "auteur3", annee_publication: 1974 },
                { titre: "titre4", auteur: "auteur4", annee_publication: 2015 },
                { titre: "titre5", auteur: "auteur5", annee_publication: 2024 }
            ],
            Titre: '',
            Auteur: '',
            Anne: ''
        };
    }

    // Méthode pour ajouter un nouveau livre
    ajouterBook = () => {
        const { Titre, Auteur, Anne, tabLivres } = this.state;
        const nouveauLivre = { titre: Titre , auteur: Auteur , annee_publication: parseInt(Anne) };

        this.setState({
            tabLivres: [...tabLivres, nouveauLivre],Titre: '',Auteur: '',Anne: ''
        });
    };

    // Méthodes de gestion de changement des inputs
    Titre = (e) => this.setState({ Titre: e.target.value });
    Auteur = (e) => this.setState({ Auteur: e.target.value });
    Anne = (e) => this.setState({ Anne: e.target.value });

    render() {
        const { tabLivres, Titre, Auteur, Anne } = this.state;

        return (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <input type='text' value={Titre} onChange={this.Titre} />
                <input type='text' value={Auteur} onChange={this.Auteur} />
                <input type='text' value={Anne} onChange={this.} />
                <button onClick={this.ajouterBook}>Ajouter</button><br />

                {/* Afficher la liste de livres */}
                <ListeLivres tabLivres={tabLivres} />
            </div>
        );
    }
}

export default App;
