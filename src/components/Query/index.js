import React from 'react';
import { useQuery } from '@apollo/client';

const Query = ({ children, query, id }) => {
    const { loading, error, data } = useQuery(query, {
        variables: { id: id }
    });

    if(loading) return <p>Loading... please wait for a moment</p>;
    if(error) return <p>Oops.. something went wrong.. Error: {JSON.stringify(error)}</p>;
    return children({ data });
}

export default Query;
