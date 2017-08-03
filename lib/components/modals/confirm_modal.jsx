import React from 'react';

const ConfirmModal = ({ message, confirmModal, setModal}) => {
    return (
        <section id="confirm-modal">
            <div className="confirm-message">{message}</div>
            <div>
                <button onClick={ () => setModal() }>Close</button>
                <button onClick={ () => confirmModal() }>Confirm</button>
            </div>
        </section>
    )
}

export default ConfirmModal;
