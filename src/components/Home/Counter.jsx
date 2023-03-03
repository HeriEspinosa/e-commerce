import { useDispatch, useSelector } from 'react-redux';
import { setCounter } from '../../store/slices/counter.slice';

const Counter = () => {

    const { counter } = useSelector(state => state)

    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(setCounter(counter + 1))
    };

    const handleMinus = () => {
        if (counter - 1 >= 1) {
            dispatch(setCounter(counter - 1))
        }
    };

    return (
        <div className='productInfo__footer-counter letter_Mynerve '>
            <div className='productInfo__footer-counter-minus' onClick={handleMinus}>-</div>
            <div className='productInfo__footer-counter-number'>{counter}</div>
            <div className='productInfo__footer-counter-plus' onClick={handleAdd}>+</div>
        </div>
    )
}

export default Counter