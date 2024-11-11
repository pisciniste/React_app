import React, { useState } from 'react'
import Livre from './fct/Livre';
import ListeLivres from './fct/ListeLivres';

function App() {
    const [tabLivres, setTabLivres] = useState([
{titre:"titre1",auteur:"auteur1",annee_publication:2000},
{titre:"titre2",auteur:"auteur2",annee_publication:1990},
{titre:"titre3",auteur:"auteur3",annee_publication:1974},
{titre:"titre4",auteur:"auteur4",annee_publication:2015},
{titre:"titre5",auteur:"auteur5",annee_publication:2024}

    ]);
    const[Titre,setTitre]=useState('')
    const[Auteur,setAuteur]=useState('')
    const[Anne,setAnne]=useState()
    function ajouterBook(){
      const tab=tabLivres.map(ele=>{ return {...ele}})
      setTabLivres([...tab,{titre:Titre,auteur:Auteur,annee_publication:Anne}])
      setTitre(ele=>'')
      setAuteur(ele=>'')
      setAnne()
    }
  return (
    <div style={{display: "flex",flexWrap: "wrap"}}>
      <input type='text' key={tabLivres.titre} value={tabLivres.titre} onChange={e=>setTitre(e.target.value)}/>
    <input type='text' key={tabLivres.auteur} value={tabLivres.auteur} onChange={e=>setAuteur(e.target.value)} />
    <input type='text' key={tabLivres.annee_publication} value={tabLivres.annee_publication} onChange={e=>setAnne(e.target.value)}/>
    <button onClick={ajouterBook } >ajouter </button><br/>
    <Livre titre={tabLivres.titre} auteur={tabLivres.auteur} annee_publication={tabLivres.annee_publication}/>
    <ListeLivres tabLivres={tabLivres}/>
    
    </div>
  )
}

export default App