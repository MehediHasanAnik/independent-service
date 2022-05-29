import React from "react";
import "../Blogs/Blogs.css";
const Blogs = () => {
  return (
    <div>
      <div className="blog my-5">
        <div className="container">
          <div className="blog-section">
            <div className="row">
              <div className="col-md-6">
                <h1>Q.Difference between authorization and authentication</h1>
                <p>
                  In authentication process, the identity of users are checked
                  for providing the access to the system. In this process users
                  or persons are verified. It is done before the authorization
                  process. While in authorization process, person's or user's
                  authorities are checked for accessing the resources.In this
                  process, users or persons are validated. While this process is
                  done after the authentication process.
                </p>
              </div>
              <div className="col-md-6">
                <h1>
                  Q.Why are you using firebase? What other options do you have
                  to implement authentication?
                </h1>
                <p>
                  The Firebase Realtime Database lets you build rich,
                  collaborative applications by allowing secure access to the
                  database directly from client-side code. Data is persisted
                  locally, and even while offline, realtime events continue to
                  fire, giving the end user a responsive experience. Usually,
                  authentication by a server entails the use of a user name and
                  password. Other ways to authenticate can be through cards,
                  retina scans, voice recognition, and fingerprints.
                </p>
              </div>
            </div>
          </div>
          <div className="another-section ">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  Q.What other services does firebase provide other than
                  authentication
                </h1>
                <p>
                  Firebase is a full package that can help in developing mobile
                  or web applications faster with fewer resources and more
                  efficiency.There are many services which Firebase provides,
                  Most useful of them are: Cloud Firestore Cloud Functions
                  Authentication Hosting Cloud Storage Google Analytics
                  Predictions Cloud Messaging Dynamic Links Remote Config
                  Firebase is a full package that can help in developing mobile
                  or web applications faster with fewer resources and more
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
