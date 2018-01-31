# tourapp
on start:
A. CURRENTLY LOGGED IN USER:
  1. Auto authenticate already logged in user?
  2. Rerouted to <HomeScreen>
B. LOGGED OUT / LOGGED IN USER:
  1. SIGN IN / SIGN UP buttons appear

on click "SIGN IN"
  1. <SignInForm/> modal appears
  2. user inputs password and email
  3. routed to <HomeScreen>

on click "SIGN UP"
  1. <SingUpForm/> modal appears
  2. user inputs information
    a. First/Last Name
    b. email address
    c. birthday (18+)
    d. password
    e. confirm password
    f. terms & conditions
    g. CONTINUE button

  3. user add photo
    a. Camera and Photos permission
    b. DONE button

  4. on click "DONE"
    a. routes to HomeScreen

C. <HomeScreen>
  1. Tracks newly popular/most popular tours
  2. <SearchCard/> s for Top 10 tours populate
  3. Swipe left side of screen for <Navigator/>

D. <TourScreen>
  1. <TourSearch/>
    a. Location (Current Location, City/State, Zip Code)
    b. Keywords dropdown (Finance, Fashion, War, Art, Music, Food & Drink, Heritage, American History, Pop Culture)
    c. Level (Easy (1-5 points), Moderate (6-15 points), Long (16+ points))
    d. SEARCH button
  2. on click "SEARCH"
    a. queries based on user parameters
    b. populates top 10 <SearchCard/> (scroll for more?)
    c. if error, "Sorry, no tours exist with those choices"
  3. <SearchCard/>
    a. Tour Name
    b. Short Description (if available)
    c. Tour Picture
    d. Level
    e. MORE INFORMATION button
      i. OnClick: slide down to show Long Description
    f. PURCHASE button
      i. OnClick: in-app purchase procedures
    g. DOWNLOAD button
      i. if already purchased OR free
      ii. OnClick: downloads tour data to User Tour
  4. <MyTours/>
    a. <TourCard/>s appear for each downloaded tour
    b. <TourCard/>
      a. Tour Name
      b. Short Description
      c. Location
      d. Tour Picture
      e. Level
      d. MORE INFORMATION button
        i. OnClick: slide down to show Long Description
      f. VIEW ON MAP button
        i. loads <MapPoints/> on to <MapScreen>
E. <MapScreen>
  1. WITH NO LOADED MAP
    a. Detects user Location
  2. WITH LOADED MAP
    a. Shows points and route
    b. Visited points are dimmed
    c. Route laid out in points order
    d. <PointInformation/> appears when user is close to a point
    e. Tracks user location while app is in use
    f. Push notifications when user is nearing a point
  3. <Point Information/>
    a. List of facts about the point, suggests for things to do/see, other information provided by the tour
    b. MARK AS VISITED button
      i. Lists the point in User Tours as visited, dims in map
  4. <PointsList/>
    a. Lists point Name
    b. Distance from current Location
    c. GO HERE button
      i. animates point in map
      ii. directions to that point?
F. <AccountScreen>
  1. Update INFORMATION
    a. Update database
  2. Push notifications
  3. Payment navigationOptions
  4. Touch?

**OTHER**
GeoLocation/TrackLocation
Camera/Photo permission
Google authenticate
