import React from 'react'
import "./styles.css";

const AccordionItem = ({ t }) => {
    return (
        <div>
            <p>{t.name} {t.last_name}</p>
            <p>{t.rol}</p>
        </div>
    )
}

export default AccordionItem;