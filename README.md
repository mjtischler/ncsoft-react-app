# ncsoft-react-app aka "My First React App!"
Hey y'all! I appreciate the opportunity to take a gander at React (and ES6) and to try to build this application. I had fun at the attempt!

I ran into a few issues related to my lack of understanding of how React manages states, but at this point I've logged about 15 hours into this specific app and I won't be able to revisit it again this week. Here's what I accomplished:

* The app builds (yay?) using Webpack.
* It's mostly responsive (I didn't use an HTML framework and instead quickly rolled something simple).
* The *for* loop was updated to an ES6-compliant *for-of* loop.
* The header is modularized.
* The input fields for changing the coin values are bound to the UI.
* The circles housing the coin values are built by iterating over a collection.
* The 'CALCULATE' button functions and returns a semi-accurate result (but it still doesn't register whole number quotients as the minimum number).

And here's where I failed:

* The `calculateValues` functions still doesn't register whole number quotients as the minimum number.
* The UI doesn't update with the result of the calculate function (again, owing to my lack of understanding of React states).
* The app doesn't fully leverage React's component architecture (if I had more time, I would break out the iterative DOM creation and the calculate function into their own modules).

I checked *app.bundle.js* into source control so that this can be run locally, although there isn't much to look at currently. Again, thanks for sending me this challenge; I sincerely appreciate the opportunity to learn and to grow my skill set.
