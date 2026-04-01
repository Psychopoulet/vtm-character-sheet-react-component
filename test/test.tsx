"use strict";

// deps

	// externals
    import React, { JSX } from "react";
	import { createRoot } from "react-dom/client";

    // locals
    import {
        CharacterSheet
    } from "../public/src/main";

// component

class App extends React.Component<{}> {

	// name

		public static displayName: string = "App";

	// render

	public render (): JSX.Element {

		return <CharacterSheet
			name="Jacques Henri Delafeuille" player="Sébastien VIDAL"
			secte="Camarilla" clan="Ventrue"
			characteristics={ [

				// Attributs

					// Physique
					{ name: "Force", value: 2 },
					{ name: "Dextérité", value: 3 },
					{ name: "Vigueur", value: 3 },

					// Social
					{ name: "Charisme", value: 3 },
					{ name: "Manipulation", value: 4 },
					{ name: "Apparence", value: 4 },

					// Mental
					{ name: "Perception", value: 3 },
					{ name: "Intelligence", value: 3 },
					{ name: "Astuce", value: 2 },

				// Capacités

					// Talents
					{ name: "Commandement", value: 1 },
					{ name: "Empathie", value: 2 },
					{ name: "Esquive", value: 3 },
					{ name: "Expression", value: 1 },
					{ name: "Intimidation", value: 3 },
					{ name: "Subterfuge", value: 1 },
					{ name: "Vigilance", value: 3 },

					// Compétences
					{ name: "Armes à feu", value: 2 },
					{ name: "Conduite", value: 2 },
					{ name: "Etiquette", value: 3 },
					{ name: "Mêlée", value: 5 },
					{ name: "Représentation", value: 3 },

					// Connaissances
					{ name: "Erudition", value: 2 },
					{ name: "Finance", value: 2 },
					{ name: "Informatique", value: 2 },
					{ name: "Investigation", value: 2 },
					{ name: "Loi", value: 3 },
					{ name: "Linguistique", value: 3 },
					{ name: "Occultisme", value: 1 },
					{ name: "Politique", value: 4 },

				// Avantages

					// Disciplines

					{ name: "Domination", value: 3 },
					{ name: "Force d'âme", value: 3 },
					{ name: "Présence", value: 4 },

					{ name: "Aliénation", value: 1 },
					{ name: "Célérité", value: 3 },
					{ name: "Occultation", value: 1 },
					{ name: "Occultisme", value: 1 },

					// Historiques

					{ name: "Troupeau", value: 5 },
					{ name: "Génération", value: 5 },
					{ name: "Ressources", value: 5 },
					{ name: "Concacts", value: 2 },
					{ name: "Influence", value: 4 },
					{ name: "Statut", value: 5 },
					{ name: "Alliés", value: 2 },
					{ name: "Mentor", value: 2 },

					// Vertues
					{ name: "Conscience/Conviction", value: 2 },
					{ name: "Maîtrise de soi / Instinct", value: 4 },
					{ name: "Courage", value: 2 }

			] }
			bloodPool={ {
				current: 10,
				characterMax: 15,
			} }
			humanity={ 7 }
			willpower={ {
				current: 5,
				characterMax: 6
			} }
			dammages={ 4 }
		/>;

	}

};

createRoot(document.getElementById("TestApp") as HTMLElement).render(<App />);
