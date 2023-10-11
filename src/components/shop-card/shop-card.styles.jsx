import { styled } from "styled-components";


export const ShopCardContainer = styled.div`

`

export const ShopCardImageContainer = styled.div`
position: relative;
        height: 350px;
        width: 100%;
        display: flex;
        flex-direction: column;
        //   height: 350px;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &:hover {
            button {
                opacity: 1;
                // display: flex;
            }
        }

        button {
            cursor: pointer;
            position: absolute;
            width: 75%;
            bottom: 10px;
            opacity: 0;
            // display: none;
            transition: 1s opacity ease;
        }
`

export const ShopCardDetails  = styled.div`
display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        h2 {
            margin: 5px 0;
            font-size: 1em;
        }
`
