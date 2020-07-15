import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import Home from './screens/Home';
import ElectricalAppliances from './screens/ElectricalAppliances';
import Results from './screens/Results';
import ResumeDemand from './screens/ResumeDemand';
import MaterialList from './screens/MaterialList';

import colors from './constants/colors'



enableScreens()

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: { backgroundColor: colors.blackalpha },
                    headerTintColor: '#fff',
                }}>

                <Stack.Screen
                    name={'Home'}
                    component={Home}
                    options={{
                        headerShown: false,
                        headerTitle: 'Minha Demanda CEMIG'
                    }}
                />

                <Stack.Screen
                    name={'ElectricalAppliances'}
                    component={ElectricalAppliances}
                    options={{ headerTitle: 'Seleção de Aparelhos' }}
                />

                <Stack.Screen
                    name={'Results'}
                    component={Results}
                    options={{ headerTitle: 'Resultados' }}
                />

                <Stack.Screen
                    name={'ResumeDemand'}
                    component={ResumeDemand}
                    options={{ headerTitle: 'Resumo da Demanda' }}
                />

                <Stack.Screen
                    name={'MaterialList'}
                    component={MaterialList}
                    options={{ headerTitle: 'Lista de Materiais' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

