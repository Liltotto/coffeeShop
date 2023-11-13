import cl from './GreenButton.module.scss'

const GreenButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.greenButton}>
            {children}
        </button>
    );
};

export default GreenButton;