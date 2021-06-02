import React from 'react';

interface Props {
    description: string;
    highlightText?: string;
}
const _InputDescriptionCard = (props: Props) => {
    return (
        <div className='P2_Paragraph_15px' style={{ backgroundColor: '#f7f7f8', padding: '10px', width: '500px' }}>
            {props.description}
            <span style={{color:'red'}} > {props.highlightText} </span>
        </div>
    );
};

export default _InputDescriptionCard;
