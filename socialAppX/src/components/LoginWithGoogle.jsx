import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginWithGoogle = () => {
  const navigate = useNavigate();

  // The callback function that Google calls after login
  const handleCredentialResponse = async (response) => {

    if (response.credential) {
      try {
        const res = await fetch("http://localhost:5001/api/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: response.credential }),
        });

        const data = await res.json();
        if (res.ok) {
          console.log("Authentication successful", data);
          // Save to local storage for the ProtectedRoute to recognize
          // data.token contains the backend session JWT, data.user contains info
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token); // Save session token

          // Redirect to home
          navigate('/');
        } else {
          console.error("Backend auth failed:", data.message);
        }
      } catch (err) {
        console.error("Network error during auth:", err);
      }
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
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
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