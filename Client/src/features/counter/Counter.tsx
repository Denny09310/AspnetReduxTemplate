import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { incrementCounter, selectCurrentCount } from './counterSlice';

const Counter: React.FC = () => {
    const currentCount = useAppSelector(selectCurrentCount);
    const dispatch = useAppDispatch();

    return (
        <div className='counter p-10'>
            <div className='space-y-4'>
                <h1 className='text-xl font-semibold'>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live='polite'>
                    Current count: <strong>{currentCount}</strong>
                </p>
                <button type='button' className='btn btn-primary' onClick={() => dispatch(incrementCounter())}>
                    Increment
                </button>
            </div>
        </div>
    );
};

export default Counter;
