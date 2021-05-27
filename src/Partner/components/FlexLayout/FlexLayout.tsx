import React from 'react';

interface Props {
    style?: React.CSSProperties;
    justifyContent?: string;
    rowORColumn: 'row' | 'column';
    alignItem?: string;
    children: JSX.Element | JSX.Element[];
    className?: string;
    id?:string
}

export default function FLexLayout(props: Props) {
    const { style, justifyContent, rowORColumn, alignItem, className ,id} = props;
    return (
        <div
            id={id}
            style={{ ...style }}
            className={`d-flex flex-${rowORColumn} align-items-${alignItem}  justify-content-${justifyContent} ${className}`}
        >
            {props.children}
        </div>
    );
}
