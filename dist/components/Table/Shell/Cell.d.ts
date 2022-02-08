import React from 'react';
import { WithClassNames } from './types';
interface CellProps extends WithClassNames {
    header?: boolean;
}
declare const Cell: React.FC<CellProps>;
export default Cell;
