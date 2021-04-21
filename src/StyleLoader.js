import React from 'react';

const StyleLoader = (props) => {
    return (
        <link rel="stylesheet" type="text/css" href={props.stylesheetPath} />
    )
}
    


export default StyleLoader;