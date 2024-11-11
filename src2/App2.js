import React, { Component } from 'react'
import Livre from './cls/Livre'
import ListeLivres from './cls/ListeLivres'

export class App2 extends Component {
constructor(props) {
  super(props)

  this.state = {
     tabLivres:[
        {titre:"titre1",auteur:"auteur1",annee_publication:2000},
        {titre:"titre2",auteur:"auteur2",annee_publication:1990},
        {titre:"titre3",auteur:"auteur3",annee_publication:1974},
        {titre:"titre4",auteur:"auteur4",annee_publication:2015},
        {titre:"titre5",auteur:"auteur5",annee_publication:2024}
        
            ]
  }
}
  render() {
    return (
        <div style={{display: "flex",flexWrap: "wrap"}}>
        {/* <Livre titre="Titre1" auteur="Auteur1" annee_publication={2024}/> */}
        <ListeLivres tabLivres={this.state.tabLivres}/>
        </div>
    )
  }
}

export default App2