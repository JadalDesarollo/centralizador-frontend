import { FC, ReactNode, useEffect } from "react";
import { Icon } from "@iconify/react";
import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import useTogglePassword from "../../hooks/useTogglePassword";
import {
  Alert,
  Button,
  Checkbox,
  DividerWithLabel,
  IconButton,
  Text,
  TextField,
} from "../../ui";
import Box from "../box/Box";
import Form from "../form/Form";
import AuthFormContainer from "./AuthFormContainer";
import ConnectionOptions from "./ConnectionOptions";
import FormHeading from "./FormHeading";
import { axios } from "../../api/axios";
import ColorBox from "../../components/box/ColorBox";

export interface LoginFormDate {
  email: string;
  password: string;
  remember?: boolean;
}

interface Props {
  onSubmit: (inputs: LoginFormDate) => void;
  hyperComponent?: ReactNode;
}

const Login: FC<Props> = ({ onSubmit, hyperComponent }) => {
  const { isToggle, handleTogglePassword } = useTogglePassword();
  const [isRemember, setIsRemember] = useState(false);
  const [error, setError] = useState<string>("");
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();

  const handleSubmit = async () => {
    console.log("sssss");
    if (!emailRef.current?.value || !passwordRef.current?.value) {
      setError("Please enter email & password");
      return;
    }

    const body = {
      user: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const resp = await axios.post("login", body);
      console.log("respuesta", resp);
      if (resp.status === 200) {
        onSubmit(resp.data.user);
        console.log("res", resp);

        if (resp.status === 200) {
          onSubmit(resp.data.user);
          console.log("res", resp);

          // Verifica si "result" es un arreglo y contiene al menos un elemento
          if (resp.status === 200) {
            const dsusuario = resp.data.result[0].dsusuario.trim(); // Elimina espacios en blanco
            // Almacena el valor de "dsusuario" en el almacenamiento local
            localStorage.setItem("dsusuarios", dsusuario);
            console.log("dsusuario", dsusuario);
          }
        }
      }
    } catch (error) {
      // Captura cualquier error en la solicitud y muestra un mensaje de error
      console.error("Error al enviar la solicitud:", error);
      setError(
        "Error al iniciar sesión. Verifica tus credenciales o intenta de nuevo."
      );
    }
  };

  useEffect(() => {
    return () => {
      setIsRemember(false);
    };
  }, []);

  return (
    <AuthFormContainer>
      <Box width="100%" mb={20}>
        <Form onSubmit={handleSubmit} preventDefault>
          <FormHeading
            title="Bienvenido a Jadal"
            subtitle="Inicia sesión en tu cuenta y utiliza la plataforma Jadal."
          />
          {hyperComponent}
          <Box display="flex" flexDirection="column" space={1}>
            {error && (
              <Alert severity="error" alertTitle="Authentication Failure!">
                {error}
              </Alert>
            )}
            <TextField
              type="text"
              name="email"
              label="Usuario"
              ref={emailRef}
            />
            <Box>
              <TextField
                type={!isToggle ? "password" : "text"}
                name="password"
                label="contraseña"
                ref={passwordRef}
                endAdornment={
                  <IconButton
                    onClick={handleTogglePassword}
                    varient="text"
                    size={38}
                    fontSize={20}
                    contentOpacity={6}
                    styles={{ right: 8 }}
                  >
                    {isToggle ? (
                      <Icon icon="mdi:eye-outline" />
                    ) : (
                      <Icon icon="mdi:eye-off-outline" />
                    )}
                  </IconButton>
                }
              />
              <Box display="flex" align="center" justify="space-between">
                <Checkbox
                  label="Recuérdame"
                  checked={isRemember}
                  onChange={() => setIsRemember((prevState) => !prevState)}
                />

                <Link to="../forget-password/" className="body2">
                  ¿Olvidaste la contraseña?
                </Link>
              </Box>
            </Box>
            <Button type="submit">Iniciar sesión</Button>
          </Box>
        </Form>
      </Box>
      <Box mb={20}>
        <Text varient="body2" align="center" secondary paragraph>
        ¿Eres nuevo en la plataforma? <Link to="/auth/register/">Crea una cuenta</Link>
        </Text>
      </Box>
      <DividerWithLabel label="Or" />
      <ConnectionOptions />
    </AuthFormContainer>
  );
};
export default Login;
