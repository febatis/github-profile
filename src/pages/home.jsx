import Container from "../components/container";
import Header from "../components/header";
import UserContainer from "../components/userContainer";
import UserPicture from "../components/userPicture";
import UserDetails from "../components/userDetails";
import UserNumbers from "../components/userNumbers";

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture
                    url="https://avatars.githubusercontent.com/u/83319038?v=4"
                    altText="User's avatar"
                />
                <UserDetails
                    name="Felipe Batista"
                    login="@febatis"
                    bio="eng químico se aventurando em tech"
                />
                <UserNumbers></UserNumbers>
            </UserContainer>
        </Container>
    );
}
