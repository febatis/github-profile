import styled from "styled-components";

export const Section = styled.section`
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    border-bottom: 10px solid #ff7a00;
    margin-top: 15px;

    @media (max-width: 430px) {
        width: 300px;
    }
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`;

export const ListOfFollowersContainer = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`;

export const Follower = styled.h2`
    width: 100%;
    height: 80px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    h2 {
        font-size: 20px;
        max-width: fit-content;
        overflow: hidden;
        color: #444;
        margin: 0;
        display: inline-block;
    }
    p {
        font-size: 12px;
        font-weight: 400;
        color: #777;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px;
    }
    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const Photo = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    float: right;
`;
