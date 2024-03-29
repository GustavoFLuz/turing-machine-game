import { ColorType } from '@/types/theme';
import { useTheme } from 'styled-components';

type Props = {
    size?: string;
    color?: ColorType;
}

export function Triangle({ size, color }: Props) {
    const theme = useTheme();
    return (
        <svg width={size ? size : "1em"} height={size ? size : "1em"} viewBox="0 0 56 56" fill={color?theme.colors[color]:theme.colors.lightBlue} xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "bottom" }}>
            <path d="M 9.5899 50.2070 L 46.4102 50.2070 C 49.9257 50.2070 52.1289 47.6758 52.1289 44.4883 C 52.1289 43.5273 51.8947 42.5664 51.3791 41.6758 L 32.9336 8.6758 C 31.8789 6.7773 29.9570 5.7930 28.0117 5.7930 C 26.0899 5.7930 24.1211 6.7773 23.0664 8.6758 L 4.6446 41.6992 C 4.1289 42.5898 3.8711 43.5273 3.8711 44.4883 C 3.8711 47.6758 6.0977 50.2070 9.5899 50.2070 Z"></path>
        </svg>
    )
}