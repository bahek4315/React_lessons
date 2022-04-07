import React, {useState} from 'react';
import Counter from './counter';

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, price: '1$', name: 'Ненужная вещь'},
        {id: 1, value: 0, price: '5$', name: 'Ложка'},
        {id: 2, value: 0, price: '3$', name: 'Вилка'},
        {id: 3, value: 0, price: '3$', name: 'Тарелка'},
        {id: 4, value: 0, price: '2$', name: 'Набор минималиста'},
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        setCounters(prevState => prevState.filter(counter => counter.id !== id));
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrement = (id) => {
        const currentState = [...counters];
        const foundPosition = currentState.findIndex(item => item.id === id);
        currentState[foundPosition].value++;
        setCounters(currentState);
    }

    const handleDecrement = (id) => {
        const currentState = [...counters];
        const foundPosition = currentState.findIndex(item => item.id === id);
        if (currentState[foundPosition].value > 0) {
            currentState[foundPosition].value--;
            setCounters(currentState);
        }
    }

    return (
        <>
            {counters.map(counter =>
                <Counter 
                    key={counter.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...counter}
                />)}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </>
    );
}

export default CountersList;