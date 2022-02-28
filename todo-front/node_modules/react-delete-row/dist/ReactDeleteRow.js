import './ReactDeleteRow.css';
import React, { useState } from 'react';
const ReactDeleteRow = ({ data, className, iconClassName, children, deleteElement = 'X', delay = 300, onDelete, onDeleteComplete }) => {
    const [toDelete, setToDelete] = useState();
    const [isDeleted, setIsDeleted] = useState();
    return (React.createElement(React.Fragment, null, !isDeleted && (React.createElement("tr", { className: className + (toDelete ? ' fade' : '') },
        children,
        React.createElement("td", null,
            React.createElement("button", { type: 'button', className: 'btn', onClick: (ev) => {
                    if (onDelete && onDelete(data)) {
                        setToDelete(true);
                        setTimeout(function () {
                            setIsDeleted(true);
                            onDeleteComplete && onDeleteComplete(data);
                        }, delay);
                    }
                } },
                React.createElement("span", { className: iconClassName }, deleteElement)))))));
};
export default ReactDeleteRow;
//# sourceMappingURL=ReactDeleteRow.js.map