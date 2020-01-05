import React from 'react';

function PeopleCard({
    id, email, first_name, avatar
}) {
    console.log('props', id);

    return (
        <div>
            <h4>id:{id}</h4>
            {avatar}
        </div>
    )
}

export default PeopleCard;