import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { Swipeable } from 'react-native-gesture-handler';
import { theme } from '../Theme';

type Props = {
    label: string;
    details?: React.ReactNode;
    onClick?: () => void;
    swipeToDelete?: boolean;
    onDelete?: () => void;
    isDestructive?: boolean;
}

const ListItem = ({
    label,
    details,
    onClick,
    swipeToDelete,
    onDelete,
    isDestructive,
}: Props) => {
    const item = useMemo(() => {
        return (
            <TouchableOpacity
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: !!details ? 'space-between' : 'flex-start',
                    alignItems: 'center',
                    padding: 15,
                    //borderBottomWidth: 1,
                    borderBottomColor: theme.colors.border,
                    backgroundColor: theme.colors.card,
                    borderRadius: 10
                }}
                onPress={onClick}
            >
                <Text style={{ fontSize: 18, color: 'white' }}>{label}</Text>
                {/* {details} */}

            </TouchableOpacity>
        )
    }, [])

    if (swipeToDelete) {
        return (
            <Swipeable
                renderRightActions={() => (

                    <TouchableOpacity
                        style={{
                            backgroundColor: isDestructive ? 'red' : 'green',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 100,
                        }}
                        onPress={onDelete}
                    >
                        <Text style={{ color: 'white' }}>Delete</Text>
                    </TouchableOpacity>
                )}
                onSwipeableOpen={onDelete}
            >
                {item}
            </Swipeable>
        )
    }
    return item


}

export default ListItem

const styles = StyleSheet.create({})