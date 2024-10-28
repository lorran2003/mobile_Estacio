import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function NotFound() {
    return (
        <View>
            <Text>OPS! não encontramos está pagina</Text>
            <Link
                href={'/'}
            >
                <Text className='underline'>
                    Voltar para a página inicial
                </Text>
            </Link>
        </View>
    )
}