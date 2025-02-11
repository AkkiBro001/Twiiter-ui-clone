import TS_plain from "../../images/TS-plain.jpg";
import django_img from "../../images/django-wesite.jpg";
import nodejs_freecode from "../../images/nodejs-freecode.jpg";
import portFolio_website from "../../images/portFolio-website.jpg";
import Array_Destructure from "../../images/Array-Destructuring.jpg";

import aws from "../../profiles/aws.jpg";
import Codecademy from "../../profiles/Codecademy.jpg";
import freecodecamp from "../../profiles/freecodecamp.jpg";
import googledevs from "../../profiles/googledevs.jpg";
import JavaScript from "../../profiles/JavaScript.jpg";
import nodejs from "../../profiles/nodejs.jpg";
import ReactJS from "../../profiles/ReactJS.jpg";
import TypeScript from "../../profiles/TypeScript.jpg";

const TwitterData = [{
		"id":1,
		"tweetAccountName": "freeCodeCamp.org",
		"tweetAccountUserID": "@freeCodeCamp",
		"tweetCreated": "1h",
		"tweetDetails": "If you're looking for a developer job you should have a solid portfolio site.\n\nIt lets potential employers see your projects & skills by displaying them in an accessible way.\n\nIn this course you'll create a portfolio website using HTML, CSS, & JavaScript.",
		"tweetImageURL": portFolio_website,
		"tweetProfileImageURL": freecodecamp,
		"tweetComment": 3,
		"tweetRetweet": 53,
		"tweetLike": 178,
		"isVerified": true
},
{
		"id":2,
		"tweetAccountName": "TypeScript",
		"tweetAccountUserID": "@typescript",
		"tweetCreated": "2h",
		"tweetDetails": "TypeScript 4.9 Beta is now available! Try out our improved 'in' operator narrowing, the new 'satisfies' operator, stricter 'NaN' checks, and more-efficient file-watching defaults!",
		"tweetImageURL": TS_plain,
		"tweetProfileImageURL": TypeScript,
		"tweetComment": 9,
		"tweetRetweet": 193,
		"tweetLike": 740,
		"isVerified": false
},
{
		"id":3,
		"tweetAccountName": "freeCodeCamp.org",
		"tweetAccountUserID": "@freeCodeCamp",
		"tweetCreated": "4h",
		"tweetDetails": "Django is a powerful Python-based web framework that helps you build secure and maintainable websites.\n\nAnd a practical way to improve your skills is by building a complex app.\n\nIn this free course you'll use it to build a fully-featured social media app.",
		"tweetImageURL": django_img,
		"tweetProfileImageURL": freecodecamp,
		"tweetComment": 1,
		"tweetRetweet": 63,
		"tweetLike": 236,
		"isVerified": true
},
{
		"id":4,
		"tweetAccountName": "JavaScript",
		"tweetAccountUserID": "@javascript",
		"tweetCreated": "5h",
		"tweetDetails": "What's everyone's favorite code editor? 😅",
		"tweetImageURL": null,
		"tweetProfileImageURL": JavaScript,
		"tweetComment": 1134,
		"tweetRetweet": 348,
		"tweetLike": 3340,
		"isVerified": true
},

{
		"id":5,
		"tweetAccountName": "TypeScript",
		"tweetAccountUserID": "@typescript",
		"tweetCreated": "7h",
		"tweetDetails": "TypeScript 4.5 is now available!\n\nRead up on what's new including\n\n- Promise Improvements with the Awaited Type\n- lib Overrides in node_modules\n- New JSDoc Constructs\n- Snippet Completions",
		"tweetImageURL": null,
		"tweetProfileImageURL": TypeScript,
		"tweetComment": 547,
		"tweetRetweet": 52,
		"tweetLike": 1796,
		"isVerified": false
},

{
		"id":6,
		"tweetAccountName": "JavaScript",
		"tweetAccountUserID": "@javascript",
		"tweetCreated": "7h",
		"tweetDetails": "Hello everyone! \n- Like if you love me",
		"tweetImageURL": null,
		"tweetProfileImageURL": JavaScript,
		"tweetComment": 231,
		"tweetRetweet": 637,
		"tweetLike": 5829,
		"isVerified": true
},
{
		"id":7,
		"tweetAccountName": "freeCodeCamp.org",
		"tweetAccountUserID": "@freeCodeCamp",
		"tweetCreated": "9h",
		"tweetDetails": "Node.js makes it possible for developers to use JavaScript on the server-side.\n\nThis vastly expands what you can do with JS - so Node is a good tool to know.",
		"tweetImageURL": nodejs_freecode,
		"tweetProfileImageURL": freecodecamp,
		"tweetComment": 3,
		"tweetRetweet": 31,
		"tweetLike": 166,
		"isVerified": true
},
{
		"id":8,
		"tweetAccountName": "React",
		"tweetAccountUserID": "@reactjs",
		"tweetCreated": "9h",
		"tweetDetails": "If your app doesn't work after upgrading to React 18, the first thing to check is whether it’s wrapped in <StrictMode>. Strict Mode has gotten stricter in 18, but you can turn it off and address issues at your own pace later!",
		"tweetImageURL": null,
		"tweetProfileImageURL":ReactJS,
		"tweetComment": 12,
		"tweetRetweet": 141,
		"tweetLike": 631,
		"isVerified": false
},
{
		"id":9,
		"tweetAccountName": "React",
		"tweetAccountUserID": "@reactjs",
		"tweetCreated": "11h",
		"tweetDetails": "This means that a single slow data source on the server will no longer hold the entire page back. The user will gradually see more content as soon as it becomes available. This works before any of the JavaScript code loads on the client! It also lets hydration start much earlier.",
		"tweetImageURL": null,
		"tweetProfileImageURL": ReactJS,
		"tweetComment": 1,
		"tweetRetweet": 11,
		"tweetLike": 210,
		"isVerified": false
},
{
	"id":10,
	"tweetAccountName": "JavaScript",
	"tweetAccountUserID": "@javascript",
	"tweetCreated": "7h",
	"tweetDetails": "Destructuring is powerful and this makes that clear! A beautiful gradient to boot 🙂",
	"tweetImageURL": Array_Destructure,
	"tweetProfileImageURL": JavaScript,
	"tweetComment": 6,
	"tweetRetweet": 31,
	"tweetLike": 223,
	"isVerified": true
}
]

const FollowData = [
	{
		"id":1,
		"tweetAccountName":"AWS Cloud India",
		"tweetAccountUserID":"@AWSCloudIndia",
		"tweetProfileImageURL": aws,
		"isVerified": true
	},
	{
		"id":2,
		"tweetAccountName":"Codecademy",
		"tweetAccountUserID":"@Codecademy",
		"tweetProfileImageURL": Codecademy,
		"isVerified": true
	},
	{
		"id":3,
		"tweetAccountName":"Google Developers",
		"tweetAccountUserID":"@googledevs",
		"tweetProfileImageURL": googledevs,
		"isVerified": true
	},
	{
		"id":4,
		"tweetAccountName":"Node.js",
		"tweetAccountUserID":"@nodejs",
		"tweetProfileImageURL": nodejs,
		"isVerified": true
	}
]

export default TwitterData;
export {FollowData}