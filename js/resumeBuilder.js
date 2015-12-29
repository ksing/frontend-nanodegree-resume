// $(".super-header-wrapper").html("<img style='width:100%' src='http://goo.gl/WCrBmS'>");
// work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.

// projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.

// bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.

// education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.

var bio = {
	"name": "Kushagra Singhal", 
	"role": "Application Engineer", 
	"contactInfo": 	{
						"mobile": "0624949012",
						"email": "singhalkushagra@gmail.com",
						"github": "ksing", 
						"twitter": "",
						"location": "Hilversum"
					},
	"pictureURL": "images/Fry.jpg",
	"welcome": "Hello world!",
	"skills": ['Barely any']  
};
// console.log(bio);

$("#header").prepend(HTMLwelcomeMsg.replace('%data%', bio.welcome));
$("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
$("#header").prepend(HTMLheaderName.replace('%data%',bio.name));
$("#footerContacts").prepend(HTMLemail.replace('%data%', bio.contactInfo.email));
$("#header").prepend(HTMLbioPic.replace('%data%', bio.pictureURL));
$("#header").append(HTMLskillsStart);
$('#skills').append(bio.skills.map(function(item) {
		return HTMLskills.replace('%data%', item);
	}))

var work = {
	"employer": ["Optiver", "Universiteit van Amsterdam", "Universiteit van Amsterdam"],
	"title": ["Trading Application Engineer", "Graduate Researcher", "Guest Researcher"],
	"dates": ["01/11/2014 - Present", "15/05/2010 - 14/05/2014", "14/04/2009 - 13/04/2010"],
	"locations": ["Amsterdam", "Amsterdam", "Amsterdam"],
	"descriptions": ["Supporting shit", "Simulating shit", "Purifying shit"]
};

var education = {
	"school": [
		{
			"name": "Oklahoma State University", 
			"degree": "Master of Science",
			"dates": "2009",
			"locations": "Stillwater, OK, USA",
			"major": "Mechanical Engineering"  
		}, 
		{
			"name": "Indian Institute of Technology, Kanpur",
			"degree": "Bachelor of Technology",
			"dates":  "2006", 
			"locations": "Kanpur, India",
			"major": "Mechanical Engineering"
		}], 
	"online courses": [
		{

		}
	]
};

// $('#workExperience').append(HTMLworkStart);
// $('.work-entry').append(HTMLworkEmployer.replace('%data%', work.employer[0]) + HTMLworkTitle.replace('%data%', work.title[0])); 
// $('.work-entry').append(HTMLworkDates.replace('%data%', work.dates[0]));
// $('.work-entry').append(HTMLworkLocation.replace('%data%', work.locations[0]));
// $('.work-entry').append(HTMLworkDescription.replace('%data%', work.descriptions[0]));

// $('#education').append(HTMLschoolStart);
// $('.education-entry').append(HTMLschoolName.replace('%data%', education["school"][0]) + HTMLschoolDegree.replace('%data%', education["degree"][0])); 
// $('.education-entry').append(HTMLschoolDates.replace('%data%', education["dates"][0]));
// $('.education-entry').append(HTMLschoolLocation.replace('%data%', education["locations"][0]));
// $('.education-entry').append(HTMLschoolMajor.replace('%data%', education['major'][0]));

