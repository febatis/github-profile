import { Container, NumberContainer } from "./styles";
import React from "react";
import { useHistory } from "react-router-dom";

const UserNumbers = (props) => {

    const history = useHistory();
    const handleOnClick = route => history.push(route);


    return (
        <Container>
            <NumberContainer onClick={() => handleOnClick('/repos')}>
                <h1>10</h1>
                <h2>Repositórios</h2>
            </NumberContainer>

            <NumberContainer>
                <h1>20</h1>
                <h2>Seguidores</h2>
            </NumberContainer>

            <NumberContainer>
                <h1>50</h1>
                <h2>Seguindo</h2>
            </NumberContainer>
        </Container>
    );
};

export default UserNumbers;
