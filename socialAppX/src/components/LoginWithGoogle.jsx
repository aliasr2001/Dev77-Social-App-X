import { useEffect } from 'react';

const LoginWithGoogle = () => {

  // Function to decode the JWT token (unchanged from your snippet)
  const decodeJWT = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error decoding JWT:", error);
      return null;
    }
  };

  // The callback function that Google calls after login
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);

    const responsePayload = decodeJWT(response.credential);

    if (responsePayload) {
      console.log("Decoded JWT ID token fields:");
      console.log("  Full Name: " + responsePayload.name);
      console.log("  Given Name: " + responsePayload.given_name);
      console.log("  Family Name: " + responsePayload.family_name);
      console.log("  Unique ID: " + responsePayload.sub);
      console.log("  Profile image URL: " + responsePayload.picture);
      console.log("  Email: " + responsePayload.email);
    }
  };

  useEffect(() => {
    // 1. Load the Google Script dynamically
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // 2. Initialize Google ID when the script loads
    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: "797655834756-538cgpogukmfie12slbdlr7vjk75kvut.apps.googleusercontent.com",
          callback: handleCredentialResponse,
          auto_prompt: false, // matches your data-auto_prompt="false"
        });

        // 3. Render the button inside the specific div
        window.google.accounts.id.renderButton(
          document.getElementById("googleButtonDiv"),
          { text: "signin_with" } 
          // Note: 'filled-blue' becomes 'filled_blue' in JS API
        );
      }
    };

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center w-full items-start">
        {/* This is the container where Google will render the button */}
        <div 
          id="googleButtonDiv" 
          className='google-button-container'
        ></div>
    </div>
  );
};

export default LoginWithGoogle;