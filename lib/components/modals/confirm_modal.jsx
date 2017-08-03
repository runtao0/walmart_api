import React from 'react';

const ConfirmModal = ({ message, confirmModal, setModal}) => {
    return (
        <section id="confirm-modal">
            <div>
                <div className="confirm-message">{message}</div>
                <div className="confirm-buttons">
                    <button onClick={ () => setModal() }>Cancel</button>
                    <button onClick={ () => confirmModal() }>Confirm</button>
                </div>
            </div>
        </section>
    )
}

export default ConfirmModal;
