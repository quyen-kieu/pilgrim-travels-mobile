import { Platform } from 'react-native';

const Shadows = {

    card: Platform.select({

        ios: {

            shadowColor: '#000',

            shadowOpacity: 0.12,

            shadowRadius: 8,

            shadowOffset: {

                width:0,

                height:4

            }

        },

        android:{

            elevation:5

        }

    }),

    button: Platform.select({

        ios:{

            shadowColor:'#000',

            shadowOpacity:.18,

            shadowRadius:6,

            shadowOffset:{

                width:0,

                height:3

            }

        },

        android:{

            elevation:3

        }

    })

};

export default Shadows;