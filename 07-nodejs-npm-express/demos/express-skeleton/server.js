/*                                                          initializing all of our settings and modules   */
// Load Express
// <script src="jquery.com/etc"></script> $
const express = require( 'express' );

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = 4567;

// Define which directory we will serve files from
app.use( express.static( './public' ) );





/*                                                          creating routes for our server to respond to  

app.HTTPMETHOD('<request-path>', function (req, res) {
    // the code to run when our app receives the specified HTTPMETHOD to the specified <request-path>
})


*/
// Here is how to set up a GET route for the root of our website (eg when a user visits acl.com/)
app.get( '/', function ( request, response ) {
    console.log( 'I CONSOLE IN THE SERVER (aka terminal) AHH' );
    response.sendFile( '/public/index.html', { root: '.' });
});

// Here is how to set up a GET route for the path acl.com/bat of our website
app.get( '/bat', function ( request, response ) {
    console.log('requested a bat!');
    response.sendFile( '/public/bat-country.html', { root: '.'} );
});

// Let's 404 everything except for our routes and index.html
app.get( '*', function ( request, response ) {
    console.log( 'they made a request to something??' );
    response.status('404').sendFile( '/public/404.html', { root: '.' } );
});





/*                                                          starting our server   */
// Now let's tell the app to listen so that it can do its thing
app.listen( PORT, function () {
    console.log( `listening on ${PORT}` );
});