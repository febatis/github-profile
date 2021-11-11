import React, { useContext } from "react";

import Container from '../components/container';
import FollowersContainer from '../components/userContainer';

import { context } from '../context';

const Followers = props => {
    const ctx = useContext(context);
    
    return (
        <Container>
            {console.log(`${ctx.followers[0].login}`)}
            <FollowersContainer name={ctx.userData?.name} followers={ctx.followers} />
        </Container>
    );
};

export default Followers;
