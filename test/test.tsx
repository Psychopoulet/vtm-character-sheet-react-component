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
					{ "code": "strength", "value": 2 },
					{ "code": "dexterity", "value": 3 },
					{ "code": "stamina", "value": 3 },

					// Social
					{ "code": "charisma", "value": 3 },
					{ "code": "manipulation", "value": 4 },
					{ "code": "appearance", "value": 4 },

					// Mental
					{ "code": "perception", "value": 3 },
					{ "code": "intelligence", "value": 3 },
					{ "code": "wits", "value": 2 },

				// Capacités

					// Talents
					{ "code": "Commandement", "value": 1 },
					{ "code": "Empathie", "value": 2 },
					{ "code": "Esquive", "value": 3 },
					{ "code": "Expression", "value": 1 },
					{ "code": "Intimidation", "value": 3 },
					{ "code": "Subterfuge", "value": 1 },
					{ "code": "Vigilance", "value": 3 },

					// Compétences
					{ "code": "Armes à feu", "value": 2 },
					{ "code": "Conduite", "value": 2 },
					{ "code": "Etiquette", "value": 3 },
					{ "code": "Mêlée", "value": 5 },
					{ "code": "Représentation", "value": 3 },

					// Connaissances
					{ "code": "Erudition", "value": 2 },
					{ "code": "Finance", "value": 2 },
					{ "code": "Informatique", "value": 2 },
					{ "code": "Investigation", "value": 2 },
					{ "code": "Loi", "value": 3 },
					{ "code": "Linguistique", "value": 3 },
					{ "code": "Occultisme", "value": 1 },
					{ "code": "Politique", "value": 4 },

				// Avantages

					// Disciplines

					{ "code": "Domination", "value": 3 },
					{ "code": "Force d'âme", "value": 3 },
					{ "code": "Présence", "value": 4 },

					{ "code": "Aliénation", "value": 1 },
					{ "code": "Célérité", "value": 3 },
					{ "code": "Occultation", "value": 1 },
					{ "code": "Occultisme", "value": 1 },

					// Historiques

					{ "code": "Troupeau", "value": 5 },
					{ "code": "Génération", "value": 5 },
					{ "code": "Ressources", "value": 5 },
					{ "code": "Concacts", "value": 2 },
					{ "code": "Influence", "value": 4 },
					{ "code": "Statut", "value": 5 },
					{ "code": "Alliés", "value": 2 },
					{ "code": "Mentor", "value": 2 },

					// Vertues
					{ "code": "Conscience/Conviction", "value": 2 },
					{ "code": "Maîtrise de soi / Instinct", "value": 4 },
					{ "code": "Courage", "value": 2 }

			] }
			bloodPool={ {
				"current": 10,
				"characterMax": 15,
			} }
			humanity={ 7 }
			willpower={ {
				"current": 5,
				"characterMax": 6
			} }
			dammages={ 4 }
		/>;

	}

};

createRoot(document.getElementById("TestApp") as HTMLElement).render(<App />);
