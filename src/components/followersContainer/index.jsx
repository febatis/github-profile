import {
    Section,
    Title,
    ListOfFollowersContainer,
    Follower,
    Photo
} from "./styles";

const FollowersContainer = (props) => {
    return (
        <Section>
            <Title>Seguidores de {props.name?.split(" ")[0]}</Title>
            <ListOfFollowersContainer>
                {(props?.followers).map((follower) => (
                    <Follower
                        onClick={() => window.open(follower?.html_url)}
                        key={follower?.id}
                    >
                        <h2>{follower?.login}</h2>
                        <Photo src={follower?.avatar_url}/>
                    </Follower>
                ))}
            </ListOfFollowersContainer>
        </Section>
    );
};

export default FollowersContainer;
