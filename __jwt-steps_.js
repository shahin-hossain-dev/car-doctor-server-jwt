/**
 * ---------------------------------
 * MAKE API SECURE
 * --------------------------------
 * -> The Person Who should have
 *
 * concept:
 * 1. assign two token for each person (access token, refresh token )
 * 2. access token contain: user Identification (email, role, etc.). valid for a shorter duration.
 * 3. refresh token is used : to re-create an access token that was expired.
 * if refresh token is invalid then logout the user
 */

/**
 * 1. jwt --> jsonwebtoken
 * 2. install jwt
 * 3. client site axios install
 * 4. post request for set cookies,
 * 5. onauthStateChange থেকে user থাকলে post req করবে, axios.post('https//localhost:5000/jwt', {user}, {withCredentials: true})
 * 6. set cors origin & credentials: true
 * 7. jwt এর post method করে রিসিভ করতে হবে।
 * 8. jsonwebtoken require করতে হবে।
 */
