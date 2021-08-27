import React from 'react';
import ReactLoading from 'react-loading';
 

const Loading = () => {
    const style = {
        'display': 'flex',
        'justifyContent': 'center',
        'marginTop': '100px'
    }
    return (
        <div style = { style}>
            <ReactLoading type='spin' color='#0688ea' height={100} width={100} />
        </div>
    )
};
 
export default Loading;