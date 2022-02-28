import './ReactDeleteRow.css';
import React from 'react';
declare type ReactDeleteRowProps = {
    data: any;
    className?: string;
    iconClassName?: string;
    delay?: number;
    children?: React.ReactNode;
    deleteElement?: React.ReactNode;
    onDelete?: (data: any) => boolean;
    onDeleteComplete?: (data: any) => void;
};
declare const ReactDeleteRow: ({ data, className, iconClassName, children, deleteElement, delay, onDelete, onDeleteComplete }: ReactDeleteRowProps) => JSX.Element;
export default ReactDeleteRow;
