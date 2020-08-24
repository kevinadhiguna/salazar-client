import React from 'react';
import { useParams } from 'react-router';
import Articles from '../../components/Articles/index';
import Query from '../../components/Query/index';
import CATEGORY_ARTICLES_QUERY from '../../queries/category/articles';

const Category = () => {
    let { id } = useParams();

    return(
        <Query query={CATEGORY_ARTICLES_QUERY} id={id}>
            {({ data: { category } }) => {
                return(
                    <>
                        <div className="uk-section">
                            <div className="uk-container uk-container-large">
                                <h1>{category.name}</h1>
                                <Articles articles={category.articles} />
                            </div>
                        </div>
                    </>
                );
            }}
        </Query>
    );
}

export default Category;
