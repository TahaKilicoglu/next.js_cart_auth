// /src/components/SignIn.jsx
import { SignIn } from '@clerk/nextjs';

const SignInComponent = () => {
    return (
        <div>
            <h1>Giriş Yap</h1>
            <SignIn path="/sign-in" routing="path" />
        </div>
    );
};

export default SignInComponent;
