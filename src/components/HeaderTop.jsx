import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import './HeaderTop.css';

function HeaderTop({ title }) {
    let history = useHistory();
    return (
        <div className="headerTop">
            <div className="headerTop__container">
                <div className="headerTop__back">
                    <MdArrowBack className="headerTop__backIcon" onClick={() => history.goBack()} />
                </div>
                <h3 className="headerTop__title">{title}</h3>
            </div>
        </div>
    )
}

export default HeaderTop;
