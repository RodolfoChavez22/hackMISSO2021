import React from "react";
import { CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux";

import Accident from './Accident';

const Table = () => {
    const posts = useSelector((state) => state.posts);

    return(
        !posts.length ? <CircularProgress /> : (
            <table>
            {posts.map((post) => {
                return <Accident 
                    post = {post}
                />
            })}
            </table>
        )
    );
};

export default Table;