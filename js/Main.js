function Main(roomName) {
	this.room = roomName;
}

Main.prototype = {
	/**
	 * Paramètre le champ de choix de pseudo pour qu'au choix du pseudo,
	 * l'objet Main fasse les actions suivantes :
	 * 		- Création d'un utilisateur portant ce pseudo
	 * 		- Connexion de cet utilisateur à la room
	 * 		- Modification de l'affichage pour afficher les notes et le moyen de les créer
	 */
	initialiser: function() {
		var main = this;
		document.getElementById("inputPseudo").addEventListener("change",function() {
			main.creerUser(document.getElementById("inputPseudo").value);
			main.afficherPseudo();
			main.masquerMessageAccueil();
			main.afficherZoneCreationNote();
			main.connecterUser();
		});
	},

	/**
	 * Créé un objet User et le stocke dans le champ user de l'objet Main
	 * @param  username [Pseudo choisi par l'utilisateur]
	 */
	creerUser: function(username) {
		this.user = new User(username);
	},

	/**
	 * modifie l'affichage afin d'afficher le Pseudo choisi à la place du champ qui permet
	 * de le choisir
	 */
	afficherPseudo: function() {
		if (main.user) {
			var pseudo = document.createElement("span");
			pseudo.appendChild(document.createTextNode(main.user.pseudo));
			pseudo.id="pseudoLabel";
			document.getElementById("PseudoZone").appendChild(pseudo);

			document.getElementById("inputPseudo").value="";
			document.getElementById("PseudoZone").removeChild(document.getElementById("inputPseudoContainer"));
			document.getElementById("PseudoZone").removeChild(document.getElementById("boutonChoixPseudo"));
		} else {
			console.error("Error - no user defined");
		}
	},

	/**
	 * Masque le message indiquant qu'il faut choisir un pseudo pour manipuler des notes
	 */
	masquerMessageAccueil: function() {
		document.getElementsByTagName("body")[0].removeChild(document.getElementById("accueil"));
	},

	/**
	 * affiche l'outil permettant de créer une nouvelle note
	 */
	afficherZoneCreationNote: function() {
		this.noteGenerator = new NoteGenerator();
		this.noteGenerator.creerBouton();
		this.noteGenerator.creerForm();
		this.noteGenerator.afficherBouton();
	},

	/**
	 * Connecte l'utilisateur à la room
	 */
	connecterUser: function() {
		this.cobraConfig = new CobraConfig(this.room);
	}
}