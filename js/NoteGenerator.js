// Cette classe permet la gestion du bouton et du formulaire de
// création de note.

function NoteGenerator() {

}

NoteGenerator.prototype = {
	zoneCreation: document.getElementById("zoneCreationNote"),
	boutonCreation: document.createElement("button"),
	formCreation: document.createElement("form"),
	creerBouton: function() {
		var ng = this;
		// this.boutonCreation = document.createElement("button");
		this.boutonCreation.className="btn btn-default";
		this.boutonCreation.appendChild(document.createTextNode("Créer une note"));
		this.boutonCreation.addEventListener("click",function() {
			ng.cacherBouton();
			ng.afficherForm();
		});
		return this.boutonCreation;
	},
	creerForm: function() {
		var ng = this;
		// this.formCreation = document.createElement("form");
		this.formCreation.className="";

		this.champTitre = document.createElement("input");
		this.champTitre.type="text";
		this.champTitre.name="Titre";
		this.champTitre.placeholder="Titre";
		this.champTitre.className="col-xs-12";
		this.formCreation.appendChild(this.champTitre);

		this.champContenu = document.createElement("textarea");
		this.champContenu.name="Contenu";
		this.champContenu.placeholder="Contenu";
		this.champContenu.className="col-xs-12";
		this.champContenu.rows=10;
		this.formCreation.appendChild(this.champContenu);

		var boutonValidation = document.createElement("button");
		boutonValidation.type="submit";
		boutonValidation.className="btn btn-info col-xs-12";
		boutonValidation.appendChild(document.createTextNode("Valdier"));
		this.formCreation.appendChild(boutonValidation);

		this.formCreation.addEventListener("submit",function() {
			ng.cacherForm();
			ng.afficherBouton();
			ng.submitForm();
			ng.resetForm();
		});
	},
	afficherBouton: function() {
		if (!this.boutonCreation) {
			this.creerBouton();
		}
		this.zoneCreation.appendChild(this.boutonCreation);
	},
	cacherBouton: function() {
		if (!this.boutonCreation) {
			this.creerBouton();
		}
		this.zoneCreation.removeChild(this.boutonCreation);
	},
	afficherForm: function() {
		if (!this.formCreation) {
			this.creerForm();
		}
		this.zoneCreation.appendChild(this.formCreation);
		this.champTitre.focus();
	},
	cacherForm: function() {
		if (!this.formCreation) {
			this.creerForm();
		}
		this.zoneCreation.removeChild(this.formCreation);
	},
	submitForm: function() {
		var message = {
			auteur : main.user,
			note : {
				titre : this.champTitre.value,
				contenu : this.champContenu.value
			}
		};
		console.log(message);
		main.cobraConfig.cobra.sendMessage(message,main.room,true);
	},
	resetForm: function() {
		this.formCreation.reset();
	}
}

// var noteGenerator = new NoteGenerator();
// noteGenerator.creerForm();
// noteGenerator.creerBouton();
// noteGenerator.afficherBouton();