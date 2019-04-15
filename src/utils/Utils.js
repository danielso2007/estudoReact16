import React from 'react';

export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        console.log(props.children);
        console.log(child);
        return React.cloneElement(child, { ...props, ...child.props })
    });
}