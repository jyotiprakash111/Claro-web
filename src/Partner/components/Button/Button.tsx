import React from 'react';
import './Button.css';

interface Props {
    style?: React.CSSProperties;
    text: string;
    className: string;
}

export default function _Button(props: Props) {
    const { style, text, className } = props;
    return (
        <button className={className} style={style}>
            {text}
        </button>
    );
}
