// /src/components/SignUp.jsx
import { SignUp } from '@clerk/nextjs';

const SignUpComponent = () => {
    return (
        <div>
            <h1>Kayıt Ol</h1>
            <SignUp path="/sign-up" routing="path" />
        </div>
    );
};

export default SignUpComponent;
