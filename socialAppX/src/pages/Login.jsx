import LoginWithBtn from "../components/LoginWithBtn";
import LoginWithGoogle from "../components/LoginWithGoogle";
import SvgComp from "../components/SvgComp";
import CreateAccBtn from "../components/Button";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        console.log("Signing in...");
        navigate('/');
    }

    return (
        <div className="h-screen text-white flex w-full justify-center items-center">
            {/* Login form goes here */}
            <div className="leftSection p-4 h-screen w-full grid place-items-center ">
                <SvgComp pathD='M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z' svgSize="30rem" fill="currentColor" stroke="none" />
            </div>
            <div className="RightSection p-5 h-screen w-[80vw] grid place-content center">
                <span className="headingDiv text-7xl font-bold flex items-center">
                    Happening now
                </span>
                <div className="signUpDiv">
                    <p className="text-3xl font-bold">Join today.</p>
                    <LoginWithGoogle/>
                    <LoginWithBtn width="45%" padding="0.5rem 0.5rem" btnText="Sign in With Apple" fontSize="14px" fontWeight="400" margin="0.8rem 0 0 0"/>
                    <div className="SeparatorDiv w-[45%] mt-2 flex items-center gap-2 text-sm">
                        <div className="sepLine w-full border-b border-gray-700"></div>
                        <span className="Text">OR</span>
                        <div className="sepLine w-full border-b border-gray-700"></div>
                    </div>
                    <CreateAccBtn width="45%" padding="0.6rem 0.6rem" btnText="Create account" fontSize="14px" fontWeight="400" margin="0.5rem 0rem" />
                    <p className="termsText text-xs mt-2 w-[45%]">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                </div>
                
                <div onClick={handleSignIn} className="signInDiv">
                    <p className="text-xl">Already have an account?</p>
                    <CreateAccBtn width="45%" padding="0.6rem 0.6rem" btnText="Sign in" fontSize="14px" fontWeight="400" margin="0.5rem 0rem" bgColor="black" btnTextColor="#ffffff" border="1px solid white" hoverbgColor="#111111" hoverTextColor="none"/>
                </div>
            </div>
        </div>
    );
}

export default Login;