function Main(roomName) {
	this.room = roomName;
}

Main.prototype = {
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
	creerUser: function(username) {
		this.user = new User(username);
	},
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
	masquerMessageAccueil: function() {
		document.getElementsByTagName("body")[0].removeChild(document.getElementById("accueil"));
	},
	afficherZoneCreationNote: function() {
		this.noteGenerator = new NoteGenerator();
		this.noteGenerator.creerBouton();
		this.noteGenerator.creerForm();
		this.noteGenerator.afficherBouton();
	},
	connecterUser: function() {
		this.cobraConfig = new CobraConfig(this.room);
	}
}

var main = new Main("testRoomANicolas");
main.initialiser();