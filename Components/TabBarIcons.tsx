import { Icon } from "react-native-vector-icons/Icon"
import { MaterialIcons  } from '@expo/vector-icons'



type TabBarIconProb = {
    focused: boolean;
    color: string;
    size: number;
    type: 'home' | 'expenses' | 'reports' | 'add' | 'settings';
}

export const TabBarIcons = ({ type, color, size, focused }: TabBarIconProb) => {
    switch(type){
        case 'expenses':
            return <MaterialIcons name="home" size={24} color="black" /> 
    }
}