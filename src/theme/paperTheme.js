import { MD3LightTheme } from 'react-native-paper';

import Colors from './colors';

const PaperTheme = {

    ...MD3LightTheme,

    colors:{

        ...MD3LightTheme.colors,

        primary: Colors.primary,

        secondary: Colors.gold,

        background: Colors.background,

        surface: Colors.surface,

        error: Colors.error

    }

};

export default PaperTheme;