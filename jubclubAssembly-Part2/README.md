In this assembly kit, we will add social integration to our Jub.Club site. We will enable a "Connect w/ Facebook" feature to allow users to sign-up for our beta without entering their e-mail address manually (merely by pressing our new Facebook button).
Additionally, when a user signs up (or "applies"), we will add the ability for the user to share Jub.Club with their friends on Facebook and/or Twitter to increase the traffic to our site.

Follow these steps to turn our landing page from "just a landing page" into a a socially integrated landing page.

1. Go to the "fbjs" file and copy the contents. Then navigate to your js folder, then to your facebook folder within that folder (js->facebook). Once inside this folder, paste the contents from the "fbjs" file here. You can learn what these scripts do in the corresponding video.

2. Go to the "socialShare" file. Copy the contents of that file into your "index.html" file where it reads <!-- socialShare goes here -->. (Command-F (Ctrl-F on PC) to search the document for this).


3. Let's add some CSS to hide out socialShare buttons. Go to you "inlineCss" file and copy the content into your "index.html" where it reads <!-- inline CSS goes here -->

4. Add the Facebook button by going to the "fbBut" file and copying the contents into the "index.html" file where it reads <!-- fb connect button goes here.-->

5. Navigate in your browser to "Facebook Developers" within a Google or Bing search. Login to your Facebook and create a Facebook developer account if you haven't already.

6. Find the "Apps" section in the top toolbar and select "Create new App"

7. Input the name of your app, leaving namespace blank. Enter the category "Lifestyle". Copy your App ID on the next page and paste it in between the the first "" on the first line of "js/facebook/fb.js" in place of the default API Key in the javascript file.

8. Click on settings and click "Add platform". Click "website" and add your website's URL. (This will be your domain name if you have one. It will be your cloud app address if you don't). You can leave mobile URL blank. Click "Save Changes".

9.Click on "Status and Review" on the left-hand menu of the Facebook Developer App page.  Where it says "Do you want to make this app and all its live features available to the general public?". Turn that on. This is so others besides you can use your "Connect with Facebook" feature.

10. Finally, go to "includeFBJS" and file and paste the contents of this file into "index.html" where it reads <!-- Our FB JS Include Goes here-->




