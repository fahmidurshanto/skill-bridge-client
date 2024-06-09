import "animate.css";
import { Helmet } from "react-helmet";
const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Skill Bridge || Blogs</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center my-10 p-3 animate__animated animate__rubberBand">
        Blogs
      </h2>
      <div className="animate__animated animate__backInLeft">
        <h3 className="text-gray-500 font-semibold text-3xl p-5">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h3>

        <div className="flex justify-center items-center">
          {/* access token */}
          <div>
            <p className="p-5">
              <span className="font-bold text-2xl">Access Token</span>
              <br />
              <span>
                An access token is a credential that is used to access protected
                resources. It is typically a string of characters representing
                the user's authorization to access specific resources on a
                server. The access token is usually short-lived, meaning it has
                a limited lifetime (often ranging from minutes to an hour).
              </span>
              <br />
              <span className="font-bold underline">How it works:</span>
              <br />
              <span className="font-bold">Client Request: </span>
              The client (e.g., a web or mobile app) requests an access token by
              providing valid credentials (like a username and password) to an
              authorization server.
              <br />
              <span className="font-bold">Token Issuance: </span>
              The authorization server validates the credentials and issues an
              access token to the client.
              <br />
              <span className="font-bold">Resource Access: </span>
              The client includes the access token in the headers of HTTP
              requests to access protected resources on the resource server.
              <br />
              <span className="font-bold">Validation: </span>
              The resource server validates the access token to ensure it is
              valid and not expired. If valid, the resource server grants access
              to the requested resources.
            </p>
          </div>
          {/* refresh token */}
          <div>
            <p className="p-5">
              <span className="font-bold text-2xl">Refresh Token</span>
              <br />
              <span>
                A refresh token is a credential used to obtain a new access
                token without needing to re-authenticate the user. Unlike the
                access token, the refresh token is typically long-lived (it can
                last for days, weeks, or even months).
              </span>
              <br />
              <span className="font-bold underline">How it works:</span>
              <br />
              <span className="font-bold">Token Request: </span>
              When the access token expires, the client can use the refresh
              token to request a new access token from the authorization server.
              <br />
              <span className="font-bold">Token Issuance: </span>
              The authorization server verifies the refresh token and issues a
              new access token (and possibly a new refresh token).
              <br />
              <span className="font-bold">Continued Access: </span>
              The client uses the new access token to continue accessing
              protected resources.
            </p>
          </div>
        </div>
        {/* Storage on Client-Side */}
        <div className="p-5">
          <p className="p-5">
            <span className="font-bold text-2xl">Storage on Client-Side</span>
            <br />
            <span>
              Storing tokens securely on the client-side is crucial to prevent
              unauthorized access and potential security breaches. Here’s where
              and how you should store them:
            </span>
            <br />
            <span className="font-bold underline">Access Token:</span>
            <br />
            <span className="font-bold">
              Web Applications (Single Page Applications - SPAs):{" "}
            </span>
            Store access tokens in memory (JavaScript variables). This approach
            limits the exposure of the token, as it is not persisted beyond the
            page refresh.
            <br />
            <span className="font-bold">Pros: </span>
            Reduces risk of token theft from persistent storage.
            <br />
            <span className="font-bold">Cons: </span>
            Token is lost on page refresh, which requires re-authentication or
            using the refresh token.
          </p>
          <div>
            <span className="font-bold underline">Refresh Token:</span>
            <br />
            <span className="font-bold">Web Applications: </span>
            Store refresh tokens in HttpOnly cookies. This type of cookie is not
            accessible via JavaScript, which helps mitigate XSS (Cross-Site
            Scripting) attacks.
            <br />
            <span className="font-bold">Pros: </span>
            Increased security against XSS.
            <br />
            <span className="font-bold">Cons: </span>
            Still vulnerable to CSRF (Cross-Site Request Forgery) if not
            properly protected.
          </div>
          <div>
            <span className="font-bold text-2xl">Best Practices</span>
            <br />
            <span className="font-bold">Use HTTPS:</span>
            Always use HTTPS to encrypt the transmission of tokens.
            <br />
            <span className="font-bold"> Token Expiry:</span>
            Ensure access tokens have a short expiry time to limit their
            exposure if compromised.
            <br />
            <span className="font-bold">Token Scope: </span>
            Minimize the scope of access tokens to the least privileges
            required.
            <br />
            <span className="font-bold">Secure Storage:</span>
            Use platform-specific secure storage solutions for storing tokens.
            <br />
            <span className="font-bold"> Invalidate Tokens: </span>
            Provide a mechanism to invalidate tokens (e.g., logout
            functionality).{" "}
          </div>
        </div>
      </div>
      <div className="animate__animated animate__backInLeft">
        <div>
          <h3 className="text-gray-500 font-semibold text-3xl p-5">
            What is express js? What is Nest JS?
          </h3>
          <div className="flex justify-center ">
            {/* Express js */}
            <div>
              <p className="p-5">
                <span className="font-bold text-2xl">Express.js</span>
                <br />A minimal and flexible Node.js web application framework,
                to build web applications and APIs.It simplifies server-side
                code with middleware and routing. Lightweight and unopinionated,
                giving developers flexibility. It is also widely used for
                building RESTful APIs.
              </p>
            </div>

            {/* Nest js */}
            <div>
              <div>
                <p className="p-5">
                  <span className="font-bold text-2xl">NestJS</span>
                  <br />
                  A progressive Node.js framework built on top of Express.js, to
                  build efficient, reliable, and scalable server-side
                  applications.
                  <br />
                  <span className="font-bold text-xl">Key Features:</span>
                  <br />
                  Uses TypeScript for better type safety and development
                  experience.
                  <br />
                  It incorporates object-oriented programming, functional
                  programming, and functional reactive programming.
                  <br />
                  Structured architecture, inspired by Angular, with modules,
                  controllers, and services.
                </p>
                <p className="p-5">
                  In essence, <span className="font-bold">Express.js</span> is a
                  simple, unopinionated framework for building web servers,
                  while <span className="font-bold">NestJS</span> is a more
                  structured and feature-rich framework that builds on top of
                  Express.js, providing a robust architecture and additional
                  tools for developing complex applications.
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
