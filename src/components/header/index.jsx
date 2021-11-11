import { FiSearch } from 'react-icons/fi';
import React, { useState, useContext } from 'react';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import client from '../../services/client';
import { context } from '../../context';

const Header = () => {
    const ctx = useContext(context);
    const [searchedValue, setSearchedValue] = useState('');
    const getUserData = async () => {
        try {
            const response = await client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`);
            ctx.setUserData(response.data);
            ctx.setRepos(repos.data);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput value={searchedValue} onChange={el => setSearchedValue(el.target.value)} />
                
                <HeaderSearchButton onClick={getUserData}>
                    <FiSearch size={15} />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
}
export default Header;