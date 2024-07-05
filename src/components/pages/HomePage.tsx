import AuthForm from "../ui/AuthForm";
import Container from "../utils/Container";

const HomePage = () => {
  return (
    <Container>
      <div className="w-full h-screen flex justify-center items-center">
        <div>
          <h1 className="text-3xl lg:text-5xl font-semibold  text-center">
            GrowMeOrganic
          </h1>
          <AuthForm />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
