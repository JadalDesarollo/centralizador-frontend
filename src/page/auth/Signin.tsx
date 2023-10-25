import { useEffect } from "react";
import AuthBanner from "../../components/auth/AuthBanner";
import Login, { LoginFormDate } from "../../components/auth/Login";
import ColorBox from "../../components/box/ColorBox";
import AuthLayout from "../../components/layout/auth-form/AuthLayout";
import useAuth from "../../hooks/useAuth";
import useLocalStorage from "../../hooks/useLocalStorage";
import useNavigation from "../../hooks/useNavigation";
import { Text } from "../../ui";
import loginDark from "../../image/auth/login-dark.png";
import loginLight from "../../image/auth/login-light.png";

const Signin = () => {
  const { isAuthenticated } = useAuth();
  const { addLocalStorage } = useLocalStorage("userData");
  const { navigate } = useNavigation();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboards/crm/");
    }
  }, [isAuthenticated]);
  const handleSubmit = (inputs: LoginFormDate) => {
    addLocalStorage({
      fullname: "John Doe",
      username: "@moruo",
      id: "2K3KJK23",
      email: "johndoe@email.com",
    });
    return navigate("/dashboards/crm/");
  };
  return (
    <AuthLayout
      RightContent={
        <ColorBox backgroundTheme="foreground">
          <Login
            hyperComponent={
              <ColorBox
                transparency={2}
                borderRadius={"0.2rem"}
                padding="0.8rem 1rem"
                display="flex"
                flexDirection="column"
                space={1}
                my={21}
              >
                <Text varient="caption" weight="medium" skinColor paragraph>
                  Ingrese las credenciales.
                </Text>
                {/* <Text varient="caption" weight="medium" skinColor paragraph>
                  Email: <b>admin@triolo.com</b>
                </Text>
                <Text varient="caption" weight="medium" skinColor paragraph>
                  Passcode: <b>admin123</b>
                </Text> */}
              </ColorBox>
            }
            onSubmit={handleSubmit}
          />
        </ColorBox>
      }
      LeftContent={
        <AuthBanner
          bgDark={loginDark}
          bgLight={loginLight}
        />
      }
    />
  );
};
export default Signin;
