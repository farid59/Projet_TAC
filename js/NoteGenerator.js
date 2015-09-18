// Cette classe permet la gestion du bouton et du formulaire de
// création de note.

function NoteGenerator() {

}

NoteGenerator.prototype = {
	zoneCreation: document.getElementById("zoneCreationNote"),
	boutonCreation: document.createElement("button"),
	formCreation: document.createElement("form"),

	/**
	 * Créé le bouton qui permet d'afficher le formulaire de création de note
	 */
	creerBouton: function() {
		var ng = this;
		this.boutonCreation.className="btn btn-default";
		this.boutonCreation.appendChild(document.createTextNode("Créer une note"));
		this.boutonCreation.addEventListener("click",function() {
			ng.cacherBouton();
			ng.afficherForm();
		});
		return this.boutonCreation;
	},

	/**
	 * Créé le formulaire qui permet de créer une nouvelle note
	 */
	creerForm: function() {
		var ng = this;
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

	/**
	 * Modifie l'affichage pour que le bouton de création de note apparaisse
	 */
	afficherBouton: function() {
		if (!this.boutonCreation) {
			this.creerBouton();
		}
		this.zoneCreation.appendChild(this.boutonCreation);
	},

	/**
	 * modifie l'affichage pour que le bouton de création de note disparaisse
	 */
	cacherBouton: function() {
		if (!this.boutonCreation) {
			this.creerBouton();
		}
		this.zoneCreation.removeChild(this.boutonCreation);
	},

	/**
	 * modifie l'afficha epour que le formulaire de création de note apparaisse
	 */
	afficherForm: function() {
		if (!this.formCreation) {
			this.creerForm();
		}
		this.zoneCreation.appendChild(this.formCreation);
		this.champTitre.focus();
	},

	/**
	 * modifie l'afficha epour que le formulaire de création de note disparaisse
	 */
	cacherForm: function() {
		if (!this.formCreation) {
			this.creerForm();
		}
		this.zoneCreation.removeChild(this.formCreation);
	},

	/**
	 * Permet de créer un message correctement formaté avec les informations saisies dans
	 * le formulaire de création de note et de l'envoyer avec cobra
	 */
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

	/**
	 * Permet de réinitialiser le formulaire pour qu'il soit vide lors
	 * de sa prochaine utilisation
	 */
	resetForm: function() {
		this.formCreation.reset();
	}
}