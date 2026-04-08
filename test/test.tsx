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
			name="Jacques-Henri Delafeuille" player="Sébastien VIDAL"
			secte="camarilla" clan="ventrue"
			nature="capitalist" demeanor="director"
			experience={ 5 }
			characteristics={ [

				// attributes

					// physical
					{ "code": "strength", "value": 2 },
					{ "code": "dexterity", "value": 3 },
					{ "code": "stamina", "value": 3 },

					// social
					{ "code": "charisma", "value": 3 },
					{ "code": "manipulation", "value": 4 },
					{ "code": "appearance", "value": 4 },

					// mental
					{ "code": "perception", "value": 3 },
					{ "code": "intelligence", "value": 3 },
					{ "code": "wits", "value": 2 },

				// abilities

					// talents
					{ "code": "alertness", "value": 3 },
					{ "code": "awareness", "value": 2 },
					{ "code": "leadership", "value": 1 },
					{ "code": "dodge", "value": 3 },
					{ "code": "expression", "value": 1 },
					{ "code": "intimidation", "value": 3 },
					{ "code": "subterfuge", "value": 1 },

					// skills
					{ "code": "firearms", "value": 2 },
					{ "code": "drive", "value": 2 },
					{ "code": "etiquette", "value": 3 },
					{ "code": "melee", "value": 5 },
					{ "code": "performance", "value": 3 },

					// knowledges
					{ "code": "academics", "value": 2 },
					{ "code": "finance", "value": 2 },
					{ "code": "investigation", "value": 2 },
					{ "code": "law", "value": 3 },
					{ "code": "linguistics", "value": 3 },
					{ "code": "occult", "value": 1 },
					{ "code": "politics", "value": 4 },

				// advantages

					// disciplines

					{ "code": "domination", "value": 3 },
					{ "code": "fortitude", "value": 3 },
					{ "code": "presence", "value": 4 },
					{ "code": "alienation", "value": 1 },
					{ "code": "celerity", "value": 3 },
					{ "code": "occultation", "value": 1 },

					// backgrounds

					{ "code": "herd", "value": 5 },
					{ "code": "generation", "value": 6 },
					{ "code": "resources", "value": 5 },
					{ "code": "contacts", "value": 2 },
					{ "code": "influence", "value": 4 },
					{ "code": "status", "value": 5 },
					{ "code": "allies", "value": 2 },
					{ "code": "mentor", "value": 2 },
					// { "code": "domain", "value": 5 },

					{ "code": "haven", "value": 5 },
					{ "code": "retainers", "value": 1 },

					// virtues
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
