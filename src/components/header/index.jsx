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
    // const getUserData = async () => {
    //     try {
    //         const response = await client.get(`/${searchedValue}`);
    //         ctx.setUserData(response.data);
    //         // console.log(response.data);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    async function getUserData() {
        try {
            const response = await client.get(`/${searchedValue}`);
            ctx.setUserData(response.data);
            // console.log(response.data);
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