import React from 'react';

function Tempo() {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            {dynamicDateString}
        </div>
    )

}

export default Tempo;