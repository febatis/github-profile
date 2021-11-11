import React, { useContext } from "react";

import Container from '../components/container';
import FollowingContainer from "../components/followingContainer";

import { context } from '../context';

const Following = props => {
    const ctx = useContext(context);
    
    return (
        <Container>
            <FollowingContainer name={ctx.userData?.name} repos={ctx.followings} />
        </Container>
    );
};

export default Following;
