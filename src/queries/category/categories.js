import { gql } from '@apollo/client';

const CATEGORIES_QUERY = gql`
    query Categories {
        categories {
            id
            name
        }
    }
`;

export default CATEGORIES_QUERY;
