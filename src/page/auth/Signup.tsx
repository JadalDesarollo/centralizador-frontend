import { useEffect } from "react";
import AuthBanner from "../../components/auth/AuthBanner";
import Register, { FormData } from "../../components/auth/Register";
import ColorBox from "../../components/box/ColorBox";
import AuthLayout from "../../components/layout/auth-form/AuthLayout";
import useAuth, { IAuth } from "../../hooks/useAuth";
import useLocalStorage from "../../hooks/useLocalStorage";
import useNavigation from "../../hooks/useNavigation";
import signupDark from "../../image/auth/signup-dark.png";
import signupLight from "../../image/auth/signup-light.png";

const Signup = () => {
  const { isAuthenticated } = useAuth();
  const { addLocalStorage } = useLocalStorage<IAuth>("userData");
  const { navigate } = useNavigation();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboards/crm/");
    }
  }, [isAuthenticated]);
  const handleSubmit = ({ username, email, password }: FormData) => {
    if (username && email && password) {
      addLocalStorage({
        fullname: "John Doe",
        email: "johndoe@email.com",
        id: "42k2",
        role: "Admin",
        username: "johnny",
        accessToken: "this is token",
      });
      navigate("/dashboards/crm/");
    }
  };

  return (
    <AuthLayout
      LeftContent={
        <AuthBanner
          bgDark={signupDark}
          bgLight={signupLight}
        />
      }
      RightContent={
        <ColorBox backgroundTheme="foreground" width="100%">
          <Register onSubmit={handleSubmit} />
        </ColorBox>
      }
    />
  );
};
export default Signup;
