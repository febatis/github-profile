import {
    Section,
    Title,
    ListOfFollowingContainer,
    Followin,
    Photo
} from "./styles";

const FollowingContainer = (props) => {
    return (
        <Section>
            <Title>{props.name?.split(" ")[0]} está seguindo</Title>
            <ListOfFollowingContainer>
                {(props?.following).map((follow) => (
                    <Followin
                        onClick={() => window.open(follow?.html_url)}
                        key={follow?.id}
                    >
                        <h2>{follow?.login}</h2>
                        <Photo src={follow?.avatar_url}/>
                    </Followin>
                ))}
            </ListOfFollowingContainer>
        </Section>
    );
};

export default FollowingContainer;
