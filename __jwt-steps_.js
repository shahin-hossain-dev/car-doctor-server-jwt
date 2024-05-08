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
 * server ->
 * 6. set cors origin & credentials: true
 * 7. jwt এর post method করে রিসিভ করতে হবে।
 * app.post('/jwt', (req,res)=> {const user = req.body; const token = ?; res.cookies(name, token, option)})
 * 8. jsonwebtoken require করতে হবে।
 * 9. token create করতে হবে। j
 * 10. create token: cmd: node -> require('crypto').randomBytes(64).toString('hex')
 * 11. const token = jwt.sign(user, process.env.SECRET_KEY, {expireIn: '1h'})
 * 12. res.cookie('token', token, {httpOnly: true, secure: false, sameSite: false})
 *
 * //clear cookie with logout --->
 * 
 * //server
 * // clean up browser cookie when user logged out
    app.post("/logout", (req, res) => {
      const user = req.body;
      console.log("loggedOut User", user);
      res.clearCookie("token", { maxAge: 0 }).send({ success: true });
    });
 *
    //client
    else {
        // user logout করার পরে cookie কে browser থেকে clean করার জন্য post request করা হচ্ছে
        axios
          .post("https://car-doctor-server-jwt-eight.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
 */

/**
 * for secure api calls
 * install cookie parser
 * set as a middle cookie parser
 * on the client side: make api call using axios {withCredentials:true} or (using  {credentials:'include'} while using fetch)
 * middleware করার সময় অনেকে MVC pattern follow করে এবং আলাদা করে রাখে।
 */
