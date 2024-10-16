import React, { useState, useRef} from 'react';
import arrowImg from '../../assets/images/arrow.svg';

export default function Collapse({ title, children,}) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const arrow = isOpen ? arrowImg : arrowImg;

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
