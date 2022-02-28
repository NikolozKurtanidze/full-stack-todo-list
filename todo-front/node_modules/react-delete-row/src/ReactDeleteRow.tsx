import './ReactDeleteRow.css';
import React, { useState } from 'react';

type ReactDeleteRowProps = {
  data: any,
  className?: string,
  iconClassName?: string,
  delay?: number,
  children?: React.ReactNode,
  deleteElement?: React.ReactNode,
  onDelete?: (data: any) => boolean,
  onDeleteComplete?: (data: any) => void,
};

const ReactDeleteRow = ({
    data,
    className,
    iconClassName,
    children,
    deleteElement = 'X',
    delay = 300,
    onDelete,
    onDeleteComplete
  }: ReactDeleteRowProps) => {
  // Define state.
  const [toDelete, setToDelete] = useState<boolean>();
  const [isDeleted, setIsDeleted] = useState<boolean>();

  return (
    <>
    { !isDeleted && (
      <tr className={className + (toDelete ? ' fade' : '')}>
        { children }
        <td>
          <button type='button' className='btn'
            onClick={(ev: React.MouseEvent<HTMLElement>) => {
              // Call the prop event handler for onDelete and check result.
              if (onDelete && onDelete(data)) {
                // Mark row to fade out.
                setToDelete(true);
                // Remove row from DOM after fade is complete.
                setTimeout(function() {
                  // Remove row from DOM.
                  setIsDeleted(true);

                  // Call prop event handler for onDeleteComplete.
                  onDeleteComplete && onDeleteComplete(data);
                }, delay);
              }
            }}>
            <span className={iconClassName}>
              { deleteElement }
            </span>
          </button>
        </td>
      </tr>
    ) }
    </>
  );
};

export default ReactDeleteRow;