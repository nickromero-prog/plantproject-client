List of technologies used: HTML, CSS, Javascript (& Jquery)


Wireframe Link: https://imgur.com/gallery/Kf8rhW2

ERD Link: https://imgur.com/gallery/IRbdmBm

API Link: https://damp-journey-96295.herokuapp.com

Before I could do anything, I had to build an API using mongoDB, mongoose, and
Javascript in order for the app to store and receive data. This allows the user
to keep the information they are storing on the application and can retrieve it
at a later date event from a different client.


First thing I wanted to do was setup the basic authentication process for users to
have the ability to sign-up, sign-in, sign-out, and change their password.

As a user, I want to be able to sign up so I can sign in and store plants in my workshop.

Created a form that sends email and password to an API to be stored.

As a user, I want to be able to sign in so I can store my own plants.

Created a form to access same e-mail and password from signing up that will
allow the user to begin actions only allowed to authenticated users.

As a user, I want to be able to sign out so no one else can access my plants.

Created a button allowing users to sign out when they are finished interacting

As a user, I want to be able to change my password in case it becomes too cumbersome
to type out and want a shorter one.

Created a form that takes the current password, new password, and email input
allowing the user to change the password.

As a user I want to be able to create a plant and store the information
so I don't have to try and remember it.

Next thing I wanted to set up was a way to create a plant so I created a form
that takes three basic inputs from the user and stores the information
in the API for the user to retrieve later on.

As a user I want to be able to see the plants I have created so I can see how
much water and light I need for the plants I have.

I created a button that allows the user to click and access all of the plants they
have stored on their account. It will appear like a paragraph tag in html every
time they click the button.

As a user, I want to be able to delete a plant in case one dies and I don't need
to keep track of it anymore.

I created an input field where the user can attach the id of the specific plant
that they have no need for anymore and can delete that plant from their account.

As a user, I want to be able to change the plants I have logged if I find out
that a certain plant needs different amounts of light or water. Or if I want to
start calling the plant by the nickname I have given it.


Unsolved Problems:
1) I would like to remove the interactions between deleting
and updating plants. I want to add buttons that allow the user to do those simple tasks separately.

2) I would like for the user to be able to add a picture of the plant.
