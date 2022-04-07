import React from "react";

const Counter = (props) => {
    const formatValue = () => {
        return props.value === 0 ? 'empty' : props.value;
    };

    const getBadgeClasses = () => {
        let classes = "badge m-2";
        classes += props.value === 0 ? " bg-warning" : " bg-primary";
        return classes;
    };


    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button
                className="btn btn-primary btn-sm m-2" onClick={()=> props.onIncrement(props.id)}
            >+</button>
            <button
                className="btn btn-primary btn-sm m-2" onClick={()=> props.onDecrement(props.id)}
            >-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    );
};

export default Counter;