import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. load the auth user

  // 3. if no auth UserActivation, redirect to login 3 before 2 coz useEffect and conditionals rule
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 2. while loading spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. if user

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
