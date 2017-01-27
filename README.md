Team Manager 
Realtime Tracking of Member Activities
--------------------------------------

Purpose:
	Imagine a contractor has workers out in the field and wants to keep track of their activities. 
	The contractor has employees install Team Manager on their phones and has them take pictures:
		- first thing in the morning/arrival
		- last thing before finish/leaving
		- at the end of each phase of their work
	Meanwhile, the Contractor is at his computer with a browser open to our website. As the workers go about their tasks and take their photos, there is a desktop alert with a thumbnail of the photo and a chime. The contractor can click on the alert and go to the web site to see what is going on, or keep working on his task, knowing what his guys are doing.

	Advantages for the Contractor 
	  - He knows what his guys are doing as they are doing it.
	  - He can see potential issues from the office as they are coming up.
	  - Free photos for marketing purposes (license makes photos the property of the contractor).

User Stories:

Photos and Tracking:
	Can upload a photo with title, comment, location, and timestamp
	Admins can be alerted of new uploads
	Admins can also comment on photos and add tags

Authentication:
	Can create account, recover password, log in, log out
	Users have different priveliges (user, admin, owner)
	Admins can add or approve new users
	Users can log in and out
	Protected by password and phone

Later:
	Admins can link to photos and docs for reports

----------------------------------------
Minimum Viable App
----------------------------------------

	- Basic Authentication 
	- User privelige levels including Admin, User, and Owner
	- Admin dashboard 
	  - push notifications of user photo upload
	  - review timeline of all photos by time, user, job id, tag
	- User app 
	  - photo upload with timestamp, comment, job id, tag
	  - review of job photos


