// import React from "react";

// export default class JeuDe extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { face: null, compteur: 0, fin: false };
//   }

//   jouer() {
//     const valeur = Math.floor(Math.random() * 6) + 1;
//     this.setState((prevState) => ({
//       face: valeur,
//       compteur: prevState.compteur + 1,
//       fin: valeur === 6, // Le jeu se termine si la face est 6
//     }));
//   }

//   initialiser() {
//     this.setState({ face: null, compteur: 0, fin: false });
//   }

//   render() {
//     return (
//       <div>
//         <img src="images/Dé.PNG" alt="Dé" />
//         <h1>Jeu de Dé</h1>
//         <h2>face: {this.state.face}</h2>
//         <h2>nombre d'essais: {this.state.compteur}</h2>
//         <button onClick={() => this.jouer()} disabled={this.state.fin}>
//           jouer
//         </button>
//         {this.state.fin && <p>Bravo ! Vous avez trouvé la face cachée.</p>}
//         <button onClick={() =>this.initialiser()}>Initialiser</button>
//       </div>
//     );
//   }
// }


// import React from "react";

// export default class JeuDe extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       face: null,
//       compteur: 0,
//       fin: false,
//       input: ""
//     };
//   }

//   jouer = () => {
//     const valeur = Math.floor(Math.random() * 6) + 1;
//     this.setState((prevState) => ({
//       face: valeur,
//       compteur: prevState.compteur + 1,
//       fin: valeur === parseInt(this.state.input)
//     }));
//   };

//   initialiser = () => {
//     this.setState({ face: null, compteur: 0, fin: false, input: "" });
//   };

//   handleChange = (event) => {
//     this.setState({ input: event.target.value });
//   };

//   render() {
//     return (
//       <div style={{ textAlign: "center", margin: "20px", padding: "10px", backgroundColor: "#f7e6f2", borderRadius: "8px" }}>
//         <h1>Jeu de Dé Joueur 1</h1>
//         <p>
//           Donner le numéro caché entre 1 et 6:
//           <input
//             type="number"
//             value={this.state.input}
//             onChange={this.handleChange}
//             min="1"
//             max="6"
//             style={{ margin: "0 5px" }}
//           />
//           <button onClick={this.jouer} disabled={!this.state.input || this.state.fin}>Jouer</button>
//         </p>
        
//         {this.state.fin ? (
//           <p style={{ color: "green", fontWeight: "bold" }}>Bravo ! Vous avez trouvé la face cachée.</p>
//         ) : (
//           <>
//             <h1>Jeu de Dé Joueur 2 ({this.state.compteur})</h1>
//             {this.state.face && (
//               <>
//                 <img src={`images/dice${this.state.face}.png`} alt={`Dé face ${this.state.face}`} style={{ width: "50px", height: "50px" }} />
//                 <h2>Face: {this.state.face}</h2>
//               </>
//             )}
//             <h2>Nombre d'essais: {this.state.compteur}</h2>
//             <button onClick={this.initialiser}>Réinitialiser</button>
//           </>
//         )}
//       </div>
//     );
//   }
// }

import React from "react";

export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    this.setState((prevState) => ({
      face: valeur,
      compteur: prevState.compteur + 1,
      fin: valeur === 6, // Le jeu se termine si la face est 6
    }));
  }

  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    return (
      <div>
        <img src="images/Dé.PNG" alt="Dé" />
        <h1>Jeu de Dé</h1>
        <h2>face: {this.state.face}</h2>
        <img src='public\images/dice${this.state.face}.png'></img>
        <h2>nombre d'essais: {this.state.compteur}</h2>
        <button onClick={() => this.jouer()} disabled={this.state.fin}>
          jouer
        </button>
        {this.state.fin && <p>Bravo ! Vous avez trouvé la face cachée.</p>}
        <button onClick={() =>this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}
