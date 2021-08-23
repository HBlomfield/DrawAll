function ExploreSegment (i) {
	//$("#ExploreDrawings").hide();
	//$("#ExploreGroups").hide();
	if (i) {
		$("#ExploreSegmentPosts")[0].classList.add ("active");
		$("#ExploreSegmentGroups")[0].classList.remove ("active");
		$("#ExplorePosts")[0].classList.remove ("PageClose");
		$("#ExplorePosts")[0].classList.add ("PageOpen");
		$("#ExploreGroups")[0].classList.remove("PageOpen");
		$("#ExploreGroups")[0].classList.add("PageClose");
	} else {
		$("#ExploreSegmentPosts")[0].classList.remove ("active");
		$("#ExploreSegmentGroups")[0].classList.add ("active");
		$("#ExplorePosts")[0].classList.remove("PageOpen");
		$("#ExplorePosts")[0].classList.add("PageClose");
		$("#ExploreGroups")[0].classList.remove ("PageClose");
		$("#ExploreGroups")[0].classList.add ("PageOpen");
	}
}
function ToggleExploreSearch () {
	if ($("#ExploreSearch")[0].classList.contains("Expand")){
		$("#ExploreSearch")[0].classList.remove ("Expand");
		$("#ExploreSearch")[0].classList.add ("Contract");
		$("#ExploreToggleSearch")[0].innerHTML = "Open Search";
	} else {
		$("#ExploreSearch")[0].classList.remove ("Contract");
		$("#ExploreSearch")[0].classList.add ("Expand");
		$("#ExploreToggleSearch")[0].innerHTML = "Close Search";
	}
}
ExploreSegment(true);



class Drawing {
	constructor (image, user, description, data, drawingResponses, textResponses, showResponses) {
		this.image = image;
		this.user = user;
		this.description = description;
		this.data = data;
		this.drawingResponses = drawingResponses;
		this.textResponses = textResponses;
		this.showResponses = showResponses;

		this.root = document.createElement("div");
		this.root.className = "pb-2 my-2 bg-light";
		if (!this.showResponses) {
			this.root.className = "bg-light mb-2 ";
		}
		this.root.addEventListener("click", function () {
			OpenPost ()
		})
		// this.root.className = " border-bottom border-dark";

		this.userArea = document.createElement("div");
		this.userArea.className = "ps-2 p-2";
		
		this.userImage = document.createElement("img");
		this.userImage.className = "me-2";
		this.userImage.src = this.image;
		this.userImage.width = "32";
		this.userImage.height = "32";
		
		this.descriptionText = document.createElement("div");
		this.descriptionText.className = "px-2 mb-2 max-lines-3";
		this.descriptionText.innerHTML = description;
		
		
		if (this.data.includes(".jpg")) {
			console.log("AA");
			this.drawArea = document.createElement("img") // in the final version this will be a canvas that renders the drawing
			this.drawArea.className = "w-100 h-auto border-top";
			if (!this.showResponses) {
				this.drawArea.className += " border-bottom";
			}
			this.drawArea.src = this.data;
		}
		if (this.showResponses) {
		this.postStatArea = document.createElement("div");
		this.postStatArea.className = "ps-2 pt-2 border-top";
		this.postStatArea.innerHTML = `
			<i class="bi bi-pencil-fill pe-2"></i>
			<span class="pe-2">${drawingResponses}</span>
			<i class="bi bi-chat-left-fill pe-2"></i>
			<span>${textResponses}</span>`;
		}
		//this.postStatArea.innerHTML = `
		//<div class="w-100 d-flex align-items-center">
		//	<i class="bi bi-pencil-fill pe-2"></i>
		//	<span class="pe-2">${drawingResponses}</span>
		//	<i class="bi bi-chat-left-fill pe-2"></i>
	//		<span>${textResponses}</span>
	//	</div>`;
	//	<div class="col-6 d-flex justify-content-end">
	//		<button class="btn btn-sm btn-white text-primary text-right">View replies <i class="bi bi-arrow-right"></i></button>
	//	</div>`;
		this.userArea.appendChild(this.userImage);
		this.userArea.innerHTML += this.user;
		this.root.appendChild(this.userArea);
		this.root.appendChild(this.descriptionText);
		if (this.drawArea != null) {
		this.root.appendChild(this.drawArea);
		}
		if (showResponses) {
			this.root.appendChild(this.postStatArea);
		}
	}
	Create (element) {
		element.appendChild (this.root);
		console.log('test');
	}
}
var drawings = [
	new Drawing ("placeholder-user.png", "Jimbo123", "This is me and my housee", "placeholder-drawing-1.jpg", 42, 9, true),
	new Drawing ("placeholder-user.png", "Kyl3", "My dog skippy", "placeholder-drawing-2.jpg", 10, 12, true),
	new Drawing ("placeholder-user.png", "Guy", "This is a text post, it has no image attached to it which makes it good for users wanting to get other people's drawings rather than make their own. They also cutt off wheen there isnt enough room", "", 35, 9, true),
	new Drawing ("placeholder-user.png", "Beachb0y", "I like the beach I drew the beahc", "placeholder-drawing-3.jpg", 2, 5, true)
];
for (var i =0; i < drawings.length; i++) {
	drawings[i].Create ($("#ExplorePosts")[0]);
}

var postReplies = [
	new Drawing ("placeholder-user.png", "Guy", "OK. Cool.", "", 0, 0, false),
	new Drawing ("placeholder-user.png", "Beachb0y", "I like the beach I drew the beahc", "placeholder-drawing-3.jpg", 2, 5, false),
	new Drawing ("placeholder-user.png", "KylesMom", "Great Drawing, Kyle, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ", "", 2, 5, false)
];
for (var i =0; i < postReplies.length; i++) {
	postReplies[i].Create ($("#PostReplies")[0]);
}

function CloseAllPages () {
	$("#ExplorePage").hide();
	$("#PostInfoPage").hide();
	$("#GroupPage").hide();
	$("#DrawPage").hide();
	$("#AccountPage").hide();
	$("#ExploreSearch").hide();
	$("#ExploreToggleSearch").hide();

	$("#ExploreButton")[0].classList.remove("active");
	$("#GroupsButton")[0].classList.remove("active");
	$("#DrawButton")[0].classList.remove("active");
	$("#AccountButton")[0].classList.remove("active");
}
function OpenPost () {
	CloseAllPages();
	$("#PostInfoPage").show();
	$("#GlobalBackButton")[0].disabled = false;
	$("#GlobalPageTitle")[0].innerHTML = "Post";
}

function OpenExplore() {
	CloseAllPages();
	$("#ExplorePage").show();
	$("#ExploreSearch").show();
	$("#ExploreToggleSearch").show();
	$("#GlobalBackButton")[0].disabled = true;
	$("#GlobalPageTitle")[0].innerHTML = "Explore";
	$("#ExploreButton")[0].classList.add("active");
}
function OpenGroups () {
	CloseAllPages();
	$("#GroupPage").show();
	$("#GlobalBackButton")[0].disabled = true;
	$("#GlobalPageTitle")[0].innerHTML = "Groups";
	$("#GroupsButton")[0].classList.add("active");

}
function OpenDraw() {
	CloseAllPages();
	$("#DrawPage").show();
	$("#GlobalBackButton")[0].disabled = true;
	$("#GlobalPageTitle")[0].innerHTML = "Draw";
	$("#DrawButton")[0].classList.add("active");

}
function OpenAccount() {
	CloseAllPages();
	$("#AccountPage").show();
	$("#GlobalBackButton")[0].disabled = true;
	$("#GlobalPageTitle")[0].innerHTML = "Account";
	$("#AccountButton")[0].classList.add("active");

}
// OpenPost();
OpenExplore();

// function RotateCanvas() {
// 		$("#MainCanvas")[0].className = "rotate w-100";
// 		$("#MainCanvas")[0].width="375";
// 		$("#MainCanvas")[0].height="500";
// }