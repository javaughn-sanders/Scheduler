/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var selectedType;
var selectedType1;
var selectedType2;
var selectedType3;
var selectedType4;

var script = document.createElement('script');
 
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 


// Set the configuration for your app
// TODO: Replace with your project's config object
  // Get a reference to the database service
var database = firebase.database();
'use strict';

//Gets input from the user about the assignment details
function Get_User_Input(){
  // link to html with id
  //var type = document.getElementByID
  //var difficulty = //id;
  //var daysLeft = //id;
  return;
}


//Takes in variables from Get_User_Input
function calculateImportance(type, difficulty, daysLeft){
  Get_User_Input();
  var importance_value = (type + difficulty) / daysLeft; 
  return importance_value;
}

// Signs-in Friendly Chat.
function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

// Signs-out of Friendly Chat.
function signOut() {
   firebase.auth().signOut();
  // TODO 2: Sign out of Firebase.
}

function submit() {
  //   return firebase.database().ref('/assignment/').push({
  //   difficulty: elementVal,

  //   name: elementVal,

  // }).catch(function(error) {
  //   console.error('Error writing new message to Firebase Database', error);
  // });
  // //TODO 2: Sign out of Firebase.
  // alert("ok" + elementVal);
}

// Initiate firebase auth.
function initFirebaseAuth() {
  firebase.auth().onAuthStateChanged(authStateObserver);
  // TODO 3: Initialize Firebase.
}

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
  // TODO 4: Return the user's profile pic URL.
}

// Returns the signed-in user's display name.
function getUserName() {

  return firebase.auth().currentUser.displayName;

  return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';

  return firebase.auth().currentUser.displayName;

  // TODO 5: Return the user's display name.
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!firebase.auth().currentUser;
  // TODO 6: Return true if a user is signed-in.
}

// Loads chat messages history and listens for upcoming ones.


// Saves a new message on the Firebase DB.

// Saves a new message containing an image in Firebase.
// This first saves the image in Firebase storage.
function saveImageMessage(file) {
  // TODO 9: Posts a new image as a message.
}

// Saves the messaging device token to the datastore.
function saveMessagingDeviceToken() {
  // TODO 10: Save the device token in the realtime datastore
}

// Requests permissions to show notifications.
function requestNotificationsPermissions() {
  // TODO 11: Request permissions to send notifications.
}

// Triggered when a file is selected via the media picker.

// Triggered when the send new message form is submitted.


// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) { // User is signed in!
    // Get the signed-in user's profile pic and name.
    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

    // Set the user's profile pic and name.
    userPicElement.style.backgroundImage = 'url(' + profilePicUrl + ')';
    userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    userNameElement.removeAttribute('hidden');
    userPicElement.removeAttribute('hidden');
    signOutButtonElement.removeAttribute('hidden');

    // Hide sign-in button.
    signInButtonElement.setAttribute('hidden', 'true');

    // We save the Firebase Messaging Device token and enable notifications.
    saveMessagingDeviceToken();
  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.setAttribute('hidden', 'true');
    userPicElement.setAttribute('hidden', 'true');
    signOutButtonElement.setAttribute('hidden', 'true');

    // Show sign-in button.
    signInButtonElement.removeAttribute('hidden');
  }
}

// Returns true if user is signed-in. Otherwise false and displays a message.


// Resets the given MaterialTextField.



// Template for messages.


// A loading image URL.


// Displays a Message in the UI.


// Enables or disables the submit button depending on the values of the input
// fields.


// Checks that the Firebase SDK has been correctly setup and configured.
function checkSetup() {
  if (!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions and make ' +
        'sure you are running the codelab using `firebase serve`');
  }
}

// Checks that Firebase has been imported.
checkSetup();

// Shortcuts to DOM Elements.

var userPicElement = document.getElementById('user-pic');
var userNameElement = document.getElementById('user-name');
var signInButtonElement = document.getElementById('sign-in');
var signOutButtonElement = document.getElementById('sign-out');
var signInSnackbarElement = document.getElementById('must-signin-snackbar');


var submitelements = document.getElementById('submit');

var elementVal = document.getElementById('elementID');

var nameProd =  document.getElementById('textfield');
// Saves message on form submit.

signOutButtonElement.addEventListener('click', signOut);
signInButtonElement.addEventListener('click', signIn);

submitelements.addEventListener('click', submit);

// Toggle for the button.

// Events for image upload.


// initialize Firebase
initFirebaseAuth();
alert("" + submitelements);
autorun();

// We load currently existing chat messages and listen to new ones.
function autorun(){
  $(document).ready(function(){
    $("#submit").click(function(){
        //type
        selectedType = $(".soflow option:selected").val();
        //diff
        selectedType1 = $(".soflow1 option:selected").val();
        //Name
        selectedType2 = $(".textfield").val();
        //days
        selectedType3 = $(".Daysleft").val();
        //hours
        selectedType4 = $(".HW").val();        

        alert("Hiiii");


            return firebase.database().ref('/assignment/').push({
            difficulty: selectedType1,
            name: selectedType2,
            Type: selectedType,
            Daysleft: selectedType3,
            HoursAvWork: selectedType4
            }).catch(function(error) {
    console.error('Error writing new message to Firebase Database', error);
  });
  //TODO 2: Sign out of Firebase.
  alert("ok" + elementVal);
    });
});

}
