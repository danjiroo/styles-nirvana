import { GlobalProps } from '../';
export interface RaySpinnerProps extends GlobalProps {
    className?: string;
    /**
     * Controls the height of the ray
     */
    rayHeight?: number;
    /**
     * Controls the width of the ray
     */
    rayWidth?: number;
    /**
     * Controls the roundness of the ray. 50 are full-circles, 0 are sharp corners
     */
    rayRadius?: number;
    /**
     * Controls the width of the ray
     */
    inButton?: boolean;
}
