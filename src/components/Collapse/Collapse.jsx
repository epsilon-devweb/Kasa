import React, { useState, useRef} from 'react';

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const arrow = isOpen ? '../../../assets/images/arrow.svg' : '../../../assets/images/arrow.svg';

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='Collapse'>
            <div className="collapse_header">
                <h3 className="collapse_title">{title}</h3>
                <img className={`collapse_arrow ${isOpen ? 'open' : 'closed'}`} src={arrow} alt="Toggle Collapse" onClick={toggleCollapse}/>
            </div>
            <div className="collapse_content" ref={contentRef} 
            style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}>
                <div className="collapse_text">
                    {children}
                </div>
            </div>
        </div>
    )
}
