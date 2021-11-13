import React from "react";

const Accident = ({ post }) => {

    return(
        <tr>
            <td>{post.STREET}</td>
            <td>{post.ZIP}</td>
            <td>{post.STATE}</td>
        </tr>
    );
};

export default Accident;