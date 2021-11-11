import React, { useContext } from "react";

import Container from '../components/container';
import FollowersContainer from '../components/userContainer';

import { context } from '../context';

const Followers = props => {
    const ctx = useContext(context);
    
    return (
        <Container>
            {/* {console.log(`${ctx.followers[0].login}`)}
            {console.log(`${ctx.userData?.name}`)} */}
            {/* <FollowersContainer login="matheusmartins21" photo="https://avatars.githubusercontent.com/u/33427278?v=4" /> */}
            <FollowersContainer name={ctx.userData?.name} followers={ctx.followers} />
        </Container>
    );
};

export default Followers;
