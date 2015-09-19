function CobraConfig(room) {
	this.cobra = new Cobra();
	this.room = room;
	this.apiUrl = 'http://cobra-framework.com:3000/api/events/' + room;
	this.cobra.connect('http://cobra-framework.com:8080');
	this.socketId;

	var CobraConfig = this;
	var cobra = this.cobra;
	
	cobra.connectionCallback = function() {
		cobra.joinRoom(CobraConfig.room);
	}

	cobra.joinRoomCallback = function(roomName) {
		// Un erreur sur les serveurs cobra empêche de récupérer les
		// évènements passés. Objet JSON retourné par le serveur :
		// {"Error":true,"Message":"Error executing MySQL query"}

		// $.ajax({
		// 	type:'GET',
		// 	url: CobraConfig.apiUrl,
		// 	success: function() {
		// 		console.log("Success");
		// 	},
		// 	error: function() {
		// 		console.error("Error when retrive events");
		// 	},
		// 	complete: function(result, status) {
		// 		console.log("Complete");
		// 		console.log(result);
		// 		for (var i = 0; i < result.responseJSON.Events.length; i++) {
		// 			console.log(i);
		// 		}
		// 	}
		// })
	}

	cobra.messageReceivedCallback = function(message) {
		if(message.type == "infos"){
			for(var i = 0; i < message.clients.length; i++)
			{
				var client = message.clients[i];
			}
			// Mon id attribué par la room
			CobraConfig.socketId = message.socketId;
			main.user.id = CobraConfig.socketId;
		}
		else if (message.message) {
			console.log(""+JSON.stringify(message));
			var note = new Note(message);
			note.afficher();
		}
	}

	cobra.clientJoinedRoomCallback = function(data) {

	}

	cobra.clientLeftRoomCallback = function(data) {

	}
}
