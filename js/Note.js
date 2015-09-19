function Note(messageJSON) {
	this.auteur = messageJSON.message.auteur;
	this.note = messageJSON.message.note;
	this.date = messageJSON.date;
	
	this.NoeudHTML = document.createElement("div");
	this.NoeudHTML.className="noteContainer col-xs-12 col-sm-6 col-md-4 col-lg-3";

	var note = document.createElement("div");
	note.className="note";
	this.NoeudHTML.appendChild(note);

	var titreHtml = document.createElement("h3");
	titreHtml.className="titreDeNote";
	titreHtml.appendChild(document.createTextNode(this.note.titre));
	note.appendChild(titreHtml);

	var contenuHtml = document.createElement("p");
	contenuHtml.className="contenuDeNote";
	contenuHtml.appendChild(document.createTextNode(this.note.contenu));
	note.appendChild(contenuHtml);

	var footerDeNote = document.createElement("div");
	footerDeNote.className="footerDeNote";
	footerDeNote.appendChild(document.createTextNode(this.auteur.pseudo));
	note.appendChild(footerDeNote);

}

Note.prototype = {
	afficher: function() {
		var tableauNotes = document.getElementById("tableauNotes");
		tableauNotes.appendChild(this.NoeudHTML);
	}
}