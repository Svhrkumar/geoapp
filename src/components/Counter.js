import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/Reducers/counterSlice';
const Counter = () => {
	const count = useSelector((store) => store.counter.count);
	const dispatch = useDispatch();
	return (
		<div>
			count{count}
			<button onClick={() => dispatch(increment())}>Click</button>
			<button onClick={() => dispatch(decrement())}>Click</button>
		</div>
	);
};

export default Counter;
