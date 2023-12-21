
import { useEffect } from 'react';
import modCl from './modalBase.module.scss';

function ModalBase({children, visible, setVisible}) {

    const rootClasses = [modCl.ModalBase];

    useEffect(() => {

        if(visible){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [visible])

    if (visible) {
        rootClasses.push(modCl.active);
    }


    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={modCl.ModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
            
        </div>
    );
}

export default ModalBase;