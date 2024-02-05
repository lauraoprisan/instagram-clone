import AuthForm from "../../components/AuthForm/AuthForm";


const AuthPage = () => {
  return (
    <div className="auth-container flex">
        <img className="auth-img" src="/images/auth.png" alt="Phone Image" />
        <section className="right-auth-section">
            <AuthForm/>
            <span className="flex-center">Get the app</span>
            <div className="get-app-container flex">
                <img className="get-app-img" src="/images/playstore.png" alt="Playstore image" />
                <img className="get-app-img" src="/images/microsoft.png" alt="Microfost image" />
            </div>
        </section>
    </div>
  )
}

export default AuthPage;
