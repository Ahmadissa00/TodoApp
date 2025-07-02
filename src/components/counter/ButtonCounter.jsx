
import PropTypes from 'prop-types';

function ButtonCounter({ Amount, incrementMethod, decrementMethod }) {
  


    return (
        <div className="ButtonCounter" style={{ textAlign: 'center', marginTop: '20px' }}>
            <div>
                <button className="counter-button"
                        onClick={() => incrementMethod(Amount)}
                >+{Amount}</button>
                <button className="counter-button"
                        onClick={() => decrementMethod(Amount)}
                >-{Amount}</button>

            </div>
            
        </div>
    );
}

ButtonCounter.propTypes = {
    Amount: PropTypes.number
};

ButtonCounter.defaultProps = {
    Amount: 1
};

export default ButtonCounter;